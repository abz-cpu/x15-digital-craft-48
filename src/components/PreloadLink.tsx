import { Link, LinkProps } from "react-router-dom";
import { useRef, useEffect } from "react";

interface PreloadLinkProps extends LinkProps {
  preloadDelay?: number;
}

// Route preloading map - will be populated by lazy imports
const preloadFunctions: Record<string, () => Promise<any>> = {};

export const registerPreload = (path: string, preloadFn: () => Promise<any>) => {
  preloadFunctions[path] = preloadFn;
};

export const PreloadLink = ({ 
  to, 
  preloadDelay = 200,
  onMouseEnter,
  onFocus,
  ...props 
}: PreloadLinkProps) => {
  const timeoutRef = useRef<number>();
  const preloadedRef = useRef(false);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handlePreload = () => {
    if (preloadedRef.current) return;

    const path = typeof to === 'string' ? to : to.pathname || '';
    const preloadFn = preloadFunctions[path];

    if (preloadFn) {
      timeoutRef.current = window.setTimeout(() => {
        preloadFn().then(() => {
          preloadedRef.current = true;
        }).catch((err) => {
          console.warn(`Failed to preload route: ${path}`, err);
        });
      }, preloadDelay);
    }
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    handlePreload();
    onMouseEnter?.(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLAnchorElement>) => {
    handlePreload();
    onFocus?.(e);
  };

  const cancelPreload = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <Link
      to={to}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={cancelPreload}
      onFocus={handleFocus}
      onBlur={cancelPreload}
      {...props}
    />
  );
};
