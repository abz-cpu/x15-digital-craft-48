import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

type CookiePreferences = {
  essential: boolean;
  analytics: boolean;
  marketing: boolean;
};

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Show banner after 1 second delay
      setTimeout(() => setIsVisible(true), 1000);
    } else {
      // Apply saved preferences
      const saved = JSON.parse(consent);
      setPreferences(saved);
      applyConsent(saved);
    }
  }, []);

  const applyConsent = (prefs: CookiePreferences) => {
    // Enable/disable Google Analytics
    if (prefs.analytics && window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted'
      });
    } else if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true,
    };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false,
    };
    setPreferences(onlyEssential);
    saveConsent(onlyEssential);
  };

  const handleSavePreferences = () => {
    saveConsent(preferences);
  };

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem("cookie-consent", JSON.stringify(prefs));
    localStorage.setItem("cookie-consent-date", new Date().toISOString());
    applyConsent(prefs);
    setIsVisible(false);
  };

  const handleOpenSettings = () => {
    setIsVisible(true);
    setShowDetails(true);
  };

  // Expose method to reopen settings from footer
  useEffect(() => {
    (window as any).openCookieSettings = handleOpenSettings;
    return () => {
      delete (window as any).openCookieSettings;
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center p-4 pointer-events-none">
      <Card className="max-w-2xl w-full p-6 shadow-2xl border-2 border-primary/20 pointer-events-auto animate-fade-in bg-card">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-2">
            <Cookie className="h-6 w-6 text-primary" />
            <h3 className="text-xl font-bold text-foreground">Cookie Settings</h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsVisible(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          We use cookies to enhance your browsing experience and analyze our traffic. 
          By clicking "Accept All", you consent to our use of cookies.{" "}
          <Link to="/privacy" className="text-primary hover:underline">
            Read our Privacy Policy
          </Link>
        </p>

        {!showDetails ? (
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={handleAcceptAll}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Accept All
            </Button>
            <Button
              onClick={handleRejectAll}
              variant="outline"
              className="border-border text-foreground"
            >
              Reject All
            </Button>
            <Button
              onClick={() => setShowDetails(true)}
              variant="ghost"
              className="text-foreground"
            >
              Manage Preferences
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <h4 className="font-semibold text-foreground">Essential Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Required for the website to function properly
                  </p>
                </div>
                <div className="text-sm font-medium text-muted-foreground">Always On</div>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <h4 className="font-semibold text-foreground">Analytics Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Help us understand how you use our website
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({ ...preferences, analytics: e.target.checked })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-border rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>

              <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <div>
                  <h4 className="font-semibold text-foreground">Marketing Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Used to deliver personalized advertisements
                  </p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={(e) =>
                      setPreferences({ ...preferences, marketing: e.target.checked })
                    }
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-border rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
                </label>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                onClick={handleSavePreferences}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Save Preferences
              </Button>
              <Button
                onClick={() => setShowDetails(false)}
                variant="outline"
                className="border-border text-foreground"
              >
                Back
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};