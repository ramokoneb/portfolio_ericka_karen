
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LineChart, Bot } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-100 to-white">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="mb-12">
          {/* Replace with your professional photo */}
          <div className="w-48 h-48 rounded-full mx-auto mb-8 bg-purple-200 border-4 border-purple-300">
            {/* Add your photo here using the img tag */}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-500 mb-6">
            Seu Nome
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Especialista em transformação digital, combinando estratégias de mídia paga com soluções 
            inteligentes de automação e IA para impulsionar resultados excepcionais.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link to="/media-buying">
            <Button 
              size="lg" 
              className="w-full md:w-auto text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700"
            >
              <LineChart className="mr-2" />
              Media Buying
            </Button>
          </Link>
          <Link to="/automation-ai">
            <Button 
              size="lg" 
              className="w-full md:w-auto text-lg px-8 py-6 bg-purple-600 hover:bg-purple-700"
            >
              <Bot className="mr-2" />
              Automation & AI
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
