
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MessageSquare, Code, BrainCircuit, Link2, Database, Settings, Smartphone, Star } from "lucide-react";
import { ServiceCard } from "@/components/media-buying/ServiceCard";
import { TechnologyCard } from "@/components/media-buying/TechnologyCard";
import { HeroSection } from "@/components/media-buying/HeroSection";
import { WhyChooseMeSection } from "@/components/media-buying/WhyChooseMeSection";
import { TestimonialsSection } from "@/components/media-buying/TestimonialsSection";
import { ContactSection } from "@/components/media-buying/ContactSection";

const technologies = [
  {
    category: "Automatización & Integración",
    tools: ["n8n", "Make (Integromat)", "Zapier"],
    icon: Settings
  }, 
  {
    category: "Desarrollo No-Code",
    tools: ["Bubble", "FlutterFlow", "Airtable"],
    icon: Smartphone
  }, 
  {
    category: "IA & Lógica Inteligente",
    tools: ["ChatGPT + Plugins", "FlowiseAI", "Langflow"],
    icon: BrainCircuit
  }, 
  {
    category: "Datos & Backends",
    tools: ["Supabase", "API Rest", "Meta API"],
    icon: Database
  }
];

const services = [
  {
    icon: BrainCircuit,
    title: "Automatizaciones con IA",
    description: "Sistemas inteligentes para optimizar flujos de trabajo, marketing y procesos de soporte con inteligencia artificial."
  }, 
  {
    icon: MessageSquare,
    title: "Automatización de WhatsApp",
    description: "Calificación de leads y engagement con clientes a través de sistemas avanzados de mensajería e integraciones de API."
  }, 
  {
    icon: Link2,
    title: "Integraciones Personalizadas",
    description: "CRMs, herramientas de marketing y canales de comunicación trabajando en perfecta sincronización."
  }, 
  {
    icon: Code,
    title: "Desarrollo No-Code",
    description: "Cree dashboards y aplicaciones con Bubble, FlutterFlow y otras potentes plataformas no-code."
  },
  {
    icon: BrainCircuit,
    title: "Agentes de IA para Datos y Operaciones",
    description: "Agentes inteligentes para analizar información, tomar decisiones y ejecutar acciones en toda su stack tecnológica."
  }
];

const benefits = [
  {
    highlight: "80% de automatización",
    description: "en la atención vía WhatsApp"
  },
  {
    highlight: "65% de aumento",
    description: "en la eficiencia del equipo con sistemas de IA"
  },
  {
    highlight: "400%+ de crecimiento",
    description: "en conversaciones calificadas"
  },
  {
    highlight: "Combinación de habilidades",
    description: "lógica de ingeniería + UX + inteligencia de negocios"
  },
  {
    highlight: "Comunicación",
    description: "transparente, proactiva + entrega puntual"
  }
];

const testimonials = [
  {
    text: "Proactiva, inventiva, nunca complaciente — Karen es, sin duda, una de las profesionales más inspiradoras que he conocido.",
    author: "Roberto Junior"
  },
  {
    text: "Extremadamente competente y siempre integrando las últimas innovaciones del mercado en su trabajo.",
    author: "Amanda Carvalho"
  }
];

const AutomationAI = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <Link to="/es">
          <Button variant="ghost" className="mb-6 bg-white/20 hover:bg-white/30 text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>
        
        {/* Hero Section */}
        <HeroSection 
          title={<>Experta en IA & No-Code para Empresas en Crecimiento</>}
          subtitle="Revolucionando operaciones a través de automatización inteligente y sistemas de IA escalables."
          description1="Ya sea que esté optimizando operaciones internas o escalando interacciones con clientes, diseño soluciones personalizadas que aumentan la eficiencia y liberan a su equipo para que se concentre en lo más importante: crecimiento, estrategia e innovación."
          description2="Trabajo con empresas visionarias listas para escalar a través de la automatización e IA — combinando visión estratégica con sistemas inteligentes que optimizan operaciones y generan resultados medibles."
        />
        
        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454]">Qué Hago Por Ti</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            ))}
          </div>
        </section>
        
        {/* Why Choose Me Section */}
        <WhyChooseMeSection
          title="¿Por Qué Elegirme?"
          benefits={benefits}
        />
        
        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454]">Tecnologías y Herramientas que Domino</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </section>
        
        {/* Testimonials Section - Updated to match MediaBuying */}
        <TestimonialsSection
          title="Feedback de Clientes"
          testimonials={testimonials}
        />
        
        {/* Contact Section - Updated to match MediaBuying */}
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

export default AutomationAI;
