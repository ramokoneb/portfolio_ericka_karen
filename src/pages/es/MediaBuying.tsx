import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Code, BrainCircuit, Link2, Database, Settings, Smartphone } from "lucide-react";
import { ServiceCard } from "@/components/media-buying/ServiceCard";
import { TechnologySection } from "@/components/media-buying/TechnologySection";
import { PortfolioSection } from "@/components/media-buying/PortfolioSection";
import { HeroSection } from "@/components/media-buying/HeroSection";

const mainServices = [{
  icon: BrainCircuit,
  title: "Inteligencia & Estrategia de Negocio",
  description: "Desarrollo de estrategias de medios alineadas con los objetivos de negocio, enfocadas en resultados escalables y sostenibles."
}, {
  icon: Link2,
  title: "Planificación Avanzada de Medios",
  description: "Planificación estratégica de campañas pagas con foco en tráfico cualificado, optimización de conversión y ROI positivo."
}, {
  icon: Database,
  title: "Seguimiento y Analítica Avanzada",
  description: "Implementación de soluciones avanzadas de tracking, integración de API de conversión y sistemas de optimización basados en datos."
}, {
  icon: Smartphone,
  title: "Inteligencia Artificial Aplicada",
  description: "Uso de IA para optimizar entrega de campañas, segmentación, creativos dinámicos y predecir patrones de comportamiento."
}];

const technologies = [{
  category: "Tecnologías y Herramientas 🎯",
  tools: ["Meta Ads Manager", "Google Ads", "TikTok Ads Manager", "Pinterest Ads", "LinkedIn Ads", "Google Merchant Center"],
  icon: Link2
}, {
  category: "Tecnologías y Herramientas 📊",
  tools: ["Google Analytics (GA4)", "Google Tag Manager", "Meta Pixel & Conversion API (CAPI)", "Meta Events Manager", "Hotjar", "Looker Studio / Data Studio", "Supermetrics", "UTMs, ctwaclid, fbclid, gclid"],
  icon: Code
}, {
  category: "Tecnologías y Herramientas ⚙️",
  tools: ["n8n", "Make (Integromat)", "Zapier", "Evolution API", "Supabase"],
  icon: Settings
}, {
  category: "Tecnologías y Herramientas 🤖",
  tools: ["ChatGPT + Plugins", "Langflow / FlowiseAI", "Relevance AI", "AI Campaign Generators", "Custom LLMs for scoring and optimization"],
  icon: BrainCircuit
}];

const portfolioItems = [{
  title: "Tienda Virtual Febracis — De la Crisis al Crecimiento Exponencial",
  description: "Después de 6 meses de pérdidas en medios pagos, se implementaron enfoques estratégicos logrando R$77.000 en ingresos mensuales (267% de crecimiento) con ROAS del 963% usando Meta Ads y Google Ads.",
  image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
  tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
}, {
  title: "Urban Effort — De Cero a Punto de Equilibrio en 3 Meses",
  description: "Marca americana de gorras que vendía solo en Amazon creó su propio canal de ventas alcanzando el punto de equilibrio en menos de 90 días con +291% de crecimiento en ingresos a través de campañas estratégicas.",
  image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
  tags: ["Meta Ads", "Google Ads", "E-commerce"]
}, {
  title: "Borogodó Brasil — Cambio de Rumbo en Ingresos en 30 Días",
  description: "Tras una caída drástica en ventas, estrategias enfocadas en Meta Ads lograron +36% en visitas únicas, +24% en ventas, +40% en ingresos y +13% en ticket promedio en solo un mes.",
  image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
  tags: ["Meta Ads", "E-commerce", "Ingresos"]
}, {
  title: "Vamos — +50% en Ventas con Adquisición Inteligente",
  description: "Empresa de alquiler de vehículos pesados escaló su base de clientes con segmentación geográfica y demográfica dirigida, logrando +50% en ventas en un solo mes.",
  image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
  tags: ["Meta Ads", "Generación de Leads", "Ventas"]
}, {
  title: "Intelligent WhatsApp Tracking — +462% in Conversations",
  description: "Implementation of ctwaclid tracking in Meta Ads campaigns led to +462.16% increase in initiated conversations and 81.34% reduction in cost per message sent in just one week.",
  image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
  tags: ["Meta Ads", "WhatsApp", "Tracking"]
}, {
  title: "Unileão — Reducción del 118% en CPL con Performance Max",
  description: "Institución educativa optimizó la captación de leads con campañas Performance Max, logrando una reducción del 118% en el costo por lead y ROI positivo ya en el primer mes.",
  image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
  tags: ["Google Ads", "Educación", "Performance Max"]
}];

const MediaBuying = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/es">
          <Button variant="ghost" className="mb-4 md:mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>

        <HeroSection 
          title="🚀 Servicios de Medios Pagos & Performance Estratégica"
          subtitle="Campañas basadas en datos, inteligencia de performance y seguimiento avanzado para escalar tus resultados."
          description1="Transforma tus inversiones en medios pagos en motores de crecimiento predecibles y escalables. Combino inteligencia estratégica con sistemas avanzados de tracking para asegurar que cada campaña genere impacto medible."
          description2="Mi enfoque integra estrategia de negocio, datos de performance e inteligencia artificial — entregando campañas que consistentemente alcanzan ROI positivo."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">🧩 Tecnologías que Utilizo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">📁 Portafolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaBuying;
