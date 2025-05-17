
import React from "react";
import { LucideIcon } from "lucide-react";
import { TechnologyCard } from "@/components/media-buying/TechnologyCard";

interface Technology {
  category: string;
  tools: string[];
  icon: LucideIcon;
}

interface TechnologiesSectionProps {
  title: string;
  technologies: Technology[];
}

export const TechnologiesSection: React.FC<TechnologiesSectionProps> = ({
  title,
  technologies
}) => {
  return (
    <div className="mb-16 lg:mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454] flex items-center">
        <span className="text-[#6caddf] mr-2">🎯</span> {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
        {technologies.map((tech, index) => (
          <TechnologyCard key={index} tech={tech} />
        ))}
      </div>
    </div>
  );
};
