
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useContactForm } from "@/hooks/useContactForm";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

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
          title: "Sucesso",
          description: "Sua mensagem foi enviada com sucesso!",
        });
        setFormData({ name: "", email: "", whatsapp: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Falha ao enviar mensagem. Por favor, tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contato" className="py-20 px-8 bg-[#1A3554]">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Vamos Conversar?</h2>
        <Card className="bg-white">
          <CardHeader>
            <CardTitle>Entre em Contato</CardTitle>
            <CardDescription>
              Preencha o formulário abaixo para discutirmos seu próximo projeto.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <Input 
                  placeholder="Seu nome" 
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Seu e-mail"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  required
                />
              </div>
              <div>
                <Input 
                  type="tel" 
                  placeholder="Seu WhatsApp (código do país + DDD + número)"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData(prev => ({ ...prev, whatsapp: e.target.value.replace(/\D/g, '') }))}
                  required
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Sua mensagem" 
                  className="min-h-[120px]"
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full bg-[#6CAAD9] hover:bg-[#6CAAD9] text-white"
                disabled={isSubmitting}
              >
                <Send className="mr-2 h-4 w-4" /> {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
