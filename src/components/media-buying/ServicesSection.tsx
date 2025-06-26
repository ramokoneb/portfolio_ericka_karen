
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
    <section className="max-w-6xl mx-auto mb-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
          {title}
        </h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
};
