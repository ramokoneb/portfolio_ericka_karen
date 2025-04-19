
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LineChart, Bot, Linkedin, Mail, MessageSquare } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8 bg-[#1A3554]">
      <div className="w-full max-w-4xl mx-auto text-center space-y-6 md:space-y-8 bg-white p-6 md:p-12 rounded-xl shadow-lg">
        <div className="mb-8 md:mb-12">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-full mx-auto mb-6 md:mb-8 border-4 border-[#1A3554] overflow-hidden">
            <img className="w-full h-full object-cover" alt="Ericka Karen" src="/lovable-uploads/a709ce07-b738-408c-baa4-16dc1b191fe0.png" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#6CAAD9] mb-4 md:mb-6">
            Ericka Karen
          </h1>
          <div className="text-base md:text-xl text-[#1C3454] max-w-2xl mx-auto space-y-3">
            <p>I'm a growth-driven professional with a creative edge and solid experience in digital performance. I turn digital chaos into smart, scalable systems by blending strategy, automation, and media. I combine creativity and technology to build smarter campaigns and deliver hybrid solutions that unite paid traffic with no-code innovation.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4 md:flex-row md:gap-6 justify-center">
          <Link to="/en/media-buying" className="w-full md:w-auto">
            <Button size="lg" className="w-full text-base md:text-lg px-4 py-5 md:px-8 md:py-6 bg-[#6CAAD9] hover:bg-[#6CAAD9] text-white">
              <LineChart className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Paid Media Services
            </Button>
          </Link>
          <Link to="/en/automation-ai" className="w-full md:w-auto">
            <Button size="lg" className="w-full text-base md:text-lg px-4 py-5 md:px-8 md:py-6 bg-[#6CAAD9] hover:bg-[#6CAAD9] text-white">
              <Bot className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              Automation, AI & No/Low-Code
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap gap-3 md:gap-4 justify-center mt-8 md:mt-12">
          <Button variant="outline" size="lg" className="bg-white hover:bg-[#6CAAD9] hover:text-white border-[#94C1E7] text-[#1A3554] text-sm md:text-base">
            <MessageSquare className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
          <Button variant="outline" size="lg" className="bg-white hover:bg-[#6CAAD9] hover:text-white border-[#94C1E7] text-[#1A3554] text-sm md:text-base">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
          <Button variant="outline" size="lg" className="bg-white hover:bg-[#6CAAD9] hover:text-white border-[#94C1E7] text-[#1A3554] text-sm md:text-base">
            <Mail className="mr-2 h-4 w-4" />
            Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
