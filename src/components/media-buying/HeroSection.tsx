
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
}

export const HeroSection = ({ 
  title, 
  subtitle, 
  description1, 
  description2, 
  ctaText = "Let's Work Together", 
  contactPath = "/en/contact" 
}: HeroSectionProps) => {
  return (
    <div className="mb-16">
      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#1c3454]">
        {title}
      </h1>
      <p className="text-xl md:text-2xl mb-6 text-[#6caddf]">
        {subtitle}
      </p>
      
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-[#6caddf]/10 backdrop-blur-sm rounded-xl p-6 border border-[#6caddf]/30">
          <p className="text-base md:text-lg text-[#1c3454] mb-4">
            {description1}
          </p>
          <p className="text-base md:text-lg text-[#1c3454]">
            {description2}
          </p>
        </div>
        <div className="flex flex-col justify-center space-y-6">
          <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
            <p className="text-[#1c3454] font-medium">
              I cater to businesses ready to scale through paid media platforms, deploying solutions that combine human strategy with machine efficiency.
            </p>
          </div>
          {contactPath && (
            <Link to={contactPath} className="self-start">
              <Button className="bg-[#6caddf] hover:bg-[#5a9ac8] text-white font-medium group">
                {ctaText}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
