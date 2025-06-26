
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LineChart, Bot } from "lucide-react";

interface ServiceButtonsProps {
  basePath: string;
  mediaButtonText: string;
  automationButtonText: string;
}

const ServiceButtons = ({ basePath, mediaButtonText, automationButtonText }: ServiceButtonsProps) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:gap-6 justify-center max-w-2xl mx-auto">
      <Link to={`${basePath}/media-buying`} className="w-full">
        <Button 
          size="lg" 
          className="w-full min-h-[56px] md:min-h-[64px] text-base md:text-lg px-8 py-4 bg-[#3182CE] hover:bg-[#2C5282] text-white flex items-center justify-center whitespace-normal text-center rounded-xl shadow-sm transition-all duration-200 hover:shadow-md font-medium"
          aria-label="Media Buying Services"
        >
          <LineChart className="shrink-0 mr-3 h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
          {mediaButtonText}
        </Button>
      </Link>
      <Link to={`${basePath}/automation-ai`} className="w-full">
        <Button 
          size="lg" 
          className="w-full min-h-[56px] md:min-h-[64px] text-base md:text-lg px-8 py-4 bg-white hover:bg-[#3182CE] text-[#3182CE] hover:text-white border border-[#3182CE] flex items-center justify-center whitespace-normal text-center rounded-xl shadow-sm transition-all duration-200 hover:shadow-md font-medium"
          aria-label="Automation and AI Services"
        >
          <Bot className="shrink-0 mr-3 h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
          {automationButtonText}
        </Button>
      </Link>
    </div>
  );
};

export default ServiceButtons;
