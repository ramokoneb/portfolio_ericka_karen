
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Facebook, Instagram, BarChart, TrendingUp, Search } from "lucide-react";

const MediaBuying = () => {
  const services = [
    {
      icon: <Facebook className="h-10 w-10 text-[#33C3F0]" />,
      title: "Meta Ads",
      description: "Gerenciamento estratégico de campanhas para Facebook, Instagram e Audience Network com segmentação otimizada e abordagens criativas."
    },
    {
      icon: <Search className="h-10 w-10 text-[#33C3F0]" />,
      title: "Google Ads",
      description: "Campanhas de Search, Display e YouTube desenvolvidas com pesquisa de palavras-chave e análise competitiva para maximizar seu ROAS."
    },
    {
      icon: <Instagram className="h-10 w-10 text-[#33C3F0]" />,
      title: "TikTok Ads",
      description: "Campanhas publicitárias criativas que aproveitam o formato único do TikTok e oportunidades de engajamento com o público."
    },
    {
      icon: <BarChart className="h-10 w-10 text-[#33C3F0]" />,
      title: "Análise de Performance",
      description: "Relatórios detalhados e análises para acompanhar o desempenho das campanhas e identificar oportunidades de otimização."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-[#33C3F0]" />,
      title: "Otimização de Conversão",
      description: "Estratégias focadas em melhorar taxas de conversão e reduzir custos de aquisição de clientes."
    }
  ];

  const portfolioItems = [
    {
      title: "Campanha de Conversão E-commerce",
      description: "Campanha estratégica no Facebook e Instagram para um cliente de e-commerce que alcançou 450% de ROAS e diminuiu o CPA em 35%.",
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=500",
      tags: ["Meta Ads", "E-commerce", "ROAS"]
    },
    {
      title: "Geração de Leads SaaS",
      description: "Campanha do Google Ads para uma empresa SaaS que gerou mais de 200 leads qualificados por mês com 20% de conversão para clientes pagantes.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
      tags: ["Google Ads", "SaaS", "Geração de Leads"]
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Serviços de Mídia Paga</h1>
        <p className="text-xl text-white mb-12">
          Especialista em campanhas de mídia paga com foco em resultados mensuráveis e ROI positivo.
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
          <div className="grid md:grid-cols-2 gap-8">
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

export default MediaBuying;
