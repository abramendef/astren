import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const BlogIndex = () => {
  useSEO({
    title: "Blog - Artículos sobre Desarrollo Web e Invitaciones Digitales | Astren",
    description: "Artículos, guías y tips sobre desarrollo web, diseño, e-commerce, invitaciones digitales y tecnología. Lee nuestro blog para aprender.",
    keywords: "blog, desarrollo web, guías, tips, e-commerce, invitaciones digitales, diseño web",
    canonicalUrl: "https://astren.app/blog",
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  const articles = [
    {
      id: "errores-invitacion-boda",
      title: "10 errores al crear una invitación de boda (y cómo evitarlos)",
      excerpt: "La invitación digital es tu primer contacto con los invitados. Aquí te mostramos los errores más comunes y cómo evitarlos.",
      date: "10 de enero, 2026",
      readTime: "5 min de lectura",
      category: "Invitaciones",
    },
    {
      id: "costo-pagina-web",
      title: "¿Cuánto cuesta una página web en 2026?",
      excerpt: "Desglosamos los precios reales de desarrollo web en México. ¿Cuándo es caro? ¿Cuándo es barato?",
      date: "9 de enero, 2026",
      readTime: "7 min de lectura",
      category: "Páginas Web",
    },
    {
      id: "dominio-perfecto",
      title: "Cómo elegir el dominio perfecto para tu negocio",
      excerpt: "El dominio es tu identidad online. Aprende a elegir uno que sea memorable, profesional y efectivo.",
      date: "8 de enero, 2026",
      readTime: "6 min de lectura",
      category: "Páginas Web",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-12 md:pt-16">
        {/* Hero */}
        <section className="relative py-12 md:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background" />
          
          <div className="container relative z-10 px-4 md:px-6">
            <div className="max-w-3xl">
              <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver
              </Link>
              
              <h1 className="animate-fade-up font-heading text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] tracking-tight mb-6">
                Blog de Astren
              </h1>
              <p className="animate-fade-up-delay-1 text-lg md:text-xl text-muted-foreground leading-relaxed">
                Artículos, guías y reflexiones sobre desarrollo web, diseño digital e invitaciones personalizadas.
              </p>
            </div>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="relative py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {articles.map((article, index) => (
                <Link
                  key={article.id}
                  to={`/blog/${article.id}`}
                  className="glass-card p-8 group hover:border-services/50 transition-all duration-500 flex flex-col h-full animate-scale-in"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  {/* Category */}
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-services/10 text-services text-xs font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 text-foreground group-hover:text-services transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground mb-6 flex-grow leading-relaxed">
                    {article.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center justify-between pt-4 border-t border-border/50 text-xs text-muted-foreground">
                    <span>{article.date}</span>
                    <span>{article.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndex;
