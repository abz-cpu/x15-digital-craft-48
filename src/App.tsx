import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import ErrorBoundary from "@/components/ErrorBoundary";
import { LoadingFallback } from "@/components/LoadingFallback";
import { PWAInstallPrompt } from "@/components/PWAInstallPrompt";
import { performanceMonitor } from "@/utils/performance";
import { registerPreload } from "@/components/PreloadLink";
import { CookieConsent } from "@/components/CookieConsent";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

// Lazy load route components for code splitting
const Index = lazy(() => import("./pages/Index"));
const Services = lazy(() => import("./pages/Services"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Enterprise = lazy(() => import("./pages/Enterprise"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Start = lazy(() => import("./pages/Start"));
const QuickStart = lazy(() => import("./pages/QuickStart"));
const Install = lazy(() => import("./pages/Install"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));

// Register preload functions for route prefetching
registerPreload("/", () => import("./pages/Index"));
registerPreload("/services", () => import("./pages/Services"));
registerPreload("/portfolio", () => import("./pages/Portfolio"));
registerPreload("/enterprise", () => import("./pages/Enterprise"));
registerPreload("/about", () => import("./pages/About"));
registerPreload("/contact", () => import("./pages/Contact"));
registerPreload("/blog", () => import("./pages/Blog"));
registerPreload("/start", () => import("./pages/Start"));
registerPreload("/quick-start", () => import("./pages/QuickStart"));
registerPreload("/install", () => import("./pages/Install"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      gcTime: 1000 * 60 * 30, // 30 minutes (formerly cacheTime)
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

// Track page views
const RouteTracker = () => {
  const location = useLocation();

  useEffect(() => {
    performanceMonitor.trackPageView(location.pathname);
  }, [location]);

  return null;
};

const App = () => (
  <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <RouteTracker />
            <BreadcrumbSchema />
            <CookieConsent />
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services" element={<Services />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/enterprise" element={<Enterprise />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/start" element={<Start />} />
              <Route path="/quick-start" element={<QuickStart />} />
              <Route path="/install" element={<Install />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <PWAInstallPrompt />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
