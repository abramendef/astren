import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogArticleDominioUnico = () => {
  useSEO({
    title: "Cómo elegir el dominio perfecto para tu negocio | Astren Blog",
    description: "Guía completa para elegir un dominio memorable, SEO-friendly y que refleje tu marca. Tips y errores a evitar.",
    keywords: "dominio web, elegir dominio, nombre dominio, dominio SEO, marca web",
    canonicalUrl: "https://astren.app/blog/dominio-perfecto",
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
                Cómo elegir el dominio perfecto para tu negocio
              </h1>
              
              <div className="animate-fade-up-delay-2 flex items-center gap-4 text-sm text-muted-foreground">
                <span>5 de enero, 2026</span>
                <span>•</span>
                <span>5 min de lectura</span>
                <span>•</span>
                <span className="text-services font-medium">Web Services</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="relative py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="animate-fade-up-delay-3 max-w-3xl mx-auto prose prose-invert">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Tu dominio es tu identidad en internet. Es lo primero que la gente ve, lo que escriben en la barra de dirección, lo que incluyen en sus tarjetas de presentación. Elegir bien tu dominio es crucial. Aquí te enseño cómo hacerlo.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Principios fundamentales</h2>

              <h3 className="text-xl font-semibold mt-10 mb-4">Corto y memorable</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Los mejores dominios tienen 2-3 palabras máximo. "Google" es mejor que "GoogersAdvancedSearchEngine.com". Si tu dominio requiere explicación, es demasiado largo.
              </p>

              <h3 className="text-xl font-semibold mt-10 mb-4">Fácil de escribir</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Evita palabras con doble letra confusa (¿Carrasco o Carrasco?), tildes (no se pueden escribir en dominios), números que suenen a letras (0 vs O, 1 vs L). Si alguien lo escucha por teléfono, ¿puede escribirlo correctamente?
              </p>

              <h3 className="text-xl font-semibold mt-10 mb-4">Tu marca o tu industria</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Los mejores dominios contienen el nombre de tu marca o el tipo de servicio que ofreces. "Astren.app" es bueno porque es la marca. "AgenciaWebMazatlan.com" es claro porque dice qué haces.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Extensiones que funcionan (dominios TLD)</h2>

              <h3 className="text-xl font-semibold mt-10 mb-4">.COM</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                El más confiable. Si tu competencia tiene .com y tú .mx, pierdes. Siempre intenta asegurar .com primero.
              </p>

              <h3 className="text-xl font-semibold mt-10 mb-4">.MX (México)</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Bueno si tu negocio es local. Ayuda en SEO local. Pero en 2026, .com sigue siendo superior si está disponible.
              </p>

              <h3 className="text-xl font-semibold mt-10 mb-4">.APP, .STORE, .TECH</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Los nuevos TLDs funcionan bien. ".app" es bueno para software. ".store" para e-commerce. Google trata estos igual que .com ahora.
              </p>

              <h3 className="text-xl font-semibold mt-10 mb-4">Evitar: .info, .biz, .site</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Estos parecen spam. Si usas estos, pierdes credibilidad. La gente instintivamente desconfía.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Errores a evitar</h2>

              <h3 className="text-xl font-semibold mt-10 mb-4">Números en el dominio</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Evita "consultoría24.com" o "agencia2.com". Parecen desactualizados. La gente pregunta: "¿24 o veinticuatro?" Confusión = pérdida de tráfico.
              </p>

              <h3 className="text-xl font-semibold mt-10 mb-4">Guiones</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                "mi-agencia.com" es más difícil de escribir que "miagencia.com". Si debes usar guión, es señal de que el dominio sin guión fue mejor opción.
              </p>

              <h3 className="text-xl font-semibold mt-10 mb-4">Palabras genéricas</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                "diseñoweb.com" es genérico. Hay cientos. "astren.com" es único y memorable. Diferénciate.
              </p>

              <h3 className="text-xl font-semibold mt-10 mb-4">Sobresnominal</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Si el dominio .com cuesta $50,000 en GoDaddy porque alguien lo tiene rentado, es probable que sea por especulación. No pagues. Elige alternativa.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Proceso de selección</h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>1. Brainstorm lista de 10-15 opciones</strong><br />
                Escribe opciones cortas, memorables, relacionadas a tu marca.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>2. Verifica disponibilidad</strong><br />
                Usa Namecheap, GoDaddy, o Google Domains para ver cuáles están disponibles.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>3. Busca en Google</strong><br />
                Asegúrate de que el dominio no tenga mal historial o sea usado por competencia.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>4. Compra con protección WHOIS</strong><br />
                Evita que cualquiera vea tu información personal. Todos los registradores lo ofrecen.
              </p>

              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>5. Renuévalo automáticamente</strong><br />
                Lo último que quieres es que expire tu dominio por olvido.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Ideas para diferentes industrias</h2>

              <ul className="space-y-3 text-muted-foreground mb-8">
                <li><strong>Consultoría:</strong> tu-nombre.com.mx o nombreempresa.app</li>
                <li><strong>E-commerce:</strong> nombretienda.store o nombretienda.com</li>
                <li><strong>Freelancer:</strong> tu-nombre.com (personal) o tu-nombre.dev (técnico)</li>
                <li><strong>Restaurante:</strong> nombre-resto.mx (local) o nombre-resto.com</li>
                <li><strong>Agencia digital:</strong> nombreagencia.app o nombreagencia.tech</li>
              </ul>

              {/* CTA */}
              <div className="mt-16 p-8 bg-secondary/20 border border-border/50 rounded-lg">
                <h3 className="text-xl font-bold mb-2">¿Ya tienes tu dominio pero necesitas una página web?</h3>
                <p className="text-muted-foreground mb-4">
                  En Astren creamos páginas web que hacen justicia a tu dominio. Rápidas, hermosas y optimizadas para Google.
                </p>
                <Link
                  to="/services/web"
                  className="inline-block px-6 py-2 bg-services hover:bg-services/80 text-white rounded-lg transition-colors"
                >
                  Ver servicios web
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

export default BlogArticleDominioUnico;
