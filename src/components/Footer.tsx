const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/50 py-8 md:py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <img src="/logo_horizontal_astren.svg" alt="Logo Astren" className="h-10 w-auto" />
          </div>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} Astren. Todos los derechos reservados.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#productos"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Productos
            </a>
            <a
              href="#contacto"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contacto
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
