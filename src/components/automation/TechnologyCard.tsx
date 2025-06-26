
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Technology } from "@/types/automation";

interface TechnologyCardProps {
  tech: Technology;
}

export const TechnologyCard = ({ tech }: TechnologyCardProps) => {
  return (
    <Card className="border border-[#E2E8F0] shadow-sm hover:shadow-md transition-all duration-300 h-full bg-white">
      <CardHeader className="px-6 pt-6 pb-4">
        <div className="flex items-center gap-4 mb-3">
          <div className="p-3 bg-[#3182CE]/10 rounded-xl text-[#3182CE]">
            {tech.icon}
          </div>
          <CardTitle className="text-lg md:text-xl text-[#1A202C] font-semibold">{tech.category}</CardTitle>
        </div>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <div className="flex flex-wrap gap-2">
          {tech.tools.map(tool => (
            <span key={tool} className="px-3 py-2 bg-[#F7FAFC] border border-[#E2E8F0] rounded-lg text-sm text-[#4A5568] font-medium">
              {tool}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechnologyCard;
