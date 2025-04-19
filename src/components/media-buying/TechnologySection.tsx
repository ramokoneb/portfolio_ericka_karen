
import { LucideIcon, Settings, Smartphone, Database, BrainCircuit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
  // Group technologies by type (we'll show them in specific sections)
  const getTechByType = (type: string) => {
    return technologies.find(tech => tech.category.includes(type))?.tools || [];
  };

  const automationTools = getTechByType("⚙️");
  const databaseTools = getTechByType("📊");
  const aiTools = getTechByType("🤖");
  const targetTools = getTechByType("🎯");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-2xl">🧩</span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A3554]">
          {technologies[0]?.category.split("🎯")[0] || "Technologies I Use"}
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Automation & Integration Section */}
        <Card className="p-6 shadow-lg rounded-xl border-none bg-white">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-6 h-6" />
            <h3 className="text-xl font-semibold text-[#1A3554]">
              Automação & Integração
            </h3>
          </div>
          <CardContent className="p-0 flex flex-wrap gap-2">
            {automationTools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </CardContent>
        </Card>

        {/* Web & Mobile Builders Section */}
        <Card className="p-6 shadow-lg rounded-xl border-none bg-white">
          <div className="flex items-center gap-3 mb-6">
            <Smartphone className="w-6 h-6" />
            <h3 className="text-xl font-semibold text-[#1A3554]">
              Web & Mobile App Builders
            </h3>
          </div>
          <CardContent className="p-0 flex flex-wrap gap-2">
            {targetTools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </CardContent>
        </Card>

        {/* AI & Intelligent Logic Section */}
        <Card className="p-6 shadow-lg rounded-xl border-none bg-white">
          <div className="flex items-center gap-3 mb-6">
            <BrainCircuit className="w-6 h-6" />
            <h3 className="text-xl font-semibold text-[#1A3554]">
              IA & Lógica Inteligente
            </h3>
          </div>
          <CardContent className="p-0 flex flex-wrap gap-2">
            {aiTools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </CardContent>
        </Card>

        {/* Databases & No-Code Backends Section */}
        <Card className="p-6 shadow-lg rounded-xl border-none bg-white">
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-6 h-6" />
            <h3 className="text-xl font-semibold text-[#1A3554]">
              Bancos de Dados & Backends No-Code
            </h3>
          </div>
          <CardContent className="p-0 flex flex-wrap gap-2">
            {databaseTools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 bg-gray-50 text-gray-600 rounded-full text-sm"
              >
                {tool}
              </span>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
