
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
    <section className="max-w-6xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
          {title}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <TechnologyCard key={index} tech={tech} />
        ))}
      </div>
    </section>
  );
};
