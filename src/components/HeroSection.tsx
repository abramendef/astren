import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient effects - simplificado en móvil */}
      <div className="absolute inset-0 bg-background">
        {!isMobile && (
          <>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gpr/5 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ai/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-foreground/[0.02] rounded-full blur-3xl" />
          </>
        )}
      </div>

      {/* Noise overlay - solo en desktop */}
      {!isMobile && <div className="absolute inset-0 bg-noise opacity-30" />}

      {/* Content */}
      <div className="container relative z-10 px-4 md:px-6 py-20 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main heading - ANIMACIÓN SIEMPRE */}
          <h1 className="animate-fade-up font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
            Ecosistema digital con impacto real
          </h1>

          {/* Description - ANIMACIÓN SIEMPRE */}
          <p className="animate-fade-up-delay-1 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Unimos producto, diseno y desarrollo para lanzar software y proyectos web que
            generan resultados.
          </p>

          {/* CTA Buttons - ANIMACIÓN SIEMPRE */}
          <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
              <a href="#productos">
                Ver productos
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild className="w-full sm:w-auto">
              <a href="#servicios">
                Ver servicios
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#nosotros" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
