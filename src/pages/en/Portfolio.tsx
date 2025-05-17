
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface PortfolioItem {
  id: string;
  title: string;
  category: "media" | "automation";
  description: string;
  image: string;
  tags: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "ecommerce-conversion",
    title: "E-commerce Conversion Campaign",
    category: "media",
    description: "Strategic Facebook and Instagram campaign for an e-commerce client that achieved 450% ROAS and decreased CPA by 35%.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "E-commerce", "ROAS"]
  },
  {
    id: "saas-lead-gen",
    title: "SaaS Lead Generation",
    category: "media",
    description: "Google Ads campaign for a SaaS company that generated 200+ qualified leads per month with a 20% conversion to paid customers.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Google Ads", "SaaS", "Lead Gen"]
  },
  {
    id: "b2b-linkedin",
    title: "B2B LinkedIn Campaign",
    category: "media",
    description: "Targeted LinkedIn Ads campaign for a B2B service provider that reduced cost per acquisition by 40% while increasing lead quality.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["LinkedIn Ads", "B2B", "Lead Quality"]
  },
  {
    id: "customer-support-automation",
    title: "Customer Support Automation",
    category: "automation",
    description: "WhatsApp automation solution that handled 80% of customer inquiries automatically, reducing response time by 95%.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["WhatsApp", "Customer Support", "Chatbot"]
  },
  {
    id: "ai-lead-scoring",
    title: "AI Lead Scoring System",
    category: "automation",
    description: "Custom AI solution that analyzed customer behavior patterns to score leads, improving sales team efficiency by 65%.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["AI", "Machine Learning", "Lead Scoring"]
  },
  {
    id: "crm-integration",
    title: "Marketing & CRM Integration",
    category: "automation",
    description: "End-to-end integration between marketing platforms and CRM system with automated lead qualification workflows.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["CRM", "Integration", "Workflow"]
  }
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const filteredItems = activeTab === "all" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);
  
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/en">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1c3454]">
          Portfolio
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#6caddf]">
          A selection of projects showcasing expertise in media buying, automation, and AI solutions.
        </p>
        
        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all" className="text-[#1c3454]">All Projects</TabsTrigger>
            <TabsTrigger value="media" className="text-[#1c3454]">Media Buying</TabsTrigger>
            <TabsTrigger value="automation" className="text-[#1c3454]">Automation & AI</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="media" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="automation" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <PortfolioCard key={item.id} item={item} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const PortfolioCard = ({ item }: { item: PortfolioItem }) => {
  return (
    <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-[#1c3454]">{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{item.description}</p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-[#6caddf]/10 text-[#6caddf] rounded-full text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Button 
          variant="outline" 
          className="w-full text-[#6caddf] border-[#6caddf] hover:bg-[#6caddf] hover:text-white"
        >
          View Details <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Portfolio;
