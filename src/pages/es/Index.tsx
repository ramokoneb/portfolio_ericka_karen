
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
            src="/lovable-uploads/17317c2e-5b1b-4d33-8ca6-1d312e53b5f3.png"
            alt="Ericka Karen"
          />
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-[#6CAAD9] mb-3 md:mb-6">
            Ericka Karen
          </h1>
          <div className="text-sm md:text-base lg:text-xl text-[#1C3454] max-w-2xl mx-auto space-y-2 md:space-y-3 px-2 md:px-4">
            <p>Soy una profesional enfocada en el crecimiento, con base creativa y sólida experiencia en performance digital. Transformo el caos digital en sistemas escalables e inteligentes, combinando estrategia, automatización y medios. Creo en la fusión de creatividad y tecnología para construir campañas más eficientes y entregar soluciones híbridas con tráfico de pago e innovación no-code.</p>
          </div>
        </div>

        <ServiceButtons
          basePath="/es"
          mediaButtonText="Servicios de Medios Pagos"
          automationButtonText="Automatización, IA & Desarrollo No/Low-Code"
        />

        <SocialLinks
          whatsappText="WhatsApp"
          linkedinText="LinkedIn"
          emailText="Correo"
        />
      </div>
    </div>
  );
};

export default Index;
