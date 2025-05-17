
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, MessageSquare, Code, BrainCircuit, Link2, Database, Settings, Smartphone, Star } from "lucide-react";
import { ServiceCard } from "@/components/media-buying/ServiceCard";
import { TechnologyCard } from "@/components/media-buying/TechnologyCard";
import { HeroSection } from "@/components/media-buying/HeroSection";
import { WhyChooseMeSection } from "@/components/media-buying/WhyChooseMeSection";
import { TestimonialsSection } from "@/components/media-buying/TestimonialsSection";
import { ContactSection } from "@/components/media-buying/ContactSection";

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
    text: "Proativa, inventiva, nunca acomodada — Karen é, sem dúvida, uma das profissionais mais inspiradoras que já conheci.",
    author: "Roberto Junior"
  },
  {
    text: "Extremamente competente e sempre integrando as últimas inovações do mercado em seu trabalho.",
    author: "Amanda Carvalho"
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
        <WhyChooseMeSection
          title="Por Que Me Escolher?"
          benefits={benefits}
        />
        
        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454]">Tecnologias & Ferramentas que Domino</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </section>
        
        {/* Testimonials Section - Updated to match MediaBuying */}
        <TestimonialsSection
          title="Feedback de Clientes"
          testimonials={testimonials}
        />
        
        {/* Contact Section - Updated to match MediaBuying */}
        <ContactSection
          title="Vamos Escalar Seu Negócio"
          description="Pronto para desbloquear o poder da IA, automação e estratégia de mídia paga? Vamos construir sua próxima campanha de alta performance."
          buttonText="Entre em Contato"
          contactPath="/pt/contact"
        />
      </div>
    </div>
  );
};

export default AutomationAI;
