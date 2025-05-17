
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Linkedin, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Contact = () => {
  return (
    <Card className="border-none shadow-lg overflow-hidden">
      <CardHeader className="bg-[#6caddf] text-white">
        <CardTitle className="text-xl md:text-2xl text-center">Ready to Automate & Scale?</CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-center mb-6 text-[#1c3454]/80">
          Let's build intelligent solutions that transform your digital operations. Send me a message and let's talk.
        </p>
        <div className="space-y-4">
          <a 
            href="mailto:contato@zonadeconversao.space" 
            className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="p-2 bg-[#6caddf]/10 rounded-full mr-3">
              <Mail className="h-5 w-5 text-[#6caddf]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#1c3454]">Email</p>
              <p className="text-[#1c3454]/80">contato@zonadeconversao.space</p>
            </div>
          </a>
          
          <a 
            href="https://wa.me/5511942002308" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="p-2 bg-[#6caddf]/10 rounded-full mr-3">
              <MessageSquare className="h-5 w-5 text-[#6caddf]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#1c3454]">WhatsApp</p>
              <p className="text-[#1c3454]/80">+55 11 94200-2308</p>
            </div>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/ekarenramos/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <div className="p-2 bg-[#6caddf]/10 rounded-full mr-3">
              <Linkedin className="h-5 w-5 text-[#6caddf]" />
            </div>
            <div>
              <p className="text-sm font-medium text-[#1c3454]">LinkedIn</p>
              <p className="text-[#1c3454]/80">ekarenramos</p>
            </div>
          </a>
        </div>
        
        <div className="mt-6 text-center">
          <Button className="bg-[#6caddf] hover:bg-[#5a9ac8]" asChild>
            <Link to="/en/contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
