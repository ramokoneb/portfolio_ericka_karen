import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BrainCircuit, Target, Database, Settings, LineChart, Bot, Workflow, Code } from "lucide-react";

const MediaBuying = () => {
  const mainServices = [
    {
      icon: <BrainCircuit className="h-10 w-10 text-[#8A898C]" />,
      title: "Intelligence & Business Strategy",
      description: "Development of media strategies aligned with business objectives, focused on scalable and sustainable results."
    },
    {
      icon: <Target className="h-10 w-10 text-[#8A898C]" />,
      title: "Advanced Media Planning",
      description: "Strategic planning of paid campaigns with focus on qualified traffic, conversion optimization and positive ROI."
    },
    {
      icon: <Database className="h-10 w-10 text-[#8A898C]" />,
      title: "Advanced Tracking & Analytics",
      description: "Implementation of advanced tracking solutions, conversion API integration and data-driven optimization systems."
    },
    {
      icon: <Bot className="h-10 w-10 text-[#8A898C]" />,
      title: "Applied Artificial Intelligence",
      description: "Using AI to optimize campaign delivery, targeting, dynamic creatives and predict behavior patterns."
    }
  ];

  const technologies = [
    {
      category: "Technologies & Tools 🎯",
      tools: [
        "Meta Ads Manager (Facebook, Instagram, Audience Network)",
        "Google Ads (Search, Display, YouTube, Shopping, PMax)",
        "TikTok Ads Manager",
        "Pinterest Ads",
        "LinkedIn Ads (for B2B)",
        "Google Merchant Center (for e-commerce Shopping)"
      ],
      icon: <Target className="h-6 w-6" />
    },
    {
      category: "Technologies & Tools 📊",
      tools: [
        "Google Analytics (GA4)",
        "Google Tag Manager",
        "Meta Pixel & Conversion API (CAPI)",
        "Meta Events Manager",
        "Hotjar",
        "Looker Studio / Data Studio",
        "Supermetrics",
        "UTMs, ctwaclid, fbclid, gclid"
      ],
      icon: <LineChart className="h-6 w-6" />
    },
    {
      category: "Technologies & Tools ⚙️",
      tools: [
        "n8n",
        "Make (Integromat)",
        "Zapier",
        "Lovable",
        "Evolution API",
        "Supabase",
        "Firebase"
      ],
      icon: <Settings className="h-6 w-6" />
    },
    {
      category: "Technologies & Tools 🤖",
      tools: [
        "ChatGPT + Plugins",
        "Langflow / FlowiseAI",
        "Relevance AI",
        "AI Campaign Generators",
        "Custom LLMs for scoring and optimization"
      ],
      icon: <BrainCircuit className="h-6 w-6" />
    }
  ];

  const portfolioItems = [
    {
      title: "Febracis Virtual Store — From Crisis to Exponential Growth",
      description: "After 6 months of losses in paid media, implemented strategic approaches achieving R$77,000 in monthly revenue (267% growth) with 963% ROAS using Meta Ads and Google Ads.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?q=80&w=500",
      tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
    },
    {
      title: "Urban Effort — From Zero to Breakeven in 3 Months",
      description: "American hat brand selling only on Amazon created its own sales channel reaching breakeven in under 90 days with +291% revenue growth through strategic campaigns.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=500",
      tags: ["Meta Ads", "Google Ads", "E-commerce"]
    },
    {
      title: "Borogodó Brasil — Revenue Turnaround in 30 Days",
      description: "After a drastic drop in sales, focused Meta Ads strategies achieved +36% unique visits, +24% sales, +40% revenue and +13% average ticket in just one month.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=500",
      tags: ["Meta Ads", "E-commerce", "Revenue"]
    },
    {
      title: "Vamos — +50% in Sales with Intelligent Acquisition",
      description: "Heavy vehicle rental company scaled its customer base with targeted geographic and demographic segmentation, achieving +50% sales in a single month.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
      tags: ["Meta Ads", "Lead Gen", "Sales"]
    },
    {
      title: "Intelligent WhatsApp Tracking — +462% in Conversations",
      description: "Implementation of ctwaclid tracking in Meta Ads campaigns led to +462.16% increase in initiated conversations and 81.34% reduction in cost per message sent in just one week.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=500",
      tags: ["Meta Ads", "WhatsApp", "Tracking"]
    },
    {
      title: "Unileão — 118% Reduction in CPL with Performance Max",
      description: "Educational institution optimized lead capture with Performance Max campaigns, achieving 118% reduction in cost per lead and positive ROI from the first month.",
      image: "https://images.unsplash.com/photo-1590402494610-2c378a9114c6?q=80&w=500",
      tags: ["Google Ads", "Education", "Performance Max"]
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Paid Media Services & Strategic Performance</h1>
        <p className="text-xl text-white mb-12">
          Data-driven campaigns, performance intelligence and advanced tracking to scale your results.
        </p>
        
        <div className="bg-white/10 p-6 rounded-lg mb-12">
          <p className="text-lg text-white mb-4">
            Transform your paid media investments into predictable and scalable growth engines. I combine strategic intelligence with advanced tracking systems to ensure every campaign generates measurable impact.
          </p>
          <p className="text-lg text-white">
            My approach integrates business strategy, performance data and artificial intelligence — delivering campaigns that consistently achieve positive ROI.
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
          <h2 className="text-2xl font-bold mb-8 text-black">Technologies & Tools</h2>
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
                  <div className="flex flex-col space-y-2">
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

        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-black">Strategic Case Studies 🚀</h2>
          <div className="grid md:grid-cols-2 gap-8">
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

export default MediaBuying;
