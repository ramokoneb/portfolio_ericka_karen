
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { PortfolioCard } from "@/components/automation/PortfolioCard";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  tech?: string;
  goal?: string;
  highlight?: string;
}

const automationPortfolioItems: PortfolioItem[] = [
  {
    id: "whatsapp-automation",
    title: "WhatsApp Automation – +80% of Requests Automated",
    description: "Automation solution developed for WhatsApp customer service, with an intelligent chatbot capable of handling 80% of frequently asked questions. 95% reduction in response time and increased customer satisfaction. The system uses natural language processing to identify customer intents and provide personalized responses, as well as forwarding to human assistance when necessary, creating a fluid and efficient experience.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["WhatsApp API", "n8n", "NLP", "Chatbot"]
  },
  {
    id: "ai-lead-scoring",
    title: "AI Lead Scoring System – +65% Sales Team Efficiency",
    description: "Lead scoring system based on machine learning, trained with real user behavior patterns. Improved sales team efficiency by 65%, prioritizing leads with higher conversion likelihood. The model analyzes more than 20 behavioral variables including email campaign engagement, website interactions, purchase history, and social media activity to accurately determine the potential of each lead.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["n8n", "Supabase", "Machine Learning", "LLMs"]
  },
  {
    id: "crm-automation",
    title: "Automatic CRM via WhatsApp – Real-time Integration",
    description: "System that automatically creates a new lead card in the CRM as soon as the first contact on WhatsApp is initiated. The integration uses FlutterFlow + Lovable + n8n and ensures a 100% automated flow. The solution captures user data such as name, email, and phone, and synchronizes them across all platforms, eliminating the need for manual data entry and ensuring consistency in information across all service channels.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["FlutterFlow", "Lovable", "n8n", "CRM"]
  },
  {
    id: "smart-tracking",
    title: "Smart Tracking with Meta API – +462% in WhatsApp Conversations",
    description: "Implementation of tracking via ctwaclid to precisely identify ads that generated WhatsApp conversations. 462.16% increase in conversation volume and 81.34% reduction in cost per message sent in one week. This custom solution allows complete tracking of the customer journey from ad click to final conversion, providing valuable insights for campaign optimization and better allocation of marketing budget.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Meta API", "n8n", "Supabase", "Analytics"]
  },
  {
    id: "metrics-bot",
    title: "WhatsApp Metrics Bot – Real-time Report Automation",
    description: "Creation of a system that automatically sends Meta and Google Ads campaign metrics to WhatsApp groups. Time savings for the team, with reliable data and personalized delivery for each group. The reports are fully configurable, allowing specific KPIs to be defined for different stakeholders, in addition to including automatic alerts when important metrics are below target, allowing for quick interventions.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Meta API", "Google Ads API", "WhatsApp API", "n8n"]
  },
  {
    id: "auto-followup",
    title: "Automatic Follow-up – Lead Recovery with AI",
    description: "System that identifies unanswered leads on WhatsApp and triggers automatic follow-up messages. Improves re-engagement time, reduces funnel abandonment, and increases conversions. The solution uses learning algorithms to determine the best times and content for re-engagement, adapting to user behavior and interaction history, resulting in significantly higher response rates compared to standardized approaches.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["n8n", "Supabase", "WhatsApp API", "Automation"]
  },
  {
    id: "ai-agents",
    title: "AI Agents – Automated Service and Campaigns",
    description: "Creation of multiple AI agents: from basic service to deep analysis of paid media campaigns. One of the agents is capable of analyzing data, suggesting optimizations, and even structuring Meta Ads campaigns based on current results. Agents are trained with historical performance data and industry best practices, enabling evidence-based decisions and contextual recommendations that consider each client's specific history.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["ChatGPT", "Langflow", "Relevance AI", "n8n"]
  },
  {
    id: "qr-system",
    title: "QR Code System with Automated Instance",
    description: "Development of a platform that generates unique QR Codes for each customer, activating a new integrated instance via Evolution API. Allows the creation of customized environments with pre-configured logic for immediate use. The solution is especially valuable for events and multichannel campaigns, where each QR code will direct the user to a personalized experience based on their profile and entry point in the campaign.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Lovable", "Evolution API", "n8n"]
  },
  {
    id: "lead-capture",
    title: "Lead Capture Site with Lovable – Portfolio with Lead Tracking",
    description: "Landing page created with Lovable focused on lead capture for service providers. Tracking integrations and form with direct sending to CRM and WhatsApp. The solution includes analysis of user behavior on the site to determine specific interests, allowing subsequent service to be personalized based on the pages visited and time spent in each section, significantly increasing conversion rates.",
    image: "/lovable-uploads/921f2626-6b31-4de3-b77e-fd094b87d098.png",
    tags: ["Lovable", "Webhooks", "Custom CRM"]
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <Link to="/en">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#1c3454]">
          Automation & AI Portfolio
        </h1>
        <p className="text-lg md:text-xl mb-8 text-[#6caddf]">
          Innovative projects combining intelligent automation, AI and no-code solutions to transform businesses.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {automationPortfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
