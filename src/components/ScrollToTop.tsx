import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation();
  const hasScrollParam = new URLSearchParams(search).has("scroll");

  useEffect(() => {
    if (!hasScrollParam) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, hasScrollParam]);

  return null;
}
