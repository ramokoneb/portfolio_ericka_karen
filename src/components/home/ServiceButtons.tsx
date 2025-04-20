
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
    <div className="flex flex-col gap-3 md:flex-row md:gap-6 justify-center">
      <Link to={`${basePath}/media-buying`} className="w-full md:w-auto">
        <Button size="lg" className="w-full text-sm md:text-base px-3 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 bg-[#6CAAD9] hover:bg-[#6CAAD9] text-white">
          <LineChart className="mr-2 h-4 w-4 md:h-5 md:w-5" />
          {mediaButtonText}
        </Button>
      </Link>
      <Link to={`${basePath}/automation-ai`} className="w-full md:w-auto">
        <Button size="lg" className="w-full text-sm md:text-base px-3 py-4 md:px-6 md:py-5 lg:px-8 lg:py-6 bg-[#6CAAD9] hover:bg-[#6CAAD9] text-white h-[4.25rem] md:h-auto">
          <Bot className="mr-2 h-4 w-4 md:h-5 md:w-5" />
          {automationButtonText}
        </Button>
      </Link>
    </div>
  );
};

export default ServiceButtons;
