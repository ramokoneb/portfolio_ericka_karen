
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
  title: "Planificación y Ejecución Estratégica de Medios Pagos",
  description: "Campañas diseñadas para tráfico calificado, generación de leads y crecimiento de ventas alineados con sus objetivos de negocio únicos."
}, {
  icon: Database,
  title: "Seguimiento y Análisis Avanzado",
  description: "Integración perfecta de Google Analytics 4, API de Conversión de Meta, Google Tag Manager y tecnología de seguimiento líder en la industria para garantizar que cada clic sea contabilizado y optimizado."
}, {
  icon: Settings,
  title: "Automatización Impulsada por Tecnología",
  description: "Usando herramientas no-code como n8n, Make (Integromat) y Zapier, automatizo informes de campaña, alertas y flujos de trabajo, ahorrándole tiempo y aumentando la agilidad."
}, {
  icon: BrainCircuit,
  title: "Optimización Impulsada por IA",
  description: "Aprovecho herramientas de IA (ChatGPT + Plugins, Langflow, LLMs personalizados) para la generación dinámica de creativos, segmentación de audiencia y gestión predictiva de ofertas, mejorando continuamente el rendimiento de las campañas."
}, {
  icon: Link2,
  title: "Gestión de Campañas Multicanal",
  description: "Gestión integrada de medios pagos en Meta Ads, Google Ads, TikTok, LinkedIn Ads y Pinterest Ads para maximizar el alcance y la conversión."
}, {
  icon: LineChart,
  title: "Informes Transparentes",
  description: "Paneles de rendimiento semanales con información procesable que destacan lo que funciona, lo que se puede mejorar y los próximos pasos claros."
}];

const technologies = [{
  category: "Plataformas de Medios Pagos 🎯",
  tools: ["Meta Ads Manager", "Google Ads (Search, Display, Shopping, YouTube)", "TikTok Ads Manager", "LinkedIn Ads", "Pinterest Ads"],
  icon: Link2
}, {
  category: "Seguimiento y Análisis 📊",
  tools: ["Google Analytics 4", "Meta Pixel & Conversion API", "Google Tag Manager", "Hotjar"],
  icon: Code
}, {
  category: "Automatización e Integración ⚙️",
  tools: ["n8n", "Make (Integromat)", "Zapier", "Evolution API", "Supabase"],
  icon: Settings
}, {
  category: "IA y Herramientas Creativas 🤖",
  tools: ["ChatGPT + Plugins", "Langflow", "FlowiseAI", "Relevance AI", "Generadores de Campañas con IA", "LLMs Personalizados"],
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
          title="🚀 Servicios de Medios Pagos Impulsados por Tecnología | Crecimiento Estratégico a través de Datos, IA y Automatización"
          subtitle="Transforma tus inversiones publicitarias en motores de crecimiento escalables y predecibles"
          description1="¡Hola! Soy Ericka Karen, una Estratega de Medios Pagos que aprovecha tecnología de vanguardia, automatización e IA para convertir tus inversiones publicitarias en motores de crecimiento escalables y predecibles."
          description2="Con más de 5 años de experiencia gestionando campañas pagas en Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads y Pinterest Ads, mi experiencia radica en combinar la planificación estratégica de medios con potentes soluciones tecnológicas, desde seguimiento avanzado y atribución hasta automatización sin código y optimización impulsada por IA."
        />
        
        <div className="p-4 md:p-6 rounded-lg mb-8 md:mb-12 bg-[#f5f7fa]">
          <p className="text-base md:text-lg text-[#1c3454] mb-4">
            Atiendo a empresas listas para escalar a través de Meta Ads, Google Ads, TikTok Ads, Pinterest Ads y LinkedIn Ads, implementando soluciones que combinan estrategia humana con eficiencia de máquina.
          </p>
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">
          🎯 Lo Que Ofrezco:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">🎯 ¿Por Qué Elegirme?</h2>
          <ul className="space-y-4 text-[#1c3454]">
            <li className="flex items-start">
              <span className="text-[#6caddf] mr-2">•</span>
              <span>Carrera práctica gestionando campañas con presupuestos mensuales que superan los $500K, generando un crecimiento constante de 3x a 4x en ingresos para clientes.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#6caddf] mr-2">•</span>
              <span>Combinación única de experiencia en estrategia de marketing y habilidades técnicas que unen los medios pagos con la automatización y la innovación en IA.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#6caddf] mr-2">•</span>
              <span>Capacidad comprobada para reducir el costo por lead y aumentar el retorno de inversión publicitaria utilizando datos, tecnología y optimización continua.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#6caddf] mr-2">•</span>
              <span>Estilo de comunicación proactivo y colaborativo — siempre sabrás el estado y las perspectivas de tus campañas.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#6caddf] mr-2">•</span>
              <span>Experiencia sirviendo a diversas industrias, adaptando estrategias y stacks tecnológicos para el viaje de crecimiento de cada negocio.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">🎯 Tecnologías y Herramientas que Domino:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">
            🎯 Opiniones de Clientes:
          </h2>
          <div className="space-y-6">
            <div className="bg-[#f5f7fa] p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="italic text-[#1c3454]">"Ericka Karen es una profesional dedicada con gran experiencia en medios pagos y ventas a través de plataformas de medios, con un enfoque particular en Google."</p>
              <p className="text-[#6caddf] mt-2">— Henri Tex</p>
            </div>
            
            <div className="bg-[#f5f7fa] p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="italic text-[#1c3454]">"Una profesional extremadamente competente y dedicada. Busca activamente y aplica innovaciones del mercado en su trabajo diario."</p>
              <p className="text-[#6caddf] mt-2">— Amanda Carvalho</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-[#1c3454] mb-4">
              ¡Aprovechemos el poder de la tecnología y la estrategia de medios pagos para acelerar tu crecimiento!
            </p>
            <Link to="/es/contact">
              <Button className="bg-[#6caddf] hover:bg-[#5a9ac8] text-white font-medium">
                Contáctame
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaBuying;
