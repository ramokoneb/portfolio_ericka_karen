import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, MessageSquare, Linkedin, Mail, Send } from "lucide-react";
const Contact = () => {
  return <div className="min-h-screen p-8 bg-[#1c3454]">
      <div className="max-w-4xl mx-auto">
        <Link to="/pt">
          <Button variant="ghost" className="mb-6 bg-[#6caddf] text-[#1c3454]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Voltar para Início
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-slate-50">Entre em Contato</h1>
        <p className="text-xl text-[#6caddf] mb-12">
          Vamos discutir como podemos trabalhar juntos para alcançar seus objetivos.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg bg-white">
            <CardHeader>
              <CardTitle className="text-[#1c3454]">Enviar uma Mensagem</CardTitle>
              <CardDescription className="text-[#6caddf]">
                Preencha o formulário abaixo e eu retornarei o mais breve possível.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1c3454]">Seu Nome</label>
                  <Input placeholder="Digite seu nome" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1c3454]">Seu Email</label>
                  <Input type="email" placeholder="Digite seu email" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-[#1c3454]">Sua Mensagem</label>
                  <Textarea placeholder="O que você gostaria de discutir?" className="min-h-[120px]" />
                </div>
                <Button className="w-full bg-[#6caddf] hover:bg-[#6caddf] text-[#1c3454]">
                  <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div>
            <Card className="border-none shadow-lg bg-white mb-8">
              <CardHeader>
                <CardTitle className="text-[#1c3454]">Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <a href="https://wa.me/12345678900" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="p-2 bg-[#6caddf]/10 rounded-full mr-3">
                      <MessageSquare className="h-5 w-5 text-[#6caddf]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">WhatsApp</p>
                      <p className="text-gray-700">+1 234 567 8900</p>
                    </div>
                  </a>
                  <a href="https://linkedin.com/in/ericka-karen" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="p-2 bg-[#6caddf]/10 rounded-full mr-3">
                      <Linkedin className="h-5 w-5 text-[#6caddf]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">LinkedIn</p>
                      <p className="text-gray-700">ericka-karen</p>
                    </div>
                  </a>
                  <a href="mailto:ericka@example.com" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="p-2 bg-[#6caddf]/10 rounded-full mr-3">
                      <Mail className="h-5 w-5 text-[#6caddf]" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500">Email</p>
                      <p className="text-gray-700">ericka@example.com</p>
                    </div>
                  </a>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold mb-4 text-[#1c3454]">
                Horário de Atendimento
              </h2>
              <div className="space-y-2">
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
      </div>
    </div>;
};
export default Contact;