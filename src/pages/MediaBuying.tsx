
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, Facebook, Instagram, BarChart, TrendingUp, Search } from "lucide-react";

const MediaBuying = () => {
  const [language, setLanguage] = useState<"en" | "pt">("en");
  
  const content = {
    en: {
      title: "Paid Media Services",
      subtitle: "Specialist in paid media campaigns focused on measurable results and positive ROI.",
      backButton: "Back to Home",
      services: [
        {
          icon: <Facebook className="h-10 w-10 text-[#5BCEFA]" />,
          title: "Meta Ads",
          description: "Strategic campaign management for Facebook, Instagram and Audience Network with optimized targeting and creative approaches."
        },
        {
          icon: <Search className="h-10 w-10 text-[#5BCEFA]" />,
          title: "Google Ads",
          description: "Search, Display, and YouTube campaigns developed with keyword research and competitive analysis to maximize your ROAS."
        },
        {
          icon: <Instagram className="h-10 w-10 text-[#5BCEFA]" />,
          title: "TikTok Ads",
          description: "Creative ad campaigns that leverage TikTok's unique format and audience engagement opportunities."
        },
        {
          icon: <BarChart className="h-10 w-10 text-[#5BCEFA]" />,
          title: "Performance Analysis",
          description: "In-depth reporting and analytics to track campaign performance and identify optimization opportunities."
        },
        {
          icon: <TrendingUp className="h-10 w-10 text-[#5BCEFA]" />,
          title: "Conversion Optimization",
          description: "Strategies focused on improving conversion rates and reducing customer acquisition costs."
        }
      ]
    },
    pt: {
      title: "Serviços de Mídia Paga",
      subtitle: "Especialista em campanhas de mídia paga com foco em resultados mensuráveis e ROI positivo.",
      backButton: "Voltar para Home",
      services: [
        {
          icon: <Facebook className="h-10 w-10 text-[#5BCEFA]" />,
          title: "Meta Ads",
          description: "Gerenciamento estratégico de campanhas para Facebook, Instagram e Audience Network com segmentação otimizada e abordagens criativas."
        },
        {
          icon: <Search className="h-10 w-10 text-[#5BCEFA]" />,
          title: "Google Ads",
          description: "Campanhas de Search, Display e YouTube desenvolvidas com pesquisa de palavras-chave e análise competitiva para maximizar seu ROAS."
        },
        {
          icon: <Instagram className="h-10 w-10 text-[#5BCEFA]" />,
          title: "TikTok Ads",
          description: "Campanhas publicitárias criativas que aproveitam o formato único do TikTok e oportunidades de engajamento com o público."
        },
        {
          icon: <BarChart className="h-10 w-10 text-[#5BCEFA]" />,
          title: "Análise de Performance",
          description: "Relatórios detalhados e análises para acompanhar o desempenho das campanhas e identificar oportunidades de otimização."
        },
        {
          icon: <TrendingUp className="h-10 w-10 text-[#5BCEFA]" />,
          title: "Otimização de Conversão",
          description: "Estratégias focadas em melhorar taxas de conversão e reduzir custos de aquisição de clientes."
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#5BCEFA]">{content[language].title}</h1>
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
          <h2 className="text-2xl font-bold mb-6 text-[#5BCEFA]">
            {language === "en" ? "Client Results" : "Resultados de Clientes"}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-[#F5A9B8]">350%</p>
              <p className="text-lg mt-2">{language === "en" ? "Average ROAS" : "ROAS Médio"}</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-[#F5A9B8]">-40%</p>
              <p className="text-lg mt-2">{language === "en" ? "Reduced CPA" : "Redução de CPA"}</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <p className="text-4xl font-bold text-[#F5A9B8]">+25K</p>
              <p className="text-lg mt-2">{language === "en" ? "Qualified Leads" : "Leads Qualificados"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaBuying;
