
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
            {language === "en" ? "Automation Benefits" : "Benefícios da Automação"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-[#5BCEFA]">70%</p>
              <p className="text-lg mt-2">{language === "en" ? "Time Saved" : "Tempo Economizado"}</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-[#5BCEFA]">40%</p>
              <p className="text-lg mt-2">{language === "en" ? "Error Reduction" : "Redução de Erros"}</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-[#5BCEFA]">2.5x</p>
              <p className="text-lg mt-2">{language === "en" ? "Productivity Increase" : "Aumento de Produtividade"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationAI;
