
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LineChart, Bot } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-[#D3E4FD] via-white to-[#FFDEE2]">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="mb-12">
          {/* Replace with your professional photo */}
          <div className="w-48 h-48 rounded-full mx-auto mb-8 bg-[#FFDEE2] border-4 border-[#D3E4FD]">
            {/* Add your photo here using the img tag */}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D3E4FD] to-[#FFDEE2] mb-6">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto">
            Digital transformation specialist, combining paid media strategies with 
            intelligent automation and AI solutions to drive exceptional results.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link to="/media-buying">
            <Button 
              size="lg" 
              className="w-full md:w-auto text-lg px-8 py-6 bg-[#D3E4FD] hover:bg-[#FFDEE2] text-gray-700"
            >
              <LineChart className="mr-2" />
              Media Buying
            </Button>
          </Link>
          <Link to="/automation-ai">
            <Button 
              size="lg" 
              className="w-full md:w-auto text-lg px-8 py-6 bg-[#FFDEE2] hover:bg-[#D3E4FD] text-gray-700"
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
