
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
    title: "Campaña de Conversión E-commerce",
    category: "media",
    description: "Campaña estratégica en Facebook e Instagram para un cliente de e-commerce que logró un ROAS de 450% y disminuyó el CPA en un 35%.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "E-commerce", "ROAS"]
  },
  {
    id: "saas-lead-gen",
    title: "Generación de Leads SaaS",
    category: "media",
    description: "Campaña de Google Ads para una empresa SaaS que generó más de 200 leads calificados por mes con un 20% de conversión a clientes pagos.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Google Ads", "SaaS", "Generación de Leads"]
  },
  {
    id: "b2b-linkedin",
    title: "Campaña LinkedIn B2B",
    category: "media",
    description: "Campaña dirigida de LinkedIn Ads para un proveedor de servicios B2B que redujo el costo por adquisición en un 40% mientras aumentaba la calidad de los leads.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["LinkedIn Ads", "B2B", "Calidad de Lead"]
  },
  {
    id: "customer-support-automation",
    title: "Automatización de Soporte al Cliente",
    category: "automation",
    description: "Solución de automatización de WhatsApp que manejó el 80% de las consultas de clientes automáticamente, reduciendo el tiempo de respuesta en un 95%.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["WhatsApp", "Soporte al Cliente", "Chatbot"]
  },
  {
    id: "ai-lead-scoring",
    title: "Sistema de Puntuación de Leads con IA",
    category: "automation",
    description: "Solución de IA personalizada que analizó patrones de comportamiento del cliente para puntuar leads, mejorando la eficiencia del equipo de ventas en un 65%.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["IA", "Machine Learning", "Puntuación de Leads"]
  },
  {
    id: "crm-integration",
    title: "Integración de Marketing y CRM",
    category: "automation",
    description: "Integración completa entre plataformas de marketing y sistema CRM con flujos de trabajo automatizados de calificación de leads.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["CRM", "Integración", "Workflow"]
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
        <Link to="/es">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1c3454]">
          Automatización, IA & No-Code Portafolio
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#6caddf]">
          Una selección de proyectos que muestran experiencia en automatización, IA y soluciones No-Code.
        </p>
        
        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all" className="text-[#1c3454]">Todos los Proyectos</TabsTrigger>
            <TabsTrigger value="media" className="text-[#1c3454]">Medios Pagos</TabsTrigger>
            <TabsTrigger value="automation" className="text-[#1c3454]">Automatización & IA</TabsTrigger>
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
          Ver Detalles <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Portfolio;
