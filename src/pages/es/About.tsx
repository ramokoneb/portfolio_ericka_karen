
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { ContactSection } from "@/components/media-buying/ContactSection";

const About = () => {
  const expertiseAreas = [{
    title: "Medios Pagos y Performance",
    items: ["Meta Ads, Google Ads, TikTok Ads, Pinterest Ads", "Estrategias de Funnel Completo, optimización de ROAS y CAC", "Tests A/B, creativos adaptativos y campañas de mensaje"]
  }, {
    title: "Automatización y No-Code",
    items: ["n8n, Make, Zapier", "Integración entre WhatsApp, CRMs, APIs y plataformas de medios", "FlutterFlow, Lovable, Supabase, Firebase"]
  }, {
    title: "IA y Lógica Inteligente",
    items: ["Agentes conversacionales y analíticos con LLMs", "IA para análisis de campañas y generación creativa", "Scoring de leads, servicio automatizado, optimización autónoma de anuncios"]
  }, {
    title: "Datos y Tracking",
    items: ["Meta Pixel, CAPI, Google Tag Manager", "ctwaclid, Supabase para seguimiento de campañas", "Dashboards en Looker Studio y reportes automatizados"]
  }];
  const achievements = ["+963% ROAS con reestructuración de campañas de e-commerce", "+462% aumento en conversaciones de WhatsApp con tracking inteligente", "-118% CPL para institución educativa utilizando Performance Max", "Break-even en 3 meses para marca internacional con canal de ventas propio", "Automatización completa de servicio y seguimiento con IA y no-code"];

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/es">
          <Button className="mb-6 glass-card">
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
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#1c3454]">Sobre Ericka Karen</h1>
            <p className="text-lg sm:text-xl mb-4 text-[#6caddf]">Donde el rendimiento, la tecnología y la creatividad se encuentran para escalar negocios</p>
            <p className="text-base sm:text-lg mb-4 text-[#1c3454]">
              Con más de una década de experiencia en marketing digital, soy una profesional especializada en medios pagos, automatización e inteligencia artificial aplicada a los negocios. Mi trayectoria comenzó en 2014 en el área creativa, enfocándome en contenido y redes sociales. Pero fue en 2019 cuando di un paso estratégico: migré al universo del performance, donde comencé a construir soluciones basadas en datos para generar resultados reales — desde leads cualificados hasta ingresos exponenciales.
            </p>
            <p className="text-base sm:text-lg text-[#1c3454]">
              Desde entonces, he servido a empresas de diversos tamaños y segmentos, siempre con un objetivo claro: escalar negocios con inteligencia.
            </p>
          </div>
        </div>

        <Card className="mb-6 glass-card">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-primary-darker">Lo que me impulsa</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg text-primary-darker">
              Creo que el futuro del performance está en la unión entre datos, automatización y tecnología accesible. Por eso desarrollo soluciones que conectan medios pagos, flujos automatizados y agentes inteligentes de IA, optimizando las operaciones digitales de extremo a extremo — desde la captación de leads hasta la conversión.
            </p>
          </CardContent>
        </Card>

        <section className="mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary-darker">Mis proyectos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-primary-darker">Zona de Conversão Digital</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-darker">Agencia de performance especializada en campañas de medios pagos enfocadas en ROI, escala y resultados medibles. Más allá de la gestión de tráfico, desarrolla soluciones tecnológicas dirigidas al mercado de marketing digital, combinando rendimiento, automatización e inteligencia de datos para pequeñas y medianas empresas.</p>
              </CardContent>
            </Card>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="text-primary-darker">Nocodeverse</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-primary-darker">Laboratorio de automatización e inteligencia artificial para empresas que buscan escalar con tecnología no-code. Crea soluciones personalizadas con n8n, Make, Supabase e IA aplicada, optimizando procesos, servicio al cliente y toma de decisiones en diferentes áreas más allá del marketing.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary-darker">Experiencia Técnica</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="glass-card">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl text-primary-darker">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base text-primary-darker">
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
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary-darker">Resultados Entregados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="glass-card">
                <CardContent className="pt-6 text-primary-darker">
                  <p className="text-sm sm:text-base">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary-darker">Lo que puedo construir contigo</h2>
          <Card className="glass-card">
            <CardContent className="pt-6">
              <p className="mb-4 text-primary-darker">Si buscas un crecimiento predecible, escalable e inteligente, puedo ayudarte a:</p>
              <ul className="list-disc pl-6 space-y-2 text-primary-darker">
                <li>Escalar campañas con enfoque en resultados</li>
                <li>Automatizar procesos para ahorrar tiempo y reducir errores</li>
                <li>Utilizar inteligencia artificial para tomar decisiones mejores y más rápidas</li>
                <li>Conectar tus herramientas, datos y canales en un único flujo eficiente</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-primary-darker">¿Hablamos?</h2>
          <Card className="glass-card mb-12">
            <CardContent className="pt-6">
              <p className="text-lg text-primary-darker">
                Estoy lista para colaborar con empresas, startups o agencias que ven la tecnología y el rendimiento como el camino más directo hacia el crecimiento. Ya sea en portugués, inglés o español — llevemos tu operación digital al siguiente nivel.
              </p>
            </CardContent>
          </Card>
        </section>
        
        <ContactSection
          title="Escalemos Tu Negocio"
          description="¿Listo para desbloquear el poder de la IA, la automatización y la estrategia de medios pagos? Construyamos tu próxima campaña de alto rendimiento."
          buttonText="Contáctame"
          contactPath="/es/contact"
        />
      </div>
    </div>
  );
};

export default About;
