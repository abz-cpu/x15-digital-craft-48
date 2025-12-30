import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
    
    // Add noindex meta tag for 404 pages
    const metaRobots = document.createElement("meta");
    metaRobots.name = "robots";
    metaRobots.content = "noindex, nofollow";
    document.head.appendChild(metaRobots);

    // Update title for 404
    document.title = "Page Not Found | L&D Digital";

    return () => {
      // Clean up meta tag on unmount
      const existingMeta = document.querySelector('meta[name="robots"][content="noindex, nofollow"]');
      if (existingMeta) {
        existingMeta.remove();
      }
    };
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="text-center space-y-6 max-w-md">
          <h1 className="text-6xl font-bold text-secondary">404</h1>
          <h2 className="text-3xl font-bold text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground">
            Sorry, we couldn't find the page you're looking for. It may have been moved or doesn't exist.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/services">
                View Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
          <div className="pt-8 text-sm text-muted-foreground">
            <p>Looking for something specific?</p>
            <div className="flex flex-wrap gap-2 justify-center mt-2">
              <Link to="/web-package" className="text-primary hover:underline">Web Packages</Link>
              <span>•</span>
              <Link to="/ai-package" className="text-primary hover:underline">AI Solutions</Link>
              <span>•</span>
              <Link to="/contact" className="text-primary hover:underline">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
