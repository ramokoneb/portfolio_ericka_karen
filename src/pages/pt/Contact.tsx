
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, MessageSquare, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen w-full relative">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12 relative z-10">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 hover:bg-white/10">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
          </Button>
        </Link>
        
        <div className="glass-card p-8 md:p-12 mb-8 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-primary-darker">
            Entre em Contato
          </h1>
          <p className="text-lg md:text-xl text-primary-dark font-bold">
            Vamos discutir como podemos trabalhar juntos para atingir seus objetivos.
          </p>
        </div>
        
        <div className="space-y-6">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-2xl text-primary-darker font-bold">Informações de Contato</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <a 
                  href="https://wa.me/5511942002308?text=%F0%9F%87%A7%F0%9F%87%B7%20Oi%2C%20Ericka!%20Achei%20seu%20trabalho%20muito%20interessante%20e%20gostaria%20de%20saber%20mais%20sobre%20seus%20servi%C3%A7os.%0A%0A%F0%9F%87%BA%F0%9F%87%B8%20Hi%20Ericka!%20I%20found%20your%20work%20really%20interesting%20and%20would%20love%20to%20know%20more%20about%20your%20services.%0A%0A%F0%9F%87%AA%F0%9F%87%B8%20%C2%A1Hola%20Ericka!%20Encontr%C3%A9%20tu%20trabajo%20muy%20interesante%20y%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20tus%20servicios." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-4 rounded-xl hover:bg-primary/5 transition-colors border-2 border-primary/20"
                >
                  <div className="p-3 bg-primary/10 rounded-xl mr-4">
                    <MessageSquare className="h-6 w-6 text-primary-dark" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary-dark mb-1">WhatsApp</p>
                    <p className="text-base text-primary-darker font-bold">+55 11 94200-2308</p>
                  </div>
                </a>
                <a 
                  href="https://www.linkedin.com/in/ekarenramos/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-4 rounded-xl hover:bg-primary/5 transition-colors border-2 border-primary/20"
                >
                  <div className="p-3 bg-primary/10 rounded-xl mr-4">
                    <Linkedin className="h-6 w-6 text-primary-dark" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary-dark mb-1">LinkedIn</p>
                    <p className="text-base text-primary-darker font-bold">ekarenramos</p>
                  </div>
                </a>
                <a 
                  href="mailto:contato@zonadeconversao.space" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-4 rounded-xl hover:bg-primary/5 transition-colors border-2 border-primary/20"
                >
                  <div className="p-3 bg-primary/10 rounded-xl mr-4">
                    <Mail className="h-6 w-6 text-primary-dark" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary-dark mb-1">Email</p>
                    <p className="text-base text-primary-darker font-bold">contato@zonadeconversao.space</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>
              
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="text-xl text-primary-darker font-bold">
                Horário de Funcionamento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 text-base">
                <div className="flex justify-between items-center py-2 border-b border-primary/20 last:border-b-0">
                  <span className="font-bold text-primary-darker">Segunda - Sexta</span>
                  <span className="text-primary-dark">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-primary/20 last:border-b-0">
                  <span className="font-bold text-primary-darker">Sábado</span>
                  <span className="text-primary-dark">Fechado</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-bold text-primary-darker">Domingo</span>
                  <span className="text-primary-dark">Fechado</span>
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
