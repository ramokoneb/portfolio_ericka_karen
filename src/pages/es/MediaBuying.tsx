
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  MessageSquare, 
  Code, 
  BrainCircuit, 
  Link2, 
  Database, 
  Settings, 
  Smartphone,
  Target,
  LineChart
} from "lucide-react";
import { ServiceCard } from "@/components/media-buying/ServiceCard";
import { TechnologyCard } from "@/components/media-buying/TechnologyCard";
import { HeroSection } from "@/components/media-buying/HeroSection";

const mainServices = [{
  icon: BrainCircuit,
  title: "Inteligencia & Estrategia de Negocio",
  description: "Desarrollo de estrategias de medios alineadas con objetivos de negocio, enfocadas en resultados escalables y sostenibles."
}, {
  icon: Link2,
  title: "Planificación Avanzada de Medios",
  description: "Planificación estratégica de campañas pagas con enfoque en tráfico calificado, optimización de conversión y ROI positivo."
}, {
  icon: Database,
  title: "Seguimiento & Análisis Avanzado",
  description: "Implementación de soluciones avanzadas de tracking, integración de API de conversión y sistemas de optimización basados en datos."
}, {
  icon: Smartphone,
  title: "Inteligencia Artificial Aplicada",
  description: "Uso de IA para optimizar entrega de campañas, segmentación, creativos dinámicos y predecir patrones de comportamiento."
}];

const technologies = [{
  category: "Tecnologías & Herramientas 🎯",
  tools: ["Meta Ads Manager", "Google Ads", "TikTok Ads Manager", "Pinterest Ads", "LinkedIn Ads", "Google Merchant Center"],
  icon: Link2
}, {
  category: "Tecnologías & Herramientas 📊",
  tools: ["Google Analytics (GA4)", "Google Tag Manager", "Meta Pixel & Conversion API (CAPI)", "Meta Events Manager", "Hotjar", "Looker Studio / Data Studio", "Supermetrics", "UTMs, ctwaclid, fbclid, gclid"],
  icon: Code
}, {
  category: "Tecnologías & Herramientas ⚙️",
  tools: ["n8n", "Make (Integromat)", "Zapier", "Evolution API", "Supabase"],
  icon: Settings
}, {
  category: "Tecnologías & Herramientas 🤖",
  tools: ["ChatGPT + Plugins", "Langflow / FlowiseAI", "Relevance AI", "AI Campaign Generators", "Custom LLMs for scoring and optimization"],
  icon: BrainCircuit
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
          subtitle="Campañas orientadas por datos, inteligencia de performance y seguimiento avanzado para escalar tus resultados."
          description1="Transforma tus inversiones en medios pagos en motores de crecimiento predecibles y escalables. Combino inteligencia estratégica con sistemas avanzados de seguimiento para garantizar que cada campaña genere impacto mensurable."
          description2="Mi enfoque integra estrategia de negocio, datos de performance e inteligencia artificial — entregando campañas que consistentemente alcanzan ROI positivo."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
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
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">
            📈 Casos de Éxito
          </h2>
          <div className="text-center mb-8">
            <Link to="/es/cases/media-buying">
              <Button className="bg-[#6caddf] hover:bg-[#5a9ac8] text-white font-medium">
                Ver Todos los Estudios de Caso
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaBuying;
