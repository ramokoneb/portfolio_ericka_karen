
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle?: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  children?: React.ReactNode;
}

export const HeroSection = ({ 
  title, 
  subtitle, 
  description, 
  ctaText, 
  ctaLink,
  children 
}: HeroSectionProps) => {
  return (
    <section className="text-center space-y-8 mb-16 md:mb-20">
      <div className="space-y-6">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1A202C] tracking-tight leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-[#3182CE] font-medium">
              {subtitle}
            </p>
          )}
        </div>
        <p className="text-lg md:text-xl text-[#4A5568] leading-relaxed max-w-4xl mx-auto">
          {description}
        </p>
      </div>
      
      {ctaText && ctaLink && (
        <div className="pt-4">
          <Link to={ctaLink}>
            <Button 
              size="lg" 
              className="text-lg px-8 py-4 h-auto rounded-xl font-medium"
            >
              {ctaText}
            </Button>
          </Link>
        </div>
      )}
      
      {children}
    </section>
  );
};

export default HeroSection;
