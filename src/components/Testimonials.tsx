interface Testimonial {
  name: string;
  role: string;
  company: string;
  message: string;
  initials: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "María García",
      role: "Propietaria",
      company: "García & Co. Consultoría",
      message: "Astren transformó nuestra presencia digital. Pasamos de no tener página web a cerrar 3 clientes nuevos al mes. El equipo fue profesional de inicio a fin.",
      initials: "MG",
    },
    {
      name: "Carlos López",
      role: "Emprendedor",
      company: "TechStart Mazatlán",
      message: "La invitación digital para mi boda fue perfecta. Todos mis invitados recibieron el link, el RSVP funcionó sin problemas y fue muy económico.",
      initials: "CL",
    },
    {
      name: "Sandra Martínez",
      role: "E-commerce Manager",
      company: "Boutique Online Sinaloa",
      message: "Increíble cómo Astren desarrolló mi tienda online. Fue rápido, limpio y moderno. El soporte post-lanzamiento fue excepcional.",
      initials: "SM",
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-muted-foreground text-lg">
            Testimonios reales de proyectos completados.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="glass-card p-8 flex flex-col h-full hover:border-services/50 transition-all duration-500"
            >
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-services/10 flex items-center justify-center">
                  <span className="text-sm font-bold text-services">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role} · {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Message */}
              <p className="text-foreground leading-relaxed flex-grow mb-4 italic">
                "{testimonial.message}"
              </p>

              {/* Stars */}
              <div className="flex items-center gap-1 pt-4 border-t border-border/50">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-services">★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
