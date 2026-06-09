declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    openCookieSettings?: () => void;
  }
}

export {};
