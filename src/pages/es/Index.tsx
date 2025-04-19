import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LineChart, Bot, Linkedin, Mail, MessageSquare } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#1A3554]">
      <div className="max-w-4xl mx-auto text-center space-y-8 bg-white p-12 rounded-xl shadow-lg">
        <div className="mb-12">
          <div className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-[#1A3554] overflow-hidden">
            <img className="w-full h-full object-cover" alt="Ericka Karen" src="/lovable-uploads/17317c2e-5b1b-4d33-8ca6-1d312e53b5f3.png" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#6CAAD9] mb-6">
            Ericka Karen
          </h1>
          <div className="text-xl md:text-xl text-[#1C3454] max-w-2xl mx-auto space-y-3">
            <p>Soy una profesional enfocada en el crecimiento, con base creativa y sólida experiencia en performance digital. Transformo el caos digital en sistemas escalables e inteligentes, combinando estrategia, automatización y medios pagos. Creo campañas más efectivas al fusionar creatividad y tecnología, y entrego soluciones híbridas que integran tráfico pago e innovación no-code.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link to="/es/media-buying">
            <Button size="lg" className="w-full md:w-auto text-lg px-8 py-6 bg-[#6CAAD9] hover:bg-[#6CAAD9] text-white">
              <LineChart className="mr-2" />
              Servicios de Medios Pagos
            </Button>
          </Link>
          <Link to="/es/automation-ai">
            <Button size="lg" className="w-full md:w-auto text-lg px-8 py-6 bg-[#6CAAD9] hover:bg-[#6CAAD9] text-white">
              <Bot className="mr-2" />
              Automatización, IA & Desarrollo No/Low-Code
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mt-12">
          <Button variant="outline" size="lg" className="bg-white hover:bg-[#6CAAD9] hover:text-white border-[#94C1E7] text-[#1A3554]">
            <MessageSquare className="mr-2" />
            WhatsApp
          </Button>
          <Button variant="outline" size="lg" className="bg-white hover:bg-[#6CAAD9] hover:text-white border-[#94C1E7] text-[#1A3554]">
            <Linkedin className="mr-2" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="bg-white hover:bg-[#6CAAD9] hover:text-white border-[#94C1E7] text-[#1A3554]">
            <Mail className="mr-2" />
            Correo
          </Button>
        </div>
      </div>
    </div>;
};
export default Index;