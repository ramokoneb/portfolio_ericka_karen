
import { LucideIcon, Settings, Target, Database, BrainCircuit } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Technology {
  category: string;
  tools: string[];
  icon: LucideIcon;
}

interface TechnologySectionProps {
  technologies: Technology[];
  language?: "en" | "pt" | "es";
}

export const TechnologySection = ({
  technologies,
  language = "en"
}: TechnologySectionProps) => {
  // Group technologies by type (we'll show them in specific sections)
  const getTechByType = (type: string) => {
    return technologies.find(tech => tech.category.includes(type))?.tools || [];
  };

  const automationTools = getTechByType("⚙️");
  const databaseTools = getTechByType("📊");
  const aiTools = getTechByType("🤖");
  const adPlatformTools = getTechByType("🎯");

  // Translation mapping
  const translations = {
    title: {
      en: "Technologies I Use",
      pt: "Tecnologias que Utilizo",
      es: "Tecnologías que Utilizo"
    },
    automation: {
      en: "Automation & Integration",
      pt: "Automação & Integração",
      es: "Automatización & Integración"
    },
    adsPlataforms: {
      en: "Ads Platforms",
      pt: "Plataformas de Anúncios",
      es: "Plataformas de Anuncios"
    },
    ai: {
      en: "AI & Intelligent Logic",
      pt: "IA & Lógica Inteligente",
      es: "IA & Lógica Inteligente" 
    },
    analytics: {
      en: "Analytics & Tracking",
      pt: "Analytics & Rastreamento",
      es: "Analytics & Seguimiento"
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center gap-3 mb-8">
        <span className="text-2xl">🧩</span>
        <h2 className="text-2xl md:text-3xl font-bold text-[#1A3554]">
          {translations.title[language]}
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Automation & Integration Section */}
        <Card className="p-6 shadow-lg rounded-xl border-none bg-white">
          <div className="flex items-center gap-3 mb-6">
            <Settings className="w-6 h-6" />
            <h3 className="text-xl font-semibold text-[#1A3554]">
              {translations.automation[language]}
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

        {/* Ads Platforms Section */}
        <Card className="p-6 shadow-lg rounded-xl border-none bg-white">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6" />
            <h3 className="text-xl font-semibold text-[#1A3554]">
              {translations.adsPlataforms[language]}
            </h3>
          </div>
          <CardContent className="p-0 flex flex-wrap gap-2">
            {adPlatformTools.map((tool) => (
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
              {translations.ai[language]}
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

        {/* Analytics & Tracking Section */}
        <Card className="p-6 shadow-lg rounded-xl border-none bg-white">
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-6 h-6" />
            <h3 className="text-xl font-semibold text-[#1A3554]">
              {translations.analytics[language]}
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
