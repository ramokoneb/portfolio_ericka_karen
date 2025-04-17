import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BrainCircuit, Target, Database, Settings, LineChart, Bot, Workflow, Code } from "lucide-react";

const MediaBuying = () => {
  const mainServices = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-[#8A898C]" />,
      title: "Inteligência & Estratégia de Negócio",
      description: "Desenvolvimento de estratégias de mídia alinhadas aos objetivos de negócio, com foco em resultados escaláveis e sustentáveis."
    },
    {
      icon: <Target className="h-10 w-10 text-[#8A898C]" />,
      title: "Planejamento Avançado de Mídia",
      description: "Planejamento estratégico de campanhas pagas com foco em tráfego qualificado, otimização de conversão e ROI positivo."
    },
    {
      icon: <Database className="h-10 w-10 text-[#8A898C]" />,
      title: "Rastreamento e Analytics Avançado",
      description: "Implementação de soluções avançadas de tracking, integração de API de conversão e sistemas de otimização orientados por dados."
    },
    {
      icon: <Bot className="h-10 w-10 text-[#8A898C]" />,
      title: "Inteligência Artificial Aplicada",
      description: "Uso de IA para otimizar entrega de campanhas, segmentação, criativos dinâmicos e prever padrões de comportamento."
    }
  ];

  const technologies = [
    {
      category: "Tecnologias & Ferramentas 🎯",
      tools: [
        "Meta Ads Manager (Facebook, Instagram, Audience Network)",
        "Google Ads (Search, Display, YouTube, Shopping, PMax)",
        "TikTok Ads Manager",
        "Pinterest Ads",
        "LinkedIn Ads (caso atenda B2B)",
        "Google Merchant Center (para e-commerces em Shopping)"
      ],
      icon: <Target className="h-6 w-6" />
    },
    {
      category: "Tecnologias & Ferramentas 📊",
      tools: [
        "Google Analytics (GA4)",
        "Google Tag Manager",
        "Meta Pixel & Conversion API (CAPI)",
        "Meta Events Manager",
        "Hotjar",
        "Looker Studio / Data Studio",
        "Supermetrics",
        "UTMs, ctwaclid, fbclid, gclid"
      ],
      icon: <LineChart className="h-6 w-6" />
    },
    {
      category: "Tecnologias & Ferramentas ⚙️",
      tools: [
        "n8n",
        "Make (Integromat)",
        "Zapier",
        "Lovable",
        "Evolution API",
        "Supabase",
        "Firebase"
      ],
      icon: <Settings className="h-6 w-6" />
    },
    {
      category: "Tecnologias & Ferramentas 🤖",
      tools: [
        "ChatGPT + Plugins",
        "Langflow / FlowiseAI",
        "Relevance AI",
        "AI Campaign Generators",
        "LLMs customizados para scoring e otimização"
      ],
      icon: <BrainCircuit className="h-6 w-6" />
    }
  ];

  const portfolioItems = [
    {
      title: "Loja Virtual Febracis — Da Crise ao Crescimento Exponencial",
      description: "Após 6 meses de prejuízo em mídia paga, implementou-se abordagens estratégicas alcançando R$77.000 em faturamento mensal (267% de crescimento) com ROAS de 963% usando Meta Ads e Google Ads.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=500",
      tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
    },
    {
      title: "Urban Effort — Do Zero ao Breakeven em 3 Meses",
      description: "Marca americana de bonés que vendia apenas na Amazon criou canal próprio de vendas atingindo breakeven em menos de 90 dias com +291% de crescimento no faturamento através de campanhas estratégicas.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500",
      tags: ["Meta Ads", "Google Ads", "E-commerce"]
    },
    {
      title: "Borogodó Brasil — Reviravolta no Faturamento em 30 Dias",
      description: "Após queda drástica nas vendas, estratégias focadas em Meta Ads alcançaram +36% em visitas únicas, +24% em vendas, +40% em receita e +13% em ticket médio em apenas um mês.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=500",
      tags: ["Meta Ads", "E-commerce", "Faturamento"]
    },
    {
      title: "Vamos — +50% nas Vendas com Aquisição Inteligente",
      description: "Empresa de aluguel de veículos pesados escalou sua base de clientes com segmentação geográfica e demográfica direcionada, alcançando +50% nas vendas em um único mês.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
      tags: ["Meta Ads", "Geração de Leads", "Vendas"]
    },
    {
      title: "Qualicorp — Redução de 30% no CPL com Segmentação de Fundo de Funil",
      description: "Operadora de saúde enfrentando alto custo por lead implementou palavras-chave de fundo de funil e smart bidding, reduzindo CPL em 30% com maior qualidade nos leads.",
      image: "https://images.unsplash.com/photo-1590402494610-2c378a9114c6?q=80&w=500",
      tags: ["Google Ads", "Geração de Leads", "CPL"]
    },
    {
      title: "Unileão — Redução de 118% no CPL com Performance Max",
      description: "Instituição educacional otimizou captação de leads com campanhas Performance Max, alcançando 118% de redução no custo por lead e ROI positivo já no primeiro mês.",
      image: "https://images.unsplash.com/photo-1590402494610-2c378a9114c6?q=80&w=500",
      tags: ["Google Ads", "Educação", "Performance Max"]
    },
    {
      title: "Rastreamento Inteligente no WhatsApp — +462% em Conversas",
      description: "Implementação de rastreamento via ctwaclid nas campanhas de Meta Ads levou a um aumento de +462,16% nas conversas iniciadas e redução de 81,34% no custo por mensagem enviada em apenas uma semana.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500",
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Serviços de Mídia Paga & Performance Estratégica</h1>
        <p className="text-xl text-white mb-12">
          Campanhas orientadas por dados, inteligência de performance e rastreamento avançado para escalar seus resultados.
        </p>
        
        <div className="bg-white/10 p-6 rounded-lg mb-12">
          <p className="text-lg text-white mb-4">
            Transforme seus investimentos em mídia paga em motores de crescimento previsíveis e escaláveis. Combino inteligência estratégica com sistemas avançados de tracking para garantir que cada campanha gere impacto mensurável.
          </p>
          <p className="text-lg text-white">
            Minha abordagem integra estratégia de negócio, dados de performance e inteligência artificial — entregando campanhas que consistentemente alcançam ROI positivo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
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
        
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-8 text-black">Tecnologias & Ferramentas</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {tech.icon}
                    <CardTitle className="text-lg">{tech.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-2">
                    {tech.tools.map((tool) => (
                      <span 
                        key={tool}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-black">Casos de Sucesso Estratégicos 🚀</h2>
          <div className="grid md:grid-cols-2 gap-8">
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

export default MediaBuying;
