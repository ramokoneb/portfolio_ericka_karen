import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BrainCircuit, Target, Database, Settings, LineChart, Bot, Workflow, Code } from "lucide-react";

const MediaBuying = () => {
  const mainServices = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-[#8A898C]" />,
      title: "Inteligencia & Estrategia de Negocio",
      description: "Desarrollo de estrategias de medios alineadas con los objetivos de negocio, enfocadas en resultados escalables y sostenibles."
    },
    {
      icon: <Target className="h-10 w-10 text-[#8A898C]" />,
      title: "Planificación Avanzada de Medios",
      description: "Planificación estratégica de campañas pagas con foco en tráfico cualificado, optimización de conversión y ROI positivo."
    },
    {
      icon: <Database className="h-10 w-10 text-[#8A898C]" />,
      title: "Seguimiento y Analítica Avanzada",
      description: "Implementación de soluciones avanzadas de tracking, integración de API de conversión y sistemas de optimización basados en datos."
    },
    {
      icon: <Bot className="h-10 w-10 text-[#8A898C]" />,
      title: "Inteligencia Artificial Aplicada",
      description: "Uso de IA para optimizar entrega de campañas, segmentación, creativos dinámicos y predecir patrones de comportamiento."
    }
  ];

  const technologies = [
    {
      category: "Tecnologías y Herramientas 🎯",
      tools: [
        "Meta Ads Manager (Facebook, Instagram, Audience Network)",
        "Google Ads (Search, Display, YouTube, Shopping, PMax)",
        "TikTok Ads Manager",
        "Pinterest Ads",
        "LinkedIn Ads (para B2B)",
        "Google Merchant Center (para e-commerce en Shopping)"
      ],
      icon: <Target className="h-6 w-6" />
    },
    {
      category: "Tecnologías y Herramientas 📊",
      tools: [
        "Google Analytics (GA4)",
        "Google Tag Manager",
        "Meta Pixel & Conversion API (CAPI)",
        "Meta Events Manager",
        "Hotjar",
        "Looker Studio / Data Studio",
        "Supermetrics",
        "UTMs, ctwaclid, fbclid, gclid"
      ],
      icon: <LineChart className="h-6 w-6" />
    },
    {
      category: "Tecnologías y Herramientas ⚙️",
      tools: [
        "n8n",
        "Make (Integromat)",
        "Zapier",
        "Lovable",
        "Evolution API",
        "Supabase",
        "Firebase"
      ],
      icon: <Settings className="h-6 w-6" />
    },
    {
      category: "Tecnologías y Herramientas 🤖",
      tools: [
        "ChatGPT + Plugins",
        "Langflow / FlowiseAI",
        "Relevance AI",
        "AI Campaign Generators",
        "LLMs personalizados para scoring y optimización"
      ],
      icon: <BrainCircuit className="h-6 w-6" />
    }
  ];

  const portfolioItems = [
    {
      title: "Tienda Virtual Febracis — De la Crisis al Crecimiento Exponencial",
      description: "Después de 6 meses de pérdidas en medios pagos, se implementaron enfoques estratégicos logrando R$77.000 en ingresos mensuales (267% de crecimiento) con ROAS del 963% usando Meta Ads y Google Ads.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=500",
      tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
    },
    {
      title: "Urban Effort — De Cero a Punto de Equilibrio en 3 Meses",
      description: "Marca americana de gorras que vendía solo en Amazon creó su propio canal de ventas alcanzando el punto de equilibrio en menos de 90 días con +291% de crecimiento en ingresos a través de campañas estratégicas.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500",
      tags: ["Meta Ads", "Google Ads", "E-commerce"]
    },
    {
      title: "Borogodó Brasil — Cambio de Rumbo en Ingresos en 30 Días",
      description: "Tras una caída drástica en ventas, estrategias enfocadas en Meta Ads lograron +36% en visitas únicas, +24% en ventas, +40% en ingresos y +13% en ticket promedio en solo un mes.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=500",
      tags: ["Meta Ads", "E-commerce", "Ingresos"]
    },
    {
      title: "Vamos — +50% en Ventas con Adquisición Inteligente",
      description: "Empresa de alquiler de vehículos pesados escaló su base de clientes con segmentación geográfica y demográfica dirigida, logrando +50% en ventas en un solo mes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
      tags: ["Meta Ads", "Generación de Leads", "Ventas"]
    },
    {
      title: "Unileão — Reducción del 118% en CPL con Performance Max",
      description: "Institución educativa optimizó la captación de leads con campañas Performance Max, logrando una reducción del 118% en el costo por lead y ROI positivo ya en el primer mes.",
      image: "https://images.unsplash.com/photo-1590402494610-2c378a9114c6?q=80&w=500",
      tags: ["Google Ads", "Educación", "Performance Max"]
    },
    {
      title: "Intelligent WhatsApp Tracking — +462% in Conversations",
      description: "Implementation of ctwaclid tracking in Meta Ads campaigns led to +462.16% increase in initiated conversations and 81.34% reduction in cost per message sent in just one week.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500",
      tags: ["Meta Ads", "WhatsApp", "Tracking"]
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Servicios de Medios Pagos & Performance Estratégica</h1>
        <p className="text-xl text-white mb-12">
          Campañas basadas en datos, inteligencia de performance y seguimiento avanzado para escalar tus resultados.
        </p>
        
        <div className="bg-white/10 p-6 rounded-lg mb-12">
          <p className="text-lg text-white mb-4">
            Transforma tus inversiones en medios pagos en motores de crecimiento predecibles y escalables. Combino inteligencia estratégica con sistemas avanzados de tracking para asegurar que cada campaña genere impacto medible.
          </p>
          <p className="text-lg text-white">
            Mi enfoque integra estrategia de negocio, datos de performance e inteligencia artificial — entregando campañas que consistentemente alcanzan ROI positivo.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
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
        
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-8 text-black">Tecnologías & Herramientas</h2>
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
                  <div className="flex flex-col space-y-2">
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

        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-black">Casos de Éxito Estratégicos 🚀</h2>
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
