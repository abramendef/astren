import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { useSEO } from "@/hooks/useSEO";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ContactPage = () => {
  useSEO({
    title: "Contacto - Astren | Solicita tu presupuesto",
    description: "Contacta con Astren para solicitar un presupuesto para tu página web o invitación digital. Respuesta rápida garantizada.",
    keywords: "contacto, presupuesto, cotización, página web, invitación digital",
    canonicalUrl: "https://astren.app/contact",
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
                to="/" 
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Volver
              </Link>
              
              <h1 className="font-heading text-4xl md:text-5xl font-bold leading-[1.2] mb-4">
                Contacta con Astren
              </h1>
              
              <p className="text-lg text-muted-foreground">
                ¿Tienes un proyecto en mente? Nos encantaría escucharte y ayudarte a hacerlo realidad.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="relative py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
