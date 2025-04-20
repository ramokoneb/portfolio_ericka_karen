
import React from "react";
import ProfileImage from "@/components/home/ProfileImage";
import ServiceButtons from "@/components/home/ServiceButtons";
import SocialLinks from "@/components/home/SocialLinks";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 md:p-8 bg-[#1A3554]">
      <div className="w-full max-w-4xl mx-auto text-center space-y-4 md:space-y-8 bg-white p-6 md:p-12 rounded-xl shadow-lg">
        <div className="mb-6 md:mb-12">
          <ProfileImage 
            src="/lovable-uploads/31af75f9-f2e1-431e-bba7-4249d8dd0ffa.png"
            alt="Ericka Karen"
          />
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#6CAAD9] mb-3 md:mb-6">
            Ericka Karen
          </h1>
          <div className="text-sm md:text-base lg:text-xl text-[#1C3454] max-w-2xl mx-auto space-y-2 md:space-y-3 px-2 md:px-4">
            <p>Sou uma profissional focada em crescimento, com bagagem criativa e forte experiência em performance digital. Transformo o caos digital em sistemas escaláveis e inteligentes, unindo estratégia, automação e mídia. Acredito na fusão entre criatividade e tecnologia para construir campanhas mais eficientes e entregar soluções híbridas com tráfego pago e inovação no-code.</p>
          </div>
        </div>

        <ServiceButtons
          basePath="/pt"
          mediaButtonText="Serviços de Mídia Paga"
          automationButtonText="Automação, IA & Desenvolvimento No/Low-Code"
        />

        <SocialLinks
          whatsappText="WhatsApp"
          linkedinText="LinkedIn"
          emailText="E-mail"
        />
      </div>
    </div>
  );
};

export default Index;
