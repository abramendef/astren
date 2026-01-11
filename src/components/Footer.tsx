const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = window.location.pathname;

  return (
    <footer className="border-t border-border/50 py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:justify-center gap-4 md:gap-8 lg:relative">
          {/* Logo */}
          <div className="flex items-center gap-2 flex-shrink-0 lg:absolute lg:left-0">
            <img src="/logo_horizontal_astren.svg" alt="Logo Astren" className="h-10 w-auto" />
          </div>

          {/* Copyright - Centered */}
          <div className="text-center order-3 lg:order-none w-full lg:w-auto">
            <p className="text-sm text-muted-foreground mb-2">
              © {currentYear} Astren. Todos los derechos reservados.
            </p>
            <div className="flex items-center justify-center gap-3 text-xs text-muted-foreground">
              <a 
                href="/llms.txt" 
                className="hover:text-foreground transition-colors duration-300"
                title="Información para LLMs/IAs"
              >
                LLMs
              </a>
              <span>·</span>
              <a 
                href="/sitemap.xml" 
                className="hover:text-foreground transition-colors duration-300"
                title="Mapa del sitio"
              >
                Sitemap
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 flex-shrink-0 lg:absolute lg:right-0">
            {location.startsWith("/services") ? (
              <>
                <a
                  href="/"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Volver a Astren
                </a>
              </>
            ) : (
              <>
                <a
                  href="#productos"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Productos
                </a>
                <a
                  href="#servicios"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Servicios
                </a>
                <a
                  href="#contacto"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  Contacto
                </a>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
