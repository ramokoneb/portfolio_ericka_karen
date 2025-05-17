
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PortfolioSection } from "@/components/media-buying/PortfolioSection";

interface CaseItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const mediaBuyingCases: CaseItem[] = [
  {
    title: "Tienda Virtual Febracis — De la Crisis al Crecimiento Exponencial",
    description: "Después de 6 meses de pérdidas en medios pagados, implementamos enfoques estratégicos logrando R$77.000 en ingresos mensuales (267% de crecimiento) con un ROAS del 963%. La estrategia incluyó una revisión completa de la estructura de campañas, segmentación avanzada de audiencias e implementación de un sistema de seguimiento personalizado que permitió una optimización precisa del presupuesto de medios, resultando en una transformación completa de los resultados del e-commerce.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
  },
  {
    title: "Urban Effort — De Cero al Punto de Equilibrio en 3 Meses",
    description: "Marca americana de gorras que vendía solo en Amazon creó su propio canal de ventas alcanzando el punto de equilibrio en menos de 90 días con un +291% de crecimiento en ingresos. Desarrollamos una estrategia multicanal enfocada en la construcción del reconocimiento de marca y la conversión directa, utilizando Meta Ads y Google Ads de forma sincronizada para alcanzar a clientes potenciales en diferentes momentos del recorrido de compra.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Google Ads", "E-commerce"]
  },
  {
    title: "Borogodó Brasil — Transformación de Ingresos en 30 Días",
    description: "Después de una caída drástica en las ventas, estrategias enfocadas en Meta Ads lograron +36% en visitas únicas, +24% en ventas, +40% en ingresos y +13% en ticket promedio en solo un mes. El enfoque incluyó una reestructuración completa de las campañas con foco en segmentación por interés y comportamiento, creación de embudos específicos para diferentes categorías de productos e implementación de retargeting avanzado para recuperación de carritos abandonados.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "E-commerce", "Ingresos"]
  },
  {
    title: "Vamos — +50% en Ventas con Adquisición Inteligente",
    description: "Empresa de alquiler de vehículos pesados escaló su base de clientes con segmentación geográfica y demográfica dirigida, logrando +50% en ventas en un solo mes. La estrategia incluyó mapeo detallado de clientes potenciales por región, creación de campañas geolocalizadas con mensajes personalizados por sector y un sistema de calificación de leads que priorizaba contactos con mayor probabilidad de cierre.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Generación de Leads", "Ventas"]
  },
  {
    title: "Unileão — Reducción del 118% en CPL con Performance Max",
    description: "Institución educativa optimizó la captación de leads con campañas Performance Max, logrando una reducción del 118% en el costo por lead y ROI positivo ya en el primer mes. El proyecto incluyó implementación avanzada de Google Ads con foco en Performance Max, creación de creative assets optimizados para diferentes segmentos de público, integración con CRM para seguimiento de conversión en matrículas y optimización continua basada en datos de calidad de los leads.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Google Ads", "Educación", "Performance Max"]
  },
  {
    title: "Seguimiento Inteligente en WhatsApp — +462% en Conversaciones",
    description: "La implementación de seguimiento vía ctwaclid en las campañas de Meta Ads llevó a un aumento del +462,16% en las conversaciones iniciadas y una reducción del 81,34% en el costo por mensaje enviado en solo una semana. El sistema personalizado permitió la identificación precisa del origen de los leads de WhatsApp, posibilitando la optimización y escalabilidad en las campañas con foco en el costo por conversación iniciada, además de una mejor atribución de resultados.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "WhatsApp", "Seguimiento"]
  }
];

const Cases = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/es">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1c3454]">
          Casos de Éxito en Medios Pagados
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#6caddf]">
          Resultados reales logrados con enfoques estratégicos y soluciones innovadoras.
        </p>
        
        <PortfolioSection items={mediaBuyingCases} />
      </div>
    </div>
  );
};

export default Cases;
