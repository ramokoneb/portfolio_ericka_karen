
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, MessageSquare, Zap, Database, Settings } from "lucide-react";

const AutomationAI = () => {
  const services = [
    {
      icon: <Bot className="h-10 w-10 text-[#F5A9B8]" />,
      title: "AI-Powered Lead Qualification",
      description: "Leverage AI to classify, score, and qualify leads for more efficient sales processes and higher conversion rates."
    },
    {
      icon: <MessageSquare className="h-10 w-10 text-[#F5A9B8]" />,
      title: "WhatsApp Automation",
      description: "Automated messaging solutions for customer service, sales support, and lead nurturing through WhatsApp."
    },
    {
      icon: <Database className="h-10 w-10 text-[#F5A9B8]" />,
      title: "CRM Integration",
      description: "Seamless connection between your marketing tools, CRM systems, and sales processes with automated data flow."
    },
    {
      icon: <Settings className="h-10 w-10 text-[#F5A9B8]" />,
      title: "Workflow Automation",
      description: "Custom n8n or Make workflows to automate repetitive tasks and streamline your business operations."
    },
    {
      icon: <Zap className="h-10 w-10 text-[#F5A9B8]" />,
      title: "Marketing Automation",
      description: "End-to-end automation solutions for email marketing, lead nurturing, and customer journey optimization."
    }
  ];

  const portfolioItems = [
    {
      title: "Customer Support Automation",
      description: "WhatsApp automation solution that handled 80% of customer inquiries automatically, reducing response time by 95%.",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=500",
      tags: ["WhatsApp", "Customer Support", "Chatbot"]
    },
    {
      title: "AI Lead Scoring System",
      description: "Custom AI solution that analyzed customer behavior patterns to score leads, improving sales team efficiency by 65%.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
      tags: ["AI", "Machine Learning", "Lead Scoring"]
    },
    {
      title: "Marketing & CRM Integration",
      description: "End-to-end integration between marketing platforms and CRM system with automated lead qualification workflows.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500",
      tags: ["CRM", "Integration", "Workflow"]
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-[#33C3F0]">
      <div className="max-w-6xl mx-auto">
        <Link to="/en">
          <Button variant="ghost" className="mb-6 bg-white/50 hover:bg-white/70">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Automation & AI</h1>
        <p className="text-xl text-white mb-12">
          Implementation of intelligent solutions to automate processes and optimize results through AI.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="mb-2">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-[#0EA5E9]">Portfolio & Case Studies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle>{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 bg-[#33C3F0]/10 text-[#33C3F0] rounded-full text-xs font-medium"
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
