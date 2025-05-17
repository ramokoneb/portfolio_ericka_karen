
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { PortfolioSection } from "@/components/media-buying/PortfolioSection";

interface CaseItem {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

const mediaBuyingCases: CaseItem[] = [
  {
    title: "Febracis Virtual Store — From Crisis to Exponential Growth",
    description: "After 6 months of losses in paid media, we implemented strategic approaches achieving R$77,000 in monthly revenue (267% growth) with 963% ROAS. The strategy involved a complete review of the campaign structure, advanced audience segmentation, and implementation of a custom tracking system that allowed precise optimization of the media budget, resulting in a complete transformation of the e-commerce results.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
  },
  {
    title: "Urban Effort — From Zero to Breakeven in 3 Months",
    description: "American hat brand selling only on Amazon created its own sales channel reaching breakeven in under 90 days with +291% revenue growth. We developed a multichannel strategy focused on brand awareness building and direct conversion, using Meta Ads and Google Ads in a synchronized way to reach potential customers at different moments of the purchase journey.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Google Ads", "E-commerce"]
  },
  {
    title: "Borogodó Brasil — Revenue Turnaround in 30 Days",
    description: "After a drastic drop in sales, focused Meta Ads strategies achieved +36% unique visits, +24% sales, +40% revenue and +13% average ticket in just one month. The approach included a complete restructuring of campaigns focusing on interest and behavior segmentation, creation of specific funnels for different product categories, and implementation of advanced retargeting for abandoned cart recovery.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "E-commerce", "Revenue"]
  },
  {
    title: "Vamos — +50% in Sales with Intelligent Acquisition",
    description: "Heavy vehicle rental company scaled its customer base with targeted geographic and demographic segmentation, achieving +50% in sales in a single month. The strategy involved detailed mapping of potential customers by region, creation of geo-located campaigns with personalized messages by sector, and a lead qualification system that prioritized contacts with higher closing probability.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "Lead Generation", "Sales"]
  },
  {
    title: "Unileão — 118% Reduction in CPL with Performance Max",
    description: "Educational institution optimized lead generation with Performance Max campaigns, achieving 118% reduction in cost per lead and positive ROI in the first month. The project included advanced implementation of Google Ads focusing on Performance Max, creation of optimized creative assets for different audience segments, CRM integration for enrollment conversion tracking, and continuous optimization based on lead quality data.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Google Ads", "Education", "Performance Max"]
  },
  {
    title: "Intelligent WhatsApp Tracking — +462% in Conversations",
    description: "Implementation of tracking via ctwaclid in Meta Ads campaigns led to a +462.16% increase in initiated conversations and 81.34% reduction in cost per message sent in just one week. The custom system allowed precise identification of WhatsApp leads' origin, enabling optimization and scalability in campaigns focused on cost per initiated conversation, as well as better attribution of results.",
    image: "/lovable-uploads/31fc646a-6cf4-478c-9d76-e389e609a2bb.png",
    tags: ["Meta Ads", "WhatsApp", "Tracking"]
  }
];

const Cases = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/en">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1c3454]">
          Media Buying Success Stories
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#6caddf]">
          Real results achieved with strategic approaches and innovative solutions.
        </p>
        
        <PortfolioSection items={mediaBuyingCases} />
      </div>
    </div>
  );
};

export default Cases;
