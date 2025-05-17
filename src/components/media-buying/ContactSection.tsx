
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SocialLinks from "@/components/home/SocialLinks";

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
  return (
    <div className="rounded-xl bg-gradient-to-r from-[#1c3454] to-[#264b73] p-6 md:p-8 lg:p-10 text-white">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
        {title}
      </h2>
      
      <p className="text-white/90 mb-6 max-w-3xl">
        {description}
      </p>
      
      <div className="mb-4">
        <SocialLinks 
          whatsappText="WhatsApp" 
          linkedinText="LinkedIn" 
          emailText="Email" 
        />
      </div>
      
      <div className="mt-8 md:mt-10">
        <Link to={contactPath}>
          <Button className="bg-white hover:bg-gray-100 text-[#1c3454] font-medium group">
            {buttonText}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </div>
  );
};
