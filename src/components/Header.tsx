import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#nosotros", label: "Nosotros" },
    { href: "#productos", label: "Ecosistema" },
    { href: "#contacto", label: "Contacto" },
  ];


  // Lógica robusta y limpia para sección activa
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const sectionIds = navLinks.map(link => link.href.replace('#', ''));
    const headerOffset = 80;
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "";
      for (let i = 0; i < sectionIds.length; i++) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const sectionTop = el.offsetTop - headerOffset - 1;
          if (scrollY >= sectionTop) {
            current = `#${sectionIds[i]}`;
          }
        }
      }
      // Si estamos cerca del final de la página, forzar contacto
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.body.offsetHeight;
      if (docHeight - scrollBottom < 10) {
        current = navLinks[navLinks.length - 1].href;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <>
      {/* Forzar a Tailwind a incluir las clases dinámicas */}
      <div className="hidden">
        bg-primary text-foreground text-muted-foreground hover:text-foreground
      </div>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 md:grid md:grid-cols-3 md:items-center">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <img src="/logo_horizontal_astren.svg" alt="Logo Astren" className="h-10 md:h-12 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-8 col-start-2 overflow-visible">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm font-medium transition-colors duration-300 px-1 pb-2
                    ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  style={isActive ? { fontWeight: 600 } : {}}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300 pointer-events-none"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA Button y Mobile Menu Toggle */}
          <div className="flex items-center justify-end gap-2">
            <div className="hidden md:block">
              <Button variant="hero" size="sm" asChild>
                <a href="#productos">Explorar</a>
              </Button>
            </div>
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`relative text-lg font-medium py-2 transition-colors duration-300 px-1 pb-2
                  ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                aria-current={isActive ? "page" : undefined}
                style={isActive ? { fontWeight: 600 } : {}}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute left-0 bottom-0 w-full h-0.5 bg-primary rounded-full transition-all duration-300 pointer-events-none"
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
          <Button variant="hero" size="lg" className="mt-4" asChild>
            <a href="#productos" onClick={() => setIsMobileMenuOpen(false)}>
              Explorar ecosistema
            </a>
          </Button>
        </nav>
      </div>
    </header>
    </>
  );
};

export default Header;
