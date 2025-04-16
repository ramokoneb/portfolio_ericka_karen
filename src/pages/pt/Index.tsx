
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LineChart, Bot, Linkedin, Mail, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#000000]">
      <div className="max-w-4xl mx-auto text-center space-y-8 bg-white p-12 rounded-xl shadow-lg">
        <div className="mb-12">
          <div className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-[#33C3F0] overflow-hidden">
            <img 
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500"
              alt="Ericka Karen"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#33C3F0] mb-6">
            Ericka Karen
          </h1>
          <div className="text-xl md:text-xl text-gray-700 max-w-2xl mx-auto space-y-3">
            <p>Sou uma profissional focada em crescimento, com bagagem criativa e forte experiência em performance digital. Transformo o caos digital em sistemas escaláveis e inteligentes, unindo estratégia, automação e mídia. Acredito na fusão entre criatividade e tecnologia para construir campanhas mais eficientes e entregar soluções híbridas com tráfego pago e inovação no-code.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link to="/pt/media-buying">
            <Button 
              size="lg" 
              className="w-full md:w-auto text-lg px-8 py-6 bg-[#8A898C] hover:bg-[#6A696C] text-white"
            >
              <LineChart className="mr-2" />
              Serviços de Mídia Paga
            </Button>
          </Link>
          <Link to="/pt/automation-ai">
            <Button 
              size="lg" 
              className="w-full md:w-auto text-lg px-8 py-6 bg-[#8A898C] hover:bg-[#6A696C] text-white"
            >
              <Bot className="mr-2" />
              Serviços de Automação e IA
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <Button variant="outline" size="lg" className="bg-white hover:bg-[#33C3F0] hover:text-white">
            <MessageSquare className="mr-2" />
            WhatsApp
          </Button>
          <Button variant="outline" size="lg" className="bg-white hover:bg-[#33C3F0] hover:text-white">
            <Linkedin className="mr-2" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="bg-white hover:bg-[#33C3F0] hover:text-white">
            <Mail className="mr-2" />
            E-mail
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
