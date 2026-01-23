import ServicesHeader from "@/components/ServicesHeader";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { InvitationsSchema } from "@/components/SEOSchema";

const InvitationsServices = () => {
  useSEO({
    title: "Invitaciones Web Personalizadas para Bodas, XV Años y Eventos | Astren",
    description: "Invitaciones digitales elegantes para eventos en cualquier parte del mundo. RSVP, galería de fotos y música. Planes desde $600 MXN. Diseño personalizado para bodas, XV años, bautizos, graduaciones. Servicio 100% remoto. Activas desde 1 mes hasta para siempre.",
    keywords: "invitaciones digitales, invitaciones web, invitaciones bodas, invitaciones XV años, invitaciones bautizo, RSVP online, galería fotos eventos, invitaciones personalizadas online, México, servicios remotos",
    canonicalUrl: "https://astren.app/services/invitaciones",
  });

  const plans = [
    {
      name: "Plan Esencial",
      price: "$600",
      currency: "MXN",
      period: "por evento",
      recommended: false,
      description: "Ideal si buscas algo sencillo, bonito y funcional.",
      features: [
        { text: "Activa por 1 mes después del evento", included: true },
        { text: "Invitación web (link compartible)", included: true },
        { text: "Diseño elegante y mobile-first", included: true },
        { text: "Tipo de evento", included: true },
        { text: "Fecha y hora", included: true },
        { text: "Una ubicación con Google Maps", included: true },
        { text: "Texto de invitación", included: true },
        { text: "Cuenta regresiva al evento", included: true },
        { text: "Contacto visible (WhatsApp)", included: true },
        { text: "Confirmación de asistencia (RSVP)", included: false },
        { text: "Galería de fotos", included: false },
        { text: "Música", included: false },
      ]
    },
    {
      name: "Plan Completo",
      price: "$1,000",
      currency: "MXN",
      period: "por evento",
      recommended: true,
      badge: "⭐ El más solicitado",
      description: "La experiencia completa para XV, bodas y eventos importantes.",
      features: [
        { text: "Activa por 6 meses después del evento", included: true },
        { text: "TODO del Plan Esencial", included: true },
        { text: "Confirmación de asistencia (RSVP)", included: true },
        { text: "Galería colaborativa de fotos", included: true },
        { text: "Múltiples ubicaciones", included: true },
        { text: "Itinerario del evento", included: true },
        { text: "Código de vestimenta", included: true },
        { text: "Menciones especiales", included: true },
        { text: "Mesa de regalos", included: true },
        { text: "Música/Playlist Spotify", included: true },
        { text: "Imágenes personalizadas como fondos", included: true },
        { text: "Galería previa", included: true },
        { text: "Información adicional", included: true },
      ]
    },
    {
      name: "Plan Premium+",
      price: "$2,000",
      currency: "MXN",
      period: "por evento",
      recommended: false,
      description: "Para quienes quieren más tranquilidad y atención extra.",
      features: [
        { text: "Activa para siempre", included: true },
        { text: "TODO del Plan Completo", included: true },
        { text: "Prioridad en entrega", included: true },
        { text: "Más ajustes incluidos", included: true },
        { text: "Cambios posteriores al evento", included: true },
        { text: "Galería activa por más tiempo", included: true },
        { text: "Detalles visuales y animaciones extra", included: true },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <ServicesHeader />
      
      <main className="pt-20 md:pt-24">
        <InvitationsSchema />
        
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
          
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="animate-fade-up font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                Invitaciones web personalizadas
              </h1>
              <p className="animate-fade-up-delay-1 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
                No es una imagen. Es un link web interactivo que tus invitados compartirán con entusiasmo.
              </p>
              
              {/* CTA Buttons */}
              <div className="animate-fade-up-delay-2 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button variant="hero" size="xl" asChild className="w-full sm:w-auto">
                  <a href="#ejemplo">
                    Ver ejemplo
                  </a>
                </Button>
                <Button variant="heroOutline" size="xl" asChild className="w-full sm:w-auto">
                  <a href="#planes">
                    Ver planes y precios
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Cómo funciona
              </h2>
            </div>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "No es una imagen",
                  description: "Es una mini página web responsiva. Funciona perfectamente en cualquier celular sin descargar nada."
                },
                {
                  title: "Link compartible",
                  description: "Tus invitados reciben un link único que pueden abrir, compartir y guardar fácilmente."
                },
                {
                  title: "Experiencia interactiva",
                  description: "Los invitados pueden confirmar asistencia, subir fotos, ver el itinerario y más."
                },
                {
                  title: "Puedes tenerla para siempre",
                  description: "Con el Plan Premium+ tu invitación permanece activa permanentemente. Los otros planes tienen duración de 1 a 6 meses después del evento."
                }
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card p-8 md:p-10 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-heading text-xl font-bold mb-4 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Example */}
        <section id="ejemplo" className="relative py-24 md:py-32 overflow-hidden">
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Ejemplo de invitación
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl mb-8">
                Mira cómo se ve una invitación en acción
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="glass-card p-2 md:p-4">
                <div className="relative w-full bg-background rounded-lg overflow-hidden aspect-video md:aspect-[16/10]">
                  <iframe 
                    src="https://invitacion-navide-a-six.vercel.app/" 
                    title="Ejemplo de invitación"
                    className="w-full h-full border-0"
                  />
                </div>
              </div>
              <div className="mt-6 text-center">
                <Button variant="outline" size="lg" asChild>
                  <a href="https://invitacion-navide-a-six.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Ver ejemplo en pantalla completa
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section id="planes" className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-services/5 rounded-full blur-[128px]" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-services/5 rounded-full blur-[128px]" />
          </div>

          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Nuestros planes
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl">
                Elige el plan que mejor se adapte a tu evento
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 md:p-10 flex flex-col h-full transition-all duration-500 animate-scale-in ${
                    plan.recommended
                      ? "glass-card border-services/50 scale-105 md:scale-105"
                      : "glass-card"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-services text-background px-4 py-1 rounded-full text-sm font-bold">
                      {plan.badge}
                    </div>
                  )}

                  <h3 className="font-heading text-2xl font-bold mb-2 text-foreground">
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className="font-heading text-4xl font-bold text-services">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">{plan.currency}</span>
                    <p className="text-sm text-muted-foreground mt-2">{plan.period}</p>
                  </div>

                  <p className="text-muted-foreground mb-8 flex-grow">
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.slice(0, 8).map((feature, idx) => (
                      <li key={idx} className={`flex items-start gap-3 text-sm ${feature.included ? "text-foreground" : "text-muted-foreground"}`}>
                        {feature.included ? (
                          <Check className="w-5 h-5 text-services flex-shrink-0 mt-0.5" />
                        ) : (
                          <div className="w-5 h-5 flex-shrink-0" />
                        )}
                        {feature.text}
                      </li>
                    ))}
                  </ul>

                  <Button 
                    variant={plan.recommended ? "hero" : "outline"} 
                    size="lg" 
                    className={plan.recommended ? "" : "border-services/30 text-services hover:bg-services/10 hover:border-services/50"}
                    asChild
                  >
                    <a href="https://wa.me/+528138778770?text=Hola,%20me%20interesa%20el%20plan%20" target="_blank" rel="noopener noreferrer">
                      Crear invitación
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>

            {/* All features note */}
            <div className="max-w-4xl mx-auto mt-12 p-6 md:p-8 glass-card text-center">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Nota:</strong> El Plan Completo incluye todas las características del Plan Esencial + todas las funcionalidades premium.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Preguntas frecuentes
              </h2>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "¿Cuánto cuesta enviar las invitaciones a los invitados?",
                  a: "¡Nada! Los invitados no pagan nada. Reciben un link que pueden abrir gratuitamente desde cualquier celular."
                },
                {
                  q: "¿Cuánto tiempo permanece activa la invitación?",
                  a: "Depende del plan: Plan Esencial (1 mes después), Plan Completo (6 meses después), Plan Premium+ (para siempre). Al finalizar el periodo puedes descargar todas las fotos como recuerdo."
                },
                {
                  q: "¿Puedo cambiar el contenido después de crear la invitación?",
                  a: "Sí, puedes hacer cambios antes del evento. El Plan Premium+ incluye más cambios y ajustes. Los otros planes permiten ajustes limitados."
                },
                {
                  q: "¿Cómo comparten la invitación los invitados?",
                  a: "Es un link simple que pueden compartir por WhatsApp, email, redes sociales o copiar y compartir como prefieran."
                },
                {
                  q: "¿Pueden subir fotos los invitados?",
                  a: "Sí, en los planes Completo y Premium+. La galería colaborativa permite que todos suban fotos del evento."
                },
                {
                  q: "¿Incluye música de fondo?",
                  a: "En los planes Completo y Premium+ sí. Puedes usar música de fondo o conectar una playlist de Spotify."
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

        {/* CTA */}
        <section className="relative py-24 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-background" />

          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                ¿Listo para tu invitación?
              </h2>
              <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
                Contáctanos por WhatsApp y cuéntanos detalles de tu evento.
              </p>
              
              <Button variant="hero" size="xl" asChild>
                <a href="https://wa.me/+528138778770?text=Hola,%20me%20interesa%20crear%20una%20invitación%20web" target="_blank" rel="noopener noreferrer">
                  Crear mi invitación
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

export default InvitationsServices;
