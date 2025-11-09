import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(search);
    const scrollTarget = urlParams.get("scroll");

    // Only scroll to top if no scroll target exists in the URL
    if (!scrollTarget) {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, search]);

  return null;
}
