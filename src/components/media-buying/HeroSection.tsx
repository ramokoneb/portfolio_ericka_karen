
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
    <section className="max-w-4xl mx-auto text-center mb-20">
      <div className="space-y-8">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            {description1}
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            {description2}
          </p>
          <p className="text-base text-gray-600 font-medium bg-gray-50 px-6 py-4 rounded-lg">
            {strategicText}
          </p>
        </div>
        
        {contactPath && (
          <div className="pt-6">
            <Link to={contactPath}>
              <Button 
                size="lg" 
                className="bg-[#34AEEF] hover:bg-[#2B9DE5] text-white px-8 py-4 rounded-lg text-lg font-medium shadow-sm hover:shadow-md transition-all duration-200"
              >
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
