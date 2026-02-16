import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ServicesSection from "@/components/ServicesSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";
import { AstrenOrganizationSchema } from "@/components/SEOSchema";

const Index = () => {
  useSEO({
    title: "Astren - Ecosistema digital con impacto real",
    description: "Astren es un proyecto digital en crecimiento. Creamos software propio y servicios web e invitaciones digitales para clientes en México y el mundo. Servicios 100% remotos.",
    keywords: "astren, ecosistema digital, software, paginas web, invitaciones digitales, desarrollo web remoto, e-commerce, diseno web online, AstrenGPR, AstrenAI, AstrenGames, servicios digitales Mexico",
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
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
