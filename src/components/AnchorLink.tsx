import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ReactNode, MouseEvent } from "react";

interface AnchorLinkProps {
  to: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

const AnchorLink = ({ to, children, className, onClick }: AnchorLinkProps) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang || "en";

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Extract hash from "/#section" -> "#section"
    const hash = to.replace('/', '');

    // Check if we're on the home page (with lang prefix)
    const isHomePage = location.pathname === `/${currentLang}` || location.pathname === `/${currentLang}/`;

    if (isHomePage) {
      // Already on home page - smooth scroll
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On sub-page - navigate to home with hash
      e.preventDefault();
      navigate(`/${currentLang}${to}`);
    }

    // Call optional onClick (for mobile menu close)
    onClick?.();
  };

  // Build the href with language prefix
  const href = to.startsWith('/#') ? `/${currentLang}${to}` : to;

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default AnchorLink;
