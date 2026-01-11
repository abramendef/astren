import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import ServicesIndex from "./pages/services/ServicesIndex";
import WebServices from "./pages/services/WebServices";
import InvitationsServices from "./pages/services/InvitationsServices";
import Blog from "./pages/Blog";
import ErroresInvitacion from "./pages/blog/ErroresInvitacion";
import CostoPaginaWeb from "./pages/blog/CostoPaginaWeb";
import DominioUnico from "./pages/blog/DominioUnico";
import ContactPage from "./pages/Contact";
import NotFound from "./pages/NotFound";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesIndex />} />
            <Route path="/services/web" element={<WebServices />} />
            <Route path="/services/invitaciones" element={<InvitationsServices />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/errores-invitacion-boda" element={<ErroresInvitacion />} />
            <Route path="/blog/costo-pagina-web" element={<CostoPaginaWeb />} />
            <Route path="/blog/dominio-perfecto" element={<DominioUnico />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
