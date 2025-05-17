
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft, 
  MessageSquare, 
  Code, 
  BrainCircuit, 
  Link2, 
  Database, 
  Settings, 
  Smartphone,
  Target,
  LineChart
} from "lucide-react";
import { ServiceCard } from "@/components/media-buying/ServiceCard";
import { TechnologyCard } from "@/components/media-buying/TechnologyCard";
import { HeroSection } from "@/components/media-buying/HeroSection";

const mainServices = [{
  icon: BrainCircuit,
  title: "Business Intelligence & Strategy",
  description: "Development of media strategies aligned with business objectives, focused on scalable and sustainable results."
}, {
  icon: Link2,
  title: "Advanced Media Planning",
  description: "Strategic planning of paid campaigns focused on qualified traffic, conversion optimization and positive ROI."
}, {
  icon: Database,
  title: "Advanced Tracking & Analytics",
  description: "Implementation of advanced tracking solutions, conversion API integration and data-based optimization systems."
}, {
  icon: Smartphone,
  title: "Applied Artificial Intelligence",
  description: "Using AI to optimize campaign delivery, segmentation, dynamic creatives and predict behavior patterns."
}];

const technologies = [{
  category: "Technologies & Tools 🎯",
  tools: ["Meta Ads Manager", "Google Ads", "TikTok Ads Manager", "Pinterest Ads", "LinkedIn Ads", "Google Merchant Center"],
  icon: Link2
}, {
  category: "Technologies & Tools 📊",
  tools: ["Google Analytics (GA4)", "Google Tag Manager", "Meta Pixel & Conversion API (CAPI)", "Meta Events Manager", "Hotjar", "Looker Studio / Data Studio", "Supermetrics", "UTMs, ctwaclid, fbclid, gclid"],
  icon: Code
}, {
  category: "Technologies & Tools ⚙️",
  tools: ["n8n", "Make (Integromat)", "Zapier", "Evolution API", "Supabase"],
  icon: Settings
}, {
  category: "Technologies & Tools 🤖",
  tools: ["ChatGPT + Plugins", "Langflow / FlowiseAI", "Relevance AI", "AI Campaign Generators", "Custom LLMs for scoring and optimization"],
  icon: BrainCircuit
}];

const MediaBuying = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/en">
          <Button variant="ghost" className="mb-4 md:mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <HeroSection 
          title="🚀 Paid Media & Strategic Performance Services"
          subtitle="Data-driven campaigns, performance intelligence and advanced tracking to scale your results."
          description1="Transform your paid media investments into predictable and scalable growth engines. I combine strategic intelligence with advanced tracking systems to ensure each campaign delivers measurable impact."
          description2="My approach integrates business strategy, performance data, and artificial intelligence — delivering campaigns that consistently achieve positive ROI."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">🧩 Technologies I Use</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">
            📈 Success Cases
          </h2>
          <div className="text-center mb-8">
            <Link to="/en/cases/media-buying">
              <Button className="bg-[#6caddf] hover:bg-[#5a9ac8] text-white font-medium">
                View All Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaBuying;
