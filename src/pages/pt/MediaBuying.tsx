
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Facebook, Instagram, BarChart, TrendingUp, Search, Bookmark, Youtube, Bot, Target, LineChart, Database, MessageSquare } from "lucide-react";

const MediaBuying = () => {
  const services = [
    {
      icon: <Facebook className="h-10 w-10 text-[#33C3F0]" />,
      title: "Meta Ads",
      description: "Gerenciamento estratégico de campanhas para Facebook, Instagram e Audience Network com segmentação avançada, funis estruturados e ferramentas de automação como Advantage+ e catálogo dinâmico. Serviço completo desde copywriting até criativos, focado em resultados."
    },
    {
      icon: <Search className="h-10 w-10 text-[#33C3F0]" />,
      title: "Google Ads",
      description: "Campanhas de Search, Display, YouTube, Shopping e Performance Max, sempre com pesquisa aprofundada, estruturação de palavras-chave, lances inteligentes e otimização constante de ROAS."
    },
    {
      icon: <Instagram className="h-10 w-10 text-[#33C3F0]" />,
      title: "TikTok Ads",
      description: "Criação de campanhas visuais focadas em engajamento e conversão. Estratégias que aproveitam o formato nativo da plataforma, com linguagem criativa e objetivos de performance."
    },
    {
      icon: <Bookmark className="h-10 w-10 text-[#33C3F0]" />,
      title: "Pinterest Ads",
      description: "Campanhas focadas em descoberta e conversão, com criativos desenhados para o formato inspiracional da plataforma. Ideal para e-commerce, moda, decoração, beleza e segmentos visuais. Estratégias de funil completo voltadas para crescimento sustentável e tráfego qualificado."
    },
    {
      icon: <Bot className="h-10 w-10 text-[#33C3F0]" />,
      title: "Inteligência Artificial Aplicada",
      description: "Uso de IA nas principais plataformas para otimizar entrega, segmentação, criativos dinâmicos e prever padrões de comportamento. Soluções que integram inteligência com performance."
    },
    {
      icon: <Target className="h-10 w-10 text-[#33C3F0]" />,
      title: "Otimização de Conversão (CRO)",
      description: "Ações voltadas para reduzir CAC e aumentar taxas de conversão através de ajustes estratégicos em campanhas, criativos, páginas de destino e mensagens."
    },
    {
      icon: <Database className="h-10 w-10 text-[#33C3F0]" />,
      title: "Rastreamento Avançado e Analytics",
      description: "Implementação de pixels, eventos personalizados, tagueamento com ferramentas como GTM, ctwaclid e UTMs. Dashboards personalizados com dados em tempo real e relatórios com insights acionáveis."
    }
  ];

  const portfolioItems = [
    {
      title: "Campanha de Conversão E-commerce",
      description: "Campanha estratégica no Facebook e Instagram para um cliente de e-commerce que alcançou 450% de ROAS e diminuiu o CPA em 35%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: ["Meta Ads", "E-commerce", "ROAS"]
    },
    {
      title: "Geração de Leads SaaS",
      description: "Campanha do Google Ads para uma empresa SaaS que gerou mais de 200 leads qualificados por mês com 20% de conversão para clientes pagantes.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4",
      tags: ["Google Ads", "SaaS", "Geração de Leads"]
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-[#33C3F0]">
      <div className="max-w-6xl mx-auto">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 bg-white/50 hover:bg-white/70">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar ao Início
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serviços de Mídia Paga e Performance Inteligente</h1>
        <p className="text-xl text-white mb-12">
          Campanhas orientadas por dados, automações e inteligência artificial para escalar seus resultados.
          Minha abordagem combina criatividade, tecnologia e performance em estratégias completas de mídia paga.
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
          <h2 className="text-2xl font-bold mb-6 text-[#0EA5E9]">Portfólio e Casos de Sucesso Estratégicos</h2>
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
