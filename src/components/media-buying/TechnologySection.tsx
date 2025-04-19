
import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Technology {
  category: string;
  tools: string[];
  icon: LucideIcon;
}

interface TechnologySectionProps {
  technologies: Technology[];
}

export const TechnologySection = ({ technologies }: TechnologySectionProps) => {
  return (
    <div className="glass-card p-8 rounded-lg shadow-lg mb-16">
      <h2 className="text-2xl font-bold mb-8 cult-heading">🛠️ Technologies & Tools</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;
          return (
            <Card key={index} className="card">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Icon className="h-6 w-6 text-nerd-accent" />
                  <CardTitle className="text-lg text-white">{tech.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2">
                  {tech.tools.map((tool) => (
                    <span 
                      key={tool}
                      className="px-3 py-1 bg-nerd-accent/10 text-white rounded-full text-sm nerd-border"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};
