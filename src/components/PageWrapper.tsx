import { useEffect, ReactNode } from "react";
import { useLocation } from "react-router-dom";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  const location = useLocation();

  useEffect(() => {
    // Resetear scroll INMEDIATAMENTE cuando la ruta cambia
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [location.pathname]);

  return <>{children}</>;
}
