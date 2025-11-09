import { useLocation } from "react-router-dom";
import { useEffect } from "react";

interface BreadcrumbItem {
  name: string;
  path: string;
}

const routeNames: Record<string, string> = {
  "/": "Home",
  "/services": "Services",
  "/portfolio": "Portfolio",
  "/about": "About",
  "/contact": "Contact",
  "/blog": "Blog",
  "/enterprise": "Enterprise",
  "/start": "Get Started",
  "/quick-start": "Quick Start Guide",
  "/install": "Install App",
};

export const BreadcrumbSchema = () => {
  const location = useLocation();

  useEffect(() => {
    // Generate breadcrumb items based on current path
    const pathSegments = location.pathname.split("/").filter(Boolean);
    const breadcrumbItems: BreadcrumbItem[] = [{ name: "Home", path: "/" }];

    // Build breadcrumb path
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

    // Only show breadcrumbs if we have more than just home
    if (breadcrumbItems.length > 1) {
      const schema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: breadcrumbItems.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${window.location.origin}${item.path}`,
        })),
      };

      // Remove existing breadcrumb schema if any
      const existingScript = document.querySelector("script[data-breadcrumb-schema]");
      if (existingScript) {
        existingScript.remove();
      }

      // Add new breadcrumb schema
      const script = document.createElement("script");
      script.setAttribute("type", "application/ld+json");
      script.setAttribute("data-breadcrumb-schema", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);

      return () => {
        script.remove();
      };
    }
  }, [location.pathname]);

  return null;
};
