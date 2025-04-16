
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Facebook, Instagram, BarChart, TrendingUp, Search } from "lucide-react";

const MediaBuying = () => {
  const services = [
    {
      icon: <Facebook className="h-10 w-10 text-[#33C3F0]" />,
      title: "Meta Ads",
      description: "Gestión estratégica de campañas para Facebook, Instagram y Audience Network con segmentación optimizada y enfoques creativos."
    },
    {
      icon: <Search className="h-10 w-10 text-[#33C3F0]" />,
      title: "Google Ads",
      description: "Campañas de Search, Display y YouTube desarrolladas con investigación de palabras clave y análisis competitivo para maximizar tu ROAS."
    },
    {
      icon: <Instagram className="h-10 w-10 text-[#33C3F0]" />,
      title: "TikTok Ads",
      description: "Campañas publicitarias creativas que aprovechan el formato único de TikTok y las oportunidades de engagement con la audiencia."
    },
    {
      icon: <BarChart className="h-10 w-10 text-[#33C3F0]" />,
      title: "Análisis de Rendimiento",
      description: "Informes detallados y análisis para seguir el rendimiento de las campañas e identificar oportunidades de optimización."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-[#33C3F0]" />,
      title: "Optimización de Conversión",
      description: "Estrategias enfocadas en mejorar las tasas de conversión y reducir los costos de adquisición de clientes."
    }
  ];

  const portfolioItems = [
    {
      title: "Campaña de Conversión E-commerce",
      description: "Campaña estratégica en Facebook e Instagram para un cliente de e-commerce que logró un 450% de ROAS y disminuyó el CPA en un 35%.",
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=500",
      tags: ["Meta Ads", "E-commerce", "ROAS"]
    },
    {
      title: "Generación de Leads SaaS",
      description: "Campaña de Google Ads para una empresa SaaS que generó más de 200 leads calificados por mes con una conversión del 20% a clientes pagos.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
      tags: ["Google Ads", "SaaS", "Generación de Leads"]
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Servicios de Medios Pagos</h1>
        <p className="text-xl text-white mb-12">
          Especialista en campañas de medios pagos enfocadas en resultados medibles y ROI positivo.
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
