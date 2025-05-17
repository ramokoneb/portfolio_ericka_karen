
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Code, BrainCircuit, Link2, Database, Settings, Smartphone } from "lucide-react";
import { ServiceCard } from "@/components/automation/ServiceCard";
import { TechnologyCard } from "@/components/automation/TechnologyCard";
import { MainService, Technology } from "@/types/automation";

const technologies: Technology[] = [
  {
    category: "Automação & Integração",
    tools: ["n8n", "Make", "Zapier"],
    icon: <Settings className="h-6 w-6" />
  }, {
    category: "Web & Mobile App Builders",
    tools: ["Bubble", "FlutterFlow", "Lovable"],
    icon: <Smartphone className="h-6 w-6" />
  }, {
    category: "IA & Lógica Inteligente",
    tools: ["ChatGPT + Plugins", "FlowiseAI", "Relevance AI", "Langflow"],
    icon: <BrainCircuit className="h-6 w-6" />
  }, {
    category: "Bancos de Dados & Backends No-Code",
    tools: ["Airtable", "Baserow", "NocoDB", "Xano", "Supabase", "Firebase"],
    icon: <Database className="h-6 w-6" />
  }
];

const mainServices: MainService[] = [{
  icon: <BrainCircuit className="h-8 w-8 md:h-10 md:w-10 text-[#8A898C]" />,
  title: "IA & Automação Inteligente",
  description: "Implemente sistemas inteligentes que melhoram a tomada de decisão, otimizam campanhas e potencializam seus fluxos de trabalho com inteligência."
}, {
  icon: <MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-[#8A898C]" />,
  title: "Automação de WhatsApp",
  description: "Fluxos de mensagens automatizados para atendimento ao cliente, vendas e qualificação de leads usando WhatsApp e APIs conectadas."
}, {
  icon: <Link2 className="h-8 w-8 md:h-10 md:w-10 text-[#8A898C]" />,
  title: "CRM & Integrações de Marketing",
  description: "Automação perfeita entre plataformas de marketing, CRMs e canais de comunicação."
}, {
  icon: <Code className="h-8 w-8 md:h-10 md:w-10 text-[#8A898C]" />,
  title: "Desenvolvimento No-Code & Automação de Workflows",
  description: "Crie aplicativos web, dashboards, automações e sistemas completos usando plataformas intuitivas."
}];

const AutomationAI = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/pt">
          <Button variant="ghost" className="mb-4 md:mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
          </Button>
        </Link>
        
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-[#1c3454]">
          🚀 Automação, IA e Desenvolvimento No/Low-Code
        </h1>
        <p className="text-lg md:text-xl mb-4 md:mb-6 text-[#6caddf]">
          Sistemas inteligentes para automatizar, escalar e inovar suas operações digitais.
        </p>
        
        <div className="p-4 md:p-6 rounded-lg mb-8 md:mb-12 bg-[#6caddf]">
          <p className="text-base md:text-lg text-1C3454 mb-3 md:mb-4 text-[#1c3454]">
            Transforme rotinas empresariais em motores de alto desempenho usando automação, inteligência artificial e plataformas no-code. Crio soluções que reduzem trabalho manual, melhoram a tomada de decisão e conectam ferramentas para tornar sua estratégia digital verdadeiramente escalável.
          </p>
          <p className="text-base md:text-lg text-[#1c3454]">
            Minha abordagem combina mentalidade de engenharia, inteligência empresarial e plataformas amigáveis — permitindo que você escale sem aumentar a complexidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">🧩 Tecnologias que Utilizo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">
            📁 Portfólio
          </h2>
          <div className="text-center mb-8">
            <Link to="/pt/portfolio/automation-ai">
              <Button className="bg-[#6caddf] hover:bg-[#5a9ac8] text-white font-medium">
                Ver Todos os Projetos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationAI;
