import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  ArrowRight,
  BrainCircuit, 
  Link2, 
  Database, 
  Settings, 
  BarChart2,
  TrendingUp,
  MessageSquare,
  Settings2
} from "lucide-react";
import SocialLinks from "@/components/home/SocialLinks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

const MediaBuying = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 bg-[#6caddf]/10 text-[#1c3454] hover:bg-[#6caddf]/20 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="mb-16 lg:mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#1c3454] leading-tight">
            Serviços de Mídia Paga <span className="text-[#6caddf]">Potencializados por Tecnologia</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-[#1c3454]/80 font-light">
            Crescimento Estratégico através de Dados, IA e Automação
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#6caddf]/10 backdrop-blur-sm rounded-xl p-6 border border-[#6caddf]/30">
              <p className="text-base md:text-lg text-[#1c3454] mb-4">
                Utilizando tecnologia de ponta, automação e IA, este framework de estratégia de mídia paga transforma investimentos em publicidade em motores de crescimento escaláveis e previsíveis.
              </p>
              <p className="text-base md:text-lg text-[#1c3454]">
                Apoiado por mais de 5 anos de experiência prática em Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads e Pinterest Ads, combina planejamento estratégico de mídia com soluções tecnológicas avançadas para impulsionar performance e eficiência.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
                <p className="text-[#1c3454] font-medium">
                  Atendo empresas prontas para escalar através do Meta Ads, Google Ads, TikTok Ads, Pinterest Ads e LinkedIn Ads, implementando soluções que combinam estratégia humana com eficiência de máquina.
                </p>
              </div>
              <Link to="/pt/contact" className="self-start">
                <Button className="bg-[#6caddf] hover:bg-[#5a9ac8] text-white font-medium group">
                  Vamos Trabalhar Juntos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* What I Deliver Section */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454] flex items-center">
            <span className="text-[#6caddf] mr-2">🎯</span> O Que Eu Entrego
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
        
        {/* Why Choose Me Section */}
        <div className="mb-16 lg:mb-20 bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454] flex items-center">
            <span className="text-[#6caddf] mr-2">🎯</span> Por Que Me Escolher?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {whyChooseMe.map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-2">
                  <div className="h-10 w-10 rounded-full bg-[#6caddf]/10 flex items-center justify-center mb-2">
                    <item.icon className="h-5 w-5 text-[#6caddf]" />
                  </div>
                  <CardTitle className="text-lg text-[#1c3454]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-[#1c3454]/80">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Tech Stack Section */}
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
        
        {/* Testimonials Section */}
        <div className="mb-16 lg:mb-20 bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454] flex items-center">
            <span className="text-[#6caddf] mr-2">🎯</span> Feedback de Clientes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f5f7fa] rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="italic text-[#1c3454] mb-4">
                "Ericka Karen é uma profissional dedicada com forte expertise em mídia paga e vendas através de plataformas de mídia, com foco particular no Google."
              </p>
              <p className="text-[#6caddf] font-medium">— Henri Tex</p>
            </div>
            
            <div className="bg-[#f5f7fa] rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="italic text-[#1c3454] mb-4">
                "Uma profissional extremamente competente e proativa. Ela constantemente aplica inovações em seu trabalho diário."
              </p>
              <p className="text-[#6caddf] font-medium">— Amanda Carvalho</p>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="rounded-xl bg-gradient-to-r from-[#1c3454] to-[#264b73] p-6 md:p-8 lg:p-10 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Vamos Escalar Seu Negócio</h2>
          
          <p className="text-white/90 mb-6 max-w-3xl">
            Pronto para desbloquear o poder da IA, automação e estratégia de mídia paga? Vamos construir sua próxima campanha de alta performance.
          </p>
          
          <div className="mb-4">
            <SocialLinks 
              whatsappText="WhatsApp" 
              linkedinText="LinkedIn" 
              emailText="Email" 
            />
          </div>
          
          <div className="mt-8 md:mt-10">
            <Link to="/pt/contact">
              <Button className="bg-white hover:bg-gray-100 text-[#1c3454] font-medium group">
                Entre em Contato
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaBuying;
