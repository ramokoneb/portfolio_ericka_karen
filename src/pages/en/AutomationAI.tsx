
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
    quote: "Proactive, inventive, never complacent — Karen is without a doubt one of the most inspiring professionals I've met.",
    author: "Roberto Junior",
    rating: 5
  },
  {
    quote: "Extremely competent and always integrating the latest market innovations in her work.",
    author: "Amanda Carvalho",
    rating: 5
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
          title={<>Automation Engineer, AI & No-Code <br className="hidden md:block" /> Specialist for Companies Ready to Scale</>}
          subtitle="Revolutionizing operations through intelligent automation and scalable AI systems."
          description1="Transform business routines into high-performance engines using automation, artificial intelligence, and no-code platforms."
          description2="My approach blends engineering mindset, business intelligence, and user-friendly platforms — empowering you to scale without increasing complexity."
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
        <section className="mb-16 bg-[#6caddf]/10 rounded-lg p-6 md:p-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#1c3454]">Why Choose Me?</h2>
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
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454]">Technologies & Tools I Master</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454]">Client Feedback</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="mb-8">
          <div className="bg-[#1c3454] text-white rounded-lg p-6 md:p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Automate & Scale?</h2>
            <p className="mb-6 text-white/80">
              Let's build intelligent solutions that transform your digital operations. Send me a message and let's talk.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#6caddf] hover:bg-[#5a9ac8] w-full sm:w-auto" asChild>
                <Link to="/en/contact" className="flex items-center justify-center">
                  Let's Build Smarter <ArrowRight className="ml-2 h-4 w-4" />
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
