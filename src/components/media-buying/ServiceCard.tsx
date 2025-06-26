
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <div className="group p-8 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-[#34AEEF]/10 rounded-xl flex items-center justify-center group-hover:bg-[#34AEEF]/20 transition-colors duration-300">
          <Icon className="h-6 w-6 text-[#34AEEF]" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-medium text-gray-900 mb-3 leading-tight">
            {title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
