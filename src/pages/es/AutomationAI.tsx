
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, MessageSquare, Zap, Database, Settings } from "lucide-react";

const AutomationAI = () => {
  const services = [
    {
      icon: <Bot className="h-10 w-10 text-[#F5A9B8]" />,
      title: "Calificación de Leads con IA",
      description: "Aprovecha la IA para clasificar, puntuar y calificar leads para procesos de ventas más eficientes y mayores tasas de conversión."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-[#F5A9B8]" />,
      title: "Automatización de WhatsApp",
      description: "Soluciones de mensajería automatizada para servicio al cliente, soporte de ventas y nutrición de leads a través de WhatsApp."
    },
    {
      icon: <Database className="h-10 w-10 text-[#F5A9B8]" />,
      title: "Integración con CRM",
      description: "Conexión perfecta entre tus herramientas de marketing, sistemas CRM y procesos de ventas con flujo de datos automatizado."
    },
    {
      icon: <Settings className="h-10 w-10 text-[#F5A9B8]" />,
      title: "Automatización de Workflows",
      description: "Flujos personalizados en n8n o Make para automatizar tareas repetitivas y optimizar las operaciones de tu negocio."
    },
    {
      icon: <Zap className="h-10 w-10 text-[#F5A9B8]" />,
      title: "Automatización de Marketing",
      description: "Soluciones de automatización de extremo a extremo para email marketing, nutrición de leads y optimización del viaje del cliente."
    }
  ];

  const portfolioItems = [
    {
      title: "Automatización de Atención al Cliente",
      description: "Solución de automatización de WhatsApp que gestionó el 80% de las consultas de los clientes automáticamente, reduciendo el tiempo de respuesta en un 95%.",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=500",
      tags: ["WhatsApp", "Atención al Cliente", "Chatbot"]
    },
    {
      title: "Sistema de Puntuación de Leads con IA",
      description: "Solución de IA personalizada que analizó patrones de comportamiento del cliente para puntuar leads, mejorando la eficiencia del equipo de ventas en un 65%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
      tags: ["IA", "Machine Learning", "Puntuación de Leads"]
    },
    {
      title: "Integración de Marketing & CRM",
      description: "Integración completa entre plataformas de marketing y sistema CRM con flujos de trabajo automatizados de calificación de leads.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500",
      tags: ["CRM", "Integración", "Workflow"]
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-[#33C3F0]">
      <div className="max-w-6xl mx-auto">
        <Link to="/es">
          <Button variant="ghost" className="mb-6 bg-white/50 hover:bg-white/70">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Automatización & IA</h1>
        <p className="text-xl text-white mb-12">
          Implementación de soluciones inteligentes para automatizar procesos y optimizar resultados a través de IA.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mb-2">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#0EA5E9]">Portafolio y Casos de Éxito</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-[#33C3F0]/10 text-[#33C3F0] rounded-full text-xs font-medium"
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
