
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Projects = () => {
  const projects = [
    {
      title: "Automação de Marketing",
      description: "Implementação de fluxos automatizados para nutrição de leads, resultando em aumento de 150% na taxa de conversão.",
      tags: ["Automação", "Marketing"]
    },
    {
      title: "Otimização de Campanhas",
      description: "Gestão de campanhas de tráfego pago com redução de 40% no CPA e aumento de 80% no ROAS.",
      tags: ["Tráfego Pago", "Analytics"]
    },
    {
      title: "IA para Atendimento",
      description: "Desenvolvimento de chatbot inteligente para suporte ao cliente, com 90% de satisfação dos usuários.",
      tags: ["IA", "Chatbot"]
    }
  ];

  return (
    <section id="projetos" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Projetos em Destaque</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base mb-4">{project.description}</CardDescription>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
