
import React from "react";
import { ServiceCard } from "@/components/media-buying/ServiceCard";
import { LucideIcon } from "lucide-react";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ServicesSectionProps {
  title: string;
  services: Service[];
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ 
  title, 
  services 
}) => {
  return (
    <div className="mb-16 lg:mb-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454]">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
    </div>
  );
};
