import { useState, useEffect } from "react";
import { Download, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Don't show immediately, wait a bit for user to engage
      setTimeout(() => {
        setShowPrompt(true);
      }, 10000); // Show after 10 seconds
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
      console.log('PWA installed');
    }
    
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
    // Don't show again in this session
    sessionStorage.setItem('pwa-prompt-dismissed', 'true');
  };

  // Don't show if already dismissed in this session
  useEffect(() => {
    if (sessionStorage.getItem('pwa-prompt-dismissed')) {
      setShowPrompt(false);
    }
  }, []);

  if (!showPrompt || !deferredPrompt) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 md:left-auto md:right-4 md:w-96 z-50 animate-slide-up">
      <Card className="shadow-2xl border-2 border-primary/20">
        <CardContent className="p-4">
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
              <Download className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm mb-1">Install X15 Digital</h3>
              <p className="text-xs text-muted-foreground mb-3">
                Install our app for quick access and offline functionality
              </p>
              <div className="flex gap-2">
                <Button 
                  onClick={handleInstall} 
                  size="sm" 
                  className="flex-1"
                >
                  Install
                </Button>
                <Button 
                  onClick={handleDismiss} 
                  size="sm" 
                  variant="ghost"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
