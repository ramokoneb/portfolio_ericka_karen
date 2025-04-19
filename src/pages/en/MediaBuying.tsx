
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, BrainCircuit, Database, Settings, Bot, LineChart, Target } from "lucide-react";
import { ServiceCard } from "@/components/media-buying/ServiceCard";
import { TechnologySection } from "@/components/media-buying/TechnologySection";
import { PortfolioSection } from "@/components/media-buying/PortfolioSection";

const mainServices = [{
  icon: BrainCircuit,
  title: "Intelligence & Business Strategy",
  description: "Development of media strategies aligned with business objectives, focused on scalable and sustainable results."
}, {
  icon: Target,
  title: "Advanced Media Planning",
  description: "Strategic planning of paid campaigns with focus on qualified traffic, conversion optimization and positive ROI."
}, {
  icon: Database,
  title: "Advanced Tracking & Analytics",
  description: "Implementation of advanced tracking solutions, conversion API integration and data-driven optimization systems."
}, {
  icon: Bot,
  title: "Applied Artificial Intelligence",
  description: "Using AI to optimize campaign delivery, targeting, dynamic creatives and predict behavior patterns."
}];

const technologies = [{
  category: "Technologies & Tools 🎯",
  tools: ["Meta Ads Manager", "Google Ads", "TikTok Ads Manager", "Pinterest Ads", "LinkedIn Ads", "Google Merchant Center"],
  icon: Target
}, {
  category: "Technologies & Tools 📊",
  tools: ["Google Analytics (GA4)", "Google Tag Manager", "Meta Pixel & Conversion API (CAPI)", "Meta Events Manager", "Hotjar", "Looker Studio / Data Studio", "Supermetrics", "UTMs, ctwaclid, fbclid, gclid"],
  icon: LineChart
}, {
  category: "Technologies & Tools ⚙️",
  tools: ["n8n", "Make (Integromat)", "Zapier", "Evolution API", "Supabase"],
  icon: Settings
}, {
  category: "Technologies & Tools 🤖",
  tools: ["ChatGPT + Plugins", "Langflow / FlowiseAI", "Relevance AI", "AI Campaign Generators", "Custom LLMs for scoring and optimization"],
  icon: BrainCircuit
}];

const portfolioItems = [{
  title: "Febracis Virtual Store — From Crisis to Exponential Growth",
  description: "After 6 months of losses in paid media, implemented strategic approaches achieving R$77,000 in monthly revenue (267% growth) with 963% ROAS using Meta Ads and Google Ads.",
  image: "/lovable-uploads/5e7a3674-d884-47a0-92a9-19bd8db3611e.png",
  tags: ["Meta Ads", "Google Ads", "ROAS", "E-commerce"]
}, {
  title: "Urban Effort — From Zero to Breakeven in 3 Months",
  description: "American hat brand selling only on Amazon created its own sales channel reaching breakeven in under 90 days with +291% revenue growth through strategic campaigns.",
  image: "/lovable-uploads/5e7a3674-d884-47a0-92a9-19bd8db3611e.png",
  tags: ["Meta Ads", "Google Ads", "E-commerce"]
}, {
  title: "Borogodó Brasil — Revenue Turnaround in 30 Days",
  description: "After a drastic drop in sales, focused Meta Ads strategies achieved +36% unique visits, +24% sales, +40% revenue and +13% average ticket in just one month.",
  image: "/lovable-uploads/5e7a3674-d884-47a0-92a9-19bd8db3611e.png",
  tags: ["Meta Ads", "E-commerce", "Revenue"]
}, {
  title: "Vamos — +50% in Sales with Intelligent Acquisition",
  description: "Heavy vehicle rental company scaled its customer base with targeted geographic and demographic segmentation, achieving +50% sales in a single month.",
  image: "/lovable-uploads/5e7a3674-d884-47a0-92a9-19bd8db3611e.png",
  tags: ["Meta Ads", "Lead Gen", "Sales"]
}, {
  title: "Intelligent WhatsApp Tracking — +462% in Conversations",
  description: "Implementation of ctwaclid tracking in Meta Ads campaigns led to +462.16% increase in initiated conversations and 81.34% reduction in cost per message sent in just one week.",
  image: "/lovable-uploads/5e7a3674-d884-47a0-92a9-19bd8db3611e.png",
  tags: ["Meta Ads", "WhatsApp", "Tracking"]
}, {
  title: "Unileão — 118% Reduction in CPL with Performance Max",
  description: "Educational institution optimized lead capture with Performance Max campaigns, achieving 118% reduction in cost per lead and positive ROI from the first month.",
  image: "/lovable-uploads/5e7a3674-d884-47a0-92a9-19bd8db3611e.png",
  tags: ["Google Ads", "Education", "Performance Max"]
}];

const MediaBuying = () => {
  return (
    <div className="min-h-screen p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/en">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-4 text-[#1c3454] md:text-5xl">🚀 Paid Media Services & Strategic Performance</h1>
        <p className="text-xl mb-6 text-[#6caddf]">
          Data-driven campaigns, performance intelligence and advanced tracking to scale your results.
        </p>
        
        <div className="p-6 rounded-lg mb-12 bg-[#6caddf]">
          <p className="text-lg text-[#1c3454] mb-4">
            Transform your paid media investments into predictable and scalable growth engines. I combine strategic intelligence with advanced tracking systems to ensure every campaign generates measurable impact.
          </p>
          <p className="text-lg text-[#1c3454]">
            My approach integrates business strategy, performance data and artificial intelligence — delivering campaigns that consistently achieve positive ROI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
        
        <TechnologySection technologies={technologies} />
        
        <PortfolioSection items={portfolioItems} />
      </div>
    </div>
  );
};

export default MediaBuying;
