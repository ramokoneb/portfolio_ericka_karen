
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainService } from "@/types/automation";
import { motion } from "framer-motion";

interface ServiceCardProps {
  service: MainService;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-black h-full">
      <CardHeader className="px-4 pt-5 pb-2 md:px-6 md:pt-6 md:pb-3">
        <div className="mb-3 text-[#6CAAD9]">
          {service.icon}
        </div>
        <CardTitle className="text-lg md:text-xl text-[#1c3454]">{service.title}</CardTitle>
      </CardHeader>
      <CardContent className="px-4 pb-5 md:px-6 md:pb-6">
        <CardDescription className="text-base text-[#1c3454] opacity-80 leading-relaxed">
          {service.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
