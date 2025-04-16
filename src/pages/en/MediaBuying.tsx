import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Facebook, Instagram, BarChart, TrendingUp, Search, Bookmark, Youtube, Bot, Target, LineChart, Database, MessageSquare } from "lucide-react";

const MediaBuying = () => {
  const services = [
    {
      icon: <Facebook className="h-10 w-10 text-[#33C3F0]" />,
      title: "Meta Ads",
      description: "Strategic campaign management for Facebook, Instagram and Audience Network with advanced targeting, structured funnels and automation tools like Advantage+ and dynamic catalog. Complete service from copywriting to creative, focused on results."
    },
    {
      icon: <Search className="h-10 w-10 text-[#33C3F0]" />,
      title: "Google Ads",
      description: "Search, Display, YouTube, Shopping and Performance Max campaigns, always with in-depth research, keyword structuring, smart bidding and constant ROAS optimization."
    },
    {
      icon: <Instagram className="h-10 w-10 text-[#33C3F0]" />,
      title: "TikTok Ads",
      description: "Creation of visual campaigns focused on engagement and conversion. Strategies that leverage the platform's native format, with creative language and performance objectives."
    },
    {
      icon: <Bookmark className="h-10 w-10 text-[#33C3F0]" />,
      title: "Pinterest Ads",
      description: "Campaigns focused on discovery and conversion, with creatives designed for the platform's inspirational format. Ideal for e-commerce, fashion, decoration, beauty and visual segments. Full-funnel strategies focused on sustainable growth and qualified traffic."
    },
    {
      icon: <Bot className="h-10 w-10 text-[#33C3F0]" />,
      title: "Applied Artificial Intelligence",
      description: "Using AI on major platforms to optimize delivery, targeting, dynamic creatives and predict behavior patterns. Solutions that integrate intelligence with performance."
    },
    {
      icon: <Target className="h-10 w-10 text-[#33C3F0]" />,
      title: "Conversion Optimization (CRO)",
      description: "Actions aimed at reducing CAC and increasing conversion rates through strategic adjustments in campaigns, creatives, landing pages and messaging."
    },
    {
      icon: <Database className="h-10 w-10 text-[#33C3F0]" />,
      title: "Advanced Tracking & Analytics",
      description: "Implementation of pixels, custom events, tagging with tools such as GTM, ctwaclid and UTMs. Custom dashboards with real-time data and reports with actionable insights."
    }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Conversion Campaign",
      description: "Strategic Facebook and Instagram campaign for an e-commerce client that achieved 450% ROAS and decreased CPA by 35%.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", // Monitor with data graph
      tags: ["Meta Ads", "E-commerce", "ROAS"]
    },
    {
      title: "SaaS Lead Generation",
      description: "Google Ads campaign for a SaaS company that generated 200+ qualified leads per month with a 20% conversion to paid customers.",
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67", // Image representing growth
      tags: ["Google Ads", "SaaS", "Lead Gen"]
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Paid Media Services & Intelligent Performance</h1>
        <p className="text-xl text-white mb-12">
          Data-driven campaigns, automations and artificial intelligence to scale your results.
          My approach combines creativity, technology and performance in complete paid media strategies.
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
          <h2 className="text-2xl font-bold mb-6 text-[#0EA5E9]">Portfolio & Strategic Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
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

export default MediaBuying;
