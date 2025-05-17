
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  BrainCircuit, 
  Link2, 
  Database, 
  Settings, 
  BarChart2,
  TrendingUp,
  MessageSquare,
  Settings2
} from "lucide-react";
import { HeroSection } from "@/components/media-buying/HeroSection";
import { ServicesSection } from "@/components/media-buying/ServicesSection";
import { WhyChooseMeSection } from "@/components/media-buying/WhyChooseMeSection";
import { TestimonialsSection } from "@/components/media-buying/TestimonialsSection";
import { ContactSection } from "@/components/media-buying/ContactSection";
import { TechnologyCard } from "@/components/media-buying/TechnologyCard";

const mainServices = [{
  icon: BrainCircuit,
  title: "Strategic Paid Media Planning & Execution",
  description: "Campaigns designed for qualified traffic, lead generation, and sales growth aligned to your unique business objectives."
}, {
  icon: Database,
  title: "Advanced Tracking & Analytics",
  description: "Seamless integration of Google Analytics 4, Meta Conversion API, Google Tag Manager, and industry-leading tracking tech to ensure every click is accounted for."
}, {
  icon: Settings,
  title: "Tech-Driven Automation",
  description: "Using no-code tools such as n8n, Make (Integromat), and Zapier, I automate campaign reporting, alerts, and workflows — saving you time and increasing agility."
}, {
  icon: BrainCircuit,
  title: "AI-Powered Optimization",
  description: "I leverage AI tools (ChatGPT + Plugins, Langflow, custom LLMs) for dynamic creative generation, audience targeting, and predictive bid management."
}, {
  icon: Link2,
  title: "Cross-Channel Campaign Management",
  description: "Integrated management of paid media on Meta Ads, Google Ads, TikTok, LinkedIn Ads, and Pinterest Ads to maximize reach and conversion."
}, {
  icon: BarChart2,
  title: "Transparent Weekly Reporting",
  description: "Weekly performance dashboards with actionable insights highlight what's working, what can be improved, and clear next steps."
}];

const whyChooseMe = [{
  icon: TrendingUp,
  title: "Proven Results",
  description: "Managed monthly budgets exceeding $500K with consistent 3x-4x growth in revenue for clients."
}, {
  icon: Settings,
  title: "Unique Skill Combination",
  description: "Blend of marketing strategy expertise and technical skills that bridge paid media with automation and AI innovation."
}, {
  icon: BarChart2,
  title: "Cost Efficiency",
  description: "Proven ability to reduce cost per lead and increase return on ad spend using data, technology, and continuous optimization."
}, {
  icon: MessageSquare,
  title: "Clear Communication",
  description: "Proactive and collaborative communication style — you'll always know the status and insights of your campaigns."
}, {
  icon: Settings2,
  title: "Tailored Solutions",
  description: "Experience serving diverse industries, tailoring strategies and tech stacks for each business's growth journey."
}];

const technologies = [{
  category: "Paid Media Platforms",
  tools: ["Meta Ads Manager", "Google Ads (Search, Display, Shopping, YouTube)", "TikTok Ads Manager", "LinkedIn Ads", "Pinterest Ads"],
  icon: Link2
}, {
  category: "Tracking & Analytics",
  tools: ["Google Analytics 4", "Meta Pixel & Conversion API", "Google Tag Manager", "Hotjar"],
  icon: Database
}, {
  category: "Automation & Integration",
  tools: ["n8n", "Make (Integromat)", "Zapier", "Evolution API", "Supabase"],
  icon: Settings
}, {
  category: "AI & Creative Tools",
  tools: ["ChatGPT + Plugins", "Langflow", "FlowiseAI", "Relevance AI", "AI Campaign Generators", "Custom LLMs"],
  icon: BrainCircuit
}, {
  category: "Reporting",
  tools: ["API Rest", "n8n"],
  icon: BarChart2
}];

const testimonials = [
  {
    text: "Ericka Karen is a dedicated professional with strong expertise in paid media and sales through media platforms, with a particular focus on Google.",
    author: "Henri Tex"
  },
  {
    text: "An extremely competent and proactive professional. She constantly applies innovations in her daily work.",
    author: "Amanda Carvalho"
  }
];

const MediaBuying = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/en">
          <Button variant="ghost" className="mb-6 bg-[#6caddf]/10 text-[#1c3454] hover:bg-[#6caddf]/20 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <HeroSection
          title={<>Paid Media Services <span className="text-[#6caddf]">Powered by Technology</span></>}
          subtitle="Strategic Growth through Data, AI & Automation"
          description1="Leveraging cutting-edge technology, automation, and AI, this paid media strategy framework transforms advertising investments into scalable, predictable growth engines."
          description2="Backed by over 5 years of hands-on experience across Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads, and Pinterest Ads, it combines strategic media planning with advanced tech solutions to drive performance and efficiency."
          ctaText="Let's Work Together"
          contactPath="/en/contact"
        />
        
        <ServicesSection 
          title="What I Deliver"
          services={mainServices}
        />
        
        <WhyChooseMeSection
          title="Why Choose Me?"
          items={whyChooseMe}
        />
        
        <div className="mb-16 lg:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454] flex items-center">
            <span className="text-[#6caddf] mr-2">🎯</span> Technologies I Master
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {technologies.map((tech, index) => (
              <TechnologyCard key={index} tech={tech} />
            ))}
          </div>
        </div>
        
        <TestimonialsSection
          title="Client Feedback"
          testimonials={testimonials}
        />
        
        <ContactSection
          title="Let's Scale Your Business"
          description="Ready to unlock the power of AI, automation, and paid media strategy? Let's build your next high-performing campaign."
          buttonText="Contact Me"
          contactPath="/en/contact"
        />
      </div>
    </div>
  );
};

export default MediaBuying;
