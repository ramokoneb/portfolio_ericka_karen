
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Facebook, Instagram, BarChart, TrendingUp, Search, Bookmark, Youtube, Bot, Target, LineChart, Database, MessageSquare } from "lucide-react";

const MediaBuying = () => {
  const services = [
    {
      icon: <Facebook className="h-10 w-10 text-[#33C3F0]" />,
      title: "Meta Ads",
      description: "Gestión estratégica de campañas para Facebook, Instagram y Audience Network con segmentación avanzada, embudos estructurados y herramientas de automatización como Advantage+ y catálogo dinámico. Servicio completo desde copywriting hasta creativos, enfocado en resultados."
    },
    {
      icon: <Search className="h-10 w-10 text-[#33C3F0]" />,
      title: "Google Ads",
      description: "Campañas de Search, Display, YouTube, Shopping y Performance Max, siempre con investigación profunda, estructuración de palabras clave, pujas inteligentes y optimización constante de ROAS."
    },
    {
      icon: <Instagram className="h-10 w-10 text-[#33C3F0]" />,
      title: "TikTok Ads",
      description: "Creación de campañas visuales enfocadas en engagement y conversión. Estrategias que aprovechan el formato nativo de la plataforma, con lenguaje creativo y objetivos de rendimiento."
    },
    {
      icon: <Bookmark className="h-10 w-10 text-[#33C3F0]" />,
      title: "Pinterest Ads",
      description: "Campañas enfocadas en descubrimiento y conversión, con creativos diseñados para el formato inspiracional de la plataforma. Ideal para e-commerce, moda, decoración, belleza y segmentos visuales. Estrategias de embudo completo orientadas al crecimiento sostenible y tráfico cualificado."
    },
    {
      icon: <Bot className="h-10 w-10 text-[#33C3F0]" />,
      title: "Inteligencia Artificial Aplicada",
      description: "Uso de IA en las principales plataformas para optimizar la entrega, segmentación, creativos dinámicos y predecir patrones de comportamiento. Soluciones que integran inteligencia con rendimiento."
    },
    {
      icon: <Target className="h-10 w-10 text-[#33C3F0]" />,
      title: "Optimización de Conversión (CRO)",
      description: "Acciones dirigidas a reducir el CAC y aumentar las tasas de conversión mediante ajustes estratégicos en campañas, creativos, páginas de destino y mensajes."
    },
    {
      icon: <Database className="h-10 w-10 text-[#33C3F0]" />,
      title: "Seguimiento Avanzado y Analítica",
      description: "Implementación de píxeles, eventos personalizados, etiquetado con herramientas como GTM, ctwaclid y UTMs. Paneles personalizados con datos en tiempo real e informes con insights accionables."
    }
  ];

  const portfolioItems = [
    {
      title: "Campaña de Conversión E-commerce",
      description: "Campaña estratégica en Facebook e Instagram para un cliente de e-commerce que logró un 450% de ROAS y disminuyó el CPA en un 35%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: ["Meta Ads", "E-commerce", "ROAS"]
    },
    {
      title: "Generación de Leads SaaS",
      description: "Campaña de Google Ads para una empresa SaaS que generó más de 200 leads calificados por mes con una conversión del 20% a clientes pagos.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4",
      tags: ["Google Ads", "SaaS", "Lead Gen"]
    },
    {
      title: "Automatización de Soporte al Cliente",
      description: "Solución de automatización de WhatsApp que gestionó el 80% de las consultas de clientes automáticamente, reduciendo el tiempo de respuesta en un 95%.",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783",
      tags: ["WhatsApp", "Soporte al Cliente", "Chatbot"]
    },
    {
      title: "Sistema de Puntuación de Leads con IA",
      description: "Solución de IA personalizada que analizó patrones de comportamiento del cliente para puntuar leads, mejorando la eficiencia del equipo de ventas en un 65%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      tags: ["IA", "Machine Learning", "Puntuación de Leads"]
    },
    {
      title: "Integración de Marketing y CRM",
      description: "Integración completa entre plataformas de marketing y sistema CRM con flujos de trabajo automatizados de calificación de leads.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692",
      tags: ["CRM", "Integración", "Workflow"]
    },
    {
      title: "Tienda Virtual Febracis — De la Crisis al Crecimiento Exponencial",
      description: "Después de 6 meses de pérdidas en medios pagos, se implementaron enfoques estratégicos logrando R$77.000 en ingresos mensuales (267% de crecimiento) con ROAS del 963% usando Meta Ads y Google Ads.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
    },
    {
      title: "Urban Effort — De Cero a Punto de Equilibrio en 3 Meses",
      description: "Marca americana de gorras que vendía solo en Amazon creó su propio canal de ventas alcanzando el punto de equilibrio en menos de 90 días con +291% de crecimiento en ingresos a través de campañas estratégicas.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      tags: ["Meta Ads", "Google Ads", "E-commerce"]
    },
    {
      title: "Borogodó Brasil — Cambio de Rumbo en Ingresos en 30 Días",
      description: "Tras una caída drástica en ventas, estrategias enfocadas en Meta Ads lograron +36% en visitas únicas, +24% en ventas, +40% en ingresos y +13% en ticket promedio en solo un mes.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      tags: ["Meta Ads", "E-commerce", "Ingresos"]
    },
    {
      title: "Vamos — +50% en Ventas con Adquisición Inteligente",
      description: "Empresa de alquiler de vehículos pesados escaló su base de clientes con segmentación geográfica y demográfica dirigida, logrando +50% en ventas en un solo mes.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      tags: ["Meta Ads", "Generación de Leads", "Ventas"]
    },
    {
      title: "Qualicorp — Reducción del 30% en CPL con Segmentación de Fondo de Embudo",
      description: "Operadora de salud que enfrentaba alto costo por lead implementó palabras clave de fondo de embudo y smart bidding, reduciendo CPL en un 30% con mayor calidad en los leads.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
      tags: ["Google Ads", "Generación de Leads", "CPL"]
    },
    {
      title: "Unileão — Reducción del 118% en CPL con Performance Max",
      description: "Institución educativa optimizó la captación de leads con campañas Performance Max, logrando una reducción del 118% en el costo por lead y ROI positivo ya en el primer mes.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      tags: ["Google Ads", "Educación", "Performance Max"]
    },
    {
      title: "Seguimiento Inteligente en WhatsApp — +462% en Conversaciones",
      description: "Implementación de seguimiento via ctwaclid en campañas de Meta Ads llevó a un aumento de +462,16% en conversaciones iniciadas y reducción de 81,34% en el costo por mensaje enviado en solo una semana.",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      tags: ["Meta Ads", "WhatsApp", "Seguimiento"]
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Servicios de Medios Pagos e Performance Inteligente</h1>
        <p className="text-xl text-white mb-12">
          Campañas basadas en datos, automatizaciones e inteligencia artificial para escalar tus resultados.
          Mi enfoque combina creatividad, tecnología y rendimiento en estrategias completas de medios pagos.
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
          <h2 className="text-2xl font-bold mb-6 text-[#0EA5E9]">Casos de Éxito Estratégicos</h2>
          <div className="grid md:grid-cols-2 gap-8">
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

export default MediaBuying;
