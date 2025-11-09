import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(search);
    const scrollTarget = searchParams.get("scroll");

    // Only scroll to top if no specific section is being targeted
    if (!scrollTarget) {
      window.scrollTo(0, 0);
    }
  }, [pathname, search]);

  return null;
}
