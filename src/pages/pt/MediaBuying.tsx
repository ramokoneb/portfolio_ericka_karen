
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Facebook, Instagram, BarChart, TrendingUp, Search, Bookmark, Youtube, Bot, Target, LineChart, Database, MessageSquare } from "lucide-react";

const MediaBuying = () => {
  const services = [
    {
      icon: <Facebook className="h-10 w-10 text-[#8A898C]" />,
      title: "Meta Ads",
      description: "Gerenciamento estratégico de campanhas para Facebook, Instagram e Audience Network com segmentação avançada, funis estruturados e ferramentas de automação como Advantage+ e catálogo dinâmico. Serviço completo desde copywriting até criativos, focado em resultados."
    },
    {
      icon: <Search className="h-10 w-10 text-[#8A898C]" />,
      title: "Google Ads",
      description: "Campanhas de Search, Display, YouTube, Shopping e Performance Max, sempre com pesquisa aprofundada, estruturação de palavras-chave, lances inteligentes e otimização constante de ROAS."
    },
    {
      icon: <Instagram className="h-10 w-10 text-[#8A898C]" />,
      title: "TikTok Ads",
      description: "Criação de campanhas visuais focadas em engajamento e conversão. Estratégias que aproveitam o formato nativo da plataforma, com linguagem criativa e objetivos de performance."
    },
    {
      icon: <Bookmark className="h-10 w-10 text-[#8A898C]" />,
      title: "Pinterest Ads",
      description: "Campanhas focadas em descoberta e conversão, com criativos desenhados para o formato inspiracional da plataforma. Ideal para e-commerce, moda, decoração, beleza e segmentos visuais. Estratégias de funil completo voltadas para crescimento sustentável e tráfego qualificado."
    },
    {
      icon: <Bot className="h-10 w-10 text-[#8A898C]" />,
      title: "Inteligência Artificial Aplicada",
      description: "Uso de IA nas principais plataformas para otimizar entrega, segmentação, criativos dinâmicos e prever padrões de comportamento. Soluções que integram inteligência com performance."
    },
    {
      icon: <Target className="h-10 w-10 text-[#8A898C]" />,
      title: "Otimização de Conversão (CRO)",
      description: "Ações voltadas para reduzir CAC e aumentar taxas de conversão através de ajustes estratégicos em campanhas, criativos, páginas de destino e mensagens."
    },
    {
      icon: <Database className="h-10 w-10 text-[#8A898C]" />,
      title: "Rastreamento Avançado e Analytics",
      description: "Implementação de pixels, eventos personalizados, tagueamento com ferramentas como GTM, ctwaclid e UTMs. Dashboards personalizados com dados em tempo real e relatórios com insights acionáveis."
    }
  ];

  const portfolioItems = [
    {
      title: "Loja Virtual Febracis — Da Crise ao Crescimento Exponencial",
      description: "Após 6 meses de prejuízo em mídia paga, implementou-se abordagens estratégicas alcançando R$77.000 em faturamento mensal (267% de crescimento) com ROAS de 963% usando Meta Ads e Google Ads.",
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=500",
      tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
    },
    {
      title: "Urban Effort — Do Zero ao Breakeven em 3 Meses",
      description: "Marca americana de bonés que vendia apenas na Amazon criou canal próprio de vendas atingindo breakeven em menos de 90 dias com +291% de crescimento no faturamento através de campanhas estratégicas.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=500",
      tags: ["Meta Ads", "Google Ads", "E-commerce"]
    },
    {
      title: "Borogodó Brasil — Reviravolta no Faturamento em 30 Dias",
      description: "Após queda drástica nas vendas, estratégias focadas em Meta Ads alcançaram +36% em visitas únicas, +24% em vendas, +40% em receita e +13% em ticket médio em apenas um mês.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
      tags: ["Meta Ads", "E-commerce", "Faturamento"]
    },
    {
      title: "Vamos — +50% nas Vendas com Aquisição Inteligente",
      description: "Empresa de aluguel de veículos pesados escalou sua base de clientes com segmentação geográfica e demográfica direcionada, alcançando +50% nas vendas em um único mês.",
      image: "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?q=80&w=500",
      tags: ["Meta Ads", "Geração de Leads", "Vendas"]
    },
    {
      title: "Qualicorp — Redução de 30% no CPL com Segmentação de Fundo de Funil",
      description: "Operadora de saúde enfrentando alto custo por lead implementou palavras-chave de fundo de funil e smart bidding, reduzindo CPL em 30% com maior qualidade nos leads.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=500",
      tags: ["Google Ads", "Geração de Leads", "CPL"]
    },
    {
      title: "Unileão — Redução de 118% no CPL com Performance Max",
      description: "Instituição educacional otimizou captação de leads com campanhas Performance Max, alcançando 118% de redução no custo por lead e ROI positivo já no primeiro mês.",
      image: "https://images.unsplash.com/photo-1616514197671-15d99ce7253f?q=80&w=500",
      tags: ["Google Ads", "Educação", "Performance Max"]
    },
    {
      title: "Rastreamento Inteligente no WhatsApp — +462% em Conversas",
      description: "Implementação de rastreamento via ctwaclid nas campanhas de Meta Ads levou a um aumento de +462,16% nas conversas iniciadas e redução de 81,34% no custo por mensagem enviada em apenas uma semana.",
      image: "https://images.unsplash.com/photo-1607703703674-df96aa081c7d?q=80&w=500",
      tags: ["Meta Ads", "WhatsApp", "Rastreamento"]
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-[#000000]">
      <div className="max-w-6xl mx-auto">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 bg-white/20 hover:bg-white/30 text-white">
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
          <h2 className="text-2xl font-bold mb-6 text-black">Casos de Sucesso Estratégicos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white">
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

export default MediaBuying;
