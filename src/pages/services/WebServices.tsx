import ServicesHeader from "@/components/ServicesHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WebServices = () => {
  const webTypes = [
    {
      title: "Portfolio / CV Digital",
      description: "Muestra tu trabajo y talento. Ideal para diseñadores, fotógrafos, desarrolladores y profesionales.",
      features: ["Galería de proyectos", "Información de contacto", "Links a redes sociales"]
    },
    {
      title: "Blog / Sitio Personal",
      description: "Comparte tu conocimiento y experiencia. Perfecto para creadores y especialistas.",
      features: ["Sistema de blog funcional", "Categorías y búsqueda", "Comentarios"]
    },
    {
      title: "Sitio de Negocio",
      description: "Presencia profesional en línea. Restaurante, clínica, consultoría, abogado, etc.",
      features: ["Información del negocio", "Servicios/Productos", "Contacto y ubicación"]
    },
    {
      title: "Tienda Online",
      description: "Vende tus productos en línea. E-commerce funcional y seguro.",
      features: ["Catálogo de productos", "Carrito de compras", "Pasarela de pago"]
    },
    {
      title: "Landing Page",
      description: "Página de impacto para campañas y promociones. Diseño enfocado en conversiones.",
      features: ["Diseño de alto impacto", "Call-to-action claro", "Formularios"]
    },
    {
      title: "Sitio Empresarial",
      description: "Solución completa para empresas. Múltiples secciones y funcionalidades.",
      features: ["Sitio a medida", "Blog y noticias", "Gestión de contenidos"]
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
                Páginas web profesionales
              </h1>
              <p className="animate-fade-up-delay-1 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                Sitios web modernos, responsivos y optimizados. Para tu idea, tu negocio o tu presencia personal.
              </p>
              <Button variant="hero" size="xl" asChild className="animate-fade-up-delay-2">
                <a href="#cotizacion">
                  Solicitar cotización
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Types of Websites */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-services/5 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-services/5 rounded-full blur-[128px]" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Tipos de páginas que creamos
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {webTypes.map((type, index) => (
                <div
                  key={type.title}
                  className="glass-card p-8 md:p-10 group hover:border-services/50 transition-all duration-500 flex flex-col h-full animate-scale-in"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <h3 className="font-heading text-xl font-bold mb-3 text-foreground">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {type.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-services" />
                        {feature}
                      </li>
                    ))}
                  </ul>
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
                Nuestro proceso
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                Desde la idea hasta el lanzamiento
              </p>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-4 gap-4 md:gap-6">
              {[
                { step: 1, title: "Consulta", desc: "Entendemos tu proyecto y objetivos" },
                { step: 2, title: "Diseño", desc: "Creamos el diseño y arquitectura" },
                { step: 3, title: "Desarrollo", desc: "Programamos y optimizamos" },
                { step: 4, title: "Lanzamiento", desc: "Deploy y soporte post-lanzamiento" },
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

        {/* FAQ */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Preguntas frecuentes
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "¿Cuánto cuesta una página web?",
                  a: "El precio depende del tipo de página, funcionalidades y complejidad. Desde opciones básicas hasta proyectos empresariales complejos. Solicita una cotización para presupuesto personalizado."
                },
                {
                  q: "¿Cuánto tiempo toma crear una página?",
                  a: "Típicamente entre 2 a 6 semanas, dependiendo del alcance del proyecto. Te lo confirmaremos en la consulta inicial."
                },
                {
                  q: "¿Incluye hosting y dominio?",
                  a: "Sí, el hosting y dominio están incluidos en el paquete. Nos encargamos de todo el aspecto técnico."
                },
                {
                  q: "¿Incluye SEO?",
                  a: "Incluimos SEO básico de optimización en estructura. Para SEO avanzado e estrategia de posicionamiento, lo conversamos en la cotización."
                },
                {
                  q: "¿Puedo hacer cambios después?",
                  a: "Claro. Ofrecemos mantenimiento y soporte para cambios y actualizaciones post-lanzamiento."
                },
                {
                  q: "¿Qué tecnologías usan?",
                  a: "Usamos tecnologías modernas: React, Tailwind CSS, Node.js y bases de datos robustas. Todo optimizado para rendimiento y seguridad."
                }
              ].map((item, index) => (
                <div key={index} className="glass-card p-8 md:p-10">
                  <h3 className="font-heading font-bold text-lg mb-3 text-foreground">
                    {item.q}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form CTA */}
        <section id="cotizacion" className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ¿Listo para tu página web?
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                Cuéntanos sobre tu proyecto y te enviaremos una cotización personalizada.
              </p>
              
              <Button variant="hero" size="xl" asChild>
                <a href="https://wa.me/+528138778770?text=Hola,%20me%20interesa%20una%20página%20web" target="_blank" rel="noopener noreferrer">
                  <span className="hidden sm:inline">Solicitar cotización por WhatsApp</span>
                  <span className="sm:hidden">Cotización vía WhatsApp</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>
              
              <p className="text-sm text-muted-foreground mt-4">
                O escribe a <a href="mailto:astren.app@gmail.com" className="text-services hover:underline">astren.app@gmail.com</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default WebServices;
