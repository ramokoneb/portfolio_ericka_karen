
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
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#1A3554]">{title}</h1>
      <p className="text-xl text-[#6CADDE] mb-6">
        {subtitle}
      </p>
      
      <div className="glass-card p-6 rounded-lg mb-12 bg-white border border-[#94C1E7]/20">
        <p className="text-lg text-[#6CADDE] mb-4">
          {description1}
        </p>
        <p className="text-lg text-[#6CADDE]">
          {description2}
        </p>
      </div>
    </>
  );
};
