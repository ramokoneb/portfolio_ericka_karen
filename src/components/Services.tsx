
import { Bot, LineChart, Workflow } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: <Bot className="w-12 h-12 text-purple-600" />,
      title: "Inteligência Artificial",
      description: "Implementação de soluções de IA para otimizar processos e melhorar a tomada de decisão"
    },
    {
      icon: <Workflow className="w-12 h-12 text-purple-600" />,
      title: "Automação",
      description: "Desenvolvimento de fluxos automatizados para aumentar a eficiência operacional"
    },
    {
      icon: <LineChart className="w-12 h-12 text-purple-600" />,
      title: "Tráfego Pago",
      description: "Gestão estratégica de campanhas para maximizar o ROI em plataformas digitais"
    }
  ];

  return (
    <section id="servicos" className="py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Especialidades</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
