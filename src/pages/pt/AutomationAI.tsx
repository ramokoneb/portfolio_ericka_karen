
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, MessageSquare, Database, Settings, Layers3, Code, BrainCircuit, Link2, Smartphone, QrCode, FileCode, BarChart2, MessagesSquare, Target } from "lucide-react";

const portfolioItems = [
    {
      title: "💼 WhatsApp Automation – +80% de demandas automatizadas",
      description: "Solução de automação desenvolvida para atendimento via WhatsApp, com chatbot inteligente capaz de lidar com 80% das perguntas frequentes. Redução de 95% no tempo de resposta e aumento na satisfação do atendimento.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=500",
      tags: ["WhatsApp API", "n8n", "NLP", "Chatbot"],
      tech: "WhatsApp API • n8n • NLP • Lógica condicional",
      goal: "Atendimento automatizado e escalável",
      highlight: "Redução drástica na necessidade de atendimento humano"
    },
    {
      title: "🧠 AI Lead Scoring System – +65% de eficiência no time comercial",
      description: "Sistema de pontuação de leads baseado em machine learning, treinado com padrões de comportamento de usuários reais. Melhorou a eficiência do time de vendas em 65%, priorizando leads com maior chance de conversão.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
      tags: ["n8n", "Supabase", "Machine Learning", "LLMs"],
      tech: "n8n • Supabase • LLMs personalizados",
      goal: "Qualificação automática de leads",
      highlight: "Inteligência aplicada à jornada de compra"
    },
    {
      title: "🔗 CRM Automático via WhatsApp – Integração em tempo real",
      description: "Sistema que cria automaticamente um card de novo lead no CRM assim que o primeiro contato no WhatsApp é iniciado. A integração utiliza FlutterFlow + Lovable + n8n e garante um fluxo 100% automatizado.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=500",
      tags: ["FlutterFlow", "Lovable", "n8n", "CRM"],
      tech: "FlutterFlow • Lovable • n8n",
      goal: "Captura e organização automática de leads",
      highlight: "Sincronização imediata entre WhatsApp e CRM"
    },
    {
      title: "🧾 Smart Tracking com Meta API – +462% em conversas no WhatsApp",
      description: "Implementação de rastreamento via ctwaclid para identificar com precisão os anúncios que geravam conversas no WhatsApp. Aumento de +462,16% no volume de conversas e redução de -81,34% no custo por mensagem enviada em uma semana.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
      tags: ["Meta API", "n8n", "Supabase", "Analytics"],
      tech: "Meta API • n8n • Supabase • UTMs",
      goal: "Mensuração precisa de campanhas de mensagens",
      highlight: "Tracking avançado com dados reais de conversão"
    },
    {
      title: "📊 Bot de Métricas para WhatsApp – Automação de relatórios em tempo real",
      description: "Criação de um sistema que envia automaticamente as métricas de campanhas Meta e Google Ads para grupos de WhatsApp. Economia de tempo da equipe, com dados confiáveis e envio personalizado para cada grupo.",
      image: "https://images.unsplash.com/photo-1553484771-047a44eee27a?q=80&w=500",
      tags: ["Meta API", "Google Ads API", "WhatsApp API", "n8n"],
      tech: "Meta API • Google Ads API • Evolution API • WhatsApp API • n8n",
      goal: "Acompanhamento automatizado de campanhas",
      highlight: "Relatórios enviados em tempo real, sem intervenção manual"
    },
    {
      title: "🔁 Follow-up Automático – Recuperação de leads com IA",
      description: "Sistema que identifica leads não respondidos no WhatsApp e aciona mensagens de follow-up automáticas. Melhora o tempo de reengajamento, reduz o abandono de funil e aumenta conversões.",
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=500",
      tags: ["n8n", "Supabase", "WhatsApp API", "Automação"],
      tech: "n8n • Supabase • WhatsApp API",
      goal: "Recuperação ativa de oportunidades",
      highlight: "Ações automáticas baseadas em comportamento"
    },
    {
      title: "🤖 Agentes de IA – Atendimento e campanhas automatizadas",
      description: "Criação de múltiplos agentes de IA: desde atendimento básico até análise profunda de campanhas de mídia paga. Um dos agentes é capaz de analisar dados, sugerir otimizações e até estruturar campanhas em Meta Ads com base nos resultados atuais.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=500",
      tags: ["ChatGPT", "Langflow", "Relevance AI", "n8n"],
      tech: "ChatGPT Plugins • Langflow • Relevance AI • n8n",
      goal: "Atendimento, análise e execução inteligente",
      highlight: "IA com autonomia para sugerir e implementar ações"
    },
    {
      title: "🌐 Sistema de QR Code com Instância Automatizada",
      description: "Desenvolvimento de plataforma que gera QR Codes únicos para cada cliente, ativando uma nova instância integrada via Evolution API. Permite criação de ambientes personalizados com lógica pré-configurada para uso imediato.",
      image: "https://images.unsplash.com/photo-1598291286794-d417e2685f85?q=80&w=500",
      tags: ["Lovable", "Evolution API", "n8n"],
      tech: "Lovable • Evolution API • n8n",
      goal: "Geração automática de ambientes e fluxos",
      highlight: "Escalabilidade e zero intervenção manual para ativação"
    },
    {
      title: "🎯 Site de Captação com Lovable – Portfólio com Lead Tracking",
      description: "Landing page criada com Lovable com foco em captação de leads para prestação de serviços. Integrações de tracking e formulário com envio direto ao CRM e ao WhatsApp.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
      tags: ["Lovable", "Webhooks", "CRM personalizado"],
      tech: "Lovable • Webhooks • CRM personalizado",
      goal: "Captação e qualificação automatizada de leads",
      highlight: "Pronto para rodar campanhas com tracking completo"
    }
];

const technologies = [
    {
      category: "Automação & Integração",
      tools: ["n8n", "Make", "Zapier"],
      icon: <Settings className="h-6 w-6" />
    },
    {
      category: "Web & Mobile App Builders",
      tools: ["Bubble", "FlutterFlow", "Lovable"],
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      category: "IA & Lógica Inteligente",
      tools: ["ChatGPT + Plugins", "FlowiseAI", "Relevance AI", "Langflow"],
      icon: <BrainCircuit className="h-6 w-6" />
    },
    {
      category: "Bancos de Dados & Backends No-Code",
      tools: ["Airtable", "Baserow", "NocoDB", "Xano", "Supabase", "Firebase"],
      icon: <Database className="h-6 w-6" />
    }
];

const AutomationAI = () => {
  const services = [
    {
      icon: <Bot className="h-10 w-10 text-[#8A898C]" />,
      title: "Soluções de IA",
      description: "Implemente sistemas inteligentes para otimizar processos e aprimorar a tomada de decisões através de inteligência artificial avançada."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-[#8A898C]" />,
      title: "Automação de WhatsApp",
      description: "Soluções de mensagens automatizadas para atendimento ao cliente, suporte de vendas e nutrição de leads via WhatsApp."
    },
    {
      icon: <Database className="h-10 w-10 text-[#8A898C]" />,
      title: "Integração de CRM",
      description: "Conexão perfeita entre suas ferramentas de marketing, sistemas CRM e processos de vendas com fluxo de dados automatizado."
    },
    {
      icon: <Code className="h-10 w-10 text-[#8A898C]" />,
      title: "Desenvolvimento Sem Código",
      description: "Crie aplicações poderosas e automatize fluxos de trabalho usando plataformas sem código como Zapier, Make e n8n."
    },
    {
      icon: <Layers3 className="h-10 w-10 text-[#8A898C]" />,
      title: "Automação de Workflows",
      description: "Fluxos personalizados para automatizar tarefas repetitivas e otimizar as operações do seu negócio em múltiplas plataformas."
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-[#000000]">
      <div className="max-w-6xl mx-auto">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 bg-white/20 hover:bg-white/30 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">🚀 Automação, IA & Desenvolvimento No/Low-Code</h1>
        <p className="text-xl text-white mb-12">
          Implementação de soluções inteligentes para automatizar processos, otimizar resultados através de IA e capacitar negócios com tecnologias no/low-code.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-black">
              <CardHeader>
                <div className="mb-2">
                  {service.icon}
                </div>
                <CardTitle className="text-black">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-black">📁 Portfólio e Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-2xl hover:shadow-2xl transition-all bg-white">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-black text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="space-y-3">
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-gray-600">Tecnologias:</span>
                      <span className="text-sm text-gray-800">{item.tech}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-gray-600">Objetivo:</span>
                      <span className="text-sm text-gray-800">{item.goal}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-sm font-medium text-gray-600">Destaque:</span>
                      <span className="text-sm text-gray-800">{item.highlight}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {item.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-black">📚 Tecnologias</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-black">
                <CardHeader>
                  <div className="mb-2">
                    {tech.icon}
                  </div>
                  <CardTitle className="text-black">{tech.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-700">{tech.tools.join(", ")}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationAI;
