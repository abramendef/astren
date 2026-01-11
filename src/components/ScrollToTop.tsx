import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Forzar scroll restauration manual globalmente
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }, []);

  useEffect(() => {
    // Resetear posición INMEDIATAMENTE cuando cambia la ruta
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
