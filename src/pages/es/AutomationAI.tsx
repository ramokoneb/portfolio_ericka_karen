
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Code, BrainCircuit, Link2, Database, Settings, Smartphone } from "lucide-react";
import { ServiceCard } from "@/components/automation/ServiceCard";
import { TechnologyCard } from "@/components/automation/TechnologyCard";
import { PortfolioCard } from "@/components/automation/PortfolioCard";
import { MainService, Technology, PortfolioItem } from "@/types/automation";

const portfolioItems: PortfolioItem[] = [
  {
    title: "Automatización de WhatsApp – +80% de consultas automatizadas",
    description: "Solución de automatización desarrollada para servicio al cliente vía WhatsApp, con chatbot inteligente capaz de manejar el 80% de las preguntas frecuentes. Reducción del 95% en tiempo de respuesta y aumento en la satisfacción del servicio.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["WhatsApp API", "n8n", "NLP", "Chatbot"],
    tech: "WhatsApp API • n8n • NLP • Lógica condicional",
    goal: "Atención al cliente automatizada y escalable",
    highlight: "Reducción drástica en necesidad de atención humana"
  }, {
    title: "Sistema de Puntuación de Leads con IA – +65% de eficiencia",
    description: "Sistema de puntuación de leads basado en machine learning, entrenado con patrones de comportamiento de usuarios reales. Mejoró la eficiencia del equipo de ventas en un 65%, priorizando leads con mayor probabilidad de conversión.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["n8n", "Supabase", "Machine Learning", "LLMs"],
    tech: "n8n • Supabase • LLMs personalizados",
    goal: "Calificación automática de leads",
    highlight: "Inteligencia aplicada al proceso de compra"
  }, {
    title: "CRM Automático vía WhatsApp – Integración en tiempo real",
    description: "Sistema que crea automáticamente una tarjeta de nuevo lead en CRM tan pronto como se inicia el primer contacto en WhatsApp. La integración utiliza FlutterFlow + Lovable + n8n y garantiza un flujo 100% automatizado.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["FlutterFlow", "Lovable", "n8n", "CRM"],
    tech: "FlutterFlow • Lovable • n8n",
    goal: "Captura y organización automática de leads",
    highlight: "Sincronización inmediata entre WhatsApp y CRM"
  }, {
    title: "Smart Tracking con Meta API – +462% en conversaciones",
    description: "Implementación de seguimiento vía ctwaclid para identificar con precisión los anuncios que generaban conversaciones en WhatsApp. Aumento de +462.16% en volumen de conversaciones y reducción de -81.34% en costo por mensaje enviado en una semana.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Meta API", "n8n", "Supabase", "Analytics"],
    tech: "Meta API • n8n • Supabase • UTMs",
    goal: "Medición precisa de campañas de mensajes",
    highlight: "Seguimiento avanzado con datos reales de conversión"
  }, {
    title: "Bot de Métricas para WhatsApp – Automatización de informes",
    description: "Sistema que envía automáticamente las métricas de campañas Meta y Google Ads a grupos de WhatsApp. Ahorro de tiempo del equipo, con datos confiables y envío personalizado para cada grupo.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Meta API", "Google Ads API", "WhatsApp API", "n8n"],
    tech: "Meta API • Google Ads API • Evolution API • WhatsApp API • n8n",
    goal: "Seguimiento automatizado de campañas",
    highlight: "Informes enviados en tiempo real, sin intervención manual"
  }, {
    title: "Follow-up Automático – Recuperación de leads con IA",
    description: "Sistema que identifica leads no respondidos en WhatsApp y activa mensajes de follow-up automáticos. Mejora el tiempo de reenganche, reduce el abandono del embudo y aumenta conversiones.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["n8n", "Supabase", "WhatsApp API", "Automation"],
    tech: "n8n • Supabase • WhatsApp API",
    goal: "Recuperación activa de oportunidades",
    highlight: "Acciones automáticas basadas en comportamiento"
  }, {
    title: "Agentes de IA – Atención y campañas automatizadas",
    description: "Creación de múltiples agentes de IA: desde atención básica hasta análisis profundo de campañas de medios pagados. Un agente puede analizar datos, sugerir optimizaciones y estructurar campañas en Meta Ads.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["ChatGPT", "Langflow", "Relevance AI", "n8n"],
    tech: "ChatGPT Plugins • Langflow • Relevance AI • n8n",
    goal: "Atención, análisis y ejecución inteligente",
    highlight: "IA con autonomía para sugerir e implementar acciones"
  }, {
    title: "Sistema de QR Code con Instancia Automatizada",
    description: "Desarrollo de plataforma que genera QR Codes únicos para cada cliente, activando una nueva instancia integrada vía Evolution API. Permite creación de entornos personalizados con lógica preconfigurada.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Lovable", "Evolution API", "n8n"],
    tech: "Lovable • Evolution API • n8n",
    goal: "Generación automática de entornos y flujos",
    highlight: "Escalabilidad y cero intervención manual para activación"
  }, {
    title: "Sitio de Captación con Lovable",
    description: "Landing page creada con Lovable enfocada en captación de leads para prestación de servicios. Integraciones de tracking y formulario con envío directo a CRM y WhatsApp.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Lovable", "Webhooks", "CRM personalizado"],
    tech: "Lovable • Webhooks • CRM personalizado",
    goal: "Captación y calificación automatizada de leads",
    highlight: "Listo para ejecutar campañas con tracking completo"
  }
];

const technologies: Technology[] = [
  {
    category: "Automatización & Integración",
    tools: ["n8n", "Make", "Zapier"],
    icon: <Settings className="h-6 w-6" />
  }, {
    category: "Web & Mobile App Builders",
    tools: ["Bubble", "FlutterFlow", "Lovable"],
    icon: <Smartphone className="h-6 w-6" />
  }, {
    category: "IA & Lógica Inteligente",
    tools: ["ChatGPT + Plugins", "FlowiseAI", "Relevance AI", "Langflow"],
    icon: <BrainCircuit className="h-6 w-6" />
  }, {
    category: "Bases de Datos & Backends No-Code",
    tools: ["Airtable", "Baserow", "NocoDB", "Xano", "Supabase", "Firebase"],
    icon: <Database className="h-6 w-6" />
  }
];

const mainServices: MainService[] = [{
  icon: <BrainCircuit className="h-8 w-8 md:h-10 md:w-10 text-[#8A898C]" />,
  title: "IA & Automatización Inteligente",
  description: "Implemente sistemas inteligentes que mejoran la toma de decisiones, optimizan campañas y potencian sus flujos de trabajo con inteligencia."
}, {
  icon: <MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-[#8A898C]" />,
  title: "Automatización de WhatsApp",
  description: "Flujos de mensajes automatizados para atención al cliente, ventas y calificación de leads usando WhatsApp y APIs conectadas."
}, {
  icon: <Link2 className="h-8 w-8 md:h-10 md:w-10 text-[#8A898C]" />,
  title: "CRM & Marketing Integraciones",
  description: "Automatización perfecta entre plataformas de marketing, CRMs y canales de comunicación."
}, {
  icon: <Code className="h-8 w-8 md:h-10 md:w-10 text-[#8A898C]" />,
  title: "Desarrollo No-Code & Automatización de Workflows",
  description: "Cree aplicaciones web, dashboards, automatizaciones y sistemas completos usando plataformas intuitivas."
}];

const AutomationAI = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/es">
          <Button variant="ghost" className="mb-4 md:mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>
        
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-[#1c3454]">
          🚀 Automatización, IA y Desarrollo No/Low-Code
        </h1>
        <p className="text-lg md:text-xl mb-4 md:mb-6 text-[#6caddf]">
          Sistemas inteligentes para automatizar, escalar e innovar tus operaciones digitales.
        </p>
        
        <div className="p-4 md:p-6 rounded-lg mb-8 md:mb-12 bg-[#6caddf]">
          <p className="text-base md:text-lg text-1C3454 mb-3 md:mb-4 text-[#1c3454]">
            Transforma las rutinas empresariales en motores de alto rendimiento utilizando automatización, inteligencia artificial y plataformas no-code. Creo soluciones que reducen el trabajo manual, mejoran la toma de decisiones y conectan herramientas para hacer tu estrategia digital verdaderamente escalable.
          </p>
          <p className="text-base md:text-lg text-[#1c3454]">
            Mi enfoque combina mentalidad de ingeniería, inteligencia empresarial y plataformas fáciles de usar, permitiéndote escalar sin aumentar la complejidad.
          </p>
        </div>
        
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

export default AutomationAI;
