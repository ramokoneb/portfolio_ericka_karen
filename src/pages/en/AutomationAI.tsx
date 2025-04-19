import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, MessageSquare, Database, Settings, Layers3, Code, BrainCircuit, Link2, Smartphone, QrCode, FileCode, BarChart2, MessagesSquare, Target } from "lucide-react";
const portfolioItems = [{
  title: "WhatsApp Automation – +80% automated inquiries",
  description: "Automation solution developed for WhatsApp customer service, with intelligent chatbot capable of handling 80% of frequently asked questions. 95% reduction in response time and increased service satisfaction.",
  image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=500",
  tags: ["WhatsApp API", "n8n", "NLP", "Chatbot"],
  tech: "WhatsApp API • n8n • NLP • Conditional logic",
  goal: "Automated and scalable customer service",
  highlight: "Drastic reduction in need for human support"
}, {
  title: "AI Lead Scoring System – +65% sales team efficiency",
  description: "Lead scoring system based on machine learning, trained with real user behavior patterns. Improved sales team efficiency by 65%, prioritizing leads with higher conversion probability.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
  tags: ["n8n", "Supabase", "Machine Learning", "LLMs"],
  tech: "n8n • Supabase • Custom LLMs",
  goal: "Automatic lead qualification",
  highlight: "Intelligence applied to buying journey"
}, {
  title: "Automated CRM via WhatsApp – Real-time Integration",
  description: "System that automatically creates a new lead card in CRM as soon as the first WhatsApp contact is initiated. Integration uses FlutterFlow + Lovable + n8n ensuring 100% automated flow.",
  image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=500",
  tags: ["FlutterFlow", "Lovable", "n8n", "CRM"],
  tech: "FlutterFlow • Lovable • n8n",
  goal: "Automatic lead capture and organization",
  highlight: "Immediate sync between WhatsApp and CRM"
}, {
  title: "Smart Tracking with Meta API – +462% in conversations",
  description: "Implementation of tracking via ctwaclid to accurately identify ads generating WhatsApp conversations. Increase of +462.16% in conversation volume and reduction of -81.34% in cost per message sent in a week.",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=500",
  tags: ["Meta API", "n8n", "Supabase", "Analytics"],
  tech: "Meta API • n8n • Supabase • UTMs",
  goal: "Precise measurement of message campaigns",
  highlight: "Advanced tracking with real conversion data"
}, {
  title: "WhatsApp Metrics Bot – Real-time report automation",
  description: "System that automatically sends Meta and Google Ads campaign metrics to WhatsApp groups. Team time savings with reliable data and customized delivery for each group.",
  image: "https://images.unsplash.com/photo-1553484771-047a44eee27a?q=80&w=500",
  tags: ["Meta API", "Google Ads API", "WhatsApp API", "n8n"],
  tech: "Meta API • Google Ads API • Evolution API • WhatsApp API • n8n",
  goal: "Automated campaign monitoring",
  highlight: "Reports sent in real-time without manual intervention"
}, {
  title: "Automated Follow-up – AI-powered lead recovery",
  description: "System that identifies unanswered leads in WhatsApp and triggers automatic follow-up messages. Improves re-engagement time, reduces funnel abandonment and increases conversions.",
  image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7e?q=80&w=500",
  tags: ["n8n", "Supabase", "WhatsApp API", "Automation"],
  tech: "n8n • Supabase • WhatsApp API",
  goal: "Active opportunity recovery",
  highlight: "Automatic actions based on behavior"
}, {
  title: "AI Agents – Automated service and campaigns",
  description: "Creation of multiple AI agents: from basic service to in-depth analysis of paid media campaigns. One agent can analyze data, suggest optimizations, and even structure Meta Ads campaigns based on current results.",
  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=500",
  tags: ["ChatGPT", "Langflow", "Relevance AI", "n8n"],
  tech: "ChatGPT Plugins • Langflow • Relevance AI • n8n",
  goal: "Intelligent service, analysis and execution",
  highlight: "AI with autonomy to suggest and implement actions"
}, {
  title: "QR Code System with Automated Instance",
  description: "Development of platform that generates unique QR Codes for each client, activating a new instance integrated via Evolution API. Enables creation of customized environments with pre-configured logic for immediate use.",
  image: "https://images.unsplash.com/photo-1598291286794-d417e2685f85?q=80&w=500",
  tags: ["Lovable", "Evolution API", "n8n"],
  tech: "Lovable • Evolution API • n8n",
  goal: "Automatic generation of environments and flows",
  highlight: "Scalability and zero manual intervention for activation"
}, {
  title: "Lead Capture Website with Lovable",
  description: "Landing page created with Lovable focusing on lead capture for service provision. Tracking integrations and form with direct sending to CRM and WhatsApp.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500",
  tags: ["Lovable", "Webhooks", "Custom CRM"],
  tech: "Lovable • Webhooks • Custom CRM",
  goal: "Automated lead capture and qualification",
  highlight: "Ready to run campaigns with complete tracking"
}];
const technologies = [{
  category: "Automation & Integration",
  tools: ["n8n", "Make", "Zapier"],
  icon: <Settings className="h-6 w-6" />
}, {
  category: "Web & Mobile App Builders",
  tools: ["Bubble", "FlutterFlow", "Lovable"],
  icon: <Smartphone className="h-6 w-6" />
}, {
  category: "AI & Smart Logic",
  tools: ["ChatGPT + Plugins", "FlowiseAI", "Relevance AI", "Langflow"],
  icon: <BrainCircuit className="h-6 w-6" />
}, {
  category: "Databases & No-Code Backends",
  tools: ["Airtable", "Baserow", "NocoDB", "Xano", "Supabase", "Firebase"],
  icon: <Database className="h-6 w-6" />
}];
const AutomationAI = () => {
  const mainServices = [{
    icon: <BrainCircuit className="h-10 w-10 text-[#8A898C]" />,
    title: "AI & Intelligent Automation",
    description: "Implement smart systems that enhance decision-making, optimize campaigns, and power your workflows with intelligence."
  }, {
    icon: <MessageSquare className="h-10 w-10 text-[#8A898C]" />,
    title: "WhatsApp Automation",
    description: "Automated messaging flows for customer service, sales, and lead qualification using WhatsApp and connected APIs."
  }, {
    icon: <Link2 className="h-10 w-10 text-[#8A898C]" />,
    title: "CRM & Marketing Integrations",
    description: "Seamless automation between marketing platforms, CRMs and communication channels."
  }, {
    icon: <Code className="h-10 w-10 text-[#8A898C]" />,
    title: "No-Code Development & Workflow Automation",
    description: "Create web apps, dashboards, automations and full systems using intuitive platforms."
  }];
  return <div className="min-h-screen p-8 bg-[#000000]">
      <div className="max-w-6xl mx-auto">
        <Link to="/en">
          <Button variant="ghost" className="mb-6 bg-white/20 hover:bg-white/30 text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl font-bold mb-4 text-[#1c3454] md:text-5xl">🚀 Automation, AI & No/Low-Code Development</h1>
        <p className="text-xl text-white mb-6">
          Intelligent systems to automate, scale, and innovate your digital operations.
        </p>
        
        <div className="p-6 rounded-lg mb-12 bg-white/10">
          <p className="text-lg text-1C3454 mb-4 text-[#1c3454]">
            Transform business routines into high-performance engines using automation, artificial intelligence and no-code platforms. I create solutions that reduce manual work, improve decision-making and connect tools to make your digital strategy truly scalable.
          </p>
          <p className="text-lg text-[#1c3454]">
            My approach blends engineering mindset, business intelligence, and user-friendly platforms — empowering you to scale without increasing complexity.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white text-black">
              <CardHeader>
                <div className="mb-2">
                  {service.icon}
                </div>
                <CardTitle className="text-[#1c3454]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-700">{service.description}</CardDescription>
              </CardContent>
            </Card>)}
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-2xl font-bold mb-8 text-[#1c3454]">🧩 Technologies I Use</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    {tech.icon}
                    <CardTitle className="text-lg text-[#1c3454]">{tech.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {tech.tools.map(tool => <span key={tool} className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                        {tool}
                      </span>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-8 text-[#1c3454]">📁 Portfolio</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => <Card key={index} className="overflow-hidden border-none shadow-2xl hover:shadow-2xl transition-all bg-white">
                <div className="h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform hover:scale-105" />
                </div>
                <CardHeader>
                  <CardTitle className="text-[#1c3454]">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{item.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                        {tag}
                      </span>)}
                  </div>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </div>
    </div>;
};
export default AutomationAI;