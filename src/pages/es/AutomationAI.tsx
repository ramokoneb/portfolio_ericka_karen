import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, MessageSquare, Database, Settings, Layers3, Code, BrainCircuit, Link2, Smartphone } from "lucide-react";

const portfolioItems = [
    {
      title: "Automatización de WhatsApp – +80% de consultas automatizadas",
      description: "Solución de automatización desarrollada para servicio al cliente vía WhatsApp, con chatbot inteligente capaz de manejar el 80% de las preguntas frecuentes. Reducción del 95% en tiempo de respuesta y aumento en la satisfacción del servicio.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=500",
      tags: ["WhatsApp API", "n8n", "NLP", "Chatbot"],
      tech: "WhatsApp API • n8n • NLP • Lógica condicional",
      goal: "Atención al cliente automatizada y escalable",
      highlight: "Reducción drástica en necesidad de atención humana"
    },
    {
      title: "Sistema de Puntuación de Leads con IA – +65% de eficiencia",
      description: "Sistema de puntuación de leads basado en machine learning, entrenado con patrones de comportamiento de usuarios reales. Mejoró la eficiencia del equipo de ventas en un 65%, priorizando leads con mayor probabilidad de conversión.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
      tags: ["n8n", "Supabase", "Machine Learning", "LLMs"],
      tech: "n8n • Supabase • LLMs personalizados",
      goal: "Calificación automática de leads",
      highlight: "Inteligencia aplicada al proceso de compra"
    },
    {
      title: "CRM Automático vía WhatsApp – Integración en tiempo real",
      description: "Sistema que crea automáticamente una tarjeta de nuevo lead en CRM tan pronto como se inicia el primer contacto en WhatsApp. La integración utiliza FlutterFlow + Lovable + n8n y garantiza un flujo 100% automatizado.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=500",
      tags: ["FlutterFlow", "Lovable", "n8n", "CRM"],
      tech: "FlutterFlow • Lovable • n8n",
      goal: "Captura y organización automática de leads",
      highlight: "Sincronización inmediata entre WhatsApp y CRM"
    },
    {
      title: "Smart Tracking con Meta API – +462% en conversaciones",
      description: "Implementación de seguimiento vía ctwaclid para identificar con precisión los anuncios que generaban conversaciones en WhatsApp. Aumento de +462.16% en volumen de conversaciones y reducción de -81.34% en costo por mensaje.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
      tags: ["Meta API", "n8n", "Supabase", "Analytics"],
      tech: "Meta API • n8n • Supabase • UTMs",
      goal: "Medición precisa de campañas de mensajes",
      highlight: "Seguimiento avanzado con datos reales de conversión"
    },
    {
      title: "Bot de Métricas para WhatsApp – Automatización de informes",
      description: "Sistema que envía automáticamente las métricas de campañas Meta y Google Ads a grupos de WhatsApp. Ahorro de tiempo del equipo, con datos confiables y envío personalizado para cada grupo.",
      image: "https://images.unsplash.com/photo-1553484771-047a44eee27a?q=80&w=500",
      tags: ["Meta API", "Google Ads API", "WhatsApp API", "n8n"],
      tech: "Meta API • Google Ads API • Evolution API • WhatsApp API • n8n",
      goal: "Seguimiento automatizado de campañas",
      highlight: "Informes enviados en tiempo real, sin intervención manual"
    },
    {
      title: "Follow-up Automático – Recuperación de leads con IA",
      description: "Sistema que identifica leads no respondidos en WhatsApp y activa mensajes de follow-up automáticos. Mejora el tiempo de reenganche, reduce el abandono del embudo y aumenta conversiones.",
      image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=500",
      tags: ["n8n", "Supabase", "WhatsApp API", "Automation"],
      tech: "n8n • Supabase • WhatsApp API",
      goal: "Recuperación activa de oportunidades",
      highlight: "Acciones automáticas basadas en comportamiento"
    },
    {
      title: "Agentes de IA – Atención y campañas automatizadas",
      description: "Creación de múltiples agentes de IA: desde atención básica hasta análisis profundo de campañas de medios pagados. Un agente puede analizar datos, sugerir optimizaciones y estructurar campañas en Meta Ads.",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=500",
      tags: ["ChatGPT", "Langflow", "Relevance AI", "n8n"],
      tech: "ChatGPT Plugins • Langflow • Relevance AI • n8n",
      goal: "Atención, análisis y ejecución inteligente",
      highlight: "IA con autonomía para sugerir e implementar acciones"
    },
    {
      title: "Sistema de QR Code con Instancia Automatizada",
      description: "Desarrollo de plataforma que genera QR Codes únicos para cada cliente, activando una nueva instancia integrada vía Evolution API. Permite creación de entornos personalizados con lógica preconfigurada.",
      image: "https://images.unsplash.com/photo-1598291286794-d417e2685f85?q=80&w=500",
      tags: ["Lovable", "Evolution API", "n8n"],
      tech: "Lovable • Evolution API • n8n",
      goal: "Generación automática de entornos y flujos",
      highlight: "Escalabilidad y cero intervención manual para activación"
    },
    {
      title: "Sitio de Captación con Lovable",
      description: "Landing page creada con Lovable enfocada en captación de leads para prestación de servicios. Integraciones de tracking y formulario con envío directo a CRM y WhatsApp.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
      tags: ["Lovable", "Webhooks", "CRM personalizado"],
      tech: "Lovable • Webhooks • CRM personalizado",
      goal: "Captación y calificación automatizada de leads",
      highlight: "Listo para ejecutar campañas con tracking completo"
    }
];

const technologies = [
    {
      category: "Automatización & Integración",
      tools: ["n8n", "Make", "Zapier"],
      icon: <Settings className="h-6 w-6" />
    },
    {
      category: "Web & Mobile App Builders",
      tools: ["Bubble", "FlutterFlow", "Lovable"],
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      category: "IA & Lógica Inteligente",
      tools: ["ChatGPT + Plugins", "FlowiseAI", "Relevance AI", "Langflow"],
      icon: <BrainCircuit className="h-6 w-6" />
    },
    {
      category: "Bases de Datos & Backends No-Code",
      tools: ["Airtable", "Baserow", "NocoDB", "Xano", "Supabase", "Firebase"],
      icon: <Database className="h-6 w-6" />
    }
];

const AutomationAI = () => {
  const mainServices = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-[#8A898C]" />,
      title: "IA & Automatización Inteligente",
      description: "Implemente sistemas inteligentes que mejoran la toma de decisiones, optimizan campañas y potencian sus flujos de trabajo con inteligencia."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-[#8A898C]" />,
      title: "Automatización de WhatsApp",
      description: "Flujos de mensajes automatizados para atención al cliente, ventas y calificación de leads usando WhatsApp y APIs conectadas."
    },
    {
      icon: <Link2 className="h-10 w-10 text-[#8A898C]" />,
      title: "CRM & Integraciones de Marketing",
      description: "Automatización perfecta entre plataformas de marketing, CRMs y canales de comunicación."
    },
    {
      icon: <Code className="h-10 w-10 text-[#8A898C]" />,
      title: "Desarrollo No-Code & Automatización de Workflows",
      description: "Cree aplicaciones web, dashboards, automatizaciones y sistemas completos usando plataformas intuitivas."
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/es">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-4 text-[#1c3454] md:text-5xl">🚀 Automatización, IA y Desarrollo No/Low-Code</h1>
        <p className="text-xl mb-6 text-[#6caddf]">
          Sistemas inteligentes para automatizar, escalar e innovar tus operaciones digitales.
        </p>
        
        <div className="p-6 rounded-lg mb-12 bg-[#6caddf]">
          <p className="text-lg text-1C3454 mb-4 text-[#1c3454]">
            Transforma las rutinas empresariales en motores de alto rendimiento utilizando automatización, inteligencia artificial y plataformas no-code. Creo soluciones que reducen el trabajo manual, mejoran la toma de decisiones y conectan herramientas para hacer tu estrategia digital verdaderamente escalable.
          </p>
          <p className="text-lg text-[#1c3454]">
            Mi enfoque combina mentalidad de ingeniería, inteligencia empresarial y plataformas fáciles de usar, permitiéndote escalar sin aumentar la complejidad.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-black">
              <CardHeader>
                <div className="mb-2">
                  {service.icon}
                </div>
                <CardTitle className="text-[#1c3454]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-[#6caddf]">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#1c3454]">🧩 Tecnologías que Utilizo</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {tech.icon}
                    <CardTitle className="text-lg text-[#1c3454]">{tech.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map((tool) => (
                      <span 
                        key={tool}
                        className="px-3 py-1 bg-gray-100 rounded-full text-sm text-[#6caddf]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-[#1c3454]">📁 Portafolio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-2xl hover:shadow-2xl transition-all bg-white">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#1c3454]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-[#6caddf]">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-[#1c3454]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationAI;
