
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MessageSquare, Code, BrainCircuit, Link2, Database, Settings, Smartphone, Star } from "lucide-react";
import { ServiceCard } from "@/components/media-buying/ServiceCard";
import { TechnologyCard } from "@/components/media-buying/TechnologyCard";
import { HeroSection } from "@/components/media-buying/HeroSection";
import { TestimonialCard } from "@/components/media-buying/TestimonialCard";
import { Contact } from "@/components/media-buying/Contact";

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
    quote: "Proactiva, inventiva, nunca complaciente — Karen es, sin duda, una de las profesionales más inspiradoras que he conocido.",
    author: "Roberto Junior",
    rating: 5
  },
  {
    quote: "Extremadamente competente y siempre integrando las últimas innovaciones del mercado en su trabajo.",
    author: "Amanda Carvalho",
    rating: 5
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
        <section className="mb-16 bg-[#6caddf]/10 rounded-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1c3454]">¿Por Qué Elegirme?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-bold text-[#6caddf] text-lg">{benefit.highlight}</p>
                <p className="text-[#1c3454]/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454]">Tecnologías y Herramientas que Domino</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454]">Feedback de Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="mb-8">
          <div className="bg-[#1c3454] text-white rounded-lg p-6 md:p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">¿Listo para Automatizar y Escalar?</h2>
            <p className="mb-6 text-white/80">
              Construyamos soluciones inteligentes que transformen sus operaciones digitales. Envíame un mensaje y conversemos.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#6caddf] hover:bg-[#5a9ac8] w-full sm:w-auto" asChild>
                <Link to="/es/contact" className="flex items-center justify-center">
                  Construyamos Más Inteligente <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AutomationAI;
