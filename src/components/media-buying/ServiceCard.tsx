
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon: Icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden bg-white">
      <CardHeader className="pb-2 border-b border-gray-100">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-full bg-[#6caddf]/10 flex items-center justify-center">
            <Icon className="h-5 w-5 text-[#6caddf]" />
          </div>
          <CardTitle className="text-lg text-[#1c3454]">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <CardDescription className="text-sm text-[#1c3454]/80">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};
