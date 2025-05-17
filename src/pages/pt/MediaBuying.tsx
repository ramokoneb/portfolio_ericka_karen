
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  BrainCircuit, 
  Link2, 
  Database, 
  Settings, 
  BarChart2,
  TrendingUp,
  MessageSquare,
  Settings2
} from "lucide-react";
import { HeroSection } from "@/components/media-buying/HeroSection";
import { ServicesSection } from "@/components/media-buying/ServicesSection";
import { WhyChooseMeSection } from "@/components/media-buying/WhyChooseMeSection";
import { TestimonialsSection } from "@/components/media-buying/TestimonialsSection";
import { ContactSection } from "@/components/media-buying/ContactSection";
import { TechnologyCard } from "@/components/media-buying/TechnologyCard";

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
  icon: BarChart2,
  title: "Relatórios Transparentes",
  description: "Dashboards de desempenho semanais com insights acionáveis que destacam o que está funcionando, o que pode ser melhorado e próximos passos claros."
}];

const whyChooseMe = [{
  icon: TrendingUp,
  title: "Resultados Comprovados",
  description: "Gerenciei orçamentos mensais superiores a $500K com crescimento consistente de 3x-4x em receita para clientes."
}, {
  icon: Settings,
  title: "Combinação Única de Habilidades",
  description: "Mistura de expertise em estratégia de marketing e habilidades técnicas que unem mídia paga com automação e inovação em IA."
}, {
  icon: BarChart2,
  title: "Eficiência de Custo",
  description: "Capacidade comprovada de reduzir custo por lead e aumentar retorno sobre investimento em anúncios usando dados, tecnologia e otimização contínua."
}, {
  icon: MessageSquare,
  title: "Comunicação Clara",
  description: "Estilo de comunicação proativo e colaborativo — você sempre saberá o status e os insights das suas campanhas."
}, {
  icon: Settings2,
  title: "Soluções Personalizadas",
  description: "Experiência atendendo diversas indústrias, adaptando estratégias e stacks tecnológicos para a jornada de crescimento de cada negócio."
}];

const technologies = [{
  category: "Plataformas de Mídia Paga",
  tools: ["Meta Ads Manager", "Google Ads (Search, Display, Shopping, YouTube)", "TikTok Ads Manager", "LinkedIn Ads", "Pinterest Ads"],
  icon: Link2
}, {
  category: "Rastreamento e Análise",
  tools: ["Google Analytics 4", "Meta Pixel & Conversion API", "Google Tag Manager", "Hotjar"],
  icon: Database
}, {
  category: "Automação e Integração",
  tools: ["n8n", "Make (Integromat)", "Zapier", "Evolution API", "Supabase"],
  icon: Settings
}, {
  category: "IA e Ferramentas Criativas",
  tools: ["ChatGPT + Plugins", "Langflow", "FlowiseAI", "Relevance AI", "Geradores de Campanhas com IA", "LLMs Personalizados"],
  icon: BrainCircuit
}, {
  category: "Relatórios",
  tools: ["API Rest", "n8n"],
  icon: BarChart2
}];

const testimonials = [
  {
    text: "Ericka Karen é uma profissional dedicada com forte expertise em mídia paga e vendas através de plataformas de mídia, com foco particular no Google.",
    author: "Henri Tex"
  },
  {
    text: "Uma profissional extremamente competente e proativa. Ela constantemente aplica inovações em seu trabalho diário.",
    author: "Amanda Carvalho"
  }
];

const MediaBuying = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 bg-[#6caddf]/10 text-[#1c3454] hover:bg-[#6caddf]/20 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
          </Button>
        </Link>

        <HeroSection
          title={<>Serviços de Mídia Paga <span className="text-[#6caddf]">Potencializados por Tecnologia</span></>}
          subtitle="Crescimento Estratégico através de Dados, IA e Automação"
          description1="Utilizando tecnologia de ponta, automação e IA, este framework de estratégia de mídia paga transforma investimentos em publicidade em motores de crescimento escaláveis e previsíveis."
          description2="Apoiado por mais de 5 anos de experiência prática em Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads e Pinterest Ads, combina planejamento estratégico de mídia com soluções tecnológicas avançadas para impulsionar performance e eficiência."
          ctaText="Vamos Trabalhar Juntos"
          contactPath="/pt/contact"
        />
        
        <ServicesSection 
          title="O Que Eu Entrego"
          services={mainServices}
        />
        
        <WhyChooseMeSection
          title="Por Que Me Escolher?"
          items={whyChooseMe}
        />
        
        <div className="mb-16 lg:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454] flex items-center">
            <span className="text-[#6caddf] mr-2">🎯</span> Tecnologias que Domino
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </div>
        
        <TestimonialsSection
          title="Feedback de Clientes"
          testimonials={testimonials}
        />
        
        <ContactSection
          title="Vamos Escalar Seu Negócio"
          description="Pronto para desbloquear o poder da IA, automação e estratégia de mídia paga? Vamos construir sua próxima campanha de alta performance."
          buttonText="Entre em Contato"
          contactPath="/pt/contact"
        />
      </div>
    </div>
  );
};

export default MediaBuying;
