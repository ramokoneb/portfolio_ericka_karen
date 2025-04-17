import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, MessageSquare, Zap, Database, Settings, Layers3, SquareCode } from "lucide-react";

const AutomationAI = () => {
  const services = [
    {
      icon: <Bot className="h-10 w-10 text-[#8A898C]" />,
      title: "AI Solutions",
      description: "Implement intelligent systems to optimize processes and enhance decision-making through advanced artificial intelligence."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-[#8A898C]" />,
      title: "WhatsApp Automation",
      description: "Automated messaging solutions for customer service, sales support, and lead nurturing through WhatsApp."
    },
    {
      icon: <Database className="h-10 w-10 text-[#8A898C]" />,
      title: "CRM Integration",
      description: "Seamless connection between your marketing tools, CRM systems, and sales processes with automated data flow."
    },
    {
      icon: <SquareCode className="h-10 w-10 text-[#8A898C]" />,
      title: "No-Code Development",
      description: "Create powerful applications and automate workflows using no-code platforms like Zapier, Make, and n8n."
    },
    {
      icon: <Layers3 className="h-10 w-10 text-[#8A898C]" />,
      title: "Workflow Automation",
      description: "Custom workflows to automate repetitive tasks and streamline your business operations across multiple platforms."
    }
  ];

  const portfolioItems = [
    {
      title: "Customer Support Automation",
      description: "WhatsApp automation solution that handled 80% of customer inquiries automatically, reducing response time by 95%.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=500",
      tags: ["WhatsApp", "Customer Support", "Chatbot"]
    },
    {
      title: "AI Lead Scoring System",
      description: "Custom AI solution that analyzed customer behavior patterns to score leads, improving sales team efficiency by 65%.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
      tags: ["AI", "Machine Learning", "Lead Scoring"]
    },
    {
      title: "Marketing & CRM Integration",
      description: "End-to-end integration between marketing platforms and CRM system with automated lead qualification workflows.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=500",
      tags: ["CRM", "Integration", "Workflow"]
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Automation, AI and No-Code Development</h1>
        <p className="text-xl text-white mb-12">
          Implementation of intelligent solutions to automate processes, optimize results through AI, and empower businesses with no-code technologies.
          My approach combines data science, engineering, and innovative business strategies.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
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
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-black">Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </div>
  );
};

export default AutomationAI;
