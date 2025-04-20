
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MainService } from "@/types/automation";

interface ServiceCardProps {
  service: MainService;
}

export const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-black">
      <CardHeader>
        <div className="mb-2">
          {service.icon}
        </div>
        <CardTitle className="text-[#1c3454]">{service.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm md:text-base text-[#6caddf]">{service.description}</CardDescription>
      </CardContent>
    </Card>
  );
};
