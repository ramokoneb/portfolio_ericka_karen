
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, MessageSquare, Linkedin, Mail, Send } from "lucide-react";
import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { handleSubmit } = useContactForm();
  const { toast } = useToast();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const success = await handleSubmit(formData);
      if (success) {
        toast({
          title: "Success",
          description: "Your message has been sent successfully!",
        });
        setFormData({ name: "", email: "", whatsapp: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-[#1c3454]">
      <div className="max-w-4xl mx-auto">
        <Link to="/en">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-50">Contact Me</h1>
        <p className="text-xl text-[#6caddf] mb-12">
          Let's discuss how we can work together to achieve your goals.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-[#1c3454]">Send a Message</CardTitle>
              <CardDescription className="text-[#6caddf]">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1c3454]">Your Name</label>
                  <Input 
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1c3454]">Your Email</label>
                  <Input 
                    type="email" 
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1c3454]">Your WhatsApp</label>
                  <Input 
                    type="tel" 
                    placeholder="Country code + area code + number (e.g., 551194200XXXX)"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value.replace(/\D/g, '') }))}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1c3454]">Your Message</label>
                  <Textarea 
                    placeholder="What would you like to discuss?" 
                    className="min-h-[120px]"
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-[#6caddf] hover:bg-[#6caddf] text-[#1c3454]"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 h-4 w-4" /> {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div>
            <Card className="border-none shadow-lg bg-white mb-8">
              <CardHeader>
                <CardTitle className="text-[#1c3454]">Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/5511942002308?text=%F0%9F%87%A7%F0%9F%87%B7%20Oi%2C%20Ericka!%20Achei%20seu%20trabalho%20muito%20interessante%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%0A%0A%F0%9F%87%BA%F0%9F%87%B8%20Hi%20Ericka!%20I%20found%20your%20work%20really%20interesting%20and%20would%20love%20to%20know%20more%20about%20your%20services.%0A%0A%F0%9F%87%AA%F0%9F%87%B8%20%C2%A1Hola%20Ericka!%20Encontr%C3%A9%20tu%20trabajo%20muy%20interesante%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tus%20servicios." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="p-2 bg-[#6caddf]/10 rounded-full mr-3">
                      <MessageSquare className="h-5 w-5 text-[#6caddf]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">WhatsApp</p>
                      <p className="text-gray-700">+55 11 94200-2308</p>
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
                      <p className="text-sm font-medium text-gray-500">LinkedIn</p>
                      <p className="text-gray-700">ekarenramos</p>
                    </div>
                  </a>
                  <a 
                    href="mailto:contato@zonadeconversao.space" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="p-2 bg-[#6caddf]/10 rounded-full mr-3">
                      <Mail className="h-5 w-5 text-[#6caddf]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="text-gray-700">contato@zonadeconversao.space</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-[#1c3454]">
                Office Hours
              </h2>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="font-medium">Monday - Friday</span>
                  <span>9:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Saturday</span>
                  <span>Closed</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Sunday</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
