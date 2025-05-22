
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
    <section className="bg-[#1c3454] text-white p-6 md:p-10 rounded-xl shadow-lg mb-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {title}
        </h2>
        <p className="text-lg md:text-xl mb-6 text-[#6caddf]">
          {description}
        </p>
        <Link to={contactPath}>
          <Button 
            className="bg-[#6caddf] hover:bg-[#5a9ac8] text-white font-medium text-lg px-8 py-6"
          >
            {buttonText} <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </Link>
      </div>
    </section>
  );
};
