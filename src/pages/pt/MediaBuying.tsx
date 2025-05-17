
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  MessageSquare, 
  Code, 
  BrainCircuit, 
  Link2, 
  Database, 
  Settings, 
  Smartphone,
  Target,
  LineChart
} from "lucide-react";
import { ServiceCard } from "@/components/media-buying/ServiceCard";
import { TechnologyCard } from "@/components/media-buying/TechnologyCard";
import { HeroSection } from "@/components/media-buying/HeroSection";

const mainServices = [{
  icon: BrainCircuit,
  title: "Inteligência & Estratégia de Negócio",
  description: "Desenvolvimento de estratégias de mídia alinhadas com objetivos de negócio, focadas em resultados escaláveis e sustentáveis."
}, {
  icon: Link2,
  title: "Planejamento Avançado de Mídia",
  description: "Planejamento estratégico de campanhas pagas com foco em tráfego qualificado, otimização de conversão e ROI positivo."
}, {
  icon: Database,
  title: "Rastreamento & Análise Avançada",
  description: "Implementação de soluções avançadas de tracking, integração de API de conversão e sistemas de otimização baseados em dados."
}, {
  icon: Smartphone,
  title: "Inteligência Artificial Aplicada",
  description: "Uso de IA para otimizar entrega de campanhas, segmentação, criativos dinâmicos e prever padrões de comportamento."
}];

const technologies = [{
  category: "Tecnologias & Ferramentas 🎯",
  tools: ["Meta Ads Manager", "Google Ads", "TikTok Ads Manager", "Pinterest Ads", "LinkedIn Ads", "Google Merchant Center"],
  icon: Link2
}, {
  category: "Tecnologias & Ferramentas 📊",
  tools: ["Google Analytics (GA4)", "Google Tag Manager", "Meta Pixel & Conversion API (CAPI)", "Meta Events Manager", "Hotjar", "Looker Studio / Data Studio", "Supermetrics", "UTMs, ctwaclid, fbclid, gclid"],
  icon: Code
}, {
  category: "Tecnologias & Ferramentas ⚙️",
  tools: ["n8n", "Make (Integromat)", "Zapier", "Evolution API", "Supabase"],
  icon: Settings
}, {
  category: "Tecnologias & Ferramentas 🤖",
  tools: ["ChatGPT + Plugins", "Langflow / FlowiseAI", "Relevance AI", "AI Campaign Generators", "Custom LLMs for scoring and optimization"],
  icon: BrainCircuit
}];

const MediaBuying = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/pt">
          <Button variant="ghost" className="mb-4 md:mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
          </Button>
        </Link>

        <HeroSection 
          title="🚀 Serviços de Mídia Paga & Performance Estratégica"
          subtitle="Campanhas orientadas por dados, inteligência de performance e rastreamento avançado para escalar seus resultados."
          description1="Transforme seus investimentos em mídia paga em motores de crescimento previsíveis e escaláveis. Combino inteligência estratégica com sistemas avançados de tracking para garantir que cada campanha gere impacto mensurável."
          description2="Minha abordagem integra estratégia de negócio, dados de performance e inteligência artificial — entregando campanhas que consistentemente alcançam ROI positivo."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
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
            📈 Casos de Sucesso
          </h2>
          <div className="text-center mb-8">
            <Link to="/pt/cases/media-buying">
              <Button className="bg-[#6caddf] hover:bg-[#5a9ac8] text-white font-medium">
                Ver Todos os Estudos de Caso
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaBuying;
