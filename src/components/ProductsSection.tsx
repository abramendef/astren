import ProductCard from "./ProductCard";

const products = [
  {
    name: "AstrenGPR",
    description: "El primer paso: medir y mejorar la productividad con reputación.",
    status: "(activo - nuestro primer producto)",
    statusLabel: "Demo",
    color: "gpr" as const,
    href: "https://gpr.astren.app/",
    buttonText: "Ir a GPR",
    logoLetter: "G",
  },
  {
    name: "AstrenAI",
    description: "Inteligencia artificial: herramientas para creadores y equipos.",
    status: "(próximo en el ecosistema)",
    statusLabel: "Demo",
    color: "ai" as const,
    href: "https://ai.astren.app/",
    buttonText: "Avisarme cuando esté",
    logoLetter: "AI",
  },
  {
    name: "AstrenGames",
    description: "Entretenimiento interactivo: juegos y experiencias inmersivas.",
    status: "(expandiendo horizontes)",
    statusLabel: "En desarrollo",
    color: "games" as const,
    href: "#",
    buttonText: "Conocer más",
    logoLetter: "G",
  },
];

const ProductsSection = () => {
  return (
    <section id="productos" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gpr/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-ai/5 rounded-full blur-[128px]" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-games/5 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nuestro ecosistema
          </h2>
        </div>

        {/* Products grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
