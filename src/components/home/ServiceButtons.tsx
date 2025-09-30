
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
      <Link to={`${basePath}/media-buying`} className="flex-1">
        <Button 
          size="lg" 
          className="w-full flex items-center justify-center gap-2 whitespace-normal text-center"
          aria-label="Media Buying Services"
        >
          <LineChart className="shrink-0 h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
          <span className="text-sm md:text-base">{mediaButtonText}</span>
        </Button>
      </Link>
      <Link to={`${basePath}/automation-ai`} className="flex-1">
        <Button 
          variant="outline"
          size="lg" 
          className="w-full flex items-center justify-center gap-2 whitespace-normal text-center"
          aria-label="Automation and AI Services"
        >
          <Bot className="shrink-0 h-5 w-5 md:h-6 md:w-6" aria-hidden="true" />
          <span className="text-sm md:text-base">{automationButtonText}</span>
        </Button>
      </Link>
    </div>
  );
};

export default ServiceButtons;
