
import React from "react";
import ProfileImage from "@/components/home/ProfileImage";
import ServiceButtons from "@/components/home/ServiceButtons";
import SocialLinks from "@/components/home/SocialLinks";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen w-full relative">
      <div className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-16 relative z-10">
        <div className="glass-card p-8 md:p-12 space-y-8">
          <div className="flex items-start gap-4 md:gap-6">
            <ProfileImage 
              src="/lovable-uploads/31af75f9-f2e1-431e-bba7-4249d8dd0ffa.png"
              alt="Ericka Karen"
            />
            <div className="flex-1 pt-2">
              <h1 className="text-2xl md:text-4xl font-bold text-primary-dark mb-4 md:mb-6">
                @ericka_karen
              </h1>
              <div className="space-y-4 text-base md:text-lg text-primary-darker leading-relaxed">
                <p>
                  I am a <span className="font-bold text-primary-dark">growth-focused professional</span> with a creative background and strong experience in <span className="font-bold text-primary-dark">digital performance</span>.
                </p>
                <p>
                  I transform <span className="font-bold text-primary-dark">digital chaos</span> into scalable and intelligent systems, combining <span className="font-bold text-primary-dark">strategy, automation, and media</span>.
                </p>
                <p>
                  I believe in the fusion of <span className="font-bold text-primary-dark">creativity and technology</span> to build more efficient campaigns and deliver hybrid solutions with <span className="font-bold text-primary-dark">paid traffic and no-code innovation</span>.
                </p>
              </div>
            </div>
          </div>

          <ServiceButtons
            basePath="/en"
            mediaButtonText="Paid Media Services"
            automationButtonText="Automation, AI & No/Low-Code Development"
          />

          <SocialLinks
            whatsappText={isMobile ? "WhatsApp" : "Contact via WhatsApp"}
            linkedinText={isMobile ? "LinkedIn" : "Connect on LinkedIn"}
            emailText={isMobile ? "Email" : "Send an email"}
            className="flex flex-wrap gap-3 md:gap-4 justify-center pt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
