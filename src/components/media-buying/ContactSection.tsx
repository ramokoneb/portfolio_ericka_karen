
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
    <section className="max-w-4xl mx-auto mb-16">
      <div className="glass-card p-8 md:p-12 text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-darker">
          {title}
        </h2>
        <p className="text-base md:text-lg text-primary-darker leading-relaxed">
          {description}
        </p>
        <div className="pt-4">
          <Link to={contactPath}>
            <Button size="lg" className="w-full md:w-auto">
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
