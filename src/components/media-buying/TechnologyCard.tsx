
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
    <div className="glass-card p-6 md:p-8 transition-all duration-300 hover:translate-x-[-2px] hover:translate-y-[-2px]">
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
          <tech.icon className="h-6 w-6 text-primary-dark" />
        </div>
        <h3 className="text-xl font-bold text-primary-darker">
          {tech.category}
        </h3>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tech.tools.map((tool, index) => (
          <span 
            key={index} 
            className="px-3 py-2 bg-primary/5 text-primary-darker rounded-full text-sm font-medium border-2 border-primary/20"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
};
