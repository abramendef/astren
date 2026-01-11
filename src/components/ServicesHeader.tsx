import { useState, useEffect } from "react";
import { Menu, X, ArrowLeft, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";

const ServicesHeader = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceLinks = [
    { href: "/services", label: "Ver todos los servicios" },
    { href: "/services/web", label: "Páginas Web" },
    { href: "/services/invitaciones", label: "Invitaciones" },
  ];

  const isActive = (href: string) => location.pathname === href;

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
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center gap-2 group">
                <img src="/logo_horizontal_astren.svg" alt="Logo Astren" className="h-10 md:h-12 w-auto" />
              </a>
            </div>

            {/* Desktop Navigation - Dropdown */}
            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground hover:text-foreground/80 transition-colors"
                >
                  Servicios
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isDropdownOpen && (
                  <div
                    className="absolute top-full left-0 mt-2 w-56 bg-background border border-border/50 rounded-2xl py-2 shadow-lg animate-fade-up"
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {serviceLinks.map((link, index) => (
                      <a
                        key={link.href}
                        href={link.href}
                        className={`block px-4 py-3 text-sm transition-colors ${
                          index === 0
                            ? "border-b border-border/50 text-foreground font-medium hover:bg-secondary/30"
                            : isActive(link.href)
                            ? "text-foreground bg-secondary/50 font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/30"
                        }`}
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Desktop Back Button */}
            <div className="hidden md:block">
              <Button variant="outline" size="sm" asChild>
                <a href="/">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Volver
                </a>
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

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
            <p className="text-sm font-medium text-muted-foreground mb-2">Servicios</p>
            {serviceLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-medium py-2 transition-colors duration-300 ${
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button variant="outline" size="lg" className="mt-4 w-full" asChild>
              <a href="/" onClick={() => setIsMobileMenuOpen(false)}>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver a Astren
              </a>
            </Button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default ServicesHeader;
