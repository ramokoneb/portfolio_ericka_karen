import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, MessageSquare, Database, Settings, Layers3, Code, BrainCircuit, Link2, Smartphone, QrCode, FileCode, BarChart2, MessagesSquare, Target } from "lucide-react";
const portfolioItems = [{
  title: "💼 WhatsApp Automation – +80% de demandas automatizadas",
  description: "Solução de automação desenvolvida para atendimento via WhatsApp, com chatbot inteligente capaz de lidar com 80% das perguntas frequentes. Redução de 95% no tempo de resposta e aumento na satisfação do atendimento.",
  image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
  tags: ["WhatsApp API", "n8n", "NLP", "Chatbot"],
  tech: "WhatsApp API • n8n • NLP • Lógica condicional",
  goal: "Atendimento automatizado e escalável",
  highlight: "Redução drástica na necessidade de atendimento humano"
}, {
  title: "🧠 AI Lead Scoring System – +65% de eficiência no time comercial",
  description: "Sistema de pontuação de leads baseado em machine learning, treinado com padrões de comportamento de usuários reais. Melhorou a eficiência do time de vendas em 65%, priorizando leads com maior chance de conversão.",
  image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
  tags: ["n8n", "Supabase", "Machine Learning", "LLMs"],
  tech: "n8n • Supabase • LLMs personalizados",
  goal: "Qualificação automática de leads",
  highlight: "Inteligência aplicada à jornada de compra"
}, {
  title: "🔗 CRM Automático via WhatsApp – Integração em tempo real",
  description: "Sistema que cria automaticamente um card de novo lead no CRM assim que o primeiro contato no WhatsApp é iniciado. A integração utiliza FlutterFlow + Lovable + n8n e garante um fluxo 100% automatizado.",
  image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
  tags: ["FlutterFlow", "Lovable", "n8n", "CRM"],
  tech: "FlutterFlow • Lovable • n8n",
  goal: "Captura e organização automática de leads",
  highlight: "Sincronização imediata entre WhatsApp e CRM"
}, {
  title: "🧾 Smart Tracking com Meta API – +462% em conversas no WhatsApp",
  description: "Implementação de rastreamento via ctwaclid para identificar com precisão os anúncios que geravam conversas no WhatsApp. Aumento de +462,16% no volume de conversas e redução de -81,34% no custo por mensagem enviada em uma semana.",
  image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
  tags: ["Meta API", "n8n", "Supabase", "Analytics"],
  tech: "Meta API • n8n • Supabase • UTMs",
  goal: "Mensuração precisa de campanhas de mensagens",
  highlight: "Tracking avançado com dados reais de conversão"
}, {
  title: "📊 Bot de Métricas para WhatsApp – Automação de relatórios em tempo real",
  description: "Criação de um sistema que envia automaticamente as métricas de campanhas Meta e Google Ads para grupos de WhatsApp. Economia de tempo da equipe, com dados confiáveis e envio personalizado para cada grupo.",
  image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
  tags: ["Meta API", "Google Ads API", "WhatsApp API", "n8n"],
  tech: "Meta API • Google Ads API • Evolution API • WhatsApp API • n8n",
  goal: "Acompanhamento automatizado de campanhas",
  highlight: "Relatórios enviados em tempo real, sem intervenção manual"
}, {
  title: "🔁 Follow-up Automático – Recuperação de leads com IA",
  description: "Sistema que identifica leads não respondidos no WhatsApp e aciona mensagens de follow-up automáticas. Melhora o tempo de reengajamento, reduz o abandono de funil e aumenta conversões.",
  image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
  tags: ["n8n", "Supabase", "WhatsApp API", "Automação"],
  tech: "n8n • Supabase • WhatsApp API",
  goal: "Recuperação ativa de oportunidades",
  highlight: "Ações automáticas baseadas em comportamento"
}, {
  title: "🤖 Agentes de IA – Atendimento e campanhas automatizadas",
  description: "Criação de múltiplos agentes de IA: desde atendimento básico até análise profunda de campanhas de mídia paga. Um dos agentes é capaz de analisar dados, sugerir otimizações e até estruturar campanhas em Meta Ads com base nos resultados atuais.",
  image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
  tags: ["ChatGPT", "Langflow", "Relevance AI", "n8n"],
  tech: "ChatGPT Plugins • Langflow • Relevance AI • n8n",
  goal: "Atendimento, análise e execução inteligente",
  highlight: "IA com autonomia para sugerir e implementar ações"
}, {
  title: "🌐 Sistema de QR Code com Instância Automatizada",
  description: "Desenvolvimento de plataforma que gera QR Codes únicos para cada cliente, ativando uma nova instância integrada via Evolution API. Permite criação de ambientes personalizados com lógica pré-configurada para uso imediato.",
  image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
  tags: ["Lovable", "Evolution API", "n8n"],
  tech: "Lovable • Evolution API • n8n",
  goal: "Geração automática de ambientes e fluxos",
  highlight: "Escalabilidade e zero intervenção manual para ativação"
}, {
  title: "🎯 Site de Captação com Lovable – Portfólio com Lead Tracking",
  description: "Landing page criada com Lovable com foco em captação de leads para prestação de serviços. Integrações de tracking e formulário com envio direto ao CRM e ao WhatsApp.",
  image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
  tags: ["Lovable", "Webhooks", "CRM personalizado"],
  tech: "Lovable • Webhooks • CRM personalizado",
  goal: "Captação e qualificação automatizada de leads",
  highlight: "Pronto para rodar campanhas com tracking completo"
}];
const technologies = [{
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
}];
const AutomationAI = () => {
  const mainServices = [{
    icon: <BrainCircuit className="h-10 w-10 text-[#8A898C]" />,
    title: "IA & Automação Inteligente",
    description: "Implemente sistemas inteligentes que melhoram a tomada de decisão, otimizam campanhas e potencializam seus fluxos de trabalho com inteligência."
  }, {
    icon: <MessageSquare className="h-10 w-10 text-[#8A898C]" />,
    title: "Automação de WhatsApp",
    description: "Fluxos de mensagens automatizados para atendimento ao cliente, vendas e qualificação de leads usando WhatsApp e APIs conectadas."
  }, {
    icon: <Link2 className="h-10 w-10 text-[#8A898C]" />,
    title: "CRM & Integrações de Marketing",
    description: "Automação perfeita entre plataformas de marketing, CRMs e canais de comunicação."
  }, {
    icon: <Code className="h-10 w-10 text-[#8A898C]" />,
    title: "Desenvolvimento No-Code & Automação de Workflows",
    description: "Crie aplicativos web, dashboards, automações e sistemas completos usando plataformas intuitivas."
  }];
  const [language, setLanguage] = useState<"en" | "pt">("en");
  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "pt" : "en");
  };
  const content = {
    pt: {
      title: "Automação, IA e Desenvolvimento Sem Código",
      subtitle: "Implementação de soluções inteligentes para automatizar processos, otimizar resultados através de IA e capacitar negócios com tecnologias sem código. Minha abordagem combina ciência de dados, engenharia e estratégias de negócios inovadoras.",
      backButton: "Voltar para Início"
    }
  };
  return <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 w-full sm:w-auto bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> {content.pt.backButton}
          </Button>
        </Link>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-[#1c3454]">🚀 Automação, IA & Desenvolvimento No/Low-Code</h1>
        <p className="text-lg sm:text-xl mb-6 text-[#6caddf]">
          Sistemas inteligentes para automatizar, escalar e inovar suas operações digitais.
        </p>
        
        <div className="p-4 md:p-6 rounded-lg mb-8 md:mb-12 bg-[#6caddf]">
          <p className="text-base md:text-lg text-1C3454 mb-3 md:mb-4 text-[#1c3454]">
            Transforme rotinas de negócios em motores de alto desempenho usando automação, inteligência artificial e plataformas no-code. Crio soluções que reduzem trabalho manual, melhoram a tomada de decisão e conectam ferramentas para tornar sua estratégia digital verdadeiramente escalável.
          </p>
          <p className="text-base md:text-lg text-[#1c3454]">
            Minha abordagem combina mentalidade de engenharia, inteligência de negócios e plataformas amigáveis — permitindo que você escale sem aumentar a complexidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          {mainServices.map((service, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-black">
              <CardHeader>
                <div className="mb-2">
                  {service.icon}
                </div>
                <CardTitle className="text-[#1c3454]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm md:text-base text-[#6caddf]">{service.description}</CardDescription>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">🧩 Tecnologias que Utilizo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {technologies.map((tech, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {tech.icon}
                    <CardTitle className="text-base md:text-lg text-[#1c3454]">{tech.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map(tool => <span key={tool} className="px-2 py-1 md:px-3 md:py-1 bg-gray-100 rounded-full text-xs md:text-sm text-[#6caddf]">
                        {tool}
                      </span>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">📁 Portfólio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioItems.map((item, index) => <Card key={index} className="overflow-hidden border-none shadow-2xl hover:shadow-2xl transition-all bg-white">
                <div className="h-40 md:h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
                </div>
                <CardHeader>
                  <CardTitle className="text-base md:text-lg text-[#1c3454]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm md:text-base mb-4 text-[#1c3454]">{item.description}</p>
                  <div className="flex flex-wrap gap-1 md:gap-2">
                    {item.tags.map(tag => <span key={tag} className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-[#1c3454]">
                        {tag}
                      </span>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </div>;
};
export default AutomationAI;
