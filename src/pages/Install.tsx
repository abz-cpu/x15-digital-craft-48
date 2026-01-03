import { useState, useEffect } from "react";
import { Download, Check, Smartphone, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { BreadcrumbNav } from "@/components/BreadcrumbNav";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const Install = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstall = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    
    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Install App | L&D Digital"
        description="Install the L&D Digital progressive web app for quick access and offline functionality."
        robots="noindex, nofollow"
      />
      <Navigation />
      <BreadcrumbNav />
      
      <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Install L&D Digital
            </h1>
            <p className="text-lg text-muted-foreground">
              Get quick access and work offline with our progressive web app
            </p>
          </div>

          {isInstalled ? (
            <Card className="border-2 border-success">
              <CardContent className="pt-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4">
                  <Check className="h-8 w-8 text-success" />
                </div>
                <h2 className="text-2xl font-bold mb-2">App Installed!</h2>
                <p className="text-muted-foreground">
                  You can now access L&D Digital from your home screen or app drawer.
                </p>
              </CardContent>
            </Card>
          ) : (
            <>
              {/* Install button for Android/Chrome */}
              {deferredPrompt && (
                <Card className="mb-8 border-2 border-primary">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Download className="h-6 w-6 text-primary" />
                      Quick Install
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      Install our app with one click for the best experience.
                    </p>
                    <Button onClick={handleInstall} size="lg" className="w-full">
                      <Download className="mr-2 h-5 w-5" />
                      Install App
                    </Button>
                  </CardContent>
                </Card>
              )}

              {/* iOS Instructions */}
              {isIOS && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Smartphone className="h-6 w-6" />
                      iOS Installation Guide
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-foreground">1.</span>
                        <span>Tap the Share button in Safari</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-foreground">2.</span>
                        <span>Scroll down and tap "Add to Home Screen"</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-foreground">3.</span>
                        <span>Tap "Add" in the top right corner</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="font-semibold text-foreground">4.</span>
                        <span>The app icon will appear on your home screen</span>
                      </li>
                    </ol>
                  </CardContent>
                </Card>
              )}

              {/* Desktop Instructions */}
              {!isIOS && !deferredPrompt && (
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Monitor className="h-6 w-6" />
                      Desktop Installation Guide
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h3 className="font-semibold mb-2">Chrome / Edge:</h3>
                        <ol className="space-y-2 text-muted-foreground ml-4">
                          <li>1. Click the install icon in the address bar</li>
                          <li>2. Click "Install" in the popup</li>
                        </ol>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-2">Firefox:</h3>
                        <ol className="space-y-2 text-muted-foreground ml-4">
                          <li>1. Click the three dots menu</li>
                          <li>2. Select "Install L&D Digital"</li>
                        </ol>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Benefits */}
              <Card>
                <CardHeader>
                  <CardTitle>Why Install?</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Quick Access</h4>
                        <p className="text-sm text-muted-foreground">
                          Launch from your home screen like a native app
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Works Offline</h4>
                        <p className="text-sm text-muted-foreground">
                          Access key features even without internet
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Fast Loading</h4>
                        <p className="text-sm text-muted-foreground">
                          Cached resources load instantly
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold mb-1">Native Feel</h4>
                        <p className="text-sm text-muted-foreground">
                          Full-screen experience without browser UI
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Install;
