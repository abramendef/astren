import { Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="w-5 h-5"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

interface ContactLink {
  icon: LucideIcon | (() => JSX.Element);
  label: string;
  href: string;
}

const contactLinks: ContactLink[] = [
  {
    icon: Mail,
    label: "Correo",
    href: "mailto:astren.app@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/astrenapp",
  },
  {
    icon: XIcon,
    label: "X / Twitter",
    href: "https://x.com/astrenapp",
  },
];

const ContactSection = () => {
  return (
    <section id="contacto" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-background" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
            Contacto
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            ¿Hablamos?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-12">
            ¿Colaboraciones, prensa o soporte? Escríbenos.
          </p>

          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {contactLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <Button
                  key={link.label}
                  variant="heroOutline"
                  size="lg"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconComponent />
                    {link.label}
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
