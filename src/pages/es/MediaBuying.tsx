import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  ArrowRight,
  BrainCircuit, 
  Link2, 
  Database, 
  Settings, 
  BarChart2,
  TrendingUp,
  MessageSquare,
  Settings2
} from "lucide-react";
import SocialLinks from "@/components/home/SocialLinks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ServiceCard } from "@/components/media-buying/ServiceCard";
import { TechnologyCard } from "@/components/media-buying/TechnologyCard";
import { HeroSection } from "@/components/media-buying/HeroSection";

const mainServices = [{
  icon: BrainCircuit,
  title: "Planificación y Ejecución Estratégica de Medios Pagos",
  description: "Campañas diseñadas para tráfico calificado, generación de leads y crecimiento de ventas alineados con sus objetivos de negocio únicos."
}, {
  icon: Database,
  title: "Seguimiento y Análisis Avanzado",
  description: "Integración perfecta de Google Analytics 4, API de Conversión de Meta, Google Tag Manager y tecnología de seguimiento líder en la industria para garantizar que cada clic sea contabilizado y optimizado."
}, {
  icon: Settings,
  title: "Automatización Impulsada por Tecnología",
  description: "Usando herramientas no-code como n8n, Make (Integromat) y Zapier, automatizo informes de campaña, alertas y flujos de trabajo, ahorrándole tiempo y aumentando la agilidad."
}, {
  icon: BrainCircuit,
  title: "Optimización Impulsada por IA",
  description: "Aprovecho herramientas de IA (ChatGPT + Plugins, Langflow, LLMs personalizados) para la generación dinámica de creativos, segmentación de audiencia y gestión predictiva de ofertas, mejorando continuamente el rendimiento de las campañas."
}, {
  icon: Link2,
  title: "Gestión de Campañas Multicanal",
  description: "Gestión integrada de medios pagos en Meta Ads, Google Ads, TikTok, LinkedIn Ads y Pinterest Ads para maximizar el alcance y la conversión."
}, {
  icon: BarChart2,
  title: "Informes Transparentes",
  description: "Paneles de rendimiento semanales con información procesable que destacan lo que funciona, lo que se puede mejorar y los próximos pasos claros."
}];

const whyChooseMe = [{
  icon: TrendingUp,
  title: "Resultados Comprobados",
  description: "Gestioné presupuestos mensuales superiores a $500K con un crecimiento constante de 3x-4x en ingresos para clientes."
}, {
  icon: Settings,
  title: "Combinación Única de Habilidades",
  description: "Mezcla de experiencia en estrategia de marketing y habilidades técnicas que unen los medios pagos con la automatización y la innovación en IA."
}, {
  icon: BarChart2,
  title: "Eficiencia de Costos",
  description: "Capacidad comprobada para reducir el costo por lead y aumentar el retorno de inversión publicitaria utilizando datos, tecnología y optimización continua."
}, {
  icon: MessageSquare,
  title: "Comunicación Clara",
  description: "Estilo de comunicación proactivo y colaborativo — siempre sabrás el estado y las perspectivas de tus campañas."
}, {
  icon: Settings2,
  title: "Soluciones Personalizadas",
  description: "Experiencia sirviendo a diversas industrias, adaptando estrategias y stacks tecnológicos para el viaje de crecimiento de cada negocio."
}];

const technologies = [{
  category: "Plataformas de Medios Pagos",
  tools: ["Meta Ads Manager", "Google Ads (Search, Display, Shopping, YouTube)", "TikTok Ads Manager", "LinkedIn Ads", "Pinterest Ads"],
  icon: Link2
}, {
  category: "Seguimiento y Análisis",
  tools: ["Google Analytics 4", "Meta Pixel & Conversion API", "Google Tag Manager", "Hotjar"],
  icon: Database
}, {
  category: "Automatización e Integración",
  tools: ["n8n", "Make (Integromat)", "Zapier", "Evolution API", "Supabase"],
  icon: Settings
}, {
  category: "IA y Herramientas Creativas",
  tools: ["ChatGPT + Plugins", "Langflow", "FlowiseAI", "Relevance AI", "Generadores de Campañas con IA", "LLMs Personalizados"],
  icon: BrainCircuit
}, {
  category: "Informes",
  tools: ["API Rest", "n8n"],
  icon: BarChart2
}];

const MediaBuying = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/es">
          <Button variant="ghost" className="mb-6 bg-[#6caddf]/10 text-[#1c3454] hover:bg-[#6caddf]/20 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="mb-16 lg:mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#1c3454] leading-tight">
            Servicios de Medios Pagos <span className="text-[#6caddf]">Impulsados por Tecnología</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-[#1c3454]/80 font-light">
            Crecimiento Estratégico a través de Datos, IA y Automatización
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#6caddf]/10 backdrop-blur-sm rounded-xl p-6 border border-[#6caddf]/30">
              <p className="text-base md:text-lg text-[#1c3454] mb-4">
                Aprovechando tecnología de vanguardia, automatización e IA, este marco estratégico de medios pagos transforma inversiones publicitarias en motores de crecimiento escalables y predecibles.
              </p>
              <p className="text-base md:text-lg text-[#1c3454]">
                Respaldado por más de 5 años de experiencia práctica en Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads y Pinterest Ads, combina planificación estratégica de medios con soluciones tecnológicas avanzadas para impulsar el rendimiento y la eficiencia.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
                <p className="text-[#1c3454] font-medium">
                  Atiendo a empresas listas para escalar a través de Meta Ads, Google Ads, TikTok Ads, Pinterest Ads y LinkedIn Ads, implementando soluciones que combinan estrategia humana con eficiencia de máquina.
                </p>
              </div>
              <Link to="/es/contact" className="self-start">
                <Button className="bg-[#6caddf] hover:bg-[#5a9ac8] text-white font-medium group">
                  Trabajemos Juntos
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* What I Deliver Section */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454] flex items-center">
            <span className="text-[#6caddf] mr-2">🎯</span> Lo Que Ofrezco
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
        
        {/* Why Choose Me Section */}
        <div className="mb-16 lg:mb-20 bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454] flex items-center">
            <span className="text-[#6caddf] mr-2">🎯</span> ¿Por Qué Elegirme?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {whyChooseMe.map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-2">
                  <div className="h-10 w-10 rounded-full bg-[#6caddf]/10 flex items-center justify-center mb-2">
                    <item.icon className="h-5 w-5 text-[#6caddf]" />
                  </div>
                  <CardTitle className="text-lg text-[#1c3454]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-[#1c3454]/80">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Tech Stack Section */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454] flex items-center">
            <span className="text-[#6caddf] mr-2">🎯</span> Tecnologías que Domino
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </div>
        
        {/* Testimonials Section */}
        <div className="mb-16 lg:mb-20 bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454] flex items-center">
            <span className="text-[#6caddf] mr-2">🎯</span> Opiniones de Clientes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f5f7fa] rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="italic text-[#1c3454] mb-4">
                "Ericka Karen es una profesional dedicada con gran experiencia en medios pagos y ventas a través de plataformas de medios, con un enfoque particular en Google."
              </p>
              <p className="text-[#6caddf] font-medium">— Henri Tex</p>
            </div>
            
            <div className="bg-[#f5f7fa] rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="italic text-[#1c3454] mb-4">
                "Una profesional extremadamente competente y proactiva. Ella constantemente aplica innovaciones en su trabajo diario."
              </p>
              <p className="text-[#6caddf] font-medium">— Amanda Carvalho</p>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="rounded-xl bg-gradient-to-r from-[#1c3454] to-[#264b73] p-6 md:p-8 lg:p-10 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Escalemos tu Negocio</h2>
          
          <p className="text-white/90 mb-6 max-w-3xl">
            ¿Listo para desbloquear el poder de la IA, la automatización y la estrategia de medios pagos? Construyamos tu próxima campaña de alto rendimiento.
          </p>
          
          <div className="mb-4">
            <SocialLinks 
              whatsappText="WhatsApp" 
              linkedinText="LinkedIn" 
              emailText="Email" 
            />
          </div>
          
          <div className="mt-8 md:mt-10">
            <Link to="/es/contact">
              <Button className="bg-white hover:bg-gray-100 text-[#1c3454] font-medium group">
                Contáctame
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaBuying;
