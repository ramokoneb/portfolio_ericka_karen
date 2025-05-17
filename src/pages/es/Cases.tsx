
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PortfolioSection } from "@/components/media-buying/PortfolioSection";
import { ContactSection } from "@/components/media-buying/ContactSection";

interface CaseItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const mediaBuyingCases: CaseItem[] = [
  {
    title: "Febracis Tienda Virtual — De la Crisis al Crecimiento Exponencial",
    description: "Después de 6 meses de pérdidas en medios pagos, implementamos enfoques estratégicos logrando R$77.000 en ingresos mensuales (crecimiento del 267%) con 963% de ROAS. La estrategia involucró una revisión completa de la estructura de campaña, segmentación avanzada de audiencia e implementación de un sistema de seguimiento personalizado que permitió la optimización precisa del presupuesto de medios, resultando en una transformación completa de los resultados del e-commerce.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
  },
  {
    title: "Urban Effort — De Cero al Punto de Equilibrio en 3 Meses",
    description: "Marca americana de sombreros que vendía solo en Amazon creó su propio canal de ventas alcanzando el punto de equilibrio en menos de 90 días con un crecimiento de ingresos del +291%. Desarrollamos una estrategia multicanal enfocada en la construcción de marca y conversión directa, utilizando Meta Ads y Google Ads de manera sincronizada para llegar a clientes potenciales en diferentes momentos del recorrido de compra.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Google Ads", "E-commerce"]
  },
  {
    title: "Borogodó Brasil — Recuperación de Ingresos en 30 Días",
    description: "Tras una drástica caída en ventas, estrategias enfocadas en Meta Ads lograron +36% de visitas únicas, +24% de ventas, +40% de ingresos y +13% de ticket promedio en solo un mes. El enfoque incluyó una reestructuración completa de campañas centrándose en la segmentación por intereses y comportamiento, creación de embudos específicos para diferentes categorías de productos e implementación de remarketing avanzado para recuperación de carritos abandonados.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "E-commerce", "Ingresos"]
  },
  {
    title: "Vamos — +50% en Ventas con Adquisición Inteligente",
    description: "Empresa de alquiler de vehículos pesados escaló su base de clientes con segmentación geográfica y demográfica dirigida, logrando +50% en ventas en un solo mes. La estrategia involucró un mapeo detallado de clientes potenciales por región, creación de campañas geolocalizadas con mensajes personalizados por sector y un sistema de calificación de leads que priorizaba contactos con mayor probabilidad de cierre.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Generación de Leads", "Ventas"]
  },
  {
    title: "Unileão — 118% de Reducción en CPL con Performance Max",
    description: "Institución educativa optimizó la generación de leads con campañas Performance Max, logrando una reducción del 118% en el costo por lead y ROI positivo en el primer mes. El proyecto incluyó implementación avanzada de Google Ads enfocada en Performance Max, creación de activos creativos optimizados para diferentes segmentos de audiencia, integración CRM para seguimiento de conversión de matrículas y optimización continua basada en datos de calidad de leads.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Google Ads", "Educación", "Performance Max"]
  },
  {
    title: "Seguimiento Inteligente de WhatsApp — +462% en Conversaciones",
    description: "Implementación de seguimiento vía ctwaclid en campañas de Meta Ads llevó a un aumento de +462,16% en conversaciones iniciadas y reducción del 81,34% en el costo por mensaje enviado en solo una semana. El sistema personalizado permitió la identificación precisa del origen de los leads de WhatsApp, posibilitando optimización y escalabilidad en campañas enfocadas en costo por conversación iniciada, además de mejor atribución de resultados.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "WhatsApp", "Seguimiento"]
  }
];

const Cases = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/es">
          <Button variant="ghost" className="mb-6 bg-[#6caddf]/10 text-[#1c3454] hover:bg-[#6caddf]/20 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1c3454]">
          Casos de Éxito en Medios Pagos
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#6caddf]">
          Resultados reales alcanzados con enfoques estratégicos y soluciones innovadoras.
        </p>
        
        <PortfolioSection items={mediaBuyingCases} />
        
        <ContactSection
          title="Escalemos Tu Negocio"
          description="¿Listo para desbloquear el poder de la IA, automatización y estrategia de medios pagos? Construyamos tu próxima campaña de alto rendimiento."
          buttonText="Contáctame"
          contactPath="/es/contact"
        />
      </div>
    </div>
  );
};

export default Cases;
