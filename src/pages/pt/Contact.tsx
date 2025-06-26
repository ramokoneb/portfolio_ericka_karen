
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MessageSquare, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#FAFBFC]">
      <div className="max-w-4xl mx-auto px-6 md:px-8 py-12">
        <Link to="/pt">
          <Button variant="ghost" className="mb-8 text-[#4A5568] hover:text-[#1A202C] hover:bg-[#F7FAFC]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para o Início
          </Button>
        </Link>
        
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl md:text-5xl font-semibold text-[#1A202C] tracking-tight">Entre em Contato</h1>
            <p className="text-xl text-[#4A5568] leading-relaxed max-w-2xl mx-auto">
              Vamos discutir como podemos trabalhar juntos para atingir seus objetivos.
            </p>
          </div>
          
          <Card className="border border-[#E2E8F0] shadow-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-[#1A202C] font-semibold">Informações de Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/5511942002308?text=%F0%9F%87%A7%F0%9F%87%B7%20Oi%2C%20Ericka!%20Achei%20seu%20trabalho%20muito%20interessante%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%0A%0A%F0%9F%87%BA%F0%9F%87%B8%20Hi%20Ericka!%20I%20found%20your%20work%20really%20interesting%20and%20would%20love%20to%20know%20more%20about%20your%20services.%0A%0A%F0%9F%87%AA%F0%9F%87%B8%20%C2%A1Hola%20Ericka!%20Encontr%C3%A9%20tu%20trabajo%20muy%20interesante%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tus%20servicios." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-4 rounded-xl hover:bg-[#F7FAFC] transition-colors border border-[#E2E8F0]"
                >
                  <div className="p-3 bg-[#3182CE]/10 rounded-xl mr-4">
                    <MessageSquare className="h-6 w-6 text-[#3182CE]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#4A5568] mb-1">WhatsApp</p>
                    <p className="text-base text-[#1A202C] font-medium">+55 11 94200-2308</p>
                  </div>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ekarenramos/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-4 rounded-xl hover:bg-[#F7FAFC] transition-colors border border-[#E2E8F0]"
                >
                  <div className="p-3 bg-[#3182CE]/10 rounded-xl mr-4">
                    <Linkedin className="h-6 w-6 text-[#3182CE]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#4A5568] mb-1">LinkedIn</p>
                    <p className="text-base text-[#1A202C] font-medium">ekarenramos</p>
                  </div>
                </a>
                <a 
                  href="mailto:contato@zonadeconversao.space" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-4 rounded-xl hover:bg-[#F7FAFC] transition-colors border border-[#E2E8F0]"
                >
                  <div className="p-3 bg-[#3182CE]/10 rounded-xl mr-4">
                    <Mail className="h-6 w-6 text-[#3182CE]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[#4A5568] mb-1">Email</p>
                    <p className="text-base text-[#1A202C] font-medium">contato@zonadeconversao.space</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
              
          <Card className="border border-[#E2E8F0] shadow-sm">
            <CardHeader>
              <CardTitle className="text-xl text-[#1A202C] font-semibold">
                Horário de Funcionamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-base">
                <div className="flex justify-between items-center py-2 border-b border-[#E2E8F0] last:border-b-0">
                  <span className="font-medium text-[#1A202C]">Segunda - Sexta</span>
                  <span className="text-[#4A5568]">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-[#E2E8F0] last:border-b-0">
                  <span className="font-medium text-[#1A202C]">Sábado</span>
                  <span className="text-[#4A5568]">Fechado</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium text-[#1A202C]">Domingo</span>
                  <span className="text-[#4A5568]">Fechado</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
