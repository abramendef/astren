import { Layers, Fingerprint, Eye } from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Ecosistema tecnológico",
    description:
      "Creamos productos en distintos ámbitos: productividad, IA, entretenimiento. Cada uno resuelve problemas diferentes.",
  },
  {
    icon: Fingerprint,
    title: "Identidad propia",
    description:
      "Cada producto tiene su color, logo y enfoque, pero todos comparten la esencia de Astren.",
  },
  {
    icon: Eye,
    title: "Visión amplia",
    description:
      "AstrenGPR es solo el primer paso. La idea de Astren va mucho más allá de la productividad.",
  },
];

const AboutSection = () => {
  return (
    <section id="nosotros" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Un proyecto, múltiples productos
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Astren es un proyecto digital en crecimiento. No estamos limitados a un solo
            producto: creamos soluciones en productividad, inteligencia artificial,
            entretenimiento interactivo y más. Cada producto tiene identidad propia,
            pero todos comparten nuestra esencia de innovación y diseño minimalista.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="glass-card p-8 md:p-10 group hover:border-foreground/20 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-heading text-xl font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
