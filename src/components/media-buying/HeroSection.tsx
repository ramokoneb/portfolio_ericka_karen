
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
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-[#1c3454]">
        {title}
      </h1>
      <p className="text-lg md:text-xl mb-4 md:mb-6 text-[#6caddf]">
        {subtitle}
      </p>
      
      <div className="p-4 md:p-6 rounded-lg mb-8 md:mb-12 bg-[#6caddf]">
        <p className="text-base md:text-lg text-[#1c3454] mb-3 md:mb-4">
          {description1}
        </p>
        <p className="text-base md:text-lg text-[#1c3454]">
          {description2}
        </p>
      </div>
    </>
  );
};
