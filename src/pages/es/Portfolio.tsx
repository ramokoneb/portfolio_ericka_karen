
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PortfolioCard } from "@/components/automation/PortfolioCard";

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
    description: "Solución de automatización desarrollada para servicio al cliente de WhatsApp, con un chatbot inteligente capaz de manejar el 80% de las preguntas frecuentes. Reducción del 95% en el tiempo de respuesta y aumento en la satisfacción del cliente. El sistema utiliza procesamiento del lenguaje natural para identificar las intenciones del cliente y proporcionar respuestas personalizadas, además de reenviar a asistencia humana cuando es necesario, creando una experiencia fluida y eficiente.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["WhatsApp API", "n8n", "NLP", "Chatbot"]
  },
  {
    id: "ai-lead-scoring",
    title: "Sistema de Puntuación de Leads con IA – +65% de Eficiencia del Equipo de Ventas",
    description: "Sistema de puntuación de leads basado en aprendizaje automático, entrenado con patrones de comportamiento real de usuarios. Mejoró la eficiencia del equipo de ventas en un 65%, priorizando leads con mayor probabilidad de conversión. El modelo analiza más de 20 variables de comportamiento, incluyendo participación en campañas de correo electrónico, interacciones en el sitio web, historial de compras y actividad en redes sociales para determinar con precisión el potencial de cada lead.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["n8n", "Supabase", "Machine Learning", "LLMs"]
  },
  {
    id: "crm-automation",
    title: "CRM Automático vía WhatsApp – Integración en Tiempo Real",
    description: "Sistema que crea automáticamente una nueva tarjeta de lead en el CRM tan pronto como se inicia el primer contacto en WhatsApp. La integración utiliza FlutterFlow + Lovable + n8n y garantiza un flujo 100% automatizado. La solución captura datos del usuario como nombre, correo electrónico y teléfono, y los sincroniza en todas las plataformas, eliminando la necesidad de ingreso manual de datos y asegurando consistencia en la información a través de todos los canales de servicio.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["FlutterFlow", "Lovable", "n8n", "CRM"]
  },
  {
    id: "smart-tracking",
    title: "Seguimiento Inteligente con API de Meta – +462% en Conversaciones de WhatsApp",
    description: "Implementación de seguimiento a través de ctwaclid para identificar con precisión los anuncios que generaron conversaciones de WhatsApp. Aumento del 462,16% en el volumen de conversación y reducción del 81,34% en el costo por mensaje enviado en una semana. Esta solución personalizada permite el seguimiento completo del recorrido del cliente desde el clic en el anuncio hasta la conversión final, proporcionando información valiosa para la optimización de campañas y una mejor asignación del presupuesto de marketing.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Meta API", "n8n", "Supabase", "Analytics"]
  },
  {
    id: "metrics-bot",
    title: "Bot de Métricas de WhatsApp – Automatización de Informes en Tiempo Real",
    description: "Creación de un sistema que envía automáticamente métricas de campañas de Meta y Google Ads a grupos de WhatsApp. Ahorro de tiempo para el equipo, con datos confiables y entrega personalizada para cada grupo. Los informes son completamente configurables, permitiendo definir KPIs específicos para diferentes partes interesadas, además de incluir alertas automáticas cuando métricas importantes están por debajo del objetivo, permitiendo intervenciones rápidas.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Meta API", "Google Ads API", "WhatsApp API", "n8n"]
  },
  {
    id: "auto-followup",
    title: "Seguimiento Automático – Recuperación de Leads con IA",
    description: "Sistema que identifica leads sin respuesta en WhatsApp y activa mensajes automáticos de seguimiento. Mejora el tiempo de reenganche, reduce el abandono del embudo y aumenta las conversiones. La solución utiliza algoritmos de aprendizaje para determinar los mejores momentos y contenido para el reenganche, adaptándose al comportamiento del usuario y al historial de interacción, resultando en tasas de respuesta significativamente más altas en comparación con enfoques estandarizados.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["n8n", "Supabase", "WhatsApp API", "Automation"]
  },
  {
    id: "ai-agents",
    title: "Agentes de IA – Servicio y Campañas Automatizadas",
    description: "Creación de múltiples agentes de IA: desde servicio básico hasta análisis profundo de campañas de medios pagados. Uno de los agentes es capaz de analizar datos, sugerir optimizaciones e incluso estructurar campañas de Meta Ads basadas en resultados actuales. Los agentes están entrenados con datos históricos de rendimiento y mejores prácticas de la industria, permitiendo decisiones basadas en evidencia y recomendaciones contextuales que consideran el historial específico de cada cliente.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["ChatGPT", "Langflow", "Relevance AI", "n8n"]
  },
  {
    id: "qr-system",
    title: "Sistema de Código QR con Instancia Automatizada",
    description: "Desarrollo de una plataforma que genera Códigos QR únicos para cada cliente, activando una nueva instancia integrada a través de Evolution API. Permite la creación de entornos personalizados con lógica preconfigurada para uso inmediato. La solución es especialmente valiosa para eventos y campañas multicanal, donde cada código QR dirigirá al usuario a una experiencia personalizada basada en su perfil y punto de entrada en la campaña.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Lovable", "Evolution API", "n8n"]
  },
  {
    id: "lead-capture",
    title: "Sitio de Captura de Leads con Lovable – Portafolio con Seguimiento de Leads",
    description: "Página de aterrizaje creada con Lovable enfocada en la captura de leads para proveedores de servicios. Integraciones de seguimiento y formulario con envío directo al CRM y a WhatsApp. La solución incluye análisis del comportamiento del usuario en el sitio para determinar intereses específicos, permitiendo que el servicio posterior sea personalizado según las páginas visitadas y el tiempo dedicado en cada sección, aumentando significativamente las tasas de conversión.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Lovable", "Webhooks", "CRM personalizado"]
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/es">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1c3454]">
          Portafolio de Automatización e IA
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#6caddf]">
          Proyectos innovadores que combinan automatización inteligente, IA y soluciones no-code para transformar negocios.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationPortfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
