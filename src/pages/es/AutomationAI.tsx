
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Code, BrainCircuit, Link2, Database, Settings, Smartphone } from "lucide-react";
import { ServiceCard } from "@/components/automation/ServiceCard";
import { TechnologyCard } from "@/components/automation/TechnologyCard";
import { MainService, Technology } from "@/types/automation";

const technologies: Technology[] = [
  {
    category: "Automatización & Integración",
    tools: ["n8n", "Make", "Zapier"],
    icon: <Settings className="h-6 w-6" />
  }, {
    category: "Constructores de Web & Apps Móviles",
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
  description: "Implemente sistemas inteligentes que mejoren la toma de decisiones, optimicen campañas y potencien sus flujos de trabajo con inteligencia."
}, {
  icon: <MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-[#8A898C]" />,
  title: "Automatización de WhatsApp",
  description: "Flujos de mensajes automatizados para atención al cliente, ventas y calificación de leads utilizando WhatsApp y APIs conectadas."
}, {
  icon: <Link2 className="h-8 w-8 md:h-10 md:w-10 text-[#8A898C]" />,
  title: "CRM & Integraciones de Marketing",
  description: "Automatización perfecta entre plataformas de marketing, CRMs y canales de comunicación."
}, {
  icon: <Code className="h-8 w-8 md:h-10 md:w-10 text-[#8A898C]" />,
  title: "Desarrollo No-Code & Automatización de Workflows",
  description: "Cree aplicaciones web, dashboards, automatizaciones y sistemas completos utilizando plataformas intuitivas."
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
          Sistemas inteligentes para automatizar, escalar e innovar sus operaciones digitales.
        </p>
        
        <div className="p-4 md:p-6 rounded-lg mb-8 md:mb-12 bg-[#6caddf]">
          <p className="text-base md:text-lg text-1C3454 mb-3 md:mb-4 text-[#1c3454]">
            Transforme rutinas empresariales en motores de alto rendimiento utilizando automatización, inteligencia artificial y plataformas no-code. Creo soluciones que reducen el trabajo manual, mejoran la toma de decisiones y conectan herramientas para hacer su estrategia digital verdaderamente escalable.
          </p>
          <p className="text-base md:text-lg text-[#1c3454]">
            Mi enfoque combina mentalidad de ingeniería, inteligencia empresarial y plataformas amigables, permitiéndole escalar sin aumentar la complejidad.
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
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">
            📁 Portafolio
          </h2>
          <div className="text-center mb-8">
            <Link to="/es/portfolio/automation-ai">
              <Button className="bg-[#6caddf] hover:bg-[#5a9ac8] text-white font-medium">
                Ver Todos los Proyectos
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationAI;
