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
import MaintenanceBanner from "@/components/MaintenanceBanner";

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
const Faq = lazy(() => import("./pages/Faq"));
const Platforms = lazy(() => import("./pages/Platforms"));
const Sectors = lazy(() => import("./pages/Sectors"));

// Platform pages
const WordPressPlatform = lazy(() => import("./pages/platforms/WordPress"));
const ShopifyPlatform = lazy(() => import("./pages/platforms/Shopify"));
const WooCommercePlatform = lazy(() => import("./pages/platforms/WooCommerce"));
const CustomDevelopmentPlatform = lazy(() => import("./pages/platforms/CustomDevelopment"));

// Sector pages
const PropertySector = lazy(() => import("./pages/sectors/Property"));
const CharitySector = lazy(() => import("./pages/sectors/Charity"));
const B2BSector = lazy(() => import("./pages/sectors/B2B"));
const B2CSector = lazy(() => import("./pages/sectors/B2C"));

// Near Me pages
const WebDeveloperNearMe = lazy(() => import("./pages/WebDeveloperNearMe"));
const DigitalMarketingNearMe = lazy(() => import("./pages/DigitalMarketingNearMe"));
const SeoNearMe = lazy(() => import("./pages/SeoNearMe"));
const AiChatbotNearMe = lazy(() => import("./pages/AiChatbotNearMe"));

// SEO Landing Pages
const WebDesignAgencyLondon = lazy(() => import("./pages/WebDesignAgencyLondon"));
const SeoServicesLondon = lazy(() => import("./pages/SeoServicesLondon"));
const AiServicesLondon = lazy(() => import("./pages/AiServicesLondon"));

// Area pages
const AreasIndex = lazy(() => import("./pages/areas/index"));
const Stratford = lazy(() => import("./pages/areas/Stratford"));
const Ilford = lazy(() => import("./pages/areas/Ilford"));
const Leyton = lazy(() => import("./pages/areas/Leyton"));
const EastHam = lazy(() => import("./pages/areas/EastHam"));
const ManorPark = lazy(() => import("./pages/areas/ManorPark"));
const Newham = lazy(() => import("./pages/areas/Newham"));
const Plaistow = lazy(() => import("./pages/areas/Plaistow"));
const Barking = lazy(() => import("./pages/areas/Barking"));
const Walthamstow = lazy(() => import("./pages/areas/Walthamstow"));
const Hackney = lazy(() => import("./pages/areas/Hackney"));
const BethnalGreen = lazy(() => import("./pages/areas/BethnalGreen"));
const Shoreditch = lazy(() => import("./pages/areas/Shoreditch"));
const TowerHamlets = lazy(() => import("./pages/areas/TowerHamlets"));
const Greenwich = lazy(() => import("./pages/areas/Greenwich"));

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
const PosSetup = lazy(() => import("./pages/services/PosSetup"));

// Sector pages
const RestaurantPosSector = lazy(() => import("./pages/sectors/RestaurantPos"));

// Near Me pages - POS
const PosSetupNearMe = lazy(() => import("./pages/PosSetupNearMe"));

// Register preloads
registerPreload("/", () => import("./pages/Index"));
registerPreload("/services", () => import("./pages/Services"));
registerPreload("/portfolio", () => import("./pages/Portfolio"));
registerPreload("/contact", () => import("./pages/Contact"));
registerPreload("/platforms", () => import("./pages/Platforms"));
registerPreload("/sectors", () => import("./pages/Sectors"));
registerPreload("/platforms/wordpress", () => import("./pages/platforms/WordPress"));
registerPreload("/platforms/shopify", () => import("./pages/platforms/Shopify"));
registerPreload("/platforms/woocommerce", () => import("./pages/platforms/WooCommerce"));
registerPreload("/platforms/custom-development", () => import("./pages/platforms/CustomDevelopment"));

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
          <MaintenanceBanner />
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
              <Route path="/faq" element={<Faq />} />
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
              <Route path="/services/pos-setup" element={<PosSetup />} />
              {/* Near Me pages */}
              <Route path="/web-developer-near-me" element={<WebDeveloperNearMe />} />
              <Route path="/digital-marketing-agency-near-me" element={<DigitalMarketingNearMe />} />
              <Route path="/seo-agency-near-me" element={<SeoNearMe />} />
              <Route path="/ai-chatbot-near-me" element={<AiChatbotNearMe />} />
              {/* SEO Landing Pages */}
              <Route path="/web-design-agency-london" element={<WebDesignAgencyLondon />} />
              <Route path="/seo-services-london" element={<SeoServicesLondon />} />
              <Route path="/ai-services-london" element={<AiServicesLondon />} />
              {/* Area pages */}
              <Route path="/areas" element={<AreasIndex />} />
              <Route path="/areas/stratford" element={<Stratford />} />
              <Route path="/areas/ilford" element={<Ilford />} />
              <Route path="/areas/leyton" element={<Leyton />} />
              <Route path="/areas/east-ham" element={<EastHam />} />
              <Route path="/areas/manor-park" element={<ManorPark />} />
              <Route path="/areas/newham" element={<Newham />} />
              <Route path="/areas/plaistow" element={<Plaistow />} />
              <Route path="/areas/barking" element={<Barking />} />
              <Route path="/areas/walthamstow" element={<Walthamstow />} />
              <Route path="/areas/hackney" element={<Hackney />} />
              <Route path="/areas/bethnal-green" element={<BethnalGreen />} />
              <Route path="/areas/shoreditch" element={<Shoreditch />} />
              <Route path="/areas/tower-hamlets" element={<TowerHamlets />} />
              <Route path="/areas/greenwich" element={<Greenwich />} />
              {/* Placeholder routes for platforms and sectors */}
              <Route path="/platforms/wordpress" element={<WordPressPlatform />} />
              <Route path="/platforms/shopify" element={<ShopifyPlatform />} />
              <Route path="/platforms/woocommerce" element={<WooCommercePlatform />} />
              <Route path="/platforms/custom-development" element={<CustomDevelopmentPlatform />} />
              {/* Sector pages */}
              <Route path="/sectors/property" element={<PropertySector />} />
              <Route path="/sectors/charity" element={<CharitySector />} />
              <Route path="/sectors/b2b" element={<B2BSector />} />
              <Route path="/sectors/b2c" element={<B2CSector />} />
              <Route path="/sectors/restaurant-pos" element={<RestaurantPosSector />} />
              {/* POS Near Me */}
              <Route path="/pos-setup-near-me" element={<PosSetupNearMe />} />
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
