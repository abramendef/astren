import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  buttonText: string;
}

const ServiceCard = ({
  title,
  description,
  icon,
  href,
  buttonText,
}: ServiceCardProps) => {
  return (
    <div className="glass-card p-8 md:p-10 group transition-all duration-500 hover:border-services/50 h-full flex flex-col">
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
        <div className="w-6 h-6 text-services">
          {icon}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-heading text-xl md:text-2xl font-bold mb-4 text-foreground">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
        {description}
      </p>

      {/* Button */}
      <Button variant="outline" size="lg" className="border-services/30 text-services hover:bg-services/10 hover:border-services/50" asChild>
        <a href={href}>
          {buttonText}
          <ArrowUpRight className="w-4 h-4 ml-2" />
        </a>
      </Button>
    </div>
  );
};

export default ServiceCard;
