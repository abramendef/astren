import { Globe, Mail, ArrowRight } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Páginas Web Personalizadas",
    description:
      "Sitios web modernos, responsivos y optimizados. Para tu idea, negocio o presencia personal.",
    icon: <Globe className="w-6 h-6" />,
    href: "/services/web",
    buttonText: "Explorar",
  },
  {
    title: "Invitaciones Web Personalizadas",
    description:
      "Links interactivos para tus eventos. Una experiencia moderna que tus invitados compartirán con entusiasmo.",
    icon: <Mail className="w-6 h-6" />,
    href: "/services/invitaciones",
    buttonText: "Ver planes",
  },
];

const ServicesSection = () => {
  return (
    <section id="servicios" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-services/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-services/5 rounded-full blur-[128px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nuestros servicios
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Además de nuestros productos, ofrecemos servicios profesionales diseñados para darle vida a tus ideas con experiencias digitales únicas.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        {/* CTA to all services */}
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" asChild>
            <a href="/services">
              Ver todos los servicios
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>      </div>
    </section>
  );
};

export default ServicesSection;
