
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
    <section className="mb-12 md:mb-16">
      <div className="glass-card p-8 md:p-12 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-darker leading-tight tracking-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-primary-dark font-bold">
              {subtitle}
            </p>
          )}
        </div>
        <p className="text-base md:text-lg text-primary-darker leading-relaxed">
          {description}
        </p>
      
        {ctaText && ctaLink && (
          <div className="pt-2">
            <Link to={ctaLink}>
              <Button size="lg" className="w-full md:w-auto">
                {ctaText}
              </Button>
            </Link>
          </div>
        )}
      
        {children}
      </div>
    </section>
  );
};

export default HeroSection;
