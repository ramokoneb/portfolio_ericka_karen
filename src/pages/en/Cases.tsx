
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface Case {
  id: string;
  title: string;
  category: "media" | "automation";
  description: string;
  results: string[];
  image: string;
  tags: string[];
}

const caseStudies: Case[] = [
  {
    id: "febracis-store",
    title: "Febracis Virtual Store — From Crisis to Exponential Growth",
    category: "media",
    description: "After 6 months of losses in paid media, implemented strategic approaches achieving R$77,000 in monthly revenue (267% growth) with 963% ROAS using Meta Ads and Google Ads.",
    results: ["267% revenue growth", "963% ROAS", "Profitable after 6 months of losses"],
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
  },
  {
    id: "urban-effort",
    title: "Urban Effort — From Zero to Breakeven in 3 Months",
    category: "media",
    description: "American hat brand selling only on Amazon created its own sales channel reaching breakeven in under 90 days with +291% revenue growth through strategic campaigns.",
    results: ["Breakeven in 90 days", "291% revenue growth", "New sales channel established"],
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Google Ads", "E-commerce"]
  },
  {
    id: "borogodo",
    title: "Borogodó Brasil — Revenue Turnaround in 30 Days",
    category: "media",
    description: "After a drastic drop in sales, focused Meta Ads strategies achieved +36% unique visits, +24% sales, +40% revenue and +13% average ticket in just one month.",
    results: ["+36% unique visits", "+24% sales", "+40% revenue", "+13% average ticket"],
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "E-commerce", "Revenue"]
  },
  {
    id: "whatsapp-automation",
    title: "WhatsApp Automation – +80% automated inquiries",
    category: "automation",
    description: "Automation solution developed for WhatsApp customer service, with intelligent chatbot capable of handling 80% of frequently asked questions. 95% reduction in response time and increased service satisfaction.",
    results: ["80% automated inquiries", "95% reduction in response time", "Increased satisfaction"],
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["WhatsApp API", "n8n", "NLP", "Chatbot"]
  },
  {
    id: "lead-scoring",
    title: "AI Lead Scoring System – +65% sales team efficiency",
    category: "automation",
    description: "Lead scoring system based on machine learning, trained with real user behavior patterns. Improved sales team efficiency by 65%, prioritizing leads with higher conversion probability.",
    results: ["+65% sales team efficiency", "Higher conversion rates", "Improved lead quality"],
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["n8n", "Supabase", "Machine Learning", "LLMs"]
  },
  {
    id: "tracking-system",
    title: "Smart Tracking with Meta API – +462% in conversations",
    category: "automation",
    description: "Implementation of tracking via ctwaclid to accurately identify ads generating WhatsApp conversations. Increase of +462.16% in conversation volume and reduction of -81.34% in cost per message sent in a week.",
    results: ["+462% in conversations", "-81% cost per message", "Advanced attribution"],
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Meta API", "n8n", "Supabase", "Analytics"]
  }
];

const Cases = () => {
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const filteredCases = activeTab === "all" 
    ? caseStudies 
    : caseStudies.filter(c => c.category === activeTab);
  
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/en">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1c3454]">
          Media Buying Case Studies
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#6caddf]">
          Real results achieved with strategic approaches and innovative solutions.
        </p>
        
        <Tabs defaultValue="all" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="all" className="text-[#1c3454]">All Cases</TabsTrigger>
            <TabsTrigger value="media" className="text-[#1c3454]">Media Buying</TabsTrigger>
            <TabsTrigger value="automation" className="text-[#1c3454]">Automation & AI</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="media" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="automation" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((caseItem) => (
                <CaseCard key={caseItem.id} caseItem={caseItem} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const CaseCard = ({ caseItem }: { caseItem: Case }) => {
  return (
    <Card className="overflow-hidden border border-gray-200 hover:shadow-lg transition-all">
      <div className="h-48 overflow-hidden">
        <img 
          src={caseItem.image} 
          alt={caseItem.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-[#1c3454]">{caseItem.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 mb-4">{caseItem.description}</p>
        <div className="mb-4">
          <h4 className="font-semibold text-[#6caddf] mb-2">Results:</h4>
          <ul className="list-disc pl-5">
            {caseItem.results.map((result, index) => (
              <li key={index} className="text-gray-600">{result}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {caseItem.tags.map((tag) => (
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
          View Full Case Study <ExternalLink className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Cases;
