
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MessageSquare, Code, BrainCircuit, Link2, Database, Settings, Smartphone, Star } from "lucide-react";
import { ServiceCard } from "@/components/media-buying/ServiceCard";
import { TechnologyCard } from "@/components/media-buying/TechnologyCard";
import { HeroSection } from "@/components/media-buying/HeroSection";
import { TestimonialCard } from "@/components/media-buying/TestimonialCard";
import { Contact } from "@/components/media-buying/Contact";

const technologies = [
  {
    category: "Automação & Integração",
    tools: ["n8n", "Make (Integromat)", "Zapier"],
    icon: Settings
  }, 
  {
    category: "Desenvolvimento No-Code",
    tools: ["Bubble", "FlutterFlow", "Airtable"],
    icon: Smartphone
  }, 
  {
    category: "IA & Lógica Inteligente",
    tools: ["ChatGPT + Plugins", "FlowiseAI", "Langflow"],
    icon: BrainCircuit
  }, 
  {
    category: "Dados & Backends",
    tools: ["Supabase", "API Rest", "Meta API"],
    icon: Database
  }
];

const services = [
  {
    icon: BrainCircuit,
    title: "Automações com IA",
    description: "Sistemas inteligentes para otimizar workflows, marketing e processos de suporte com inteligência artificial."
  }, 
  {
    icon: MessageSquare,
    title: "Automação de WhatsApp",
    description: "Qualificação de leads e engajamento com clientes via sistemas avançados de mensagens e integrações de API."
  }, 
  {
    icon: Link2,
    title: "Integrações Personalizadas",
    description: "CRMs, ferramentas de marketing e canais de comunicação trabalhando em perfeita sincronização."
  }, 
  {
    icon: Code,
    title: "Desenvolvimento No-Code",
    description: "Crie dashboards e aplicativos com Bubble, FlutterFlow e outras poderosas plataformas no-code."
  },
  {
    icon: BrainCircuit,
    title: "Agentes de IA para Dados & Operações",
    description: "Agentes inteligentes para analisar informações, tomar decisões e executar ações em toda sua stack tecnológica."
  }
];

const benefits = [
  {
    highlight: "80% de automação",
    description: "no atendimento via WhatsApp"
  },
  {
    highlight: "65% de aumento",
    description: "na eficiência da equipe com sistemas de IA"
  },
  {
    highlight: "400%+ de crescimento",
    description: "em conversas qualificadas"
  },
  {
    highlight: "Combinação de habilidades",
    description: "lógica de engenharia + UX + inteligência de negócios"
  },
  {
    highlight: "Comunicação",
    description: "transparente, proativa + entrega pontual"
  }
];

const testimonials = [
  {
    quote: "Proativa, inventiva, nunca acomodada — Karen é, sem dúvida, uma das profissionais mais inspiradoras que já conheci.",
    author: "Roberto Junior",
    rating: 5
  },
  {
    quote: "Extremamente competente e sempre integrando as últimas inovações do mercado em seu trabalho.",
    author: "Amanda Carvalho",
    rating: 5
  }
];

const AutomationAI = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 bg-white/20 hover:bg-white/30 text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
          </Button>
        </Link>
        
        {/* Hero Section */}
        <HeroSection 
          title={<>Especialista em IA & No-Code para Empresas em Crescimento</>}
          subtitle="Revolucionando operações através de automação inteligente e sistemas de IA escaláveis."
          description1="Seja otimizando operações internas ou escalando interações com clientes, eu projeto soluções personalizadas que aumentam a eficiência e liberam sua equipe para focar no que mais importa — crescimento, estratégia e inovação."
          description2="Trabalho com empresas visionárias prontas para escalar através da automação e IA — combinando visão estratégica com sistemas inteligentes que otimizam operações e geram resultados mensuráveis."
        />
        
        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454]">O que Faço Por Você</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard 
                key={index} 
                icon={service.icon} 
                title={service.title} 
                description={service.description} 
              />
            ))}
          </div>
        </section>
        
        {/* Why Choose Me Section */}
        <section className="mb-16 bg-[#6caddf]/10 rounded-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1c3454]">Por Que Me Escolher?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                <p className="font-bold text-[#6caddf] text-lg">{benefit.highlight}</p>
                <p className="text-[#1c3454]/80">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454]">Tecnologias & Ferramentas que Domino</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454]">Feedback de Clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="mb-8">
          <div className="bg-[#1c3454] text-white rounded-lg p-6 md:p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Pronto para Automatizar & Escalar?</h2>
            <p className="mb-6 text-white/80">
              Vamos construir soluções inteligentes que transformem suas operações digitais. Envie uma mensagem e vamos conversar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#6caddf] hover:bg-[#5a9ac8] w-full sm:w-auto" asChild>
                <Link to="/pt/contact" className="flex items-center justify-center">
                  Vamos Construir Mais Inteligente <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AutomationAI;
