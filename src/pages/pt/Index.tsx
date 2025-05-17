
import React from "react";
import ProfileImage from "@/components/home/ProfileImage";
import ServiceButtons from "@/components/home/ServiceButtons";
import SocialLinks from "@/components/home/SocialLinks";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 bg-[#1A3554]">
      <div className="w-full max-w-4xl mx-auto text-center space-y-5 md:space-y-8 bg-white p-5 md:p-10 rounded-xl shadow-lg">
        <div className="mb-6 md:mb-10">
          <ProfileImage 
            src="/lovable-uploads/31af75f9-f2e1-431e-bba7-4249d8dd0ffa.png"
            alt="Ericka Karen"
          />
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#6CAAD9] mb-4 md:mb-6">
            Ericka Karen
          </h1>
          <div className="text-base md:text-lg text-[#1C3454] max-w-2xl mx-auto space-y-3 md:space-y-4 px-1 md:px-4 leading-relaxed">
            <p>Sou uma profissional focada em crescimento, com bagagem criativa e forte experiência em performance digital. Transformo o caos digital em sistemas escaláveis e inteligentes, unindo estratégia, automação e mídia.</p>
            <p>Acredito na fusão entre criatividade e tecnologia para construir campanhas mais eficientes e entregar soluções híbridas com tráfego pago e inovação no-code.</p>
          </div>
        </div>

        <ServiceButtons
          basePath="/pt"
          mediaButtonText="Serviços de Mídia Paga"
          automationButtonText="Automação, IA & Desenvolvimento No/Low-Code"
        />

        <div className="mt-6 md:mt-8">
          <SocialLinks
            whatsappText={isMobile ? "WhatsApp" : "Entre em contato via WhatsApp"}
            linkedinText={isMobile ? "LinkedIn" : "Conecte no LinkedIn"}
            emailText={isMobile ? "E-mail" : "Envie um e-mail"}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
