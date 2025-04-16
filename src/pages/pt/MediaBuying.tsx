
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Facebook, Instagram, BarChart, TrendingUp, Search, Bookmark, Youtube, Bot, Target, LineChart, Database, MessageSquare } from "lucide-react";

const MediaBuying = () => {
  const services = [
    {
      icon: <Facebook className="h-10 w-10 text-[#33C3F0]" />,
      title: "Meta Ads",
      description: "Campanhas estratégicas no Facebook, Instagram e Audience Network, com segmentações avançadas, funis estruturados e uso de automações como Advantage+ e catálogo dinâmico. Atuação completa da copy ao criativo, com foco em resultado."
    },
    {
      icon: <Search className="h-10 w-10 text-[#33C3F0]" />,
      title: "Google Ads",
      description: "Campanhas de Search, Display, YouTube, Shopping e Performance Max, sempre com pesquisa aprofundada, estruturação de palavras-chave, bidding inteligente e otimização constante do ROAS."
    },
    {
      icon: <Instagram className="h-10 w-10 text-[#33C3F0]" />,
      title: "TikTok Ads",
      description: "Criação de campanhas visuais com foco em engajamento e conversão. Estratégias que aproveitam o formato nativo da plataforma, com linguagem criativa e objetivos de performance."
    },
    {
      icon: <Bookmark className="h-10 w-10 text-[#33C3F0]" />,
      title: "Pinterest Ads",
      description: "Campanhas voltadas para descoberta e conversão, com criativos pensados para o formato inspiracional da plataforma. Ideal para e-commerce, moda, decoração, beleza e segmentos visuais. Estratégias full-funnel com foco em crescimento sustentável e tráfego qualificado."
    },
    {
      icon: <Bot className="h-10 w-10 text-[#33C3F0]" />,
      title: "Inteligência Artificial Aplicada",
      description: "Utilização de IA nas principais plataformas para otimizar entrega, segmentações, criativos dinâmicos e prever padrões de comportamento. Soluções que integram inteligência com performance."
    },
    {
      icon: <Target className="h-10 w-10 text-[#33C3F0]" />,
      title: "Otimização de Conversão (CRO)",
      description: "Ações orientadas para reduzir o CAC e aumentar as taxas de conversão, por meio de ajustes estratégicos em campanhas, criativos, páginas de destino e mensagens."
    },
    {
      icon: <Database className="h-10 w-10 text-[#33C3F0]" />,
      title: "Tracking e Análise Avançada",
      description: "Implementação de pixels, eventos personalizados, tagueamento com ferramentas como GTM, ctwaclid e UTMs. Dashboards personalizados com dados em tempo real e relatórios com insights acionáveis."
    }
  ];

  const portfolioItems = [
    {
      title: "Loja Virtual Febracis — Da Crise ao Crescimento Exponencial",
      description: "A loja enfrentava seis meses de prejuízo em mídia paga. Implementamos estratégias que resultaram em R$77.000 em faturamento (267% de crescimento) e ROAS de 963% com investimento de R$8.000.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", // Monitor com gráfico de dados
      tags: ["Meta Ads", "Google Ads", "ROAS 963%"]
    },
    {
      title: "Urban Effort — Do Zero ao Breakeven em 3 Meses",
      description: "Marca americana de bonés que vendía apenas na Amazon conseguiu criar um canal próprio de vendas com +291% de crescimento no faturamento e breakeven atingido antes dos 3 meses.",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67", // Imagem que representa crescimento
      tags: ["Meta Ads", "Google Ads", "Catálogo Dinâmico"]
    },
    {
      title: "Borogodó Brasil — Reviravolta no Faturamento em 30 Dias",
      description: "Após queda drástica nas vendas, implementamos estratégias focadas em Meta Ads que resultaram em +36% em visitas únicas, +24% em vendas, +40% em receita e +13% em ticket médio.",
      image: "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151", // Imagem que representa transformação
      tags: ["Meta Ads", "Pixel Otimizado", "Advantage+"]
    },
    {
      title: "Vamos — +50% nas Vendas com Aquisição Inteligente",
      description: "Empresa de aluguel de veículos pesados conseguiu +50% nas vendas em um mês, expansão da base de leads e aumento do ticket médio via remarketing.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22", // Imagem que sugere crescimento positivo
      tags: ["Meta Ads", "Remarketing Dinâmico"]
    },
    {
      title: "Qualicorp — Redução de 30% no CPL",
      description: "Operadora enfrentava alto custo por lead. Com palavras-chave de fundo de funil e Smart Bidding, conseguiu -30% no CPL e maior qualidade nos leads captados.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", // Laptop com gráfico
      tags: ["Google Ads", "Smart Bidding"]
    },
    {
      title: "Unileão — Redução de 118% no CPL com Performance Max",
      description: "Instituição educacional conseguiu -118% no custo por lead, aumento expressivo de leads qualificados e ROI positivo já no primeiro mês após otimização.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b", // Vista aérea sugerindo crescimento
      tags: ["Google Ads", "Performance Max"]
    },
    {
      title: "Rastreamento Inteligente no WhatsApp — +462% em Conversas",
      description: "Implementação de rastreamento via ctwaclid nas campanhas de Meta Ads resultou em aumento de +462,16% no volume de conversas iniciadas e redução de -81,34% no custo por mensagem.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", // Laptop com gráficos
      tags: ["Meta Ads", "WhatsApp", "Tracking"]
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serviços de Mídia Paga e Performance Inteligente</h1>
        <p className="text-xl text-white mb-12">
          Campanhas orientadas por dados, automações e inteligência artificial para escalar seus resultados.
          Minha atuação une criatividade, tecnologia e performance em estratégias completas de mídia paga.
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
          <h2 className="text-2xl font-bold mb-6 text-[#0EA5E9]">Portfólio e Cases Estratégicos</h2>
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
