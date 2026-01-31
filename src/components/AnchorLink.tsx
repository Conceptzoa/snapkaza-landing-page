import { useLocation, useNavigate } from "react-router-dom";
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

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Extract hash from "/#section" -> "#section"
    const hash = to.replace('/', '');

    if (location.pathname === '/') {
      // Already on home page - smooth scroll
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // On sub-page - navigate to home with hash
      e.preventDefault();
      navigate(to);
    }

    // Call optional onClick (for mobile menu close)
    onClick?.();
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default AnchorLink;
