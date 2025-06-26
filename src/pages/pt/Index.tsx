
import React from "react";
import ProfileImage from "@/components/home/ProfileImage";
import ServiceButtons from "@/components/home/ServiceButtons";
import SocialLinks from "@/components/home/SocialLinks";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen w-full bg-[#FAFBFC]">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-12 md:py-20">
        <div className="text-center space-y-8 md:space-y-12">
          <div className="space-y-6 md:space-y-8">
            <ProfileImage 
              src="/lovable-uploads/31af75f9-f2e1-431e-bba7-4249d8dd0ffa.png"
              alt="Ericka Karen"
            />
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#1A202C] tracking-tight">
                Ericka Karen
              </h1>
              <div className="max-w-3xl mx-auto space-y-4 text-lg md:text-xl text-[#4A5568] leading-relaxed">
                <p>Sou uma profissional focada em crescimento, com bagagem criativa e forte experiência em performance digital. Transformo o caos digital em sistemas escaláveis e inteligentes, unindo estratégia, automação e mídia.</p>
                <p>Acredito na fusão entre criatividade e tecnologia para construir campanhas mais eficientes e entregar soluções híbridas com tráfego pago e inovação no-code.</p>
              </div>
            </div>
          </div>

          <ServiceButtons
            basePath="/pt"
            mediaButtonText="Serviços de Mídia Paga"
            automationButtonText="Automação, IA & Desenvolvimento No/Low-Code"
          />

          <div className="pt-8">
            <SocialLinks
              whatsappText={isMobile ? "WhatsApp" : "Entre em contato via WhatsApp"}
              linkedinText={isMobile ? "LinkedIn" : "Conecte no LinkedIn"}
              emailText={isMobile ? "E-mail" : "Envie um e-mail"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
