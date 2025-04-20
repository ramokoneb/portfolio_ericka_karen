
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Technology } from "@/types/automation";

interface TechnologyCardProps {
  tech: Technology;
}

export const TechnologyCard = ({ tech }: TechnologyCardProps) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center gap-2 mb-2">
          {tech.icon}
          <CardTitle className="text-base md:text-lg text-[#1c3454]">{tech.category}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tech.tools.map(tool => (
            <span key={tool} className="px-2 py-1 md:px-3 md:py-1 bg-gray-100 rounded-full text-xs md:text-sm text-[#6caddf]">
              {tool}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
