
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
  title: "Strategic Paid Media Planning & Execution",
  description: "Campaigns designed for qualified traffic, lead generation, and sales growth aligned to your unique business objectives."
}, {
  icon: Database,
  title: "Advanced Tracking & Analytics",
  description: "Seamless integration of Google Analytics 4, Meta Conversion API, Google Tag Manager, and industry-leading tracking tech to ensure every click is accounted for and optimized."
}, {
  icon: Settings,
  title: "Tech-Driven Automation",
  description: "Using no-code tools such as n8n, Make (Integromat), and Zapier, I automate campaign reporting, alerts, and workflows — saving you time and increasing agility."
}, {
  icon: BrainCircuit,
  title: "AI-Powered Optimization",
  description: "I leverage AI tools (ChatGPT + Plugins, Langflow, custom LLMs) for dynamic creative generation, audience targeting, and predictive bid management — continuously improving campaign performance."
}, {
  icon: Link2,
  title: "Cross-Channel Campaign Management",
  description: "Integrated management of paid media on Meta Ads, Google Ads, TikTok, LinkedIn Ads, and Pinterest Ads to maximize reach and conversion."
}, {
  icon: LineChart,
  title: "Transparent Reporting",
  description: "Weekly performance dashboards with actionable insights highlight what's working, what can be improved, and clear next steps."
}];

const technologies = [{
  category: "Paid Media Platforms 🎯",
  tools: ["Meta Ads Manager", "Google Ads (Search, Display, Shopping, YouTube)", "TikTok Ads Manager", "LinkedIn Ads", "Pinterest Ads"],
  icon: Link2
}, {
  category: "Tracking & Analytics 📊",
  tools: ["Google Analytics 4", "Meta Pixel & Conversion API", "Google Tag Manager", "Hotjar"],
  icon: Code
}, {
  category: "Automation & Integration ⚙️",
  tools: ["n8n", "Make (Integromat)", "Zapier", "Evolution API", "Supabase"],
  icon: Settings
}, {
  category: "AI & Creative Tools 🤖",
  tools: ["ChatGPT + Plugins", "Langflow", "FlowiseAI", "Relevance AI", "AI Campaign Generators", "Custom LLMs"],
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
          title="🚀 Paid Media Services Powered by Technology | Strategic Growth through Data, AI & Automation"
          subtitle="Transform your advertising investments into scalable, predictable growth engines"
          description1="Hi! I'm Ericka Karen, a Paid Media Strategist who leverages cutting-edge technology, automation, and AI to turn your advertising investments into scalable, predictable growth engines."
          description2="Built on over 5 years of experience managing paid campaigns across Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads, and Pinterest Ads, my expertise lies in marrying strategic media planning with powerful tech solutions — from advanced tracking and attribution to no-code automation and AI-driven optimization."
        />
        
        <div className="p-4 md:p-6 rounded-lg mb-8 md:mb-12 bg-[#f5f7fa]">
          <p className="text-base md:text-lg text-[#1c3454] mb-4">
            I cater to businesses ready to scale through Meta Ads, Google Ads, TikTok Ads, Pinterest Ads, and LinkedIn Ads, deploying solutions that combine human strategy with machine efficiency.
          </p>
        </div>
        
        <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">
          🎯 What I Deliver:
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-16">
          {mainServices.map((service, index) => (
            <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">🎯 Why Choose Me?</h2>
          <ul className="space-y-4 text-[#1c3454]">
            <li className="flex items-start">
              <span className="text-[#6caddf] mr-2">•</span>
              <span>Hands-on career managing campaigns with monthly budgets exceeding $500K, delivering consistent 3x-4x growth in revenue for clients.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#6caddf] mr-2">•</span>
              <span>Unique combination of marketing strategy expertise and technical skills that bridge paid media with automation and AI innovation.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#6caddf] mr-2">•</span>
              <span>Proven ability to reduce cost per lead and increase return on ad spend using data, technology, and continuous optimization.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#6caddf] mr-2">•</span>
              <span>Proactive and collaborative communication style — you'll always know the status and insights of your campaigns.</span>
            </li>
            <li className="flex items-start">
              <span className="text-[#6caddf] mr-2">•</span>
              <span>Experience serving diverse industries, tailoring strategies and tech stacks for each business's growth journey.</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8 md:mb-16">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">🎯 Technologies and Tools I Master:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </div>
        
        <div className="bg-white p-4 md:p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-[#1c3454]">
            🎯 Client Feedback:
          </h2>
          <div className="space-y-6">
            <div className="bg-[#f5f7fa] p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="italic text-[#1c3454]">"Ericka Karen is a dedicated professional with strong expertise in paid media and sales through media platforms, with a particular focus on Google."</p>
              <p className="text-[#6caddf] mt-2">— Henri Tex</p>
            </div>
            
            <div className="bg-[#f5f7fa] p-4 rounded-lg">
              <div className="flex items-center mb-2">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="italic text-[#1c3454]">"An extremely competent and dedicated professional. She actively seeks out and applies market innovations in her daily work."</p>
              <p className="text-[#6caddf] mt-2">— Amanda Carvalho</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-lg text-[#1c3454] mb-4">
              Let's leverage the power of technology and paid media strategy to accelerate your growth!
            </p>
            <Link to="/en/contact">
              <Button className="bg-[#6caddf] hover:bg-[#5a9ac8] text-white font-medium">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaBuying;
