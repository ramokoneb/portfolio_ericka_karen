
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PortfolioCard } from "@/components/automation/PortfolioCard";
import { ContactSection } from "@/components/media-buying/ContactSection";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  tech?: string;
  goal?: string;
  highlight?: string;
}

const automationPortfolioItems: PortfolioItem[] = [
  {
    id: "whatsapp-automation",
    title: "Automatización de WhatsApp – +80% de Solicitudes Automatizadas",
    description: "Solución de automatización desarrollada para servicio al cliente vía WhatsApp, con chatbot inteligente capaz de manejar el 80% de las preguntas frecuentes. Reducción del 95% en tiempo de respuesta y aumento en satisfacción del cliente. El sistema utiliza procesamiento de lenguaje natural para identificar las intenciones del cliente y proporcionar respuestas personalizadas, además de derivación a asistencia humana cuando es necesario, creando una experiencia fluida y eficiente.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["WhatsApp API", "n8n", "NLP", "Chatbot"]
  },
  {
    id: "ai-lead-scoring",
    title: "Sistema de Lead Scoring con IA – +65% de Eficiencia en Equipo de Ventas",
    description: "Sistema de puntuación de leads basado en machine learning, entrenado con patrones reales de comportamiento de usuario. Mejoró la eficiencia del equipo de ventas en un 65%, priorizando leads con mayor probabilidad de conversión. El modelo analiza más de 20 variables conductuales incluyendo compromiso en campañas de email, interacciones en el sitio, historial de compras y actividad en redes sociales para determinar con precisión el potencial de cada lead.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["n8n", "Supabase", "Machine Learning", "LLMs"]
  },
  {
    id: "crm-automation",
    title: "CRM Automático vía WhatsApp – Integración en Tiempo Real",
    description: "Sistema que crea automáticamente una nueva tarjeta de lead en el CRM tan pronto como se inicia el primer contacto en WhatsApp. La integración utiliza FlutterFlow + Lovable + n8n y garantiza un flujo 100% automatizado. La solución captura datos del usuario como nombre, email y teléfono, y los sincroniza en todas las plataformas, eliminando la necesidad de entrada manual de datos y garantizando consistencia en la información a través de todos los canales de servicio.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["FlutterFlow", "Lovable", "n8n", "CRM"]
  },
  {
    id: "smart-tracking",
    title: "Seguimiento Inteligente con Meta API – +462% en Conversaciones de WhatsApp",
    description: "Implementación de seguimiento vía ctwaclid para identificar con precisión anuncios que generaron conversaciones en WhatsApp. Aumento del 462,16% en volumen de conversación y reducción del 81,34% en costo por mensaje enviado en una semana. Esta solución personalizada permite el seguimiento completo del recorrido del cliente desde el clic en el anuncio hasta la conversión final, proporcionando insights valiosos para la optimización de campañas y mejor asignación del presupuesto de marketing.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Meta API", "n8n", "Supabase", "Analytics"]
  },
  {
    id: "metrics-bot",
    title: "Bot de Métricas en WhatsApp – Automatización de Informes en Tiempo Real",
    description: "Creación de un sistema que envía automáticamente métricas de campañas de Meta y Google Ads a grupos de WhatsApp. Ahorro de tiempo para el equipo, con datos confiables y entrega personalizada para cada grupo. Los informes son completamente configurables, permitiendo definir KPIs específicos para diferentes stakeholders, además de incluir alertas automáticas cuando métricas importantes están por debajo del objetivo, permitiendo intervenciones rápidas.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Meta API", "Google Ads API", "WhatsApp API", "n8n"]
  },
  {
    id: "auto-followup",
    title: "Follow-up Automático – Recuperación de Leads con IA",
    description: "Sistema que identifica leads no respondidos en WhatsApp y dispara mensajes automáticos de follow-up. Mejora el tiempo de reenganche, reduce el abandono en el embudo y aumenta las conversiones. La solución utiliza algoritmos de aprendizaje para determinar los mejores horarios y contenidos para reenganche, adaptándose al comportamiento del usuario e historial de interacción, resultando en tasas de respuesta significativamente mayores en comparación con enfoques estandarizados.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["n8n", "Supabase", "WhatsApp API", "Automatización"]
  },
  {
    id: "ai-agents",
    title: "Agentes de IA – Atención y Campañas Automatizadas",
    description: "Creación de múltiples agentes de IA: desde atención básica hasta análisis profundo de campañas de medios pagos. Uno de los agentes es capaz de analizar datos, sugerir optimizaciones e incluso estructurar campañas de Meta Ads basadas en los resultados actuales. Los agentes son entrenados con datos históricos de rendimiento y mejores prácticas de la industria, permitiendo decisiones basadas en evidencia y recomendaciones contextuales que consideran el historial específico de cada cliente.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["ChatGPT", "Langflow", "Relevance AI", "n8n"]
  },
  {
    id: "qr-system",
    title: "Sistema de Código QR con Instancia Automatizada",
    description: "Desarrollo de una plataforma que genera Códigos QR únicos para cada cliente, activando una nueva instancia integrada vía Evolution API. Permite la creación de ambientes personalizados con lógica preconfigurada para uso inmediato. La solución es especialmente valiosa para eventos y campañas multicanal, donde cada código QR dirigirá al usuario a una experiencia personalizada basada en su perfil y punto de entrada en la campaña.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Lovable", "Evolution API", "n8n"]
  },
  {
    id: "lead-capture",
    title: "Sitio de Captura de Leads con Lovable – Portafolio con Seguimiento de Leads",
    description: "Landing page creada con Lovable enfocada en captura de leads para proveedores de servicios. Integraciones de seguimiento y formulario con envío directo a CRM y WhatsApp. La solución incluye análisis del comportamiento del usuario en el sitio para determinar intereses específicos, permitiendo que la atención posterior sea personalizada según las páginas visitadas y el tiempo dedicado en cada sección, aumentando significativamente las tasas de conversión.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Lovable", "Webhooks", "CRM Personalizado"]
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/es">
          <Button variant="ghost" className="mb-6 bg-[#6caddf]/10 text-[#1c3454] hover:bg-[#6caddf]/20 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1c3454]">
          Portafolio de Automatización & IA
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#6caddf]">
          Proyectos innovadores combinando automatización inteligente, IA y soluciones no-code para transformar negocios.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationPortfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
        
        <div className="mt-16">
          <ContactSection
            title="Escalemos Tu Negocio"
            description="¿Listo para desbloquear el poder de la IA, automatización y estrategia de medios pagos? Construyamos tu próxima campaña de alto rendimiento."
            buttonText="Contáctame" 
            contactPath="/es/contact"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
