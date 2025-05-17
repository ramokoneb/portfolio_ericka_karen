
import React from "react";
import { Button } from "@/components/ui/button";
import { MessageSquare, Linkedin, Mail } from "lucide-react";

interface SocialLinksProps {
  whatsappText: string;
  linkedinText: string;
  emailText: string;
  buttonSize?: string;
  className?: string;
}

const SocialLinks = ({ 
  whatsappText, 
  linkedinText, 
  emailText, 
  buttonSize = "sm",
  className = "flex flex-wrap gap-2 md:gap-4 justify-center mt-6 md:mt-12"
}: SocialLinksProps) => {
  return (
    <div className={className}>
      <Button 
        variant="outline" 
        size={buttonSize as any} 
        className="bg-white hover:bg-[#6CAAD9] hover:text-white border-[#94C1E7] text-[#1A3554] text-xs md:text-sm lg:text-base px-2 py-1 md:px-3 md:py-2"
        onClick={() => window.open("https://wa.me/5511942002308?text=%F0%9F%87%A7%F0%9F%87%B7%20Oi%2C%20Ericka!%20Achei%20seu%20trabalho%20muito%20interessante%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%0A%0A%F0%9F%87%BA%F0%9F%87%B8%20Hi%20Ericka!%20I%20found%20your%20work%20really%20interesting%20and%20would%20love%20to%20know%20more%20about%20your%20services.%0A%0A%F0%9F%87%AA%F0%9F%87%B8%20%C2%A1Hola%20Ericka!%20Encontr%C3%A9%20tu%20trabajo%20muy%20interesante%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tus%20servicios.", "_blank")}
      >
        <MessageSquare className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
        {whatsappText}
      </Button>
      <Button 
        variant="outline" 
        size={buttonSize as any} 
        className="bg-white hover:bg-[#6CAAD9] hover:text-white border-[#94C1E7] text-[#1A3554] text-xs md:text-sm lg:text-base px-2 py-1 md:px-3 md:py-2"
        onClick={() => window.open("https://www.linkedin.com/in/ekarenramos/", "_blank")}
      >
        <Linkedin className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
        {linkedinText}
      </Button>
      <Button 
        variant="outline" 
        size={buttonSize as any}
        className="bg-white hover:bg-[#6CAAD9] hover:text-white border-[#94C1E7] text-[#1A3554] text-xs md:text-sm lg:text-base px-2 py-1 md:px-3 md:py-2"
        onClick={() => window.location.href = "mailto:contato@zonadeconversao.space"}
      >
        <Mail className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
        {emailText}
      </Button>
    </div>
  );
};

export default SocialLinks;
