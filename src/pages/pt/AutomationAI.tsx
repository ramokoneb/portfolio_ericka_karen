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
  const mainServices = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-[#8A898C]" />,
      title: "IA & Automação Inteligente",
      description: "Implemente sistemas inteligentes que melhoram a tomada de decisão, otimizam campanhas e potencializam seus fluxos de trabalho com inteligência."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-[#8A898C]" />,
      title: "Automação de WhatsApp",
      description: "Fluxos de mensagens automatizados para atendimento ao cliente, vendas e qualificação de leads usando WhatsApp e APIs conectadas."
    },
    {
      icon: <Link2 className="h-10 w-10 text-[#8A898C]" />,
      title: "CRM & Integrações de Marketing",
      description: "Automação perfeita entre plataformas de marketing, CRMs e canais de comunicação."
    },
    {
      icon: <Code className="h-10 w-10 text-[#8A898C]" />,
      title: "Desenvolvimento No-Code & Automação de Workflows",
      description: "Crie aplicativos web, dashboards, automações e sistemas completos usando plataformas intuitivas."
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
        <p className="text-xl text-white mb-6">
          Sistemas inteligentes para automatizar, escalar e inovar suas operações digitais.
        </p>
        
        <div className="bg-white/10 p-6 rounded-lg mb-12">
          <p className="text-lg text-white mb-4">
            Transforme rotinas de negócios em motores de alto desempenho usando automação, inteligência artificial e plataformas no-code. Crio soluções que reduzem trabalho manual, melhoram a tomada de decisão e conectam ferramentas para tornar sua estratégia digital verdadeiramente escalável.
          </p>
          <p className="text-lg text-white">
            Minha abordagem combina mentalidade de engenharia, inteligência de negócios e plataformas amigáveis — permitindo que você escale sem aumentar a complexidade.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
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
        
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-8 text-black">📁 Portfólio</h2>
          <div className="grid md:grid-cols-3 gap-8">
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
                  <CardTitle className="text-black">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-black">🧩 Tecnologias que Utilizo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {tech.icon}
                    <CardTitle className="text-lg">{tech.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map((tool) => (
                      <span 
                        key={tool}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
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
