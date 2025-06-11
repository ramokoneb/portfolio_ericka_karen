
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Technology } from "@/types/automation";

interface TechnologyCardProps {
  tech: Technology;
}

export const TechnologyCard = ({ tech }: TechnologyCardProps) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader className="px-4 pt-5 pb-2 md:px-6 md:pt-6 md:pb-3">
        <div className="flex items-center gap-3 mb-2">
          <div className="text-[#34AEEF]">
            {tech.icon}
          </div>
          <CardTitle className="text-base md:text-lg text-[#1c3454]">{tech.category}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-4 pb-5 md:px-6 md:pb-6">
        <div className="flex flex-wrap gap-2">
          {tech.tools.map(tool => (
            <span key={tool} className="px-3 py-1.5 bg-[#34AEEF]/10 rounded-full text-sm text-[#1c3454]">
              {tool}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechnologyCard;
