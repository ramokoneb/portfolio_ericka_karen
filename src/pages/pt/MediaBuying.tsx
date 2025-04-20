import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Code, BrainCircuit, Link2, Database, Settings, Smartphone } from "lucide-react";
import { ServiceCard } from "@/components/media-buying/ServiceCard";
import { TechnologySection } from "@/components/media-buying/TechnologySection";
import { PortfolioSection } from "@/components/media-buying/PortfolioSection";
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

const portfolioItems = [{
  title: "Loja Virtual Febracis — Da Crise ao Crescimento Exponencial",
  description: "Após 6 meses de prejuízo em mídia paga, implementou-se abordagens estratégicas alcançando R$77.000 em faturamento mensal (267% de crescimento) com ROAS de 963% usando Meta Ads e Google Ads.",
  image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
  tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
}, {
  title: "Urban Effort — Do Zero ao Breakeven em 3 Meses",
  description: "Marca americana de bonés que vendia apenas na Amazon criou canal próprio de vendas atingindo breakeven em menos de 90 dias com +291% de crescimento no faturamento através de campanhas estratégicas.",
  image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
  tags: ["Meta Ads", "Google Ads", "E-commerce"]
}, {
  title: "Borogodó Brasil — Reviravolta no Faturamento em 30 Dias",
  description: "Após queda drástica nas vendas, estratégias focadas em Meta Ads alcançaram +36% em visitas únicas, +24% em vendas, +40% em receita e +13% em ticket médio em apenas um mês.",
  image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
  tags: ["Meta Ads", "E-commerce", "Faturamento"]
}, {
  title: "Vamos — +50% nas Vendas com Aquisição Inteligente",
  description: "Empresa de aluguel de veículos pesados escalou sua base de clientes com segmentação geográfica e demográfica direcionada, alcançando +50% nas vendas em um único mês.",
  image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
  tags: ["Meta Ads", "Geração de Leads", "Vendas"]
}, {
  title: "Unileão — Redução de 118% no CPL com Performance Max",
  description: "Instituição educacional otimizou captação de leads com campanhas Performance Max, alcançando 118% de redução no custo por lead e ROI positivo já no primeiro mês.",
  image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
  tags: ["Google Ads", "Educação", "Performance Max"]
}, {
  title: "Rastreamento Inteligente no WhatsApp — +462% em Conversas",
  description: "Implementação de rastreamento via ctwaclid nas campanhas de Meta Ads levou a um aumento de +462,16% nas conversas iniciadas e redução de 81,34% no custo por mensagem enviada em apenas uma semana.",
  image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
  tags: ["Meta Ads", "WhatsApp", "Rastreamento"]
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
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">📁 Portfólio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaBuying;
