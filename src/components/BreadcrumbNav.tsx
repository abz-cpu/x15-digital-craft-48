import { useLocation, Link } from "react-router-dom";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { BreadcrumbSchema } from "@/components/BreadcrumbSchema";

const routeNames: Record<string, string> = {
  "/": "Home",
  "/services": "Services",
  "/services/app-development": "App Development",
  "/services/personalised-apps": "Personalised Apps",
  "/services/landing-pages": "Landing Pages",
  "/services/logo-design": "Logo Design",
  "/services/branding": "Branding",
  "/services/maintenance-support": "Maintenance & Support",
  "/services/it-support": "IT Support",
  "/services/seo": "SEO",
  "/services/digital-marketing": "Digital Marketing",
  "/services/ecommerce": "Ecommerce",
  "/services/email-marketing": "Email Marketing",
  "/services/content-marketing": "Content Marketing",
  "/services/copywriting": "Copywriting",
  "/services/cro": "Conversion Rate Optimisation",
  "/services/ux-ui-design": "UX/UI Design",
  "/services/web-hosting": "Web Hosting",
  "/portfolio": "Portfolio",
  "/about": "About",
  "/contact": "Contact",
  "/blog": "Blog",
  "/enterprise": "Enterprise",
  "/start": "Get Started",
  "/quick-start": "Quick Start Guide",
  "/install": "Install App",
  "/terms": "Terms",
  "/privacy": "Privacy",
  "/web-package": "Web Packages",
  "/ai-package": "AI Package",
  "/platforms": "Platforms",
  "/platforms/wordpress": "WordPress Development",
  "/platforms/shopify": "Shopify Development",
  "/platforms/woocommerce": "WooCommerce Development",
  "/platforms/custom-development": "Custom Development",
  "/sectors": "Sectors",
  // Near Me Pages
  "/web-developer-near-me": "Web Developer Near Me",
  "/digital-marketing-agency-near-me": "Digital Marketing Agency Near Me",
  "/seo-agency-near-me": "SEO Agency Near Me",
  "/ai-chatbot-near-me": "AI Chatbot Near Me",
  // Service Areas
  "/areas": "Service Areas",
  "/areas/stratford": "Stratford",
  "/areas/ilford": "Ilford",
  "/areas/leyton": "Leyton",
  "/areas/east-ham": "East Ham",
  "/areas/manor-park": "Manor Park",
  "/areas/newham": "Newham",
  "/areas/plaistow": "Plaistow",
  "/areas/barking": "Barking",
  "/areas/walthamstow": "Walthamstow",
  "/areas/hackney": "Hackney",
  "/areas/bethnal-green": "Bethnal Green",
  "/areas/shoreditch": "Shoreditch",
  "/areas/tower-hamlets": "Tower Hamlets",
  "/areas/greenwich": "Greenwich",
  // Blog Posts
  "/blog/cheap-websites": "Why Cheap Websites Cost More",
  "/blog/ai-for-small-businesses": "AI for Small Businesses",
  "/blog/offshore-development-risks": "Offshore Development Risks",
  "/blog/best-web-developer-stratford-2026": "Best Web Developer Stratford 2026",
  "/blog/website-design-tips-east-london": "Website Design Tips East London",
  "/blog/local-seo-hackney-shoreditch": "Local SEO Hackney & Shoreditch",
};

export const BreadcrumbNav = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Don't show on homepage
  if (pathSegments.length === 0) return null;

  const breadcrumbItems = [{ name: "Home", path: "/" }];

  let currentPath = "";
  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    const name =
      routeNames[currentPath] ||
      segment
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");

    breadcrumbItems.push({ name, path: currentPath });
  });

  return (
    <>
      <BreadcrumbSchema />
      <div className="py-4 px-4 sm:px-6 lg:px-8 bg-background border-b border-border">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbItems.map((item, index) => (
                <div key={item.path} className="contents">
                  <BreadcrumbItem>
                    {index === breadcrumbItems.length - 1 ? (
                      <BreadcrumbPage>{item.name}</BreadcrumbPage>
                    ) : (
                      <BreadcrumbLink asChild>
                        <Link to={item.path}>{item.name}</Link>
                      </BreadcrumbLink>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbItems.length - 1 && <BreadcrumbSeparator />}
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </>
  );
};
