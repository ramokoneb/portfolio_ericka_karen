
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface TechnologyCardProps {
  tech: {
    category: string;
    tools: string[];
    icon: LucideIcon;
  };
}

export const TechnologyCard = ({ tech }: TechnologyCardProps) => {
  const Icon = tech.icon;
  
  return (
    <Card className="card-base">
      <CardHeader>
        <div className="mb-2">
          <Icon className="h-10 w-10 text-[#6CADDF]" />
        </div>
        <CardTitle className="text-[#1c3454]">{tech.category}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {tech.tools.map((tool, index) => (
            <li key={index} className="text-[#6CADDF]">
              {tool}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
