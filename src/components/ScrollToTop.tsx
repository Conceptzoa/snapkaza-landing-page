import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  const previousPathname = useRef(pathname);

  useEffect(() => {
    // Only act when pathname changes (not hash-only changes)
    if (previousPathname.current !== pathname) {
      previousPathname.current = pathname;

      if (hash) {
        // If there's a hash, scroll to that element after DOM renders
        setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        // No hash, scroll to top
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
