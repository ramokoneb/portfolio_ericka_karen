import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Target, BrainCircuit, Bot, LineChart } from "lucide-react";

const About = () => {
  const expertiseAreas = [{
    title: "Paid Media and Performance",
    items: ["Meta Ads, Google Ads, TikTok Ads, Pinterest Ads", "Full Funnel Strategies, ROAS and CAC optimization", "A/B Tests, adaptive creatives and message campaigns"]
  }, {
    title: "Automation and No-Code",
    items: ["n8n, Make, Zapier", "Integration between WhatsApp, CRMs, APIs and media platforms", "FlutterFlow, Lovable, Supabase, Firebase"]
  }, {
    title: "AI and Intelligent Logic",
    items: ["Conversational and analytical agents with LLMs", "AI for campaign analysis and creative generation", "Lead scoring, automated service, autonomous ad optimization"]
  }, {
    title: "Data and Tracking",
    items: ["Meta Pixel, CAPI, Google Tag Manager", "ctwaclid, Supabase for campaign tracking", "Dashboards in Looker Studio and automated reports"]
  }];
  const achievements = ["+963% ROAS with e-commerce campaign restructuring", "+462% increase in WhatsApp conversations with intelligent tracking", "-118% CPL for educational institution using Performance Max", "Break-even in 3 months for international brand with own sales channel", "Complete service and follow-up automation with AI and no-code"];

  return (
    <div className="min-h-screen bg-[#1A3554] text-white">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <Link to="/en">
          <Button variant="outline" className="mb-6 w-full sm:w-auto">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <div className="flex flex-col md:grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="md:col-span-1 flex justify-center">
            <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#6CAAD9]">
              <img 
                alt="Ericka Karen" 
                className="w-full h-full object-cover" 
                src="/lovable-uploads/c50dc637-9f5b-40f7-bf8a-adb3743f5ff8.png" 
              />
            </div>
          </div>
          <div className="md:col-span-2 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-[#6CAAD9]">About Ericka Karen</h1>
            <p className="text-lg sm:text-xl mb-4">Where performance, technology and creativity meet to scale businesses</p>
            <p className="text-base sm:text-lg mb-4">
              With over a decade of experience in digital marketing, I am a professional specialized in paid media, automation, and artificial intelligence applied to business. My journey began in 2014 in the creative area, focusing on content and social media. But it was in 2019 that I took a strategic step: I migrated to the performance universe, where I began building data-driven solutions to generate real results — from qualified leads to exponential revenue.
            </p>
            <p className="text-base sm:text-lg">
              Since then, I have served companies of various sizes and segments, always with a clear goal: to scale businesses with intelligence.
            </p>
          </div>
        </div>

        <Card className="bg-[#1C3454] border-[#6CAAD9] mb-6 md:mb-12">
          <CardHeader>
            <CardTitle className="text-xl sm:text-2xl text-[#6CAAD9]">What drives me</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg">
              I believe that the future of performance lies in the union between data, automation, and accessible technology. That's why I develop solutions that connect paid media, automated flows, and intelligent AI agents, optimizing digital operations end-to-end — from lead capture to conversion.
            </p>
          </CardContent>
        </Card>

        <section className="mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#6CAAD9]">My projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card className="bg-[#1C3454] border-[#6CAAD9]">
              <CardHeader>
                <CardTitle>Zona de Conversão Digital</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Performance agency specialized in paid media campaigns focused on ROI, scale, and measurable results. Beyond traffic management, it develops technological solutions aimed at the digital marketing market, combining performance, automation, and data intelligence for small and medium businesses.</p>
              </CardContent>
            </Card>
            <Card className="bg-[#1C3454] border-[#6CAAD9]">
              <CardHeader>
                <CardTitle>Nocodeverse</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Automation and artificial intelligence laboratory for businesses looking to scale with no-code technology. Creates custom solutions with n8n, Make, Supabase, and applied AI, optimizing processes, customer service, and decision-making across different areas beyond marketing.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#6CAAD9]">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {expertiseAreas.map((area, index) => (
              <Card key={index} className="bg-[#1C3454] border-[#6CAAD9]">
                <CardHeader>
                  <CardTitle className="text-lg sm:text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-6 space-y-2 text-sm sm:text-base">
                    {area.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#6CAAD9]">Delivered Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="bg-[#1C3454] border-[#6CAAD9]">
                <CardContent className="pt-6">
                  <p className="text-sm sm:text-base">{achievement}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-6 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#6CAAD9]">What I can build with you</h2>
          <Card className="bg-[#1C3454] border-[#6CAAD9]">
            <CardContent className="pt-6">
              <p className="mb-4">If you seek predictable, scalable, and intelligent growth, I can help you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Scale campaigns with a focus on results</li>
                <li>Automate processes to save time and reduce errors</li>
                <li>Use artificial intelligence to make better and faster decisions</li>
                <li>Connect your tools, data, and channels in a single efficient flow</li>
              </ul>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-[#6CAAD9]">Let's talk?</h2>
          <Card className="bg-[#1C3454] border-[#6CAAD9]">
            <CardContent className="pt-6">
              <p className="text-lg">
                I am ready to collaborate with companies, startups, or agencies that see technology and performance as the most direct path to growth. Whether in Portuguese, English, or Spanish — let's take your digital operation to the next level.
              </p>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default About;
