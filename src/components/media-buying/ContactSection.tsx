
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SocialLinks from "@/components/home/SocialLinks";
import { useIsMobile } from "@/hooks/use-mobile";

interface ContactSectionProps {
  title: string;
  description: string;
  buttonText: string;
  contactPath: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  title,
  description,
  buttonText,
  contactPath
}) => {
  const isMobile = useIsMobile();
  
  return (
    <div className="rounded-xl bg-gradient-to-r from-[#1c3454] to-[#264b73] p-5 md:p-8 lg:p-10 text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
        {title}
      </h2>
      
      <p className="text-white/90 mb-6 max-w-3xl leading-relaxed text-base">
        {description}
      </p>
      
      <div className="mb-4">
        <SocialLinks 
          whatsappText={isMobile ? "WhatsApp" : "WhatsApp"}
          linkedinText={isMobile ? "LinkedIn" : "LinkedIn"} 
          emailText={isMobile ? "Email" : "Email"} 
          buttonSize={isMobile ? "default" : "lg"}
          className="flex flex-wrap gap-3"
        />
      </div>
      
      <div className="mt-6 md:mt-8">
        <Link to={contactPath}>
          <Button 
            size={isMobile ? "default" : "lg"} 
            className="bg-white hover:bg-gray-100 text-[#1c3454] font-medium group"
          >
            {buttonText}
            <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
