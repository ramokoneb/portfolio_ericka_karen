
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="card-base">
      <CardHeader>
        <div className="mb-2">
          <Icon className="h-10 w-10 text-[#6CAAD9]" />
        </div>
        <CardTitle className="text-[#1A3554]">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-[#6CADDE]">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
