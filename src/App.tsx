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
import ScrollToTop from "@/components/ScrollToTop";

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
const WebPackage = lazy(() => import("./pages/WebPackage"));
const AiPackage = lazy(() => import("./pages/AiPackage"));

// Service pages
const AppDevelopment = lazy(() => import("./pages/services/AppDevelopment"));
const PersonalisedApps = lazy(() => import("./pages/services/PersonalisedApps"));
const LandingPages = lazy(() => import("./pages/services/LandingPages"));
const LogoDesign = lazy(() => import("./pages/services/LogoDesign"));
const Branding = lazy(() => import("./pages/services/Branding"));
const MaintenanceSupport = lazy(() => import("./pages/services/MaintenanceSupport"));
const ItSupport = lazy(() => import("./pages/services/ItSupport"));

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
registerPreload("/web-package", () => import("./pages/WebPackage"));
registerPreload("/ai-package", () => import("./pages/AiPackage"));
registerPreload("/services/app-development", () => import("./pages/services/AppDevelopment"));
registerPreload("/services/personalised-apps", () => import("./pages/services/PersonalisedApps"));
registerPreload("/services/landing-pages", () => import("./pages/services/LandingPages"));
registerPreload("/services/logo-design", () => import("./pages/services/LogoDesign"));
registerPreload("/services/branding", () => import("./pages/services/Branding"));
registerPreload("/services/maintenance-support", () => import("./pages/services/MaintenanceSupport"));
registerPreload("/services/it-support", () => import("./pages/services/ItSupport"));

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
            <ScrollToTop />
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
              <Route path="/web-package" element={<WebPackage />} />
              <Route path="/ai-package" element={<AiPackage />} />
              <Route path="/services/app-development" element={<AppDevelopment />} />
              <Route path="/services/personalised-apps" element={<PersonalisedApps />} />
              <Route path="/services/landing-pages" element={<LandingPages />} />
              <Route path="/services/logo-design" element={<LogoDesign />} />
              <Route path="/services/branding" element={<Branding />} />
              <Route path="/services/maintenance-support" element={<MaintenanceSupport />} />
              <Route path="/services/it-support" element={<ItSupport />} />
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
