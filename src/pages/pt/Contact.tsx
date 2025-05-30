
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MessageSquare, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen p-4 md:p-8 bg-[#1c3454]">
      <div className="max-w-4xl mx-auto">
        <Link to="/pt">
          <Button variant="ghost" className="mb-4 md:mb-6 w-full sm:w-auto bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o Início
          </Button>
        </Link>
        
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-slate-50">Entre em Contato</h1>
        <p className="text-base md:text-xl mb-8 text-[#6caddf]">
          Vamos discutir como podemos trabalhar juntos para atingir seus objetivos.
        </p>
        
        <Card className="border-none shadow-lg bg-white mb-6 md:mb-8">
          <CardHeader>
            <CardTitle className="text-xl md:text-2xl text-[#1c3454]">Informações de Contato</CardTitle>
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
                  <p className="text-xs md:text-sm font-medium text-gray-500">WhatsApp</p>
                  <p className="text-sm md:text-base text-gray-700">+55 11 94200-2308</p>
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
                  <p className="text-xs md:text-sm font-medium text-gray-500">LinkedIn</p>
                  <p className="text-sm md:text-base text-gray-700">ekarenramos</p>
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
                  <p className="text-xs md:text-sm font-medium text-gray-500">Email</p>
                  <p className="text-sm md:text-base text-gray-700">contato@zonadeconversao.space</p>
                </div>
              </a>
            </div>
          </CardContent>
        </Card>
            
        <div className="bg-white p-4 md:p-6 rounded-lg shadow-lg">
          <h2 className="text-lg md:text-xl font-semibold mb-4 text-[#1c3454]">
            Horário de Funcionamento
          </h2>
          <div className="space-y-2 text-sm md:text-base">
            <p className="flex justify-between">
              <span className="font-medium">Segunda - Sexta</span>
              <span>9:00 - 18:00</span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium">Sábado</span>
              <span>Fechado</span>
            </p>
            <p className="flex justify-between">
              <span className="font-medium">Domingo</span>
              <span>Fechado</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
