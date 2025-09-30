
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
              src="/lovable-uploads/17317c2e-5b1b-4d33-8ca6-1d312e53b5f3.png"
              alt="Ericka Karen"
            />
            <div className="flex-1 pt-2">
              <h1 className="text-2xl md:text-4xl font-bold text-primary-dark mb-4 md:mb-6">
                @ericka_karen
              </h1>
              <div className="space-y-4 text-base md:text-lg text-primary-darker leading-relaxed">
                <p>
                  Soy una profesional enfocada en el <span className="font-bold text-primary-dark">crecimiento</span>, con base creativa y sólida experiencia en <span className="font-bold text-primary-dark">performance digital</span>.
                </p>
                <p>
                  Transformo el <span className="font-bold text-primary-dark">caos digital</span> en sistemas escalables e inteligentes, combinando <span className="font-bold text-primary-dark">estrategia, automatización y medios</span>.
                </p>
                <p>
                  Creo en la fusión de <span className="font-bold text-primary-dark">creatividad y tecnología</span> para construir campañas más eficientes y entregar soluciones híbridas con <span className="font-bold text-primary-dark">tráfico de pago e innovación no-code</span>.
                </p>
              </div>
            </div>
          </div>

          <ServiceButtons
            basePath="/es"
            mediaButtonText="Servicios de Medios Pagos"
            automationButtonText="Automatización, IA & Desarrollo No/Low-Code"
          />

          <SocialLinks
            whatsappText={isMobile ? "WhatsApp" : "Contacta vía WhatsApp"}
            linkedinText={isMobile ? "LinkedIn" : "Conecta en LinkedIn"}
            emailText={isMobile ? "Correo" : "Envía un correo"}
            className="flex flex-wrap gap-3 md:gap-4 justify-center pt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
