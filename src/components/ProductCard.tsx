import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  name: string;
  description: string;
  status: string;
  statusLabel: string;
  color: "gpr" | "ai" | "games";
  href: string;
  buttonText: string;
  logoLetter: string;
}

const colorClasses = {
  gpr: {
    bg: "bg-gpr",
    glow: "glow-blue",
    border: "hover:border-gpr/50",
    text: "text-gpr",
  },
  ai: {
    bg: "bg-ai",
    glow: "glow-purple",
    border: "hover:border-ai/50",
    text: "text-ai",
  },
  games: {
    bg: "bg-games",
    glow: "glow-red",
    border: "hover:border-games/50",
    text: "text-games",
  },
};

const ProductCard = ({
  name,
  description,
  status,
  statusLabel,
  color,
  href,
  buttonText,
  logoLetter,
}: ProductCardProps) => {
  const colors = colorClasses[color];
  return (
    <div className={`glass-card p-8 md:p-10 group transition-all duration-500 ${colors.border}`}>
      {/* Logo GPR en vez de texto para AstrenGPR */}
      {name === "AstrenGPR" ? (
        <div className="mb-6 flex justify-center">
          <img src="/logo_astrenGPR_horizontal.svg" alt="Logo GPR" className="h-10 md:h-12 w-auto" />
        </div>
      ) : null}

      {/* Status badge */}
      <div className="mb-4">
        <span className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/50 text-xs font-medium ${colors.text}`}>
          <span className={`w-1.5 h-1.5 rounded-full ${colors.bg}`} />
          {statusLabel}
        </span>
      </div>

      <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 text-foreground">
        {name === "AstrenGPR" ? null : name}
      </h3>
      <p className="text-muted-foreground mb-6 min-h-[48px]">{description}</p>

          <Button
            variant={color}
            size="lg"
            className="w-full group/btn"
            asChild
          >
            <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined}>
              {buttonText}
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
            </a>
          </Button>
        </div>
      );
};

export default ProductCard;
