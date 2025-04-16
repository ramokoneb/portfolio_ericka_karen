import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Bot, MessageSquare, Zap, Database, Settings } from "lucide-react";

const AutomationAI = () => {
  const [language, setLanguage] = useState<"en" | "pt">("en");
  
  const content = {
    en: {
      title: "Automation & AI",
      subtitle: "Implementation of intelligent solutions to automate processes and optimize results through AI.",
      backButton: "Back to Home",
      services: [
        {
          icon: <Bot className="h-10 w-10 text-[#F5A9B8]" />,
          title: "AI-Powered Lead Qualification",
          description: "Leverage AI to classify, score, and qualify leads for more efficient sales processes and higher conversion rates."
        },
        {
          icon: <MessageSquare className="h-10 w-10 text-[#F5A9B8]" />,
          title: "WhatsApp Automation",
          description: "Automated messaging solutions for customer service, sales support, and lead nurturing through WhatsApp."
        },
        {
          icon: <Database className="h-10 w-10 text-[#F5A9B8]" />,
          title: "CRM Integration",
          description: "Seamless connection between your marketing tools, CRM systems, and sales processes with automated data flow."
        },
        {
          icon: <Settings className="h-10 w-10 text-[#F5A9B8]" />,
          title: "Workflow Automation",
          description: "Custom n8n or Make workflows to automate repetitive tasks and streamline your business operations."
        },
        {
          icon: <Zap className="h-10 w-10 text-[#F5A9B8]" />,
          title: "Marketing Automation",
          description: "End-to-end automation solutions for email marketing, lead nurturing, and customer journey optimization."
        }
      ]
    },
    pt: {
      title: "Automação & IA",
      subtitle: "Implementação de soluções inteligentes para automatizar processos e otimizar resultados através de IA.",
      backButton: "Voltar para Home",
      services: [
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
      ]
    }
  };

  const portfolioItems = {
    en: [
      {
        title: "Customer Support Automation",
        description: "WhatsApp automation solution that handled 80% of customer inquiries automatically, reducing response time by 95%.",
        image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=500",
        tags: ["WhatsApp", "Customer Support", "Chatbot"]
      },
      {
        title: "AI Lead Scoring System",
        description: "Custom AI solution that analyzed customer behavior patterns to score leads, improving sales team efficiency by 65%.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
        tags: ["AI", "Machine Learning", "Lead Scoring"]
      },
      {
        title: "Marketing & CRM Integration",
        description: "End-to-end integration between marketing platforms and CRM system with automated lead qualification workflows.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500",
        tags: ["CRM", "Integration", "Workflow"]
      }
    ],
    pt: [
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
    ]
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "pt" : "en");
  };

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-[#5BCEFA] via-white to-[#F5A9B8]">
      <div className="absolute top-4 right-4">
        <Button 
          variant="outline" 
          className="rounded-full bg-white text-gray-700 hover:bg-gray-100" 
          onClick={toggleLanguage}
        >
          {language === "en" ? "PT" : "EN"}
        </Button>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> {content[language].backButton}
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#F5A9B8]">{content[language].title}</h1>
        <p className="text-xl text-gray-700 mb-12">
          {content[language].subtitle}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].services.map((service, index) => (
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
          <h2 className="text-2xl font-bold mb-6 text-[#F5A9B8]">
            {language === "en" ? "Portfolio & Case Studies" : "Portfólio e Cases"}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems[language].map((item, index) => (
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
                        className="px-2 py-1 bg-[#5BCEFA]/10 text-[#5BCEFA] rounded-full text-xs font-medium"
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
