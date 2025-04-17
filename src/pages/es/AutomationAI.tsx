import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, MessageSquare, Zap, Database, Settings, Layers3, SquareCode } from "lucide-react";

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
      icon: <SquareCode className="h-10 w-10 text-[#8A898C]" />,
      title: "Desarrollo Sin Código",
      description: "Cree aplicaciones potentes y automatice flujos de trabajo utilizando plataformas sin código como Zapier, Make y n8n."
    },
    {
      icon: <Layers3 className="h-10 w-10 text-[#8A898C]" />,
      title: "Automatización de Workflows",
      description: "Flujos personalizados para automatizar tareas repetitivas y optimizar las operaciones de su negocio en múltiples plataformas."
    }
  ];

  const portfolioItems = [
    {
      title: "Automatización de Atención al Cliente",
      description: "Solución de automatización de WhatsApp que gestionó el 80% de las consultas de los clientes automáticamente, reduciendo el tiempo de respuesta en un 95%.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=500",
      tags: ["WhatsApp", "Atención al Cliente", "Chatbot"]
    },
    {
      title: "Sistema de Puntuación de Leads con IA",
      description: "Solución de IA personalizada que analizó patrones de comportamiento del cliente para puntuar leads, mejorando la eficiencia del equipo de ventas en un 65%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
      tags: ["IA", "Machine Learning", "Puntuación de Leads"]
    },
    {
      title: "Integración de Marketing & CRM",
      description: "Integración completa entre plataformas de marketing y sistema CRM con flujos de trabajo automatizados de calificación de leads.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=500",
      tags: ["CRM", "Integración", "Workflow"]
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
      </div>
    </div>
  );
};

export default AutomationAI;
