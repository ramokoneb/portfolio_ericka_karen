
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Building, Globe, Briefcase } from "lucide-react";

const About = () => {
  const companies = [
    {
      icon: <Building className="h-10 w-10 text-[#5BCEFA]" />,
      name: "Zona de Conversão Digital",
      description: "Agência brasileira especializada em campanhas de mídia paga com foco em resultados mensuráveis e ROI positivo para pequenas e médias empresas."
    },
    {
      icon: <Globe className="h-10 w-10 text-[#F5A9B8]" />,
      name: "Zona de Conversão Space",
      description: "Soluções de IA e automação especificamente projetadas para necessidades de marketing digital, ajudando empresas a escalar suas operações de marketing."
    },
    {
      icon: <Briefcase className="h-10 w-10 text-[#5BCEFA]" />,
      name: "Nocoverse",
      description: "Laboratório de inovação focado no desenvolvimento de soluções de automação e IA além do marketing, criando novas possibilidades para transformação de negócios."
    }
  ];

  const skills = [
    "Gestão de Mídia Paga",
    "Automação de Marketing",
    "Implementação de IA",
    "Integração com CRM",
    "Análise de Dados",
    "Geração de Leads",
    "Otimização de Conversão"
  ];

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-[#5BCEFA] via-white to-[#F5A9B8]">
      <div className="max-w-4xl mx-auto">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
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
              Especialista em transformação digital com expertise em mídia paga, automação e inteligência artificial.
            </p>
            <p className="text-lg text-gray-600">
              Com mais de uma década de experiência em marketing digital e tecnologia, Ericka Karen se estabeleceu como uma especialista líder em estratégias de mídia paga e soluções inovadoras de automação. Sua abordagem única combina técnicas de marketing orientadas por dados com aplicações de IA de ponta para entregar resultados excepcionais para empresas em múltiplos setores.
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
