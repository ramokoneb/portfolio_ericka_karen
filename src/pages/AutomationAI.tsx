
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Code, Link2, Settings, Smartphone, BrainCircuit, Database } from "lucide-react";
import { TechnologyCard } from "@/components/automation/TechnologyCard";
import { ServiceCard } from "@/components/automation/ServiceCard";
import type { Technology, MainService } from "@/types/automation";

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
          AI & No-Code Expert for Scaling Companies
        </h1>
        <p className="text-lg sm:text-xl mb-8 text-white">
          Whether you're optimizing internal operations or scaling customer interactions, I design tailored solutions that boost efficiency and free your team to focus on what matters most — growth, strategy, and innovation.
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
          <div className="text-center mb-8">
            <Link to="/en/portfolio/automation-ai">
              <Button className="bg-[#34AEEF] hover:bg-[#5a9ac8] text-white font-medium">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationAI;
