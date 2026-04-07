// Performance monitoring utilities

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
  fcp?: number;
}

class PerformanceMonitor {
  private metrics: PerformanceMetrics = {};

  constructor() {
    this.initWebVitals();
  }

  private initWebVitals() {
    if (typeof window === 'undefined') return;

    // Largest Contentful Paint (LCP)
    this.observeLCP();

    // First Input Delay (FID)
    this.observeFID();

    // Cumulative Layout Shift (CLS)
    this.observeCLS();

    // Time to First Byte (TTFB)
    this.measureTTFB();

    // First Contentful Paint (FCP)
    this.observeFCP();
  }

  private observeLCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime;
        this.sendMetric('LCP', this.metrics.lcp ?? 0);
      });
      observer.observe({ type: 'largest-contentful-paint', buffered: true });
    } catch (e) {
      console.warn('LCP measurement not supported');
    }
  }

  private observeFID() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          this.metrics.fid = entry.processingStart - entry.startTime;
          this.sendMetric('FID', this.metrics.fid);
        });
      });
      observer.observe({ type: 'first-input', buffered: true });
    } catch (e) {
      console.warn('FID measurement not supported');
    }
  }

  private observeCLS() {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (!(entry as any).hadRecentInput) {
            clsValue += (entry as any).value;
            this.metrics.cls = clsValue;
          }
        }
        this.sendMetric('CLS', clsValue);
      });
      observer.observe({ type: 'layout-shift', buffered: true });
    } catch (e) {
      console.warn('CLS measurement not supported');
    }
  }

  private observeFCP() {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.fcp = entry.startTime;
            this.sendMetric('FCP', entry.startTime);
          }
        });
      });
      observer.observe({ type: 'paint', buffered: true });
    } catch (e) {
      console.warn('FCP measurement not supported');
    }
  }

  private measureTTFB() {
    try {
      const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navigationTiming) {
        this.metrics.ttfb = navigationTiming.responseStart - navigationTiming.requestStart;
        this.sendMetric('TTFB', this.metrics.ttfb);
      }
    } catch (e) {
      console.warn('TTFB measurement not supported');
    }
  }

  private sendMetric(name: string, value: number) {
    // Send to Google Analytics if available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', name, {
        event_category: 'Web Vitals',
        value: Math.round(value),
        metric_id: `${name}-${Date.now()}`,
        non_interaction: true,
      });
    }

    // Console log in development
    if (import.meta.env.DEV) {
      console.log(`[Performance] ${name}:`, Math.round(value), 'ms');
    }
  }

  public trackPageView(path: string) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'page_view', {
        page_path: path,
        page_title: document.title,
      });
    }
  }

  public trackEvent(eventName: string, params?: Record<string, any>) {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', eventName, params);
    }

    if (import.meta.env.DEV) {
      console.log(`[Event] ${eventName}:`, params);
    }
  }

  public getMetrics(): PerformanceMetrics {
    return { ...this.metrics };
  }
}

export const performanceMonitor = new PerformanceMonitor();

// Helper to measure custom timings
export const measureAsync = async <T,>(
  name: string,
  fn: () => Promise<T>
): Promise<T> => {
  const start = performance.now();
  try {
    const result = await fn();
    const duration = performance.now() - start;
    performanceMonitor.trackEvent('async_operation', {
      operation: name,
      duration: Math.round(duration),
    });
    return result;
  } catch (error) {
    const duration = performance.now() - start;
    performanceMonitor.trackEvent('async_operation_error', {
      operation: name,
      duration: Math.round(duration),
      error: error instanceof Error ? error.message : 'Unknown error',
    });
    throw error;
  }
};
