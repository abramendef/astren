import ServicesHeader from "@/components/ServicesHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Mail } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const ServicesIndex = () => {
  useSEO({
    title: "Servicios - Páginas Web e Invitaciones Digitales | Astren",
    description: "Creamos páginas web profesionales y invitaciones digitales personalizadas para clientes en todo México y el mundo. Trabajo 100% remoto. Desarrollo web, e-commerce, landing pages, invitaciones para bodas, XV años y eventos. Invitaciones desde $600 MXN.",
    keywords: "páginas web, desarrollo web remoto, invitaciones digitales, invitaciones web online, e-commerce, landing page, portfolio, diseño web, servicios digitales remotos, México",
    canonicalUrl: "https://astren.app/services",
  });

  const services = [
    {
      title: "Páginas Web Personalizadas",
      description: "Sitios web modernos, responsivos y optimizados para tu idea o negocio. Desde portafolios hasta tiendas online.",
      icon: <Globe className="w-6 h-6" />,
      href: "/services/web",
      cta: "Explorar"
    },
    {
      title: "Invitaciones Web Personalizadas",
      description: "Links interactivos para tus eventos. Una experiencia moderna que tus invitados compartirán con entusiasmo.",
      icon: <Mail className="w-6 h-6" />,
      href: "/services/invitaciones",
      cta: "Ver planes"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ServicesHeader />
      
      <main className="pt-20 md:pt-24">
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
          
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="animate-fade-up font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                Servicios profesionales
              </h1>
              <p className="animate-fade-up-delay-1 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Soluciones digitales diseñadas para darle vida a tus ideas. Desde páginas web hasta invitaciones interactivas.
              </p>
              
              {/* CTA Buttons */}
              <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
                  <a href="https://wa.me/+528138778770?text=Hola,%20me%20interesa%20un%20servicio" target="_blank" rel="noopener noreferrer">
                    Solicitar cotización
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild className="w-full sm:w-auto">
                  <a href="#servicios">
                    Explorar servicios ↓
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="servicios" className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-services/5 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-services/5 rounded-full blur-[128px]" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="glass-card p-8 md:p-10 group hover:border-services/50 transition-all duration-500 flex flex-col h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <div className="w-6 h-6 text-services">
                      {service.icon}
                    </div>
                  </div>
                  <h2 className="font-heading text-2xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                    {service.description}
                  </p>
                  <Button variant="outline" size="lg" className="border-services/30 text-services hover:bg-services/10 hover:border-services/50 w-full" asChild>
                    <a href={service.href}>
                      {service.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Cómo trabajamos
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                Un proceso claro y profesional para entregar lo mejor
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-4 md:gap-6">
              {[
                { step: 1, title: "Consulta", desc: "Entendemos tus necesidades" },
                { step: 2, title: "Propuesta", desc: "Te presentamos la solución" },
                { step: 3, title: "Desarrollo", desc: "Creamos tu proyecto" },
                { step: 4, title: "Entrega", desc: "Lanzamiento y soporte" },
              ].map((item, index) => (
                <div key={item.step} className="relative">
                  <div className="glass-card p-6 text-center h-full flex flex-col justify-center">
                    <div className="w-12 h-12 rounded-full bg-services text-background flex items-center justify-center font-bold text-lg mx-auto mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-heading font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 border-t border-border/50" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesIndex;
