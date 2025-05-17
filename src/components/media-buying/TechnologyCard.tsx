
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface Technology {
  category: string;
  tools: string[];
  icon: LucideIcon;
}

interface TechnologyCardProps {
  tech: Technology;
}

export const TechnologyCard = ({ tech }: TechnologyCardProps) => {
  const { category, tools, icon: Icon } = tech;
  
  return (
    <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-white h-full">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-10 w-10 rounded-full bg-[#6caddf]/10 flex items-center justify-center">
            <Icon className="h-5 w-5 text-[#6caddf]" />
          </div>
          <CardTitle className="text-lg text-[#1c3454]">{category}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-1">
          {tools.map((tool, index) => (
            <li key={index} className="text-sm text-[#1c3454]/80 flex items-center">
              <span className="text-[#6caddf] mr-2">•</span>
              <span>{tool}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
