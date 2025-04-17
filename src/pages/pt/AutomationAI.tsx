import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, MessageSquare, Zap, Database, Settings, Layers3, SquareCode } from "lucide-react";

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
      icon: <SquareCode className="h-10 w-10 text-[#8A898C]" />,
      title: "Desenvolvimento Sem Código",
      description: "Crie aplicações poderosas e automatize fluxos de trabalho usando plataformas sem código como Zapier, Make e n8n."
    },
    {
      icon: <Layers3 className="h-10 w-10 text-[#8A898C]" />,
      title: "Automação de Workflows",
      description: "Fluxos personalizados para automatizar tarefas repetitivas e otimizar as operações do seu negócio em múltiplas plataformas."
    }
  ];

  const portfolioItems = [
    {
      title: "Automação de Suporte ao Cliente",
      description: "Solução de automação do WhatsApp que tratou 80% das consultas de clientes automaticamente, reduzindo o tempo de resposta em 95%.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=500",
      tags: ["WhatsApp", "Suporte ao Cliente", "Chatbot"]
    },
    {
      title: "Sistema de Pontuação de Leads com IA",
      description: "Solução de IA personalizada que analisou padrões de comportamento do cliente para pontuar leads, melhorando a eficiência da equipe de vendas em 65%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
      tags: ["IA", "Machine Learning", "Pontuação de Leads"]
    },
    {
      title: "Integração de Marketing & CRM",
      description: "Integração completa entre plataformas de marketing e sistema CRM com fluxos de trabalho automatizados de qualificação de leads.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=500",
      tags: ["CRM", "Integração", "Workflow"]
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Automação, IA e Desenvolvimento Sem Código</h1>
        <p className="text-xl text-white mb-12">
          Implementação de soluções inteligentes para automatizar processos, otimizar resultados através de IA e capacitar negócios com tecnologias sem código.
          Minha abordagem combina ciência de dados, engenharia e estratégias de negócios inovadoras.
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
          <h2 className="text-2xl font-bold mb-6 text-black">Portfólio e Cases</h2>
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
      </div>
    </div>
  );
};

export default AutomationAI;
