
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
  title: "Planejamento e Execução Estratégica de Mídia Paga",
  description: "Campanhas projetadas para tráfego qualificado, geração de leads e crescimento de vendas alinhados aos seus objetivos de negócio únicos."
}, {
  icon: Database,
  title: "Rastreamento e Análise Avançada",
  description: "Integração perfeita do Google Analytics 4, API de Conversão do Meta, Google Tag Manager e tecnologia de rastreamento líder do setor para garantir que cada clique seja contabilizado e otimizado."
}, {
  icon: Settings,
  title: "Automação Impulsionada por Tecnologia",
  description: "Usando ferramentas no-code como n8n, Make (Integromat) e Zapier, automatizo relatórios de campanha, alertas e fluxos de trabalho — economizando seu tempo e aumentando a agilidade."
}, {
  icon: BrainCircuit,
  title: "Otimização Impulsionada por IA",
  description: "Utilizo ferramentas de IA (ChatGPT + Plugins, Langflow, LLMs personalizados) para geração dinâmica de criativos, segmentação de público e gerenciamento preditivo de lances — melhorando continuamente o desempenho das campanhas."
}, {
  icon: Link2,
  title: "Gerenciamento de Campanhas Multicanal",
  description: "Gerenciamento integrado de mídia paga no Meta Ads, Google Ads, TikTok, LinkedIn Ads e Pinterest Ads para maximizar alcance e conversão."
}, {
  icon: LineChart,
  title: "Relatórios Transparentes",
  description: "Dashboards de desempenho semanais com insights acionáveis que destacam o que está funcionando, o que pode ser melhorado e próximos passos claros."
}];

const technologies = [{
  category: "Plataformas de Mídia Paga 🎯",
  tools: ["Meta Ads Manager", "Google Ads (Search, Display, Shopping, YouTube)", "TikTok Ads Manager", "LinkedIn Ads", "Pinterest Ads"],
  icon: Link2
}, {
  category: "Rastreamento e Análise 📊",
  tools: ["Google Analytics 4", "Meta Pixel & Conversion API", "Google Tag Manager", "Hotjar"],
  icon: Code
}, {
  category: "Automação e Integração ⚙️",
  tools: ["n8n", "Make (Integromat)", "Zapier", "Evolution API", "Supabase"],
  icon: Settings
}, {
  category: "IA e Ferramentas Criativas 🤖",
  tools: ["ChatGPT + Plugins", "Langflow", "FlowiseAI", "Relevance AI", "Geradores de Campanhas com IA", "LLMs Personalizados"],
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
          title="🚀 Serviços de Mídia Paga Potencializados por Tecnologia | Crescimento Estratégico através de Dados, IA e Automação"
          subtitle="Transforme seus investimentos em publicidade em motores de crescimento escaláveis e previsíveis"
          description1="Olá! Sou Ericka Karen, uma Estrategista de Mídia Paga que utiliza tecnologia de ponta, automação e IA para transformar seus investimentos em publicidade em motores de crescimento escaláveis e previsíveis."
          description2="Com mais de 5 anos de experiência gerenciando campanhas pagas no Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads e Pinterest Ads, minha expertise está em unir planejamento estratégico de mídia com poderosas soluções tecnológicas — desde rastreamento avançado e atribuição até automação no-code e otimização impulsionada por IA."
        />
        
        <div className="p-4 md:p-6 rounded-lg mb-8 md:mb-12 bg-[#f5f7fa]">
          <p className="text-base md:text-lg text-[#1c3454] mb-4">
            Atendo empresas prontas para escalar através do Meta Ads, Google Ads, TikTok Ads, Pinterest Ads e LinkedIn Ads, implementando soluções que combinam estratégia humana com eficiência de máquina.
          </p>
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">
          🎯 O Que Eu Entrego:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">🎯 Por Que Me Escolher?</h2>
          <ul className="space-y-4 text-[#1c3454]">
            <li className="flex items-start">
              <span className="text-[#6caddf] mr-2">•</span>
              <span>Carreira prática gerenciando campanhas com orçamentos mensais superiores a $500K, entregando crescimento consistente de 3x-4x em receita para clientes.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#6caddf] mr-2">•</span>
              <span>Combinação única de expertise em estratégia de marketing e habilidades técnicas que unem mídia paga com automação e inovação em IA.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#6caddf] mr-2">•</span>
              <span>Capacidade comprovada de reduzir custo por lead e aumentar retorno sobre investimento em anúncios usando dados, tecnologia e otimização contínua.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#6caddf] mr-2">•</span>
              <span>Estilo de comunicação proativo e colaborativo — você sempre saberá o status e os insights das suas campanhas.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#6caddf] mr-2">•</span>
              <span>Experiência atendendo diversas indústrias, adaptando estratégias e stacks tecnológicos para a jornada de crescimento de cada negócio.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">🎯 Tecnologias e Ferramentas que Domino:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">
            🎯 Feedback de Clientes:
          </h2>
          <div className="space-y-6">
            <div className="bg-[#f5f7fa] p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="italic text-[#1c3454]">"Ericka Karen é uma profissional dedicada com forte expertise em mídia paga e vendas através de plataformas de mídia, com foco particular no Google."</p>
              <p className="text-[#6caddf] mt-2">— Henri Tex</p>
            </div>
            
            <div className="bg-[#f5f7fa] p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="italic text-[#1c3454]">"Uma profissional extremamente competente e dedicada. Ela busca ativamente e aplica inovações do mercado em seu trabalho diário."</p>
              <p className="text-[#6caddf] mt-2">— Amanda Carvalho</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-[#1c3454] mb-4">
              Vamos aproveitar o poder da tecnologia e da estratégia de mídia paga para acelerar seu crescimento!
            </p>
            <Link to="/pt/contact">
              <Button className="bg-[#6caddf] hover:bg-[#5a9ac8] text-white font-medium">
                Entre em Contato
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaBuying;
