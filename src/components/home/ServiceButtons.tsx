
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
    <div className="flex flex-col gap-4 md:flex-row md:gap-6 justify-center">
      <Link to={`${basePath}/media-buying`} className="w-full md:w-[300px]">
        <Button 
          size="lg" 
          className="w-full min-h-[56px] md:min-h-[64px] text-sm md:text-base px-4 py-3 md:px-5 lg:px-6 bg-[#34AEEF] hover:bg-[#5a9bcd] text-white flex items-center justify-center whitespace-normal text-center rounded-md shadow-sm"
          aria-label="Media Buying Services"
        >
          <LineChart className="shrink-0 mr-2 h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
          {mediaButtonText}
        </Button>
      </Link>
      <Link to={`${basePath}/automation-ai`} className="w-full md:w-[300px]">
        <Button 
          size="lg" 
          className="w-full min-h-[56px] md:min-h-[64px] text-sm md:text-base px-4 py-3 md:px-5 lg:px-6 bg-[#34AEEF] hover:bg-[#5a9bcd] text-white flex items-center justify-center whitespace-normal text-center rounded-md shadow-sm"
          aria-label="Automation and AI Services"
        >
          <Bot className="shrink-0 mr-2 h-4 w-4 md:h-5 md:w-5" aria-hidden="true" />
          {automationButtonText}
        </Button>
      </Link>
    </div>
  );
};

export default ServiceButtons;
