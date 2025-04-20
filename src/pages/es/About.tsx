import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, BrainCircuit, Bot, LineChart } from "lucide-react";

const About = () => {
  const expertiseAreas = [
    {
      title: "Medios Pagos y Performance",
      items: ["Meta Ads, Google Ads, TikTok Ads, Pinterest Ads", "Estrategias Full Funnel, optimización de ROAS y CAC", "Tests A/B, creativos adaptativos y campañas de mensajes"]
    },
    {
      title: "Automatización y No-Code",
      items: ["n8n, Make, Zapier", "Integración entre WhatsApp, CRMs, APIs y plataformas de medios", "FlutterFlow, Lovable, Supabase, Firebase"]
    },
    {
      title: "IA y Lógica Inteligente",
      items: ["Agentes conversacionales y analíticos con LLMs", "IA para análisis de campañas y creación de creativos", "Scoring de leads, atención automatizada, optimización autónoma de anuncios"]
    },
    {
      title: "Datos y Seguimiento",
      items: ["Meta Pixel, CAPI, Google Tag Manager", "ctwaclid, Supabase para tracking de campañas", "Dashboards en Looker Studio y reportes automatizados"]
    }
  ];

  const achievements = [
    "+963% de ROAS con reestructuración de campañas para e-commerce",
    "+462% de aumento en conversaciones en WhatsApp con tracking inteligente",
    "-118% de CPL para institución educativa usando Performance Max",
    "Break-even en 3 meses para marca internacional con canal de ventas propio",
    "Automatización completa de atención y seguimiento con IA y no-code"
  ];

  return (
    <div className="min-h-screen bg-[#1A3554] text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <Link to="/es">
          <Button variant="outline" className="mb-6 w-full sm:w-auto">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
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
              Con más de una década de experiencia en marketing digital, soy una profesional especializada en medios pagos, automatización e inteligencia artificial aplicada a negocios. Mi trayectoria comenzó en 2014 en el área creativa, con foco en contenido y redes sociales. Pero fue en 2019 cuando di un paso estratégico: migré al universo del performance, donde comencé a construir soluciones orientadas a datos para generar resultados reales — desde leads calificados hasta facturación exponencial.
            </p>
            <p className="text-base sm:text-lg">
              Desde entonces, he atendido empresas de diversos tamaños y segmentos, siempre con un objetivo claro: escalar negocios con inteligencia.
            </p>
          </div>
        </div>

        <Card className="bg-[#1C3454] border-[#6CAAD9] mb-6 md:mb-12">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-[#6CAAD9]">Lo que me mueve</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg">
              Creo que el futuro del performance está en la unión entre datos, automatización y tecnología accesible. Por eso, desarrollo soluciones que conectan medios pagos, flujos automatizados y agentes inteligentes de IA, optimizando la operación digital de punta a punta — desde la captación hasta la conversión.
            </p>
          </CardContent>
        </Card>

        <section className="mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#6CAAD9]">Mis proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card className="bg-[#1C3454] border-[#6CAAD9]">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Zona de Conversão Digital</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">Agencia de performance especializada en campañas de medios pagos con foco en ROI, escala y resultados medibles. Además de la gestión de tráfico, desarrolla soluciones tecnológicas orientadas al mercado de marketing digital, uniendo performance, automatización e inteligencia de datos para pequeñas y medianas empresas.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1C3454] border-[#6CAAD9]">
              <CardHeader>
                <CardTitle className="text-lg sm:text-xl">Nocodeverse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base">Laboratorio de automatización e inteligencia artificial para negocios que quieren escalar con tecnología sin código. Crea soluciones personalizadas con n8n, Make, Supabase e IA aplicada, optimizando procesos, atención y toma de decisiones en diferentes áreas más allá del marketing.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#6CAAD9]">Expertise Técnica</h2>
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#6CAAD9]">Resultados entregados</h2>
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#6CAAD9]">Qué puedo construir contigo</h2>
          <Card className="bg-[#1C3454] border-[#6CAAD9]">
            <CardContent className="pt-6">
              <p className="text-sm sm:text-base mb-4">Si buscas crecimiento previsible, escalable e inteligente, puedo ayudarte a:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
                <li>Escalar campañas con foco en resultados</li>
                <li>Automatizar procesos para ganar tiempo y reducir errores</li>
                <li>Usar inteligencia artificial para tomar decisiones mejores y más rápidas</li>
                <li>Conectar tus herramientas, datos y canales en un solo flujo eficiente</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#6CAAD9]">¿Conversamos?</h2>
          <Card className="bg-[#1C3454] border-[#6CAAD9]">
            <CardContent className="pt-6">
              <p className="text-sm sm:text-base">
                Estoy lista para colaborar con empresas, startups o agencias que ven en la tecnología y el performance el camino más directo hacia el crecimiento. Ya sea en portugués, inglés o español — llevemos tu operación digital al siguiente nivel.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
