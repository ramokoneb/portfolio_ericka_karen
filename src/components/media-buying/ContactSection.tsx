
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ContactSectionProps {
  title: string;
  description: string;
  buttonText: string;
  contactPath: string;
}

export const ContactSection = ({ 
  title, 
  description, 
  buttonText, 
  contactPath 
}: ContactSectionProps) => {
  return (
    <section className="max-w-4xl mx-auto text-center mb-20">
      <div className="bg-gradient-to-r from-[#34AEEF]/5 to-blue-50 rounded-2xl p-12 md:p-16">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-light text-gray-900">
              {title}
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </div>
          
          <Link to={contactPath}>
            <Button 
              size="lg"
              className="bg-[#34AEEF] hover:bg-[#2B9DE5] text-white px-8 py-4 rounded-lg text-lg font-medium shadow-sm hover:shadow-md transition-all duration-200"
            >
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
