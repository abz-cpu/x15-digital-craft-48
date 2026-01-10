import { useEffect, useRef, useCallback, useState } from "react";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement | string,
        options: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
      getResponse: (widgetId: string) => string | undefined;
    };
  }
}

const TURNSTILE_SCRIPT_ID = "cf-turnstile-script";
const TURNSTILE_SCRIPT_URL = "https://challenges.cloudflare.com/turnstile/v0/api.js";

// Get sitekey from environment variable as a STRING
const TURNSTILE_SITE_KEY = String(import.meta.env.VITE_TURNSTILE_SITE_KEY || "0x4AAAAAACLuw5EZZf7nmsII");

// Warn if sitekey is not configured in env
if (!import.meta.env.VITE_TURNSTILE_SITE_KEY) {
  console.warn("Missing VITE_TURNSTILE_SITE_KEY environment variable, using default sitekey");
}

interface UseTurnstileOptions {
  siteKey?: string;
  onVerify?: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
}

export function useTurnstile({ siteKey, onVerify, onExpire, onError }: UseTurnstileOptions = {}) {
  // Always use string sitekey - prefer passed value, fallback to env variable
  const effectiveSiteKey = String(siteKey || TURNSTILE_SITE_KEY);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadScript = useCallback(() => {
    return new Promise<void>((resolve) => {
      if (document.getElementById(TURNSTILE_SCRIPT_ID)) {
        // Script already exists, check if turnstile is ready
        if (window.turnstile) {
          resolve();
        } else {
          // Wait for script to load
          const checkReady = setInterval(() => {
            if (window.turnstile) {
              clearInterval(checkReady);
              resolve();
            }
          }, 100);
        }
        return;
      }

      const script = document.createElement("script");
      script.id = TURNSTILE_SCRIPT_ID;
      script.src = TURNSTILE_SCRIPT_URL;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        // Wait a bit for turnstile to initialize
        const checkReady = setInterval(() => {
          if (window.turnstile) {
            clearInterval(checkReady);
            resolve();
          }
        }, 100);
      };
      document.head.appendChild(script);
    });
  }, []);

  const renderWidget = useCallback(async () => {
    if (!containerRef.current || widgetIdRef.current) return;

    await loadScript();

    if (!window.turnstile || !containerRef.current) return;

    // Clear container before rendering
    containerRef.current.innerHTML = "";

    try {
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: effectiveSiteKey,
        callback: (newToken: string) => {
          setToken(newToken);
          onVerify?.(newToken);
        },
        "expired-callback": () => {
          setToken(null);
          onExpire?.();
        },
        "error-callback": () => {
          setToken(null);
          onError?.();
        },
        theme: "auto",
      });
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to render Turnstile widget:", error);
      setIsLoading(false);
    }
  }, [effectiveSiteKey, loadScript, onVerify, onExpire, onError]);

  const reset = useCallback(() => {
    if (widgetIdRef.current && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current);
      setToken(null);
    }
  }, []);

  const getToken = useCallback(() => {
    if (widgetIdRef.current && window.turnstile) {
      return window.turnstile.getResponse(widgetIdRef.current) || null;
    }
    return token;
  }, [token]);

  useEffect(() => {
    renderWidget();

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch (e) {
          // Widget might already be removed
        }
        widgetIdRef.current = null;
      }
    };
  }, [renderWidget]);

  return {
    containerRef,
    token,
    isLoading,
    reset,
    getToken,
  };
}
