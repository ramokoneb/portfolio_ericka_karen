import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Briefcase, Building, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen p-8 bg-[#1c3454]">
      <div className="max-w-4xl mx-auto">
        <Link to="/en">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <div className="w-48 h-48 rounded-full mx-auto bg-white border-4 border-[#6caddf] overflow-hidden">
              <img 
                className="w-full h-full object-cover"
                src="/professional-photo.png"
                alt="Ericka Karen"
              />
            </div>
          </div>
          <div className="md:w-2/3 md:pl-8">
            <h1 className="text-4xl font-bold mb-4 text-[#1c3454]">About Ericka Karen</h1>
            <p className="text-xl text-[#6caddf] mb-6">
              Digital transformation specialist with expertise in paid media, automation and artificial intelligence.
            </p>
            <p className="text-lg text-[#6caddf]">
              With over a decade of experience in digital marketing and technology, Ericka Karen has established herself as a leading expert in paid media strategies and innovative automation solutions. Her unique approach combines data-driven marketing techniques with cutting-edge AI applications to deliver exceptional results for businesses across multiple industries.
            </p>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-[#1c3454]">
          Founded Companies
        </h2>
        
        <div className="space-y-6 mb-12">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <div className="flex items-center">
                <div className="mr-4">
                  <Building className="h-10 w-10 text-[#6CAAD9]" />
                </div>
                <CardTitle className="text-[#1A3554]">Zona de Conversão Digital</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#6CADDE]">Brazilian agency specialized in paid media campaigns with focus on measurable results and positive ROI for small and medium businesses.</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardHeader>
              <div className="flex items-center">
                <div className="mr-4">
                  <Globe className="h-10 w-10 text-[#6CAAD9]" />
                </div>
                <CardTitle className="text-[#1A3554]">Zona de Conversão Space</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#6CADDE]">AI and automation solutions specifically designed for digital marketing needs, helping businesses scale their marketing operations.</p>
            </CardContent>
          </Card>
          
          <Card className="border-none shadow-lg">
            <CardHeader>
              <div className="flex items-center">
                <div className="mr-4">
                  <Briefcase className="h-10 w-10 text-[#6CAAD9]" />
                </div>
                <CardTitle className="text-[#1A3554]">Nocoverse</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-[#6CADDE]">Innovation lab focused on developing automation and AI solutions beyond marketing, creating new possibilities for business transformation.</p>
            </CardContent>
          </Card>
        </div>
        
        <h2 className="text-2xl font-bold mb-6 text-[#1c3454]">
          Skills & Expertise
        </h2>
        
        <div className="flex flex-wrap gap-3 mb-8">
          {["Paid Media Management", "Marketing Automation", "AI Implementation", "CRM Integration", "Data Analysis", "Lead Generation", "Conversion Optimization"].map((skill, index) => (
            <span 
              key={index}
              className="px-4 py-2 bg-[#6caddf] rounded-full text-[#1c3454] shadow"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
