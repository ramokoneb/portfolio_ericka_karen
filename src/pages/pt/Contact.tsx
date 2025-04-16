
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, MessageSquare, Linkedin, Mail, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <MessageSquare className="h-5 w-5 text-[#F5A9B8]" />,
      label: "WhatsApp",
      value: "+1 234 567 8900",
      link: "https://wa.me/12345678900"
    },
    {
      icon: <Linkedin className="h-5 w-5 text-[#F5A9B8]" />,
      label: "LinkedIn",
      value: "ericka-karen",
      link: "https://linkedin.com/in/ericka-karen"
    },
    {
      icon: <Mail className="h-5 w-5 text-[#F5A9B8]" />,
      label: "E-mail",
      value: "ericka@example.com",
      link: "mailto:ericka@example.com"
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-[#33C3F0]">
      <div className="max-w-4xl mx-auto">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 bg-white/50 hover:bg-white/70">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Entre em Contato</h1>
        <p className="text-xl text-white mb-12">
          Vamos discutir como podemos trabalhar juntos para alcançar seus objetivos.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Envie uma Mensagem</CardTitle>
              <CardDescription>
                Preencha o formulário abaixo e eu retornarei o mais breve possível.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Seu Nome</label>
                  <Input placeholder="Digite seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Seu Email</label>
                  <Input type="email" placeholder="Digite seu email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Sua Mensagem</label>
                  <Textarea 
                    placeholder="O que você gostaria de discutir?" 
                    className="min-h-[120px]" 
                  />
                </div>
                <Button className="w-full bg-[#0EA5E9] hover:bg-[#33C3F0] text-white">
                  <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div>
            <Card className="border-none shadow-lg mb-8">
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contactMethods.map((method, index) => (
                    <a 
                      key={index} 
                      href={method.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="p-2 bg-[#33C3F0]/10 rounded-full mr-3">
                        {method.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">{method.label}</p>
                        <p className="text-gray-700">{method.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-[#33C3F0]">
                Horário de Atendimento
              </h2>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="font-medium">Segunda - Sexta</span>
                  <span>9:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Sábado</span>
                  <span>10:00 - 14:00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Domingo</span>
                  <span>Fechado</span>
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
