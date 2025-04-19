
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, MessageSquare, Linkedin, Mail, Send } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <MessageSquare className="h-5 w-5 text-[#6CAAD9]" />,
      label: "WhatsApp",
      value: "+1 234 567 8900",
      link: "https://wa.me/12345678900"
    },
    {
      icon: <Linkedin className="h-5 w-5 text-[#6CAAD9]" />,
      label: "LinkedIn",
      value: "ericka-karen",
      link: "https://linkedin.com/in/ericka-karen"
    },
    {
      icon: <Mail className="h-5 w-5 text-[#6CAAD9]" />,
      label: "Correo",
      value: "ericka@example.com",
      link: "mailto:ericka@example.com"
    }
  ];

  return (
    <div className="min-h-screen p-8 bg-[#1A3554]">
      <div className="max-w-4xl mx-auto">
        <Link to="/es">
          <Button variant="ghost" className="mb-6 bg-[#1A3554] text-white hover:bg-[#6CAAD9]">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver al Inicio
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-white">Contáctame</h1>
        <p className="text-xl text-white mb-12">
          Hablemos sobre cómo podemos trabajar juntos para lograr tus objetivos.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>Enviar un Mensaje</CardTitle>
              <CardDescription>
                Completa el formulario a continuación y me pondré en contacto contigo lo antes posible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tu Nombre</label>
                  <Input placeholder="Ingresa tu nombre" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tu Correo</label>
                  <Input type="email" placeholder="Ingresa tu correo electrónico" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tu Mensaje</label>
                  <Textarea 
                    placeholder="¿Qué te gustaría discutir?" 
                    className="min-h-[120px]" 
                  />
                </div>
                <Button className="w-full bg-[#6CAAD9] hover:bg-[#6CAAD9] text-white">
                  <Send className="mr-2 h-4 w-4" /> Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div>
            <Card className="border-none shadow-lg mb-8">
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
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
                      <div className="p-2 bg-[#6CAAD9]/10 rounded-full mr-3">
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
              <h2 className="text-xl font-semibold mb-4 text-[#6CAAD9]">
                Horario de Oficina
              </h2>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="font-medium">Lunes - Viernes</span>
                  <span>9:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Sábado</span>
                  <span>10:00 - 14:00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">Domingo</span>
                  <span>Cerrado</span>
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
