
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Facebook, Instagram, BarChart, TrendingUp, Search, Bookmark, Youtube, Bot, Target, LineChart, Database, MessageSquare } from "lucide-react";

const MediaBuying = () => {
  const services = [
    {
      icon: <Facebook className="h-10 w-10 text-[#8A898C]" />,
      title: "Meta Ads",
      description: "Gestión estratégica de campañas para Facebook, Instagram y Audience Network con segmentación avanzada, embudos estructurados y herramientas de automatización como Advantage+ y catálogo dinámico. Servicio completo desde copywriting hasta creativos, enfocado en resultados."
    },
    {
      icon: <Search className="h-10 w-10 text-[#8A898C]" />,
      title: "Google Ads",
      description: "Campañas de Search, Display, YouTube, Shopping y Performance Max, siempre con investigación profunda, estructuración de palabras clave, pujas inteligentes y optimización constante de ROAS."
    },
    {
      icon: <Instagram className="h-10 w-10 text-[#8A898C]" />,
      title: "TikTok Ads",
      description: "Creación de campañas visuales enfocadas en engagement y conversión. Estrategias que aprovechan el formato nativo de la plataforma, con lenguaje creativo y objetivos de rendimiento."
    },
    {
      icon: <Bookmark className="h-10 w-10 text-[#8A898C]" />,
      title: "Pinterest Ads",
      description: "Campañas enfocadas en descubrimiento y conversión, con creativos diseñados para el formato inspiracional de la plataforma. Ideal para e-commerce, moda, decoración, belleza y segmentos visuales. Estrategias de embudo completo orientadas al crecimiento sostenible y tráfico cualificado."
    },
    {
      icon: <Bot className="h-10 w-10 text-[#8A898C]" />,
      title: "Inteligencia Artificial Aplicada",
      description: "Uso de IA en las principales plataformas para optimizar la entrega, segmentación, creativos dinámicos y predecir patrones de comportamiento. Soluciones que integran inteligencia con rendimiento."
    },
    {
      icon: <Target className="h-10 w-10 text-[#8A898C]" />,
      title: "Optimización de Conversión (CRO)",
      description: "Acciones dirigidas a reducir el CAC y aumentar las tasas de conversión mediante ajustes estratégicos en campañas, creativos, páginas de destino y mensajes."
    },
    {
      icon: <Database className="h-10 w-10 text-[#8A898C]" />,
      title: "Seguimiento Avanzado y Analítica",
      description: "Implementación de píxeles, eventos personalizados, etiquetado con herramientas como GTM, ctwaclid y UTMs. Paneles personalizados con datos en tiempo real e informes con insights accionables."
    }
  ];

  const portfolioItems = [
    {
      title: "Tienda Virtual Febracis — De la Crisis al Crecimiento Exponencial",
      description: "Después de 6 meses de pérdidas en medios pagos, se implementaron enfoques estratégicos logrando R$77.000 en ingresos mensuales (267% de crecimiento) con ROAS del 963% usando Meta Ads y Google Ads.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=500", // Business team analyzing growth
      tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
    },
    {
      title: "Urban Effort — De Cero a Punto de Equilibrio en 3 Meses",
      description: "Marca americana de gorras que vendía solo en Amazon creó su propio canal de ventas alcanzando el punto de equilibrio en menos de 90 días con +291% de crecimiento en ingresos a través de campañas estratégicas.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500", // Laptop with code and business analytics
      tags: ["Meta Ads", "Google Ads", "E-commerce"]
    },
    {
      title: "Borogodó Brasil — Cambio de Rumbo en Ingresos en 30 Días",
      description: "Tras una caída drástica en ventas, estrategias enfocadas en Meta Ads lograron +36% en visitas únicas, +24% en ventas, +40% en ingresos y +13% en ticket promedio en solo un mes.",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=500",
      tags: ["Meta Ads", "E-commerce", "Ingresos"]
    },
    {
      title: "Vamos — +50% en Ventas con Adquisición Inteligente",
      description: "Empresa de alquiler de vehículos pesados escaló su base de clientes con segmentación geográfica y demográfica dirigida, logrando +50% en ventas en un solo mes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
      tags: ["Meta Ads", "Generación de Leads", "Ventas"]
    },
    {
      title: "Qualicorp — Reducción del 30% en CPL con Segmentación de Fondo de Embudo",
      description: "Operadora de salud que enfrentaba alto costo por lead implementó palabras clave de fondo de embudo y smart bidding, reduciendo CPL en un 30% con mayor calidad en los leads.",
      image: "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=500",
      tags: ["Google Ads", "Generación de Leads", "CPL"]
    },
    {
      title: "Unileão — Reducción del 118% en CPL con Performance Max",
      description: "Institución educativa optimizó la captación de leads con campañas Performance Max, logrando una reducción del 118% en el costo por lead y ROI positivo ya en el primer mes.",
      image: "https://images.unsplash.com/photo-1590402494610-2c378a9114c6?q=80&w=500",
      tags: ["Google Ads", "Educación", "Performance Max"]
    },
    {
      title: "Seguimiento Inteligente en WhatsApp — +462% en Conversaciones",
      description: "Implementación de seguimiento via ctwaclid en campañas de Meta Ads llevó a un aumento de +462,16% en conversaciones iniciadas y reducción de 81,34% en el costo por mensaje enviado en solo una semana.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500", // Woman working on laptop analyzing data
      tags: ["Meta Ads", "WhatsApp", "Seguimiento"]
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Servicios de Medios Pagos e Performance Inteligente</h1>
        <p className="text-xl text-white mb-12">
          Campañas basadas en datos, automatizaciones e inteligencia artificial para escalar tus resultados.
          Mi enfoque combina creatividad, tecnología y rendimiento en estrategias completas de medios pagos.
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
          <h2 className="text-2xl font-bold mb-6 text-black">Casos de Éxito Estratégicos</h2>
          <div className="grid md:grid-cols-2 gap-8">
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

export default MediaBuying;
