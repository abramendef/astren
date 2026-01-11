import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { AstrenOrganizationSchema } from "@/components/SEOSchema";

const Index = () => {
  useSEO({
    title: "Astren - Tecnología para equipos, productividad y creatividad",
    description: "Astren desarrolla software innovador: AstrenGPR para gestión de equipos, AstrenAI para inteligencia artificial, AstrenGames para juegos móviles. Creamos páginas web e invitaciones digitales personalizadas para clientes en México y el mundo. Servicios 100% remotos.",
    keywords: "astren, tecnología, software, páginas web, invitaciones digitales, desarrollo web remoto, e-commerce, diseño web online, AstrenGPR, AstrenAI, AstrenGames, servicios digitales México",
    canonicalUrl: "https://astren.app/",
  });

  return (
    <div className="min-h-screen bg-background">
      <AstrenOrganizationSchema />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
