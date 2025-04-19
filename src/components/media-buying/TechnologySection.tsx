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
export const TechnologySection = ({
  technologies
}: TechnologySectionProps) => {
  return <div className="glass-card p-8 rounded-lg shadow-sm mb-16 bg-[1C3454] bg-gray-50">
      <h2 className="section-title text-[1c3454]">🧩 Technologies &amp; Tools I Use</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {technologies.map((tech, index) => {
        const Icon = tech.icon;
        return <Card key={index} className="card-base">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2 bg-gray-50">
                  <Icon className="h-6 w-6 text-primary" />
                  <CardTitle className="text-lg text-[#1c3454]">{tech.category}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col space-y-2">
                  {tech.tools.map(tool => <span key={tool} className="px-3 py-1 bg-primary-light/10 rounded-full text-sm border border-primary-light/20 text-[#6da9d9]">
                      {tool}
                    </span>)}
                </div>
              </CardContent>
            </Card>;
      })}
      </div>
    </div>;
};