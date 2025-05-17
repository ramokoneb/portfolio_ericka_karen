
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: "media" | "automation";
  description: string;
  image: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "ecommerce-conversion",
    title: "Campanha de Conversão E-commerce",
    category: "media",
    description: "Campanha estratégica no Facebook e Instagram para um cliente de e-commerce que alcançou 450% de ROAS e diminuiu o CPA em 35%.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "E-commerce", "ROAS"]
  },
  {
    id: "saas-lead-gen",
    title: "Geração de Leads SaaS",
    category: "media",
    description: "Campanha do Google Ads para uma empresa SaaS que gerou mais de 200 leads qualificados por mês com 20% de conversão para clientes pagantes.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Google Ads", "SaaS", "Geração de Leads"]
  },
  {
    id: "b2b-linkedin",
    title: "Campanha LinkedIn B2B",
    category: "media",
    description: "Campanha direcionada de LinkedIn Ads para um provedor de serviços B2B que reduziu o custo por aquisição em 40% enquanto aumentava a qualidade dos leads.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["LinkedIn Ads", "B2B", "Qualidade de Lead"]
  },
  {
    id: "customer-support-automation",
    title: "Automação de Suporte ao Cliente",
    category: "automation",
    description: "Solução de automação do WhatsApp que tratou 80% das consultas de clientes automaticamente, reduzindo o tempo de resposta em 95%.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["WhatsApp", "Suporte ao Cliente", "Chatbot"]
  },
  {
    id: "ai-lead-scoring",
    title: "Sistema de Pontuação de Leads com IA",
    category: "automation",
    description: "Solução de IA personalizada que analisou padrões de comportamento do cliente para pontuar leads, melhorando a eficiência da equipe de vendas em 65%.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["IA", "Machine Learning", "Pontuação de Leads"]
  },
  {
    id: "crm-integration",
    title: "Integração de Marketing & CRM",
    category: "automation",
    description: "Integração completa entre plataformas de marketing e sistema CRM com fluxos de trabalho automatizados de qualificação de leads.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["CRM", "Integração", "Workflow"]
  }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const filteredItems = activeTab === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);
  
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1c3454]">
          Portfólio
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#6caddf]">
          Uma seleção de projetos mostrando expertise em mídia paga, automação e soluções de IA.
        </p>
        
        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all" className="text-[#1c3454]">Todos os Projetos</TabsTrigger>
            <TabsTrigger value="media" className="text-[#1c3454]">Mídia Paga</TabsTrigger>
            <TabsTrigger value="automation" className="text-[#1c3454]">Automação & IA</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="media" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="automation" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  return (
    <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-[#1c3454]">{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-[#6caddf]/10 text-[#6caddf] rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full text-[#6caddf] border-[#6caddf] hover:bg-[#6caddf] hover:text-white"
        >
          Ver Detalhes <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Portfolio;
