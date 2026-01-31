import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    // Only scroll to top when pathname changes (not hash-only changes)
    if (previousPathname.current !== pathname) {
      window.scrollTo(0, 0);
      previousPathname.current = pathname;
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
