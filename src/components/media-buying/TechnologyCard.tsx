
import React from "react";
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface TechnologyCardProps {
  tech: {
    category: string;
    tools: string[];
    icon: LucideIcon;
  };
}

export const TechnologyCard: React.FC<TechnologyCardProps> = ({ tech }) => {
  return (
    <Card className="border border-[#94C1E7]/30 shadow-sm hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-2">
        <div className="h-10 w-10 rounded-full bg-[#6caddf]/10 flex items-center justify-center mb-2">
          <tech.icon className="h-5 w-5 text-[#6caddf]" />
        </div>
        <CardTitle className="text-lg text-[#1c3454]">{tech.category}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="flex flex-wrap gap-2">
          {tech.tools.map((tool, index) => (
            <Badge key={index} variant="secondary" className="bg-[#f5f7fa] text-[#1c3454] hover:bg-[#e5e7ea]">
              {tool}
            </Badge>
          ))}
        </CardDescription>
      </CardContent>
    </Card>
  );
};
