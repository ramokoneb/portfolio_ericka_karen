
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 px-8 bg-[#1A3554]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Vamos Conversar?</h2>
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Informações de Contato</CardTitle>
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
      </div>
    </section>
  );
};

export default Contact;
