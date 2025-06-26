
import React from "react";
import { LucideIcon } from "lucide-react";

interface TechnologyCardProps {
  tech: {
    category: string;
    tools: string[];
    icon: LucideIcon;
  };
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({ tech }) => {
  return (
    <div className="group p-8 bg-white border border-gray-100 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-[#34AEEF]/10 rounded-xl flex items-center justify-center group-hover:bg-[#34AEEF]/20 transition-colors duration-300">
          <tech.icon className="h-6 w-6 text-[#34AEEF]" />
        </div>
        <h3 className="text-xl font-medium text-gray-900">
          {tech.category}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tech.tools.map((tool, index) => (
          <span 
            key={index} 
            className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium border border-gray-100 hover:bg-gray-100 transition-colors duration-200"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};
