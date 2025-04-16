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
      title: "Febracis Virtual Store — From Crisis to Exponential Growth",
      description: "The store was facing six months of losses in paid media. We implemented strategies that resulted in R$77,000 in revenue (267% growth) and a 963% ROAS with an investment of R$8,000.",
      image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?q=80&w=500",
      tags: ["Meta Ads", "Google Ads", "963% ROAS"]
    },
    {
      title: "Urban Effort — From Zero to Breakeven in 3 Months",
      description: "American hat brand that only sold on Amazon was able to create its own sales channel with +291% revenue growth and breakeven achieved in less than 3 months.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
      tags: ["Meta Ads", "Google Ads", "Dynamic Catalog"]
    },
    {
      title: "Borogodó Brasil — Revenue Turnaround in 30 Days",
      description: "After a drastic drop in sales, we implemented Meta Ads-focused strategies that resulted in +36% unique visits, +24% sales, +40% revenue and +13% average ticket.",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=500",
      tags: ["Meta Ads", "Optimized Pixel", "Advantage+"]
    },
    {
      title: "Vamos — +50% in Sales with Intelligent Acquisition",
      description: "Heavy vehicle rental company achieved +50% in sales in one month, expansion of the lead base and increased average ticket via remarketing.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
      tags: ["Meta Ads", "Dynamic Remarketing"]
    },
    {
      title: "Qualicorp — 30% Reduction in CPL",
      description: "Healthcare operator was facing high cost per lead. With bottom-of-funnel keywords and Smart Bidding, they achieved -30% in CPL and higher quality leads.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=500",
      tags: ["Google Ads", "Smart Bidding"]
    },
    {
      title: "Unileão — 118% Reduction in CPL with Performance Max",
      description: "Educational institution achieved -118% in cost per lead, significant increase in qualified leads and positive ROI in the first month after optimization.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=500",
      tags: ["Google Ads", "Performance Max"]
    },
    {
      title: "Intelligent WhatsApp Tracking — +462% in Conversations",
      description: "Implementation of tracking via ctwaclid in Meta Ads campaigns resulted in a +462.16% increase in conversation volume and -81.34% reduction in cost per message sent.",
      image: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?q=80&w=500",
      tags: ["Meta Ads", "WhatsApp", "Tracking"]
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
