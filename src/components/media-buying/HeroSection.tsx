
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  title: ReactNode;
  subtitle: string;
  description1: string;
  description2: string;
  ctaText?: string;
  contactPath?: string;
  strategicText?: string;
}

export const HeroSection = ({ 
  title, 
  subtitle, 
  description1, 
  description2, 
  ctaText = "Let's Work Together", 
  contactPath = "/en/contact",
  strategicText = "I cater to businesses ready to scale through paid media platforms, deploying solutions that combine human strategy with machine efficiency."
}: HeroSectionProps) => {
  return (
    <section className="max-w-5xl mx-auto mb-16">
      <div className="glass-card p-8 md:p-12 space-y-6">
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-darker leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-primary-dark font-bold">
            {subtitle}
          </p>
        </div>
        
        <div className="space-y-4 text-base md:text-lg text-primary-darker leading-relaxed">
          <p>{description1}</p>
          <p>{description2}</p>
          <div className="bg-primary/5 border-2 border-primary/20 rounded-2xl px-6 py-4">
            <p className="font-semibold">{strategicText}</p>
          </div>
        </div>
        
        {contactPath && (
          <div className="pt-4">
            <Link to={contactPath}>
              <Button size="lg" className="w-full md:w-auto">
                {ctaText}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
