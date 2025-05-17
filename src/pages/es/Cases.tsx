
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface Case {
  id: string;
  title: string;
  category: "media" | "automation";
  description: string;
  results: string[];
  image: string;
  tags: string[];
}

const caseStudies: Case[] = [
  {
    id: "febracis-store",
    title: "Tienda Virtual Febracis — De la Crisis al Crecimiento Exponencial",
    category: "media",
    description: "Después de 6 meses de pérdidas en medios pagos, se implementaron enfoques estratégicos logrando R$77.000 en ingresos mensuales (267% de crecimiento) con un ROAS de 963% usando Meta Ads y Google Ads.",
    results: ["267% de crecimiento en ingresos", "963% ROAS", "Rentable después de 6 meses de pérdidas"],
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
  },
  {
    id: "urban-effort",
    title: "Urban Effort — De Cero al Punto de Equilibrio en 3 Meses",
    category: "media",
    description: "Marca americana de gorras que vendía solo en Amazon creó su propio canal de ventas alcanzando el punto de equilibrio en menos de 90 días con un +291% de crecimiento en ingresos a través de campañas estratégicas.",
    results: ["Punto de equilibrio en 90 días", "291% de crecimiento en ingresos", "Nuevo canal de ventas establecido"],
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Google Ads", "E-commerce"]
  },
  {
    id: "borogodo",
    title: "Borogodó Brasil — Cambio en los Ingresos en 30 Días",
    category: "media",
    description: "Después de una caída drástica en ventas, estrategias enfocadas en Meta Ads lograron +36% en visitas únicas, +24% en ventas, +40% en ingresos y +13% en ticket promedio en solo un mes.",
    results: ["+36% en visitas únicas", "+24% en ventas", "+40% en ingresos", "+13% en ticket promedio"],
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "E-commerce", "Ingresos"]
  },
  {
    id: "whatsapp-automation",
    title: "Automatización de WhatsApp – +80% de consultas automatizadas",
    category: "automation",
    description: "Solución de automatización desarrollada para servicio al cliente vía WhatsApp, con chatbot inteligente capaz de manejar el 80% de las preguntas frecuentes. Reducción del 95% en tiempo de respuesta y aumento en la satisfacción del servicio.",
    results: ["80% de consultas automatizadas", "95% de reducción en tiempo de respuesta", "Aumento en la satisfacción"],
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["WhatsApp API", "n8n", "NLP", "Chatbot"]
  },
  {
    id: "lead-scoring",
    title: "Sistema de Puntuación de Leads con IA – +65% de eficiencia",
    category: "automation",
    description: "Sistema de puntuación de leads basado en machine learning, entrenado con patrones de comportamiento de usuarios reales. Mejoró la eficiencia del equipo de ventas en un 65%, priorizando leads con mayor probabilidad de conversión.",
    results: ["+65% de eficiencia en equipo de ventas", "Mayores tasas de conversión", "Mejor calidad de leads"],
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["n8n", "Supabase", "Machine Learning", "LLMs"]
  },
  {
    id: "tracking-system",
    title: "Smart Tracking con Meta API – +462% en conversaciones",
    category: "automation",
    description: "Implementación de seguimiento vía ctwaclid para identificar con precisión los anuncios que generaban conversaciones en WhatsApp. Aumento de +462.16% en volumen de conversaciones y reducción de -81.34% en costo por mensaje enviado en una semana.",
    results: ["+462% en conversaciones", "-81% en costo por mensaje", "Atribución avanzada"],
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Meta API", "n8n", "Supabase", "Analytics"]
  }
];

const Cases = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const filteredCases = activeTab === "all" 
    ? caseStudies 
    : caseStudies.filter(c => c.category === activeTab);
  
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/es">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1c3454]">
          Estudios de Caso
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#6caddf]">
          Resultados reales logrados con enfoques estratégicos y soluciones innovadoras.
        </p>
        
        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all" className="text-[#1c3454]">Todos los Casos</TabsTrigger>
            <TabsTrigger value="media" className="text-[#1c3454]">Medios Pagos</TabsTrigger>
            <TabsTrigger value="automation" className="text-[#1c3454]">Automatización & IA</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="media" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="automation" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const CaseCard = ({ caseItem }: { caseItem: Case }) => {
  return (
    <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
      <div className="h-48 overflow-hidden">
        <img 
          src={caseItem.image} 
          alt={caseItem.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-[#1c3454]">{caseItem.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{caseItem.description}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-[#6caddf] mb-2">Resultados:</h4>
          <ul className="list-disc pl-5">
            {caseItem.results.map((result, index) => (
              <li key={index} className="text-gray-600">{result}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {caseItem.tags.map((tag) => (
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
          Ver Estudio Completo <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Cases;
