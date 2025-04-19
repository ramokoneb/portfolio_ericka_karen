
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LineChart, Bot, Linkedin, Mail, MessageSquare } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [language, setLanguage] = useState<"en" | "pt">("en");
  
  const content = {
    en: {
      name: "Ericka Karen",
      description: "Digital transformation specialist, combining paid media strategies with intelligent automation and AI solutions to drive exceptional results.",
      mediaButton: "Paid Media Services",
      automationButton: "Automation, AI & No/Low-Code Development",
      contact: "Contact Me",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      email: "Email"
    },
    pt: {
      name: "Ericka Karen",
      description: "Especialista em transformação digital, combinando estratégias de mídia paga com soluções inteligentes de automação e IA para impulsionar resultados excepcionais.",
      mediaButton: "Serviços de Mídia Paga",
      automationButton: "Automação, IA & Desenvolvimento No/Low-Code",
      contact: "Contato",
      whatsapp: "WhatsApp",
      linkedin: "LinkedIn",
      email: "E-mail"
    }
  };
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "pt" : "en");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#1A3554]">
      <div className="absolute top-4 right-4">
        <Button 
          variant="outline" 
          className="rounded-full bg-[#1A3554] text-white hover:bg-[#6CAAD9]" 
          onClick={toggleLanguage}
        >
          {language === "en" ? "PT" : "EN"}
        </Button>
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-8 bg-white p-12 rounded-xl shadow-lg">
        <div className="mb-12">
          <div className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-[#1A3554] overflow-hidden">
            <img 
              className="w-full h-full object-cover"
              src="/professional-photo.png"
              alt="Ericka Karen"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#6CAAD9] mb-6">
            {content[language].name}
          </h1>
          <p className="text-xl md:text-2xl text-[#1A3554] max-w-2xl mx-auto">
            {content[language].description}
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link to="/media-buying">
            <Button 
              size="lg" 
              className="w-full md:w-auto text-lg px-8 py-6 bg-[#6CAAD9] hover:bg-[#6CAAD9] text-white"
            >
              <LineChart className="mr-2" />
              {content[language].mediaButton}
            </Button>
          </Link>
          <Link to="/automation-ai">
            <Button 
              size="lg" 
              className="w-full md:w-auto text-lg px-8 py-6 bg-[#6CAAD9] hover:bg-[#6CAAD9] text-white"
            >
              <Bot className="mr-2" />
              {content[language].automationButton}
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <Button variant="outline" size="lg" className="bg-white hover:bg-[#6CAAD9] hover:text-white border-[#94C1E7] text-[#1A3554]">
            <MessageSquare className="mr-2" />
            {content[language].whatsapp}
          </Button>
          <Button variant="outline" size="lg" className="bg-white hover:bg-[#6CAAD9] hover:text-white border-[#94C1E7] text-[#1A3554]">
            <Linkedin className="mr-2" />
            {content[language].linkedin}
          </Button>
          <Button variant="outline" size="lg" className="bg-white hover:bg-[#6CAAD9] hover:text-white border-[#94C1E7] text-[#1A3554]">
            <Mail className="mr-2" />
            {content[language].email}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
