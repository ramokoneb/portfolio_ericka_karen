import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Settings, Smartphone, BrainCircuit, Database } from "lucide-react";
import { PortfolioCard } from "@/components/automation/PortfolioCard";
import { TechnologyCard } from "@/components/automation/TechnologyCard";
import { ServiceCard } from "@/components/automation/ServiceCard";
import type { PortfolioItem, Technology, MainService } from "@/types/automation";

const portfolioItems: PortfolioItem[] = [
  {
    title: "WhatsApp Automation – +80% automated inquiries",
    description: "Automation solution developed for WhatsApp customer service, with intelligent chatbot capable of handling 80% of frequently asked questions. 95% reduction in response time and increased service satisfaction.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["WhatsApp API", "n8n", "NLP", "Chatbot"],
    tech: "WhatsApp API • n8n • NLP • Conditional logic",
    goal: "Automated and scalable customer service",
    highlight: "Drastic reduction in need for human support"
  },
  {
    title: "AI Lead Scoring System – +65% sales team efficiency",
    description: "Lead scoring system based on machine learning, trained with real user behavior patterns. Improved sales team efficiency by 65%, prioritizing leads with higher conversion probability.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["n8n", "Supabase", "Machine Learning", "LLMs"],
    tech: "n8n • Supabase • Custom LLMs",
    goal: "Automatic lead qualification",
    highlight: "Intelligence applied to buying journey"
  },
  {
    title: "Automated CRM via WhatsApp – Real-time Integration",
    description: "System that automatically creates a new lead card in CRM as soon as the first WhatsApp contact is initiated. Integration uses FlutterFlow + Lovable + n8n ensuring 100% automated flow.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["FlutterFlow", "Lovable", "n8n", "CRM"],
    tech: "FlutterFlow • Lovable • n8n",
    goal: "Automatic lead capture and organization",
    highlight: "Immediate sync between WhatsApp and CRM"
  },
  {
    title: "Smart Tracking with Meta API – +462% in conversations",
    description: "Implementation of tracking via ctwaclid to accurately identify ads generating WhatsApp conversations. Increase of +462.16% in conversation volume and reduction of -81.34% in cost per message sent in a week.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Meta API", "n8n", "Supabase", "Analytics"],
    tech: "Meta API • n8n • Supabase • UTMs",
    goal: "Precise measurement of message campaigns",
    highlight: "Advanced tracking with real conversion data"
  },
  {
    title: "WhatsApp Metrics Bot – Real-time report automation",
    description: "System that automatically sends Meta and Google Ads campaign metrics to WhatsApp groups. Team time savings with reliable data and customized delivery for each group.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Meta API", "Google Ads API", "WhatsApp API", "n8n"],
    tech: "Meta API • Google Ads API • Evolution API • WhatsApp API • n8n",
    goal: "Automated campaign monitoring",
    highlight: "Reports sent in real-time without manual intervention"
  },
  {
    title: "Automated Follow-up – AI-powered lead recovery",
    description: "System that identifies unanswered leads in WhatsApp and triggers automatic follow-up messages. Improves re-engagement time, reduces funnel abandonment and increases conversions.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["n8n", "Supabase", "WhatsApp API", "Automation"],
    tech: "n8n • Supabase • WhatsApp API",
    goal: "Active opportunity recovery",
    highlight: "Automatic actions based on behavior"
  },
  {
    title: "AI Agents – Automated service and campaigns",
    description: "Creation of multiple AI agents: from basic service to in-depth analysis of paid media campaigns. One agent can analyze data, suggest optimizations, and even structure Meta Ads campaigns based on current results.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["ChatGPT", "Langflow", "Relevance AI", "n8n"],
    tech: "ChatGPT Plugins • Langflow • Relevance AI • n8n",
    goal: "Intelligent service, analysis and execution",
    highlight: "AI with autonomy to suggest and implement actions"
  },
  {
    title: "QR Code System with Automated Instance",
    description: "Development of platform that generates unique QR Codes for each client, activating a new instance integrated via Evolution API. Enables creation of customized environments with pre-configured logic for immediate use.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Lovable", "Evolution API", "n8n"],
    tech: "Lovable • Evolution API • n8n",
    goal: "Automatic generation of environments and flows",
    highlight: "Scalability and zero manual intervention for activation"
  },
  {
    title: "Lead Capture Website with Lovable",
    description: "Landing page created with Lovable focusing on lead capture for service provision. Tracking integrations and form with direct sending to CRM and WhatsApp.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Lovable", "Webhooks", "Custom CRM"],
    tech: "Lovable • Webhooks • Custom CRM",
    goal: "Automated lead capture and qualification",
    highlight: "Ready to run campaigns with complete tracking"
  }
];

const technologies: Technology[] = [
  {
    category: "Automation & Integration",
    tools: ["n8n", "Make", "Zapier"],
    icon: <Settings className="h-6 w-6" />
  },
  {
    category: "Web & Mobile App Builders",
    tools: ["Bubble", "FlutterFlow", "Lovable"],
    icon: <Smartphone className="h-6 w-6" />
  },
  {
    category: "AI & Smart Logic",
    tools: ["ChatGPT + Plugins", "FlowiseAI", "Relevance AI", "Langflow"],
    icon: <BrainCircuit className="h-6 w-6" />
  },
  {
    category: "Databases & No-Code Backends",
    tools: ["Airtable", "Baserow", "NocoDB", "Xano", "Supabase", "Firebase"],
    icon: <Database className="h-6 w-6" />
  }
];

const mainServices: MainService[] = [
  {
    icon: <BrainCircuit className="h-10 w-10 text-[#8A898C]" />,
    title: "AI & Intelligent Automation",
    description: "Implement intelligent systems that improve decision making, optimize campaigns and enhance workflows with intelligence."
  }, {
    icon: <MessageSquare className="h-10 w-10 text-[#8A898C]" />,
    title: "WhatsApp Automation",
    description: "Automated messaging flows for customer service, sales and lead qualification using WhatsApp and connected APIs."
  }, {
    icon: <Link2 className="h-10 w-10 text-[#8A898C]" />,
    title: "CRM & Marketing Integrations",
    description: "Seamless automation between marketing platforms, CRMs, and communication channels."
  }, {
    icon: <Code className="h-10 w-10 text-[#8A898C]" />,
    title: "No-Code Development & Workflow Automation",
    description: "Create web apps, dashboards, automations and complete systems using intuitive platforms."
  }
];

const AutomationAI = () => {
  const [language, setLanguage] = useState<"en" | "pt">("en");

  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "pt" : "en");
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-[#000000]">
      <div className="max-w-6xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-6 bg-white/20 hover:bg-white/30 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
          Automation, AI and No-Code Development
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-white">
          Implementation of intelligent solutions to automate processes, optimize results through AI, and empower businesses with no-code technologies.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">🧩 Technologies I Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">📁 Portfolio</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationAI;
