
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="glass-card p-6 md:p-8 transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px]">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
          <Icon className="h-6 w-6 text-primary-dark" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-primary-darker mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-primary-darker leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
