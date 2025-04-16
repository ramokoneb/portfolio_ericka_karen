
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, MessageSquare, Zap, Database, Settings } from "lucide-react";

const AutomationAI = () => {
  const services = [
    {
      icon: <Bot className="h-10 w-10 text-[#F5A9B8]" />,
      title: "Qualificação de Leads com IA",
      description: "Utilize IA para classificar, pontuar e qualificar leads para processos de vendas mais eficientes e maiores taxas de conversão."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-[#F5A9B8]" />,
      title: "Automação de WhatsApp",
      description: "Soluções de mensagens automatizadas para atendimento ao cliente, suporte de vendas e nutrição de leads via WhatsApp."
    },
    {
      icon: <Database className="h-10 w-10 text-[#F5A9B8]" />,
      title: "Integração com CRM",
      description: "Conexão perfeita entre suas ferramentas de marketing, sistemas CRM e processos de vendas com fluxo de dados automatizado."
    },
    {
      icon: <Settings className="h-10 w-10 text-[#F5A9B8]" />,
      title: "Automação de Workflows",
      description: "Fluxos personalizados no n8n ou Make para automatizar tarefas repetitivas e otimizar operações do seu negócio."
    },
    {
      icon: <Zap className="h-10 w-10 text-[#F5A9B8]" />,
      title: "Automação de Marketing",
      description: "Soluções de automação completas para email marketing, nutrição de leads e otimização da jornada do cliente."
    }
  ];

  const portfolioItems = [
    {
      title: "Automação de Suporte ao Cliente",
      description: "Solução de automação do WhatsApp que tratou 80% das consultas de clientes automaticamente, reduzindo o tempo de resposta em 95%.",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=500",
      tags: ["WhatsApp", "Suporte ao Cliente", "Chatbot"]
    },
    {
      title: "Sistema de Pontuação de Leads com IA",
      description: "Solução de IA personalizada que analisou padrões de comportamento do cliente para pontuar leads, melhorando a eficiência da equipe de vendas em 65%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
      tags: ["IA", "Machine Learning", "Pontuação de Leads"]
    },
    {
      title: "Integração de Marketing & CRM",
      description: "Integração completa entre plataformas de marketing e sistema CRM com fluxos de trabalho automatizados de qualificação de leads.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500",
      tags: ["CRM", "Integração", "Workflow"]
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-[#33C3F0]">
      <div className="max-w-6xl mx-auto">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 bg-white/50 hover:bg-white/70">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Automação & IA</h1>
        <p className="text-xl text-white mb-12">
          Implementação de soluções inteligentes para automatizar processos e otimizar resultados através de IA.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mb-2">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#0EA5E9]">Portfólio e Cases</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-[#33C3F0]/10 text-[#33C3F0] rounded-full text-xs font-medium"
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
      </div>
    </div>
  );
};

export default AutomationAI;
