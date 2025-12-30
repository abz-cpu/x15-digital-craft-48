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
import { OrganizationSchema } from "@/components/OrganizationSchema";
import { WebSiteSchema } from "@/components/WebSiteSchema";
import { ProfessionalServiceSchema } from "@/components/ProfessionalServiceSchema";
import ScrollToTop from "@/components/ScrollToTop";

// Lazy load route components
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
const Platforms = lazy(() => import("./pages/Platforms"));
const Sectors = lazy(() => import("./pages/Sectors"));

// Service pages
const AppDevelopment = lazy(() => import("./pages/services/AppDevelopment"));
const PersonalisedApps = lazy(() => import("./pages/services/PersonalisedApps"));
const LandingPages = lazy(() => import("./pages/services/LandingPages"));
const LogoDesign = lazy(() => import("./pages/services/LogoDesign"));
const Branding = lazy(() => import("./pages/services/Branding"));
const MaintenanceSupport = lazy(() => import("./pages/services/MaintenanceSupport"));
const ItSupport = lazy(() => import("./pages/services/ItSupport"));
const Seo = lazy(() => import("./pages/services/Seo"));
const Ecommerce = lazy(() => import("./pages/services/Ecommerce"));
const Cro = lazy(() => import("./pages/services/Cro"));
const DigitalMarketing = lazy(() => import("./pages/services/DigitalMarketing"));
const Copywriting = lazy(() => import("./pages/services/Copywriting"));
const ContentMarketing = lazy(() => import("./pages/services/ContentMarketing"));
const EmailMarketing = lazy(() => import("./pages/services/EmailMarketing"));
const WebHosting = lazy(() => import("./pages/services/WebHosting"));
const UxUiDesign = lazy(() => import("./pages/services/UxUiDesign"));

// Register preloads
registerPreload("/", () => import("./pages/Index"));
registerPreload("/services", () => import("./pages/Services"));
registerPreload("/portfolio", () => import("./pages/Portfolio"));
registerPreload("/contact", () => import("./pages/Contact"));
registerPreload("/platforms", () => import("./pages/Platforms"));
registerPreload("/sectors", () => import("./pages/Sectors"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 30,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

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
          <OrganizationSchema />
          <WebSiteSchema />
          <ProfessionalServiceSchema />
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
              <Route path="/platforms" element={<Platforms />} />
              <Route path="/sectors" element={<Sectors />} />
              {/* Service pages */}
              <Route path="/services/app-development" element={<AppDevelopment />} />
              <Route path="/services/personalised-apps" element={<PersonalisedApps />} />
              <Route path="/services/landing-pages" element={<LandingPages />} />
              <Route path="/services/logo-design" element={<LogoDesign />} />
              <Route path="/services/branding" element={<Branding />} />
              <Route path="/services/maintenance-support" element={<MaintenanceSupport />} />
              <Route path="/services/it-support" element={<ItSupport />} />
              <Route path="/services/seo" element={<Seo />} />
              <Route path="/services/ecommerce" element={<Ecommerce />} />
              <Route path="/services/cro" element={<Cro />} />
              <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
              <Route path="/services/copywriting" element={<Copywriting />} />
              <Route path="/services/content-marketing" element={<ContentMarketing />} />
              <Route path="/services/email-marketing" element={<EmailMarketing />} />
              <Route path="/services/web-hosting" element={<WebHosting />} />
              <Route path="/services/ux-ui-design" element={<UxUiDesign />} />
              {/* Placeholder routes for platforms and sectors */}
              <Route path="/platforms/wordpress" element={<Platforms />} />
              <Route path="/platforms/shopify" element={<Platforms />} />
              <Route path="/platforms/woocommerce" element={<Platforms />} />
              <Route path="/platforms/custom-development" element={<Platforms />} />
              <Route path="/sectors/property" element={<Sectors />} />
              <Route path="/sectors/charity" element={<Sectors />} />
              <Route path="/sectors/b2b" element={<Sectors />} />
              <Route path="/sectors/b2c" element={<Sectors />} />
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
