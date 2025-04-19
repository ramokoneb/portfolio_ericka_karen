
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="card hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="mb-2">
          <Icon className="h-10 w-10 text-nerd-accent" />
        </div>
        <CardTitle className="text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base text-gray-300">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
