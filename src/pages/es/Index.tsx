
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LineChart, Bot, Linkedin, Mail, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#000000]">
      <div className="max-w-4xl mx-auto text-center space-y-8 bg-white p-12 rounded-xl shadow-lg">
        <div className="mb-12">
          <div className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-[#8A898C] overflow-hidden">
            <img 
              className="w-full h-full object-cover"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500"
              alt="Ericka Karen"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#8A898C] mb-6">
            Ericka Karen
          </h1>
          <div className="text-xl md:text-xl text-gray-700 max-w-2xl mx-auto space-y-3">
            <p>Soy una profesional enfocada en el crecimiento, con base creativa y sólida experiencia en performance digital. Transformo el caos digital en sistemas escalables e inteligentes, combinando estrategia, automatización y medios pagos. Creo campañas más efectivas al fusionar creatividad y tecnología, y entrego soluciones híbridas que integran tráfico pago e innovación no-code.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link to="/es/media-buying">
            <Button 
              size="lg" 
              className="w-full md:w-auto text-lg px-8 py-6 bg-[#8A898C] hover:bg-[#6A696C] text-white"
            >
              <LineChart className="mr-2" />
              Servicios de Medios Pagos
            </Button>
          </Link>
          <Link to="/es/automation-ai">
            <Button 
              size="lg" 
              className="w-full md:w-auto text-lg px-8 py-6 bg-[#8A898C] hover:bg-[#6A696C] text-white"
            >
              <Bot className="mr-2" />
              Servicios de Automatización e IA
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <Button variant="outline" size="lg" className="bg-white hover:bg-[#8A898C] hover:text-white">
            <MessageSquare className="mr-2" />
            WhatsApp
          </Button>
          <Button variant="outline" size="lg" className="bg-white hover:bg-[#8A898C] hover:text-white">
            <Linkedin className="mr-2" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="bg-white hover:bg-[#8A898C] hover:text-white">
            <Mail className="mr-2" />
            Correo
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;

