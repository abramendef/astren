import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Configurar scroll restoration manual INMEDIATAMENTE
if ('scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

// Resetear scroll en cada navegación ANTES de que React renderice
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const link = target.closest('a');
  if (link && link.href && link.href.startsWith(window.location.origin)) {
    // Link interno - forzar scroll arriba inmediatamente
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }
}, true);

createRoot(document.getElementById("root")!).render(<App />);
