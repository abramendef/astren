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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-3 items-center h-24 md:h-32">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-2 group">
              <img src="/logo_horizontal_astren.svg" alt="Logo Astren" className="h-14 md:h-20 w-auto" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center gap-8 col-start-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
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
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground hover:text-muted-foreground transition-colors duration-300 text-lg font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <Button variant="hero" size="lg" className="mt-4" asChild>
            <a href="#productos" onClick={() => setIsMobileMenuOpen(false)}>
              Explorar ecosistema
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
