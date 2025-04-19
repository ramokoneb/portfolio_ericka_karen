import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageSquare, Linkedin, Mail, Send } from "lucide-react";

const Contact = () => {
  const [language, setLanguage] = useState<"en" | "pt">("en");
  
  const content = {
    en: {
      title: "Contact Me",
      subtitle: "Let's discuss how we can work together to achieve your goals.",
      backButton: "Back to Home",
      formTitle: "Send a Message",
      formDescription: "Fill out the form below and I'll get back to you as soon as possible.",
      nameLabel: "Your Name",
      namePlaceholder: "Enter your name",
      emailLabel: "Your Email",
      emailPlaceholder: "Enter your email",
      messageLabel: "Your Message",
      messagePlaceholder: "What would you like to discuss?",
      submitButton: "Send Message",
      contactTitle: "Contact Information",
      contactMethods: [
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
          label: "Email",
          value: "ericka@example.com",
          link: "mailto:ericka@example.com"
        }
      ]
    },
    pt: {
      title: "Entre em Contato",
      subtitle: "Vamos discutir como podemos trabalhar juntos para alcançar seus objetivos.",
      backButton: "Voltar para Home",
      formTitle: "Envie uma Mensagem",
      formDescription: "Preencha o formulário abaixo e eu retornarei o mais breve possível.",
      nameLabel: "Seu Nome",
      namePlaceholder: "Digite seu nome",
      emailLabel: "Seu Email",
      emailPlaceholder: "Digite seu email",
      messageLabel: "Sua Mensagem",
      messagePlaceholder: "O que você gostaria de discutir?",
      submitButton: "Enviar Mensagem",
      contactTitle: "Informações de Contato",
      contactMethods: [
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
          label: "Email",
          value: "ericka@example.com",
          link: "mailto:ericka@example.com"
        }
      ]
    }
  };
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "pt" : "en");
  };

  return (
    <div className="min-h-screen p-8 bg-[#1A3554]">
      <div className="absolute top-4 right-4">
        <Button 
          variant="outline" 
          className="rounded-full bg-[#1A3554] text-white hover:bg-[#6CAAD9]" 
          onClick={toggleLanguage}
        >
          {language === "en" ? "PT" : "EN"}
        </Button>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" /> {content[language].backButton}
          </Button>
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-[#5BCEFA]">{content[language].title}</h1>
        <p className="text-xl text-gray-700 mb-12">
          {content[language].subtitle}
        </p>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-none shadow-lg bg-white">
            <CardHeader>
              <CardTitle>{content[language].formTitle}</CardTitle>
              <CardDescription>
                {content[language].formDescription}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">{content[language].nameLabel}</label>
                  <Input placeholder={content[language].namePlaceholder} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{content[language].emailLabel}</label>
                  <Input type="email" placeholder={content[language].emailPlaceholder} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">{content[language].messageLabel}</label>
                  <Textarea 
                    placeholder={content[language].messagePlaceholder} 
                    className="min-h-[120px]" 
                  />
                </div>
                <Button className="w-full bg-[#6CAAD9] hover:bg-[#6CAAD9] text-white">
                  <Send className="mr-2 h-4 w-4" /> {content[language].submitButton}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          <div>
            <Card className="border-none shadow-lg bg-white mb-8">
              <CardHeader>
                <CardTitle>{content[language].contactTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {content[language].contactMethods.map((method, index) => (
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
                {language === "en" ? "Office Hours" : "Horário de Atendimento"}
              </h2>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="font-medium">{language === "en" ? "Monday - Friday" : "Segunda - Sexta"}</span>
                  <span>9:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">{language === "en" ? "Saturday" : "Sábado"}</span>
                  <span>10:00 - 14:00</span>
                </p>
                <p className="flex justify-between">
                  <span className="font-medium">{language === "en" ? "Sunday" : "Domingo"}</span>
                  <span>{language === "en" ? "Closed" : "Fechado"}</span>
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
