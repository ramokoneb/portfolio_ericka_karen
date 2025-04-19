
import { ReactNode } from "react";

interface HeroSectionProps {
  title: ReactNode;
  subtitle: string;
  description1: string;
  description2: string;
}

export const HeroSection = ({ title, subtitle, description1, description2 }: HeroSectionProps) => {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 cult-heading">{title}</h1>
      <p className="text-xl text-white mb-6">
        {subtitle}
      </p>
      
      <div className="glass-card p-6 rounded-lg mb-12">
        <p className="text-lg text-white mb-4">
          {description1}
        </p>
        <p className="text-lg text-white">
          {description2}
        </p>
      </div>
    </>
  );
};
