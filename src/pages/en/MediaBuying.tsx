
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Facebook, Instagram, BarChart, TrendingUp, Search, Bookmark, Youtube, Bot, Target, LineChart, Database, MessageSquare } from "lucide-react";

const MediaBuying = () => {
  const services = [
    {
      icon: <Facebook className="h-10 w-10 text-[#8A898C]" />,
      title: "Meta Ads",
      description: "Strategic campaign management for Facebook, Instagram and Audience Network with advanced targeting, structured funnels and automation tools like Advantage+ and dynamic catalog. Complete service from copywriting to creative, focused on results."
    },
    {
      icon: <Search className="h-10 w-10 text-[#8A898C]" />,
      title: "Google Ads",
      description: "Search, Display, YouTube, Shopping and Performance Max campaigns, always with in-depth research, keyword structuring, smart bidding and constant ROAS optimization."
    },
    {
      icon: <Instagram className="h-10 w-10 text-[#8A898C]" />,
      title: "TikTok Ads",
      description: "Creation of visual campaigns focused on engagement and conversion. Strategies that leverage the platform's native format, with creative language and performance objectives."
    },
    {
      icon: <Bookmark className="h-10 w-10 text-[#8A898C]" />,
      title: "Pinterest Ads",
      description: "Campaigns focused on discovery and conversion, with creatives designed for the platform's inspirational format. Ideal for e-commerce, fashion, decoration, beauty and visual segments. Full-funnel strategies focused on sustainable growth and qualified traffic."
    },
    {
      icon: <Bot className="h-10 w-10 text-[#8A898C]" />,
      title: "Applied Artificial Intelligence",
      description: "Using AI on major platforms to optimize delivery, targeting, dynamic creatives and predict behavior patterns. Solutions that integrate intelligence with performance."
    },
    {
      icon: <Target className="h-10 w-10 text-[#8A898C]" />,
      title: "Conversion Optimization (CRO)",
      description: "Actions aimed at reducing CAC and increasing conversion rates through strategic adjustments in campaigns, creatives, landing pages and messaging."
    },
    {
      icon: <Database className="h-10 w-10 text-[#8A898C]" />,
      title: "Advanced Tracking & Analytics",
      description: "Implementation of pixels, custom events, tagging with tools such as GTM, ctwaclid and UTMs. Custom dashboards with real-time data and reports with actionable insights."
    }
  ];

  const portfolioItems = [
    {
      title: "Febracis Virtual Store — From Crisis to Exponential Growth",
      description: "After 6 months of losses in paid media, implemented strategic approaches achieving R$77,000 in monthly revenue (267% growth) with 963% ROAS using Meta Ads and Google Ads.",
      image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?q=80&w=500",
      tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
    },
    {
      title: "Urban Effort — From Zero to Breakeven in 3 Months",
      description: "American hat brand selling only on Amazon created its own sales channel reaching breakeven in under 90 days with +291% revenue growth through strategic campaigns.",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=500",
      tags: ["Meta Ads", "Google Ads", "E-commerce"]
    },
    {
      title: "Borogodó Brasil — Revenue Turnaround in 30 Days",
      description: "After a drastic drop in sales, focused Meta Ads strategies achieved +36% unique visits, +24% sales, +40% revenue and +13% average ticket in just one month.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
      tags: ["Meta Ads", "E-commerce", "Revenue"]
    },
    {
      title: "Vamos — +50% in Sales with Intelligent Acquisition",
      description: "Heavy vehicle rental company scaled its customer base with targeted geographic and demographic segmentation, achieving +50% sales in a single month.",
      image: "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?q=80&w=500",
      tags: ["Meta Ads", "Lead Gen", "Sales"]
    },
    {
      title: "Qualicorp — 30% CPL Reduction with Bottom-Funnel Segmentation",
      description: "Healthcare operator facing high cost per lead implemented bottom-funnel keywords and smart bidding, reducing CPL by 30% with higher lead quality.",
      image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=500",
      tags: ["Google Ads", "Lead Gen", "CPL"]
    },
    {
      title: "Unileão — 118% CPL Reduction with Performance Max",
      description: "Educational institution optimized lead acquisition with Performance Max campaigns, achieving 118% reduction in cost per lead and positive ROI in the first month.",
      image: "https://images.unsplash.com/photo-1616514197671-15d99ce7253f?q=80&w=500",
      tags: ["Google Ads", "Education", "Performance Max"]
    },
    {
      title: "Intelligent WhatsApp Tracking — +462% in Conversations",
      description: "Implementation of ctwaclid tracking in Meta Ads campaigns led to +462.16% increase in initiated conversations and 81.34% reduction in cost per message sent in just one week.",
      image: "https://images.unsplash.com/photo-1607703703674-df96aa081c7d?q=80&w=500",
      tags: ["Meta Ads", "WhatsApp", "Tracking"]
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
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Paid Media Services & Intelligent Performance</h1>
        <p className="text-xl text-white mb-12">
          Data-driven campaigns, automations and artificial intelligence to scale your results.
          My approach combines creativity, technology and performance in complete paid media strategies.
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
          <h2 className="text-2xl font-bold mb-6 text-black">Strategic Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all bg-white">
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
