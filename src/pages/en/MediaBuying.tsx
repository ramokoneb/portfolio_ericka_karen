
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Facebook, Instagram, BarChart, TrendingUp, Search } from "lucide-react";

const MediaBuying = () => {
  const services = [
    {
      icon: <Facebook className="h-10 w-10 text-[#33C3F0]" />,
      title: "Meta Ads",
      description: "Strategic campaign management for Facebook, Instagram and Audience Network with optimized targeting and creative approaches."
    },
    {
      icon: <Search className="h-10 w-10 text-[#33C3F0]" />,
      title: "Google Ads",
      description: "Search, Display, and YouTube campaigns developed with keyword research and competitive analysis to maximize your ROAS."
    },
    {
      icon: <Instagram className="h-10 w-10 text-[#33C3F0]" />,
      title: "TikTok Ads",
      description: "Creative ad campaigns that leverage TikTok's unique format and audience engagement opportunities."
    },
    {
      icon: <BarChart className="h-10 w-10 text-[#33C3F0]" />,
      title: "Performance Analysis",
      description: "In-depth reporting and analytics to track campaign performance and identify optimization opportunities."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-[#33C3F0]" />,
      title: "Conversion Optimization",
      description: "Strategies focused on improving conversion rates and reducing customer acquisition costs."
    }
  ];

  const portfolioItems = [
    {
      title: "E-commerce Conversion Campaign",
      description: "Strategic Facebook and Instagram campaign for an e-commerce client that achieved 450% ROAS and decreased CPA by 35%.",
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=500",
      tags: ["Meta Ads", "E-commerce", "ROAS"]
    },
    {
      title: "SaaS Lead Generation",
      description: "Google Ads campaign for a SaaS company that generated 200+ qualified leads per month with a 20% conversion to paid customers.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Paid Media Services</h1>
        <p className="text-xl text-white mb-12">
          Specialist in paid media campaigns focused on measurable results and positive ROI.
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
