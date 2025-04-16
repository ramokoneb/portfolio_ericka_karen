
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <section id="contato" className="py-20 px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Vamos Conversar?</h2>
        <Card>
          <CardHeader>
            <CardTitle>Entre em Contato</CardTitle>
            <CardDescription>
              Preencha o formulário abaixo para discutirmos seu próximo projeto.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Input placeholder="Seu nome" />
              </div>
              <div>
                <Input type="email" placeholder="Seu e-mail" />
              </div>
              <div>
                <Textarea placeholder="Sua mensagem" className="min-h-[120px]" />
              </div>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">
                Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
