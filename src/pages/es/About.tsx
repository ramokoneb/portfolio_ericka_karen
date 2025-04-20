import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import PhotoGallery from "@/components/PhotoGallery";

const About = () => {
  const expertiseAreas = [{
    title: "Gestión de Medios Pagados y Rendimiento",
    items: ["Meta Ads, Google Ads, TikTok Ads, Pinterest Ads", "Estrategias de Embudo Completo, optimización de ROAS y CAC", "Pruebas A/B, creativos adaptables y campañas de mensajes"]
  }, {
    title: "Automatización y No-Code",
    items: ["n8n, Make, Zapier", "Integración entre WhatsApp, CRMs, APIs y plataformas de medios", "FlutterFlow, Lovable, Supabase, Firebase"]
  }, {
    title: "IA y Lógica Inteligente",
    items: ["Agentes conversacionales y analíticos con LLMs", "IA para análisis de campaña y generación creativa", "Puntuación de leads, servicio automatizado, optimización autónoma de anuncios"]
  }, {
    title: "Datos y Seguimiento",
    items: ["Meta Pixel, CAPI, Google Tag Manager", "ctwaclid, Supabase para seguimiento de campaña", "Paneles en Looker Studio e informes automatizados"]
  }];
  
  const achievements = ["+963% ROAS con reestructuración de campaña de e-commerce", "+462% aumento de conversaciones en WhatsApp con seguimiento inteligente", "-118% CPL para institución educativa usando Performance Max", "Punto de equilibrio en 3 meses para marca internacional con canal de ventas propio", "Automatización completa de servicio y seguimiento con IA y no-code"];

  return (
    <div className="min-h-screen bg-[#1A3554] text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <Link to="/es">
          <Button variant="outline" className="mb-6 w-full sm:w-auto">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver a Inicio
          </Button>
        </Link>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="md:col-span-1 flex justify-center">
            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#6CAAD9]">
              <img 
                alt="Ericka Karen" 
                className="w-full h-full object-cover" 
                src="/lovable-uploads/c50dc637-9f5b-40f7-bf8a-adb3743f5ff8.png" 
              />
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#6CAAD9]">Sobre Ericka Karen</h1>
            <p className="text-lg sm:text-xl mb-4">Donde el rendimiento, la tecnología y la creatividad se encuentran para escalar negocios</p>
            <p className="text-base sm:text-lg mb-4">
              Con más de una década de experiencia en marketing digital, soy una profesional especializada en medios pagados, automatización e inteligencia artificial aplicada a negocios. Mi viaje comenzó en 2014 en el área creativa, enfocándome en contenido y redes sociales. Pero fue en 2019 cuando di un paso estratégico: migré al universo de rendimiento, donde comencé a construir soluciones basadas en datos para generar resultados reales — desde leads calificados hasta ingresos exponenciales.
            </p>
            <p className="text-base sm:text-lg">
              Desde entonces, he atendido empresas de diversos tamaños y segmentos, siempre con un objetivo claro: escalar negocios con inteligencia.
            </p>
          </div>
        </div>

        <Card className="bg-[#1C3454] border-[#6CAAD9] mb-6 md:mb-12">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-[#6CAAD9]">Lo que me impulsa</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg">
              Creo que el futuro del rendimiento reside en la unión entre datos, automatización y tecnología accesible. Por eso, desarrollo soluciones que conectan medios pagados, flujos automatizados y agentes inteligentes de IA, optimizando operaciones digitales de principio a fin — desde la captura del lead hasta la conversión.
            </p>
          </CardContent>
        </Card>

        <section className="mb-6 md:mb-12">
          <Card className="bg-[#1C3454] border-[#6CAAD9]">
            <CardContent className="pt-6">
              <PhotoGallery />
            </CardContent>
          </Card>
        </section>

        <section className="mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#6CAAD9]">Mis proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card className="bg-[#1C3454] border-[#6CAAD9]">
              <CardHeader>
                <CardTitle>Zona de Conversão Digital</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Agencia de rendimiento especializada en campañas de medios pagados enfocada en ROI, escala y resultados medibles. Más allá de la gestión de tráfico, desarrolla soluciones tecnológicas dirigidas al mercado de marketing digital, combinando rendimiento, automatización e inteligencia de datos para pequeñas y medianas empresas.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1C3454] border-[#6CAAD9]">
              <CardHeader>
                <CardTitle>Nocodeverse</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Laboratorio de automatización e inteligencia artificial para empresas que buscan escalar con tecnología no-code. Crea soluciones personalizadas con n8n, Make, Supabase e IA aplicada, optimizando procesos, servicio al cliente y toma de decisiones en diferentes áreas más allá del marketing.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#6CAAD9]">Experiencia Técnica</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="bg-[#1C3454] border-[#6CAAD9]">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
                    {area.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#6CAAD9]">Resultados Entregados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-[#1C3454] border-[#6CAAD9]">
                <CardContent className="pt-6">
                  <p className="text-sm sm:text-base">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#6CAAD9]">Lo que puedo construir contigo</h2>
          <Card className="bg-[#1C3454] border-[#6CAAD9]">
            <CardContent className="pt-6">
              <p className="mb-4">Si buscas crecimiento predecible, escalable e inteligente, puedo ayudarte a:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Escalar campañas con enfoque en resultados</li>
                <li>Automatizar procesos para ahorrar tiempo y reducir errores</li>
                <li>Usar inteligencia artificial para tomar decisiones mejores y más rápidas</li>
                <li>Conectar tus herramientas, datos y canales en un único flujo eficiente</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#6CAAD9]">¿Hablamos?</h2>
          <Card className="bg-[#1C3454] border-[#6CAAD9]">
            <CardContent className="pt-6">
              <p className="text-lg">
                Estoy lista para colaborar con empresas, startups o agencias que ven tecnología y rendimiento como el camino más directo para el crecimiento. Ya sea en portugués, inglés o español — vamos a llevar tu operación digital al siguiente nivel.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
