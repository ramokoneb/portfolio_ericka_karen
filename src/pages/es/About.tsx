
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Building, Globe, Briefcase } from "lucide-react";

const About = () => {
  const companies = [
    {
      icon: <Building className="h-10 w-10 text-[#5BCEFA]" />,
      name: "Zona de Conversão Digital",
      description: "Agencia brasileña especializada en campañas de medios pagos con enfoque en resultados medibles y ROI positivo para pequeñas y medianas empresas."
    },
    {
      icon: <Globe className="h-10 w-10 text-[#F5A9B8]" />,
      name: "Zona de Conversão Space",
      description: "Soluciones de IA y automatización específicamente diseñadas para necesidades de marketing digital, ayudando a empresas a escalar sus operaciones de marketing."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-[#5BCEFA]" />,
      name: "Nocoverse",
      description: "Laboratorio de innovación enfocado en el desarrollo de soluciones de automatización e IA más allá del marketing, creando nuevas posibilidades para la transformación de negocios."
    }
  ];

  const skills = [
    "Gestión de Medios Pagos",
    "Automatización de Marketing",
    "Implementación de IA",
    "Integración con CRM",
    "Análisis de Datos",
    "Generación de Leads",
    "Optimización de Conversión"
  ];

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-[#5BCEFA] via-white to-[#F5A9B8]">
      <div className="max-w-4xl mx-auto">
        <Link to="/es">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>
        
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="w-48 h-48 rounded-full mx-auto bg-[#F5A9B8] border-4 border-[#5BCEFA] overflow-hidden">
              <img 
                className="w-full h-full object-cover"
                src="/lovable-uploads/c50dc637-9f5b-40f7-bf8a-adb3743f5ff8.png"
                alt="Ericka Karen"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h1 className="text-4xl font-bold mb-4 text-[#5BCEFA]">Sobre Ericka Karen</h1>
            <p className="text-xl text-gray-700 mb-6">
              Especialista en transformación digital con experiencia en medios pagos, automatización e inteligencia artificial.
            </p>
            <p className="text-lg text-gray-600">
              Con más de una década de experiencia en marketing digital y tecnología, Ericka Karen se ha establecido como una especialista líder en estrategias de medios pagos y soluciones innovadoras de automatización. Su enfoque único combina técnicas de marketing basadas en datos con aplicaciones de IA de vanguardia para entregar resultados excepcionales a empresas en múltiples sectores.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-[#F5A9B8]">Empresas Fundadas</h2>
        
        <div className="space-y-6 mb-12">
          {companies.map((company, index) => (
            <Card key={index} className="border-none shadow-lg">
              <CardHeader>
                <div className="flex items-center">
                  <div className="mr-4">
                    {company.icon}
                  </div>
                  <CardTitle>{company.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{company.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-[#5BCEFA]">Habilidades & Expertise</h2>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {skills.map((skill, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-white rounded-full text-gray-700 shadow"
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
