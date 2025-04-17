import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, MessageSquare, Database, Settings, Layers3, Code, BrainCircuit, Link2, Smartphone, QrCode, FileCode, BarChart2, MessagesSquare, Target } from "lucide-react";

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
      category: "Automation & Integration",
      tools: ["n8n", "Make", "Zapier"],
      icon: <Settings className="h-6 w-6" />
    },
    {
      category: "Web & Mobile App Builders",
      tools: ["Bubble", "FlutterFlow", "Lovable"],
      icon: <Smartphone className="h-6 w-6" />
    },
    {
      category: "AI & Smart Logic",
      tools: ["ChatGPT + Plugins", "FlowiseAI", "Relevance AI", "Langflow"],
      icon: <BrainCircuit className="h-6 w-6" />
    },
    {
      category: "Databases & No-Code Backends",
      tools: ["Airtable", "Baserow", "NocoDB", "Xano", "Supabase", "Firebase"],
      icon: <Database className="h-6 w-6" />
    }
];

const AutomationAI = () => {
  const services = [
    {
      icon: <Bot className="h-10 w-10 text-[#8A898C]" />,
      title: "Soluciones de IA",
      description: "Implemente sistemas inteligentes para optimizar procesos y mejorar la toma de decisiones a través de inteligencia artificial avanzada."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-[#8A898C]" />,
      title: "Automatización de WhatsApp",
      description: "Soluciones de mensajería automatizada para servicio al cliente, soporte de ventas y nutrición de leads a través de WhatsApp."
    },
    {
      icon: <Database className="h-10 w-10 text-[#8A898C]" />,
      title: "Integración de CRM",
      description: "Conexión perfecta entre sus herramientas de marketing, sistemas CRM y procesos de ventas con flujo de datos automatizado."
    },
    {
      icon: <Code className="h-10 w-10 text-[#8A898C]" />,
      title: "Desarrollo Sin Código",
      description: "Cree aplicaciones potentes y automatice flujos de trabajo utilizando plataformas sin código como Zapier, Make y n8n."
    },
    {
      icon: <Layers3 className="h-10 w-10 text-[#8A898C]" />,
      title: "Automatización de Workflows",
      description: "Flujos personalizados para automatizar tareas repetitivas y optimizar las operaciones de su negocio en múltiples plataformas."
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-[#000000]">
      <div className="max-w-6xl mx-auto">
        <Link to="/es">
          <Button variant="ghost" className="mb-6 bg-white/20 hover:bg-white/30 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Automatización, IA & Desarrollo No/Low-Code</h1>
        <p className="text-xl text-white mb-12">
          Implementación de soluciones inteligentes para automatizar procesos, optimizar resultados a través de IA y potenciar negocios con tecnologías no/low-code.
          Mi enfoque combina ciencia de datos, ingeniería y estrategias de negocio innovadoras.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-black">
              <CardHeader>
                <div className="mb-2">
                  {service.icon}
                </div>
                <CardTitle className="text-black">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-black">Portafolio y Casos de Éxito</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <CardTitle className="text-black">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
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

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-black">🧩 Technologies I Use</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {tech.icon}
                    <CardTitle className="text-lg">{tech.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map((tool) => (
                      <span 
                        key={tool}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
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
      </div>
    </div>
  );
};

export default AutomationAI;
