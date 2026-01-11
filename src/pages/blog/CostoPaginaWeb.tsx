import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogArticleCostoPaginaWeb = () => {
  useSEO({
    title: "¿Cuánto cuesta una página web en 2026? | Astren Blog",
    description: "Desglose completo de precios para páginas web en 2026. Descubre qué factores afectan el costo y cómo elegir el presupuesto correcto.",
    keywords: "precio página web, costo página web 2026, presupuesto web, desarrollo web",
    canonicalUrl: "https://astren.app/blog/costo-pagina-web",
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
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver al blog
              </Link>
              
              <h1 className="font-heading text-4xl md:text-5xl font-bold leading-[1.2] mb-4">
                ¿Cuánto cuesta una página web en 2026?
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>8 de enero, 2026</span>
                <span>•</span>
                <span>6 min de lectura</span>
                <span>•</span>
                <span className="text-services font-medium">Web Services</span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="relative py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto prose prose-invert">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Una de las preguntas más comunes es: "¿Cuánto cuesta una página web?" La respuesta no es simple, porque depende de muchos factores. Pero aquí te doy un desglose honesto de qué esperar en 2026.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Rangos de precio por tipo de página</h2>
              
              <h3 className="text-xl font-semibold mt-10 mb-4">Portfolio (Landing profesional)</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>$2,000 - $3,500 MXN</strong><br />
                Ideal para freelancers y profesionales independientes. Una página limpia que muestra tu trabajo y tus servicios. Incluye formulario de contacto y optimización SEO básica.
              </p>

              <h3 className="text-xl font-semibold mt-10 mb-4">Blog corporativo</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>$3,500 - $5,000 MXN</strong><br />
                Para empresas que quieren contar su historia. Incluye sistema de blog integrado, múltiples secciones, galería de imágenes y SEO más avanzado.
              </p>

              <h3 className="text-xl font-semibold mt-10 mb-4">Página de negocio pequeño</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>$4,000 - $6,500 MXN</strong><br />
                Para pequeños negocios locales. Incluye dirección en Google Maps, horarios, galerías de servicios/productos, reseñas de clientes.
              </p>

              <h3 className="text-xl font-semibold mt-10 mb-4">Landing page de campaña</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>$1,500 - $2,500 MXN</strong><br />
                Simple y enfocada en conversión. Una página de alto impacto para vender un producto o servicio específico. Sin blog, sin complejidad innecesaria.
              </p>

              <h3 className="text-xl font-semibold mt-10 mb-4">Tienda online (E-commerce)</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                <strong>$8,000 - $15,000 MXN</strong><br />
                Para vender productos en línea. Incluye carrito de compras, pasarela de pago (Stripe/Paypal), catálogo de productos, inventario y panel de administración.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">¿Qué factores afectan el precio?</h2>

              <h3 className="text-xl font-semibold mt-10 mb-4">Complejidad del diseño</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Más animaciones, efectos visuales y secciones interactivas = más tiempo = más costo.
              </p>

              <h3 className="text-xl font-semibold mt-10 mb-4">Número de páginas</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                5 páginas cuesta más que 1 página. Cada página debe diseñarse y desarrollarse.
              </p>

              <h3 className="text-xl font-semibold mt-10 mb-4">Integración con terceros</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Conectar con Google Analytics, Stripe, email marketing, WhatsApp Business - cada integración suma costo.
              </p>

              <h3 className="text-xl font-semibold mt-10 mb-4">SEO y optimización</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Una página optimizada para Google requiere más trabajo que una página "bonita".
              </p>

              <h3 className="text-xl font-semibold mt-10 mb-4">Funcionalidades personalizadas</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Si necesitas algo muy específico que no es estándar, el precio subirá.
              </p>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">Lo que NO debes olvidar</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                El precio de la página web es solo la punta del iceberg. También necesitarás:
              </p>

              <ul className="space-y-3 text-muted-foreground mb-8">
                <li><strong>Dominio:</strong> $200-500 MXN/año</li>
                <li><strong>Hosting:</strong> $300-1500 MXN/año (dependiendo de tráfico)</li>
                <li><strong>Email profesional:</strong> Incluido en hosting</li>
                <li><strong>SSL certificado:</strong> Incluido en hosting (obligatorio en 2026)</li>
                <li><strong>Mantenimiento:</strong> $200-500 MXN/mes para actualizaciones</li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">¿Es barato o caro?</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Una página web profesional es una inversión. Si ves precios de $200-500 MXN, probablemente sea:
              </p>

              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>• Plantilla genérica sin personalización</li>
                <li>• Sin optimización SEO</li>
                <li>• Sin soporte después del lanzamiento</li>
              </ul>

              <p className="text-muted-foreground leading-relaxed mb-6">
                En Astren creemos que una página web debe ser:
              </p>

              <ul className="space-y-2 text-muted-foreground mb-8">
                <li>✓ Diseñada específicamente para tu negocio</li>
                <li>✓ Optimizada para Google</li>
                <li>✓ Rápida y responsiva</li>
                <li>✓ Con soporte y actualizaciones</li>
              </ul>

              {/* CTA */}
              <div className="mt-16 p-8 bg-secondary/20 border border-border/50 rounded-lg">
                <h3 className="text-xl font-bold mb-2">¿Quieres saber el precio para tu proyecto?</h3>
                <p className="text-muted-foreground mb-4">
                  Tenemos diferentes planes según el tipo de página que necesites. Solicita una cotización sin compromiso.
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

export default BlogArticleCostoPaginaWeb;
