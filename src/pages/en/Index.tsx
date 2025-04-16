
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
            <p>I'm a growth-driven professional with a creative edge and solid experience in digital performance. I turn digital chaos into smart, scalable systems by blending strategy, automation, and media. I combine creativity and technology to build smarter campaigns and deliver hybrid solutions that unite paid traffic with no-code innovation.</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <Link to="/en/media-buying">
            <Button 
              size="lg" 
              className="w-full md:w-auto text-lg px-8 py-6 bg-[#8A898C] hover:bg-[#6A696C] text-white"
            >
              <LineChart className="mr-2" />
              Paid Media Services
            </Button>
          </Link>
          <Link to="/en/automation-ai">
            <Button 
              size="lg" 
              className="w-full md:w-auto text-lg px-8 py-6 bg-[#8A898C] hover:bg-[#6A696C] text-white"
            >
              <Bot className="mr-2" />
              Automation & AI Services
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
            Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
