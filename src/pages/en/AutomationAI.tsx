
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
    category: "Automation & Integration",
    tools: ["n8n", "Make (Integromat)", "Zapier"],
    icon: Settings
  }, 
  {
    category: "No-Code Development",
    tools: ["Bubble", "FlutterFlow", "Airtable"],
    icon: Smartphone
  }, 
  {
    category: "AI & Smart Logic",
    tools: ["ChatGPT + Plugins", "FlowiseAI", "Langflow"],
    icon: BrainCircuit
  }, 
  {
    category: "Data & Backends",
    tools: ["Supabase", "API Rest", "Meta API"],
    icon: Database
  }
];

const services = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Automations",
    description: "Intelligent systems to optimize workflows, marketing, and support processes with artificial intelligence."
  }, 
  {
    icon: MessageSquare,
    title: "WhatsApp Automation Flows",
    description: "Lead qualification and customer engagement via advanced messaging systems and API integrations."
  }, 
  {
    icon: Link2,
    title: "Custom Integrations",
    description: "CRMs, marketing tools, and communication channels working in perfect synchronization."
  }, 
  {
    icon: Code,
    title: "No-Code App Development",
    description: "Build dashboards and applications with Bubble, FlutterFlow, and other powerful no-code platforms."
  },
  {
    icon: BrainCircuit,
    title: "AI Agents for Data & Ops",
    description: "Smart agents to analyze information, make decisions, and take action across your technology stack."
  }
];

const benefits = [
  {
    highlight: "80% automation",
    description: "in customer service via WhatsApp"
  },
  {
    highlight: "65% increase",
    description: "in team efficiency with AI-driven systems"
  },
  {
    highlight: "400%+ growth",
    description: "in qualified conversations"
  },
  {
    highlight: "Blend of skills",
    description: "engineering logic + UX + business intelligence"
  },
  {
    highlight: "Communication",
    description: "transparent, proactive + timely delivery"
  }
];

const testimonials = [
  {
    text: "Proactive, inventive, never complacent — Karen is without a doubt one of the most inspiring professionals I've met.",
    author: "Roberto Junior"
  },
  {
    text: "Extremely competent and always integrating the latest market innovations in her work.",
    author: "Amanda Carvalho"
  }
];

const AutomationAI = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <Link to="/en">
          <Button variant="ghost" className="mb-6 bg-white/20 hover:bg-white/30 text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        {/* Hero Section */}
        <HeroSection 
          title={<>AI & No-Code Expert for Scaling Companies</>}
          subtitle="Revolutionizing operations through intelligent automation and scalable AI systems."
          description1="Whether you're optimizing internal operations or scaling customer interactions, I design tailored solutions that boost efficiency and free your team to focus on what matters most — growth, strategy, and innovation."
          description2="I work with forward-thinking companies ready to scale through automation and AI — combining strategic insight with intelligent systems that streamline operations and drive measurable results."
          ctaText="Let's Work Together"
          contactPath="/en/contact"
          strategicText="I cater to businesses ready to scale through automation platforms, deploying solutions that combine human strategy with machine efficiency."
        />
        
        {/* Services Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454]">What I Do For You</h2>
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
          title="Why Choose Me?"
          benefits={benefits}
        />
        
        {/* Technologies Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454]">Technologies I Master</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </section>
        
        {/* Testimonials Section */}
        <TestimonialsSection
          title="Client Feedback"
          testimonials={testimonials}
        />
        
        {/* Contact Section */}
        <ContactSection
          title="Let's Scale Your Business"
          description="Ready to unlock the power of AI, automation, and paid media strategy? Let's build your next high-performing campaign."
          buttonText="Contact Me"
          contactPath="/en/contact"
        />
      </div>
    </div>
  );
};

export default AutomationAI;
