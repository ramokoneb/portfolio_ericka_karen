
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  BrainCircuit, 
  Link2, 
  Database, 
  Settings, 
  BarChart2,
  TrendingUp,
  MessageSquare,
  Settings2
} from "lucide-react";
import { HeroSection } from "@/components/media-buying/HeroSection";
import { ServicesSection } from "@/components/media-buying/ServicesSection";
import { WhyChooseMeSection } from "@/components/media-buying/WhyChooseMeSection";
import { TestimonialsSection } from "@/components/media-buying/TestimonialsSection";
import { ContactSection } from "@/components/media-buying/ContactSection";
import { TechnologyCard } from "@/components/media-buying/TechnologyCard";

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
  icon: BarChart2,
  title: "Informes Transparentes",
  description: "Paneles de rendimiento semanales con información procesable que destacan lo que funciona, lo que se puede mejorar y los próximos pasos claros."
}];

const whyChooseMe = [{
  icon: TrendingUp,
  title: "Resultados Comprobados",
  description: "Gestioné presupuestos mensuales superiores a $500K con un crecimiento constante de 3x-4x en ingresos para clientes."
}, {
  icon: Settings,
  title: "Combinación Única de Habilidades",
  description: "Mezcla de experiencia en estrategia de marketing y habilidades técnicas que unen los medios pagos con la automatización y la innovación en IA."
}, {
  icon: BarChart2,
  title: "Eficiencia de Costos",
  description: "Capacidad comprobada para reducir el costo por lead y aumentar el retorno de inversión publicitaria utilizando datos, tecnología y optimización continua."
}, {
  icon: MessageSquare,
  title: "Comunicación Clara",
  description: "Estilo de comunicación proactivo y colaborativo — siempre sabrás el estado y las perspectivas de tus campañas."
}, {
  icon: Settings2,
  title: "Soluciones Personalizadas",
  description: "Experiencia sirviendo a diversas industrias, adaptando estrategias y stacks tecnológicos para el viaje de crecimiento de cada negocio."
}];

const technologies = [{
  category: "Plataformas de Medios Pagos",
  tools: ["Meta Ads Manager", "Google Ads (Search, Display, Shopping, YouTube)", "TikTok Ads Manager", "LinkedIn Ads", "Pinterest Ads"],
  icon: Link2
}, {
  category: "Seguimiento y Análisis",
  tools: ["Google Analytics 4", "Meta Pixel & Conversion API", "Google Tag Manager", "Hotjar"],
  icon: Database
}, {
  category: "Automatización e Integración",
  tools: ["n8n", "Make (Integromat)", "Zapier", "Evolution API", "Supabase"],
  icon: Settings
}, {
  category: "IA y Herramientas Creativas",
  tools: ["ChatGPT + Plugins", "Langflow", "FlowiseAI", "Relevance AI", "Generadores de Campañas con IA", "LLMs Personalizados"],
  icon: BrainCircuit
}, {
  category: "Informes",
  tools: ["API Rest", "n8n"],
  icon: BarChart2
}];

const testimonials = [
  {
    text: "Ericka Karen es una profesional dedicada con gran experiencia en medios pagos y ventas a través de plataformas de medios, con un enfoque particular en Google.",
    author: "Henri Tex"
  },
  {
    text: "Una profesional extremadamente competente y proactiva. Ella constantemente aplica innovaciones en su trabajo diario.",
    author: "Amanda Carvalho"
  }
];

const MediaBuying = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/es">
          <Button variant="ghost" className="mb-6 bg-[#6caddf]/10 text-[#1c3454] hover:bg-[#6caddf]/20 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>

        <HeroSection
          title={<>Servicios de Medios Pagos <span className="text-[#6caddf]">Impulsados por Tecnología</span></>}
          subtitle="Crecimiento Estratégico a través de Datos, IA y Automatización"
          description1="Aprovechando tecnología de vanguardia, automatización e IA, este marco estratégico de medios pagos transforma inversiones publicitarias en motores de crecimiento escalables y predecibles."
          description2="Respaldado por más de 5 años de experiencia práctica en Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads y Pinterest Ads, combina planificación estratégica de medios con soluciones tecnológicas avanzadas para impulsar el rendimiento y la eficiencia."
          ctaText="Trabajemos Juntos"
          contactPath="/es/contact"
        />
        
        <ServicesSection 
          title="Lo Que Ofrezco"
          services={mainServices}
        />
        
        <WhyChooseMeSection
          title="¿Por Qué Elegirme?"
          items={whyChooseMe}
        />
        
        <div className="mb-16 lg:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454] flex items-center">
            <span className="text-[#6caddf] mr-2">🎯</span> Tecnologías que Domino
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </div>
        
        <TestimonialsSection
          title="Opiniones de Clientes"
          testimonials={testimonials}
        />
        
        <ContactSection
          title="Escalemos tu Negocio"
          description="¿Listo para desbloquear el poder de la IA, la automatización y la estrategia de medios pagos? Construyamos tu próxima campaña de alto rendimiento."
          buttonText="Contáctame"
          contactPath="/es/contact"
        />
      </div>
    </div>
  );
};

export default MediaBuying;
