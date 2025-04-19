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
          icon: <Facebook className="h-10 w-10 text-[#8A898C]" />,
          title: "Meta Ads",
          description: "Strategic campaign management for Facebook, Instagram and Audience Network with optimized targeting and creative approaches."
        },
        {
          icon: <Search className="h-10 w-10 text-[#8A898C]" />,
          title: "Google Ads",
          description: "Search, Display, and YouTube campaigns developed with keyword research and competitive analysis to maximize your ROAS."
        },
        {
          icon: <Instagram className="h-10 w-10 text-[#8A898C]" />,
          title: "TikTok Ads",
          description: "Creative ad campaigns that leverage TikTok's unique format and audience engagement opportunities."
        },
        {
          icon: <BarChart className="h-10 w-10 text-[#8A898C]" />,
          title: "Performance Analysis",
          description: "In-depth reporting and analytics to track campaign performance and identify optimization opportunities."
        },
        {
          icon: <TrendingUp className="h-10 w-10 text-[#8A898C]" />,
          title: "Conversion Optimization",
          description: "Strategies focused on improving conversion rates and reducing customer acquisition costs."
        }
      ],
      technologies: [
        {
          icon: <Facebook className="h-10 w-10 text-[#8A898C]" />,
          title: "Meta Ads Manager",
          description: "Advanced ad platform for Facebook and Instagram campaigns."
        },
        {
          icon: <Search className="h-10 w-10 text-[#8A898C]" />,
          title: "Google Ads",
          description: "Comprehensive advertising platform for search, display, and video ads."
        }
      ]
    },
    pt: {
      title: "Serviços de Mídia Paga",
      subtitle: "Especialista em campanhas de mídia paga com foco em resultados mensuráveis e ROI positivo.",
      backButton: "Voltar para Home",
      services: [
        {
          icon: <Facebook className="h-10 w-10 text-[#8A898C]" />,
          title: "Meta Ads",
          description: "Gerenciamento estratégico de campanhas para Facebook, Instagram e Audience Network com segmentação otimizada e abordagens criativas."
        },
        {
          icon: <Search className="h-10 w-10 text-[#8A898C]" />,
          title: "Google Ads",
          description: "Campanhas de Search, Display e YouTube desenvolvidas com pesquisa de palavras-chave e análise competitiva para maximizar seu ROAS."
        },
        {
          icon: <Instagram className="h-10 w-10 text-[#8A898C]" />,
          title: "TikTok Ads",
          description: "Campanhas publicitárias criativas que aproveitam o formato único do TikTok e oportunidades de engajamento com o público."
        },
        {
          icon: <BarChart className="h-10 w-10 text-[#8A898C]" />,
          title: "Análise de Performance",
          description: "Relatórios detalhados e análises para acompanhar o desempenho das campanhas e identificar oportunidades de otimização."
        },
        {
          icon: <TrendingUp className="h-10 w-10 text-[#8A898C]" />,
          title: "Otimização de Conversão",
          description: "Estratégias focadas em melhorar taxas de conversão e reduzir custos de aquisição de clientes."
        }
      ],
      technologies: [
        {
          icon: <Facebook className="h-10 w-10 text-[#8A898C]" />,
          title: "Meta Ads Manager",
          description: "Plataforma avançada de anúncios para campanhas no Facebook e Instagram."
        },
        {
          icon: <Search className="h-10 w-10 text-[#8A898C]" />,
          title: "Google Ads",
          description: "Plataforma abrangente de publicidade para anúncios de busca, display e vídeo."
        }
      ]
    }
  };

  const portfolioItems = {
    en: [
      {
        title: "E-commerce Conversion Campaign",
        description: "Strategic Facebook and Instagram campaign for an e-commerce client that achieved 450% ROAS and decreased CPA by 35%.",
        image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=500",
        tags: ["Meta Ads", "E-commerce", "ROAS"]
      },
      {
        title: "SaaS Lead Generation",
        description: "Google Ads campaign for a SaaS company that generated 200+ qualified leads per month with a 20% conversion to paid customers.",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=500",
        tags: ["Google Ads", "SaaS", "Lead Gen"]
      }
    ],
    pt: [
      {
        title: "Campanha de Conversão E-commerce",
        description: "Campanha estratégica no Facebook e Instagram para um cliente de e-commerce que alcançou 450% de ROAS e diminuiu o CPA em 35%.",
        image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=500",
        tags: ["Meta Ads", "E-commerce", "ROAS"]
      },
      {
        title: "Geração de Leads SaaS",
        description: "Campanha do Google Ads para uma empresa SaaS que gerou mais de 200 leads qualificados por mês com 20% de conversão para clientes pagantes.",
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=500",
        tags: ["Google Ads", "SaaS", "Geração de Leads"]
      }
    ]
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "pt" : "en");
  };

  return (
    <div className="min-h-screen p-8 bg-[#000000]">
      <div className="absolute top-4 right-4">
        <Button 
          variant="outline" 
          className="rounded-full bg-white/10 text-white hover:bg-white/20" 
          onClick={toggleLanguage}
        >
          {language === "en" ? "PT" : "EN"}
        </Button>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
            <ArrowLeft className="mr-2 h-4 w-4" /> {content[language].backButton}
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#8A898C]">{content[language].title}</h1>
        <p className="text-xl text-gray-300 mb-12">
          {content[language].subtitle}
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content[language].services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="mb-2">
                  {service.icon}
                </div>
                <CardTitle className="text-white">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-300">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white/10 backdrop-blur-sm p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#C8C8C9]">
            {language === "en" ? "Strategic Case Studies" : "Casos de Sucesso Estratégicos"}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems[language].map((item, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white/5 backdrop-blur-sm">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-[#8A898C]/20 text-[#C8C8C9] rounded-full text-xs font-medium"
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

export default MediaBuying;
