import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogArticleErroresInvitacion = () => {
  useSEO({
    title: "10 errores al crear una invitación de boda (y cómo evitarlos) | Astren Blog",
    description: "La invitación digital es tu primer contacto con los invitados. Aquí te mostramos los 10 errores más comunes al crearla y cómo evitarlos para impresionar.",
    keywords: "invitación de boda, invitación digital, errores comunes, boda, invitación personalizada",
    canonicalUrl: "https://astren.app/blog/errores-invitacion-boda",
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-12 md:pt-16">
        {/* Header */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
          
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl">
              <Link 
                to="/blog" 
                className="animate-fade-up inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al blog
              </Link>
              
              <h1 className="animate-fade-up-delay-1 font-heading text-4xl md:text-5xl font-bold leading-[1.2] mb-4">
                10 errores al crear una invitación de boda (y cómo evitarlos)
              </h1>
              
              <div className="animate-fade-up-delay-2 flex items-center gap-4 text-sm text-muted-foreground">
                <span>10 de enero, 2026</span>
                <span>•</span>
                <span>5 min de lectura</span>
                <span>•</span>
                <span className="text-services font-medium">Invitaciones</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="relative py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="animate-fade-up-delay-3 max-w-3xl mx-auto prose prose-invert">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Tu invitación de boda es el primer contacto real que tus invitados tendrán con tu evento. Es tu oportunidad de causar una excelente impresión y establecer el tono para la celebración. Pero muchos cometemos errores comunes que pueden confundir a los invitados o restarle profesionalismo a la invitación.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">1. No incluir información clara de fecha y hora</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Parece obvio, pero es uno de los errores más comunes. Si la fecha y hora no están visibles de inmediato en la invitación, los invitados tendrán que buscarla. Asegúrate de que sea uno de los primeros elementos que vean.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">2. Letras muy pequeñas o difíciles de leer</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Muchas personas abrirán tu invitación en móvil. Si la tipografía es muy pequeña o tiene poco contraste, será difícil de leer. Usa un tamaño mínimo de 16px y asegúrate de tener buen contraste entre el texto y el fondo.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">3. No indicar dónde es el evento</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                La ubicación debe estar clara con dirección completa, referencias de puntos cercanos y preferentemente un mapa. Si tus invitados no saben dónde ir, no irán.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">4. Falta de confirmación de asistencia (RSVP)</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Necesitas saber cuántos invitados asistirán. Si la invitación no tiene un mecanismo claro para confirmar, terminarás haciendo llamadas telefónicas. Incluye un botón visible de confirmación.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">5. Demasiados colores o diseño caótico</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Menos es más. Usa 2-3 colores principales y asegúrate de que el diseño sea limpio y elegante. Una invitación con demasiados efectos visuales pierde profesionalismo.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">6. No pensar en el móvil</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                El 80% de tus invitados verá la invitación desde el móvil. Si no está optimizada para pantalla pequeña, se verá mal. Asegúrate de que sea responsive.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">7. Información de contacto incompleta</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                ¿Qué pasa si alguien tiene una pregunta? Incluye teléfono, email o WhatsApp claramente visible.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">8. No mencionar código de vestimenta</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Si tu boda es formal, casual, temática o tiene algún dress code especial, debe estar claramente indicado.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">9. Olvidar los horarios de actividades</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Si hay ceremonia, cena, baile y despedida, incluye un horario aproximado. Los invitados lo apreciarán.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">10. Hacer la invitación difícil de compartir</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Si tu invitación no tiene un botón para compartir por WhatsApp o redes sociales, estás perdiendo alcance. Facilita que tus invitados la compartan.
              </p>

              {/* CTA */}
              <div className="mt-16 p-8 bg-secondary/20 border border-border/50 rounded-lg">
                <h3 className="text-xl font-bold mb-2">¿Necesitas una invitación de boda profesional?</h3>
                <p className="text-muted-foreground mb-4">
                  En Astren creamos invitaciones digitales elegantes y funcionales. Evitamos todos estos errores y más.
                </p>
                <Link
                  to="/services/invitaciones"
                  className="inline-block px-6 py-2 bg-services hover:bg-services/80 text-white rounded-lg transition-colors"
                >
                  Ver planes de invitaciones
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogArticleErroresInvitacion;
