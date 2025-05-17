
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, MessageSquare, Code, BrainCircuit, Link2, Database, Settings, Smartphone } from "lucide-react";
import { ServiceCard } from "@/components/automation/ServiceCard";
import { TechnologyCard } from "@/components/automation/TechnologyCard";
import { MainService, Technology } from "@/types/automation";

const technologies: Technology[] = [
  {
    category: "Automation & Integration",
    tools: ["n8n", "Make", "Zapier"],
    icon: <Settings className="h-6 w-6" />
  }, {
    category: "Web & Mobile App Builders",
    tools: ["Bubble", "FlutterFlow", "Lovable"],
    icon: <Smartphone className="h-6 w-6" />
  }, {
    category: "AI & Smart Logic",
    tools: ["ChatGPT + Plugins", "FlowiseAI", "Relevance AI", "Langflow"],
    icon: <BrainCircuit className="h-6 w-6" />
  }, {
    category: "Databases & No-Code Backends",
    tools: ["Airtable", "Baserow", "NocoDB", "Xano", "Supabase", "Firebase"],
    icon: <Database className="h-6 w-6" />
  }
];

const mainServices: MainService[] = [{
  icon: <BrainCircuit className="h-8 w-8 md:h-10 md:w-10 text-[#8A898C]" />,
  title: "AI & Intelligent Automation",
  description: "Implement intelligent systems that improve decision making, optimize campaigns and enhance workflows with intelligence."
}, {
  icon: <MessageSquare className="h-8 w-8 md:h-10 md:w-10 text-[#8A898C]" />,
  title: "WhatsApp Automation",
  description: "Automated messaging flows for customer service, sales and lead qualification using WhatsApp and connected APIs."
}, {
  icon: <Link2 className="h-8 w-8 md:h-10 md:w-10 text-[#8A898C]" />,
  title: "CRM & Marketing Integrations",
  description: "Seamless automation between marketing platforms, CRMs, and communication channels."
}, {
  icon: <Code className="h-8 w-8 md:h-10 md:w-10 text-[#8A898C]" />,
  title: "No-Code Development & Workflow Automation",
  description: "Create web apps, dashboards, automations and complete systems using intuitive platforms."
}];

const AutomationAI = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/en">
          <Button variant="ghost" className="mb-4 md:mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-[#1c3454]">
          Automation, AI and No/Low-Code Development
        </h1>
        <p className="text-lg md:text-xl mb-4 md:mb-6 text-[#6caddf]">
          Intelligent systems to automate, scale and innovate your digital operations.
        </p>
        
        <div className="p-4 md:p-6 rounded-lg mb-8 md:mb-12 bg-[#6caddf]">
          <p className="text-base md:text-lg text-1C3454 mb-3 md:mb-4 text-[#1c3454]">
            Transform business routines into high-performance engines using automation, artificial intelligence and no-code platforms. I create solutions that reduce manual work, improve decision-making and connect tools to make your digital strategy truly scalable.
          </p>
          <p className="text-base md:text-lg text-[#1c3454]">
            My approach blends engineering mindset, business intelligence, and user-friendly platforms — empowering you to scale without increasing complexity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">Technologies I Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationAI;
