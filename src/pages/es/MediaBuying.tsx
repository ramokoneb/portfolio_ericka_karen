
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
import { TechnologiesSection } from "@/components/media-buying/TechnologiesSection";

const mainServices = [{
  icon: BrainCircuit,
  title: "Planificación y Ejecución Estratégica de Medios Pagos",
  description: "Campañas diseñadas para tráfico calificado, generación de leads y crecimiento de ventas alineados con tus objetivos de negocio únicos."
}, {
  icon: Database,
  title: "Seguimiento y Análisis Avanzado",
  description: "Integración perfecta de Google Analytics 4, API de Conversión de Meta, Google Tag Manager y tecnología de seguimiento líder en la industria para garantizar que cada clic sea contabilizado."
}, {
  icon: Settings,
  title: "Automatización Impulsada por Tecnología",
  description: "Usando herramientas no-code como n8n, Make (Integromat) y Zapier, automatizo informes de campaña, alertas y flujos de trabajo — ahorrándote tiempo y aumentando la agilidad."
}, {
  icon: BrainCircuit,
  title: "Optimización Impulsada por IA",
  description: "Utilizo herramientas de IA (ChatGPT + Plugins, Langflow, LLMs personalizados) para generación dinámica de creativos, segmentación de audiencia y gestión predictiva de pujas."
}, {
  icon: Link2,
  title: "Gestión de Campañas Multicanal",
  description: "Gestión integrada de medios pagos en Meta Ads, Google Ads, TikTok, LinkedIn Ads y Pinterest Ads para maximizar alcance y conversión."
}, {
  icon: BarChart2,
  title: "Informes Transparentes",
  description: "Dashboards de rendimiento semanales con insights accionables que destacan lo que está funcionando, lo que puede mejorarse y próximos pasos claros."
}];

const whyChooseMe = [{
  icon: TrendingUp,
  title: "Resultados Probados",
  description: "He gestionado presupuestos mensuales superiores a $500K con crecimiento constante de 3x-4x en ingresos para clientes."
}, {
  icon: Settings,
  title: "Combinación Única de Habilidades",
  description: "Mezcla de experiencia en estrategia de marketing y habilidades técnicas que unen medios pagos con automatización e innovación en IA."
}, {
  icon: BarChart2,
  title: "Eficiencia de Costos",
  description: "Capacidad probada para reducir costo por lead y aumentar retorno sobre inversión usando datos, tecnología y optimización continua."
}, {
  icon: MessageSquare,
  title: "Comunicación Clara",
  description: "Estilo de comunicación proactivo y colaborativo — siempre sabrás el estado y los insights de tus campañas."
}, {
  icon: Settings2,
  title: "Soluciones Personalizadas",
  description: "Experiencia atendiendo diversas industrias, adaptando estrategias y stacks tecnológicos para el viaje de crecimiento de cada negocio."
}];

const benefits = [
  {
    highlight: "Resultados Probados",
    description: "He gestionado presupuestos mensuales superiores a $500K con crecimiento constante de 3x-4x en ingresos para clientes."
  },
  {
    highlight: "Combinación Única de Habilidades",
    description: "Mezcla de experiencia en estrategia de marketing y habilidades técnicas que unen medios pagos con automatización e innovación en IA."
  },
  {
    highlight: "Eficiencia de Costos",
    description: "Capacidad probada para reducir costo por lead y aumentar retorno sobre inversión usando datos, tecnología y optimización continua."
  },
  {
    highlight: "Comunicación Clara",
    description: "Estilo de comunicación proactivo y colaborativo — siempre sabrás el estado y los insights de tus campañas."
  },
  {
    highlight: "Soluciones Personalizadas",
    description: "Experiencia atendiendo diversas industrias, adaptando estrategias y stacks tecnológicos para el viaje de crecimiento de cada negocio."
  }
];

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
    text: "Ericka Karen es una profesional dedicada con fuerte experiencia en medios pagos y ventas a través de plataformas de medios, con enfoque particular en Google.",
    author: "Henri Tex"
  },
  {
    text: "Una profesional extremadamente competente y proactiva. Constantemente aplica innovaciones en su trabajo diario.",
    author: "Amanda Carvalho"
  }
];

const MediaBuying = () => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/es">
          <Button className="mb-6 glass-card">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>

        <HeroSection
          title={<>Servicios de Medios Pagos <span className="text-[#6caddf]">Potenciados por Tecnología</span></>}
          subtitle="Crecimiento Estratégico a través de Datos, IA y Automatización"
          description1="Utilizando tecnología de vanguardia, automatización e IA, este framework de estrategia de medios pagos transforma inversiones publicitarias en motores de crecimiento escalables y predecibles."
          description2="Respaldado por más de 5 años de experiencia práctica en Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads y Pinterest Ads, combina planificación estratégica de medios con soluciones tecnológicas avanzadas para impulsar rendimiento y eficiencia."
          ctaText="Trabajemos Juntos"
          contactPath="/es/contact"
          strategicText="Atiendo a empresas listas para escalar a través de plataformas de medios pagos, implementando soluciones que combinan estrategia humana con eficiencia de máquina."
        />
        
        <ServicesSection 
          title="Lo Que Ofrezco"
          services={mainServices}
        />
        
        <WhyChooseMeSection
          title="¿Por Qué Elegirme?"
          benefits={benefits}
        />
        
        <TechnologiesSection
          title="Tecnologías que Domino"
          technologies={technologies}
        />
        
        <TestimonialsSection
          title="Feedback de Clientes"
          testimonials={testimonials}
        />
        
        <ContactSection
          title="Escalemos Tu Negocio"
          description="¿Listo para desbloquear el poder de la IA, automatización y estrategia de medios pagos? Construyamos tu próxima campaña de alto rendimiento."
          buttonText="Contáctame"
          contactPath="/es/contact"
        />
      </div>
    </div>
  );
};

export default MediaBuying;
