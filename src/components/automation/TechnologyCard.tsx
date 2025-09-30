
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Technology } from "@/types/automation";

interface TechnologyCardProps {
  tech: Technology;
}

export const TechnologyCard = ({ tech }: TechnologyCardProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center gap-4 mb-3">
          <div className="p-3 bg-primary/10 rounded-2xl text-primary-dark">
            {tech.icon}
          </div>
          <CardTitle className="text-lg md:text-xl">{tech.category}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {tech.tools.map(tool => (
            <span key={tool} className="px-3 py-2 bg-primary/5 border-2 border-primary/20 rounded-full text-sm text-primary-darker font-medium">
              {tool}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TechnologyCard;
