
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Briefcase, Building, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen p-8 bg-[#33C3F0]">
      <div className="max-w-4xl mx-auto">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 bg-white/50 hover:bg-white/70">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
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
              Especialista em transformação digital com expertise em mídia paga, automação e inteligência artificial.
            </p>
            <p className="text-lg text-white/90">
              Com mais de uma década de experiência em marketing digital e tecnologia, Ericka Karen se estabeleceu como uma especialista líder em estratégias de mídia paga e soluções inovadoras de automação. Sua abordagem única combina técnicas de marketing orientadas por dados com aplicações de IA de ponta para entregar resultados excepcionais para empresas em múltiplos setores.
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
              <p className="text-gray-700">Agência brasileira especializada em campanhas de mídia paga com foco em resultados mensuráveis e ROI positivo para pequenas e médias empresas.</p>
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
              <p className="text-gray-700">Soluções de IA e automação especificamente projetadas para necessidades de marketing digital, ajudando empresas a escalar suas operações de marketing.</p>
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
              <p className="text-gray-700">Laboratório de inovação focado no desenvolvimento de soluções de automação e IA além do marketing, criando novas possibilidades para transformação de negócios.</p>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-white">
          Habilidades & Expertise
        </h2>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {["Gestão de Mídia Paga", "Automação de Marketing", "Implementação de IA", "Integração com CRM", "Análise de Dados", "Geração de Leads", "Otimização de Conversão"].map((skill, index) => (
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
