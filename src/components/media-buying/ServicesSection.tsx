
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
    <section className="max-w-6xl mx-auto mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-primary-darker mb-8 text-center">
        {title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
        ))}
      </div>
    </section>
  );
};
