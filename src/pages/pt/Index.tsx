
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
                  Sou uma profissional focada em <span className="font-bold text-primary-dark">crescimento</span>, com bagagem criativa e forte experiência em <span className="font-bold text-primary-dark">performance digital</span>. 
                </p>
                <p>
                  Transformo o <span className="font-bold text-primary-dark">caos digital</span> em sistemas escaláveis e inteligentes, unindo <span className="font-bold text-primary-dark">estratégia, automação e mídia</span>.
                </p>
                <p>
                  Acredito na fusão entre <span className="font-bold text-primary-dark">criatividade e tecnologia</span> para construir campanhas mais eficientes e entregar soluções híbridas com <span className="font-bold text-primary-dark">tráfego pago e inovação no-code</span>.
                </p>
              </div>
            </div>
          </div>

          <ServiceButtons
            basePath="/pt"
            mediaButtonText="Serviços de Mídia Paga"
            automationButtonText="Automação, IA & Desenvolvimento No/Low-Code"
          />

          <SocialLinks
            whatsappText={isMobile ? "WhatsApp" : "Entre em contato via WhatsApp"}
            linkedinText={isMobile ? "LinkedIn" : "Conecte no LinkedIn"}
            emailText={isMobile ? "E-mail" : "Envie um e-mail"}
            className="flex flex-wrap gap-3 md:gap-4 justify-center pt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
