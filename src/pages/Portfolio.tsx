
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";

const Portfolio = () => {
  const [language, setLanguage] = useState<"en" | "pt">("en");
  
  const content = {
    en: {
      title: "Portfolio & Projects",
      subtitle: "Selected works and successful case studies across paid media and automation solutions.",
      backButton: "Back to Home",
      categories: ["All", "Paid Media", "Automation", "AI"],
      projects: [
        {
          title: "E-commerce Conversion Campaign",
          category: "Paid Media",
          description: "Strategic Facebook and Instagram campaign for an e-commerce client that achieved 450% ROAS and decreased CPA by 35%.",
          image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=500",
          tags: ["Meta Ads", "E-commerce", "ROAS"]
        },
        {
          title: "SaaS Lead Generation",
          category: "Paid Media",
          description: "Google Ads campaign for a SaaS company that generated 200+ qualified leads per month with a 20% conversion to paid customers.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
          tags: ["Google Ads", "SaaS", "Lead Gen"]
        },
        {
          title: "Customer Support Automation",
          category: "Automation",
          description: "WhatsApp automation solution that handled 80% of customer inquiries automatically, reducing response time by 95%.",
          image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=500",
          tags: ["WhatsApp", "Customer Support", "Chatbot"]
        },
        {
          title: "AI Lead Scoring System",
          category: "AI",
          description: "Custom AI solution that analyzed customer behavior patterns to score leads, improving sales team efficiency by 65%.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
          tags: ["AI", "Machine Learning", "Lead Scoring"]
        },
        {
          title: "Marketing & CRM Integration",
          category: "Automation",
          description: "End-to-end integration between marketing platforms and CRM system with automated lead qualification workflows.",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500",
          tags: ["CRM", "Integration", "Workflow"]
        }
      ]
    },
    pt: {
      title: "Portfólio & Projetos",
      subtitle: "Trabalhos selecionados e casos de sucesso em mídia paga e soluções de automação.",
      backButton: "Voltar para Home",
      categories: ["Todos", "Mídia Paga", "Automação", "IA"],
      projects: [
        {
          title: "Campanha de Conversão E-commerce",
          category: "Mídia Paga",
          description: "Campanha estratégica no Facebook e Instagram para um cliente de e-commerce que alcançou 450% de ROAS e diminuiu o CPA em 35%.",
          image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=500",
          tags: ["Meta Ads", "E-commerce", "ROAS"]
        },
        {
          title: "Geração de Leads SaaS",
          category: "Mídia Paga",
          description: "Campanha do Google Ads para uma empresa SaaS que gerou mais de 200 leads qualificados por mês com 20% de conversão para clientes pagantes.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
          tags: ["Google Ads", "SaaS", "Geração de Leads"]
        },
        {
          title: "Automação de Suporte ao Cliente",
          category: "Automação",
          description: "Solução de automação do WhatsApp que tratou 80% das consultas de clientes automaticamente, reduzindo o tempo de resposta em 95%.",
          image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=500",
          tags: ["WhatsApp", "Suporte ao Cliente", "Chatbot"]
        },
        {
          title: "Sistema de Pontuação de Leads com IA",
          category: "IA",
          description: "Solução de IA personalizada que analisou padrões de comportamento do cliente para pontuar leads, melhorando a eficiência da equipe de vendas em 65%.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
          tags: ["IA", "Machine Learning", "Pontuação de Leads"]
        },
        {
          title: "Integração de Marketing & CRM",
          category: "Automação",
          description: "Integração completa entre plataformas de marketing e sistema CRM com fluxos de trabalho automatizados de qualificação de leads.",
          image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500",
          tags: ["CRM", "Integração", "Workflow"]
        }
      ]
    }
  };
  
  const [activeCategory, setActiveCategory] = useState("All");
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "pt" : "en");
    setActiveCategory(language === "en" ? "Todos" : "All");
  };

  const filteredProjects = content[language].projects.filter(
    project => activeCategory === (language === "en" ? "All" : "Todos") || 
    project.category === activeCategory
  );

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-[#5BCEFA] via-white to-[#F5A9B8]">
      <div className="absolute top-4 right-4">
        <Button 
          variant="outline" 
          className="rounded-full bg-white text-gray-700 hover:bg-gray-100" 
          onClick={toggleLanguage}
        >
          {language === "en" ? "PT" : "EN"}
        </Button>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> {content[language].backButton}
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#5BCEFA]">{content[language].title}</h1>
        <p className="text-xl text-gray-700 mb-8">
          {content[language].subtitle}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-12">
          {content[language].categories.map((category) => (
            <Button 
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category ? 
                "bg-[#F5A9B8] hover:bg-[#F5A9B8] text-white" : 
                "bg-white hover:bg-[#5BCEFA] hover:text-white"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 bg-[#5BCEFA]/10 text-[#5BCEFA] rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                  variant="ghost" 
                  className="text-[#F5A9B8] hover:text-[#F5A9B8] hover:bg-[#F5A9B8]/10"
                >
                  {language === "en" ? "View Details" : "Ver Detalhes"} <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
