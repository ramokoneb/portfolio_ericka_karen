import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, MessageSquare, Database, Settings, Layers3, Code, BrainCircuit, Link2, Smartphone, QrCode, FileCode, BarChart2, MessagesSquare, Target } from "lucide-react";

const portfolioItems = [
    {
      title: "WhatsApp Automation – +80% automated inquiries",
      description: "Automation solution developed for WhatsApp customer service, with intelligent chatbot capable of handling 80% of frequently asked questions. 95% reduction in response time and increased service satisfaction.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=500",
      tags: ["WhatsApp API", "n8n", "NLP", "Chatbot"],
      tech: "WhatsApp API • n8n • NLP • Conditional logic",
      goal: "Automated and scalable customer service",
      highlight: "Drastic reduction in need for human support"
    },
    {
      title: "AI Lead Scoring System – +65% sales team efficiency",
      description: "Lead scoring system based on machine learning, trained with real user behavior patterns. Improved sales team efficiency by 65%, prioritizing leads with higher conversion probability.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
      tags: ["n8n", "Supabase", "Machine Learning", "LLMs"],
      tech: "n8n • Supabase • Custom LLMs",
      goal: "Automatic lead qualification",
      highlight: "Intelligence applied to buying journey"
    },
    {
      title: "Personal Lead Capture Website",
      description: "Built with Lovable, integrating automated lead capture and qualification systems.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
      tags: ["Lovable", "Lead Capture", "Automation"]
    },
    {
      title: "WhatsApp Integration System",
      description: "Creates lead cards automatically in CRM when conversations start, with automated follow-up sequences.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=500",
      tags: ["WhatsApp", "CRM", "Automation"]
    },
    {
      title: "AI Campaign Assistant",
      description: "Analyzes, writes, and optimizes campaigns using Meta Ads API and advanced AI capabilities.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=500",
      tags: ["AI", "Meta Ads", "Campaign Optimization"]
    }
];

const technologies = [
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

const AutomationAI = () => {
  const mainServices = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-[#8A898C]" />,
      title: "AI & Intelligent Automation",
      description: "Implement smart systems that enhance decision-making, optimize campaigns, and power your workflows with intelligence."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-[#8A898C]" />,
      title: "WhatsApp Automation",
      description: "Automated messaging flows for customer service, sales, and lead qualification using WhatsApp and connected APIs."
    },
    {
      icon: <Link2 className="h-10 w-10 text-[#8A898C]" />,
      title: "CRM & Marketing Integrations",
      description: "Seamless automation between marketing platforms, CRMs and communication channels."
    },
    {
      icon: <Code className="h-10 w-10 text-[#8A898C]" />,
      title: "No-Code Development & Workflow Automation",
      description: "Create web apps, dashboards, automations and full systems using intuitive platforms."
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-[#000000]">
      <div className="max-w-6xl mx-auto">
        <Link to="/en">
          <Button variant="ghost" className="mb-6 bg-white/20 hover:bg-white/30 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">🚀 Automation, AI & No/Low-Code Development</h1>
        <p className="text-xl text-white mb-6">
          Intelligent systems to automate, scale, and innovate your digital operations.
        </p>
        
        <div className="bg-white/10 p-6 rounded-lg mb-12">
          <p className="text-lg text-white mb-4">
            Transform business routines into high-performance engines using automation, artificial intelligence and no-code platforms. I create solutions that reduce manual work, improve decision-making and connect tools to make your digital strategy truly scalable.
          </p>
          <p className="text-lg text-white">
            My approach blends engineering mindset, business intelligence, and user-friendly platforms — empowering you to scale without increasing complexity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-black">
              <CardHeader>
                <div className="mb-2">
                  {service.icon}
                </div>
                <CardTitle className="text-black">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-8 text-black">📁 Portfolio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-2xl hover:shadow-2xl transition-all bg-white">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-black">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium"
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

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-black">🧩 Technologies I Use</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {tech.icon}
                    <CardTitle className="text-lg">{tech.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map((tool) => (
                      <span 
                        key={tool}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationAI;
