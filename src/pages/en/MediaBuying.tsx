
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  ArrowLeft,
  ArrowRight,
  BrainCircuit, 
  Link2, 
  Database, 
  Settings, 
  BarChart2,
  TrendingUp,
  MessageSquare,
  Settings2
} from "lucide-react";
import SocialLinks from "@/components/home/SocialLinks";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
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

const MediaBuying = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/en">
          <Button variant="ghost" className="mb-6 bg-[#6caddf]/10 text-[#1c3454] hover:bg-[#6caddf]/20 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        {/* Hero Section */}
        <div className="mb-16 lg:mb-20">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-[#1c3454] leading-tight">
            Paid Media Services <span className="text-[#6caddf]">Powered by Technology</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-[#1c3454]/80 font-light">
            Strategic Growth through Data, AI & Automation
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-[#6caddf]/10 backdrop-blur-sm rounded-xl p-6 border border-[#6caddf]/30">
              <p className="text-base md:text-lg text-[#1c3454] mb-4">
                Hi! I'm <span className="font-bold">Ericka Karen</span>, a Paid Media Strategist who leverages cutting-edge technology, automation, and AI to turn your advertising investments into scalable, predictable growth engines.
              </p>
              <p className="text-base md:text-lg text-[#1c3454]">
                Built on over 5 years of experience managing paid campaigns across Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads, and Pinterest Ads, my expertise lies in marrying strategic media planning with powerful tech solutions.
              </p>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <div className="bg-white shadow-md rounded-lg p-6 border border-gray-100">
                <p className="text-[#1c3454] font-medium">
                  I cater to businesses ready to scale through Meta Ads, Google Ads, TikTok Ads, Pinterest Ads, and LinkedIn Ads, deploying solutions that combine human strategy with machine efficiency.
                </p>
              </div>
              <Link to="/en/contact" className="self-start">
                <Button className="bg-[#6caddf] hover:bg-[#5a9ac8] text-white font-medium group">
                  Let's Work Together
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* What I Deliver Section */}
        <div className="mb-16 lg:mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454] flex items-center">
            <span className="text-[#6caddf] mr-2">🎯</span> What I Deliver
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard key={index} icon={service.icon} title={service.title} description={service.description} />
            ))}
          </div>
        </div>
        
        {/* Why Choose Me Section */}
        <div className="mb-16 lg:mb-20 bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454] flex items-center">
            <span className="text-[#6caddf] mr-2">🎯</span> Why Choose Me?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {whyChooseMe.map((item, index) => (
              <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow duration-300 bg-gradient-to-br from-white to-gray-50">
                <CardHeader className="pb-2">
                  <div className="h-10 w-10 rounded-full bg-[#6caddf]/10 flex items-center justify-center mb-2">
                    <item.icon className="h-5 w-5 text-[#6caddf]" />
                  </div>
                  <CardTitle className="text-lg text-[#1c3454]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-[#1c3454]/80">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Tech Stack Section */}
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
        
        {/* Testimonials Section */}
        <div className="mb-16 lg:mb-20 bg-white rounded-xl shadow-lg p-6 md:p-8 lg:p-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#1c3454] flex items-center">
            <span className="text-[#6caddf] mr-2">🎯</span> Client Feedback
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#f5f7fa] rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="italic text-[#1c3454] mb-4">
                "Ericka Karen is a dedicated professional with strong expertise in paid media and sales through media platforms, with a particular focus on Google."
              </p>
              <p className="text-[#6caddf] font-medium">— Henri Tex</p>
            </div>
            
            <div className="bg-[#f5f7fa] rounded-lg p-5 shadow-sm">
              <div className="flex items-center mb-3">
                <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="italic text-[#1c3454] mb-4">
                "An extremely competent and proactive professional. She constantly applies innovations in her daily work."
              </p>
              <p className="text-[#6caddf] font-medium">— Amanda Carvalho</p>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className="rounded-xl bg-gradient-to-r from-[#1c3454] to-[#264b73] p-6 md:p-8 lg:p-10 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Let's Scale Your Business</h2>
          
          <p className="text-white/90 mb-6 max-w-3xl">
            Ready to unlock the power of AI, automation, and paid media strategy? Let's build your next high-performing campaign.
          </p>
          
          <div className="mb-4">
            <SocialLinks 
              whatsappText="WhatsApp" 
              linkedinText="LinkedIn" 
              emailText="Email" 
            />
          </div>
          
          <div className="mt-8 md:mt-10">
            <Link to="/en/contact">
              <Button className="bg-white hover:bg-gray-100 text-[#1c3454] font-medium group">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaBuying;
