
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Briefcase, Building, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen p-8 bg-[#33C3F0]">
      <div className="max-w-4xl mx-auto">
        <Link to="/es">
          <Button variant="ghost" className="mb-6 bg-white/50 hover:bg-white/70">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>
        
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="w-48 h-48 rounded-full mx-auto bg-[#F5A9B8] border-4 border-[#1EAEDB] overflow-hidden">
              <img 
                className="w-full h-full object-cover"
                src="/professional-photo.png"
                alt="Ericka Karen"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h1 className="text-4xl font-bold mb-4 text-white">Sobre Ericka Karen</h1>
            <p className="text-xl text-white mb-6">
              Especialista en transformación digital con experiencia en medios pagos, automatización e inteligencia artificial.
            </p>
            <p className="text-lg text-white/90">
              Con más de una década de experiencia en marketing digital y tecnología, Ericka Karen se ha establecido como una experta líder en estrategias de medios pagos y soluciones innovadoras de automatización. Su enfoque único combina técnicas de marketing basadas en datos con aplicaciones de IA de vanguardia para ofrecer resultados excepcionales a empresas de múltiples sectores.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-white">
          Empresas Fundadas
        </h2>
        
        <div className="space-y-6 mb-12">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <div className="flex items-center">
                <div className="mr-4">
                  <Building className="h-10 w-10 text-[#33C3F0]" />
                </div>
                <CardTitle>Zona de Conversão Digital</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Agencia brasileña especializada en campañas de medios pagos con enfoque en resultados medibles y ROI positivo para pequeñas y medianas empresas.</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardHeader>
              <div className="flex items-center">
                <div className="mr-4">
                  <Globe className="h-10 w-10 text-[#F5A9B8]" />
                </div>
                <CardTitle>Zona de Conversão Space</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Soluciones de IA y automatización específicamente diseñadas para necesidades de marketing digital, ayudando a las empresas a escalar sus operaciones de marketing.</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardHeader>
              <div className="flex items-center">
                <div className="mr-4">
                  <Briefcase className="h-10 w-10 text-[#0EA5E9]" />
                </div>
                <CardTitle>Nocoverse</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Laboratorio de innovación enfocado en el desarrollo de soluciones de automatización e IA más allá del marketing, creando nuevas posibilidades para la transformación empresarial.</p>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-white">
          Habilidades & Experiencia
        </h2>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {["Gestión de Medios Pagos", "Automatización de Marketing", "Implementación de IA", "Integración con CRM", "Análisis de Datos", "Generación de Leads", "Optimización de Conversión"].map((skill, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-white rounded-full text-[#33C3F0] shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
