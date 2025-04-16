
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="min-h-[80vh] flex flex-col justify-center items-center bg-gradient-to-br from-purple-100 to-white p-8">
      <div className="max-w-3xl text-center space-y-6 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-violet-500">
          Gestora de Automação, IA & Tráfego Pago
        </h1>
        <p className="text-xl md:text-2xl text-gray-600">
          Transformando negócios através de soluções tecnológicas inteligentes e estratégias de marketing digital
        </p>
        <div className="flex gap-4 justify-center pt-6">
          <Button variant="outline" size="lg" asChild>
            <a href="#projetos" className="flex items-center gap-2">
              Ver Projetos
            </a>
          </Button>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
            <a href="#contato" className="flex items-center gap-2">
              Fale Comigo
            </a>
          </Button>
        </div>
        <div className="flex gap-4 justify-center pt-8">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-purple-600 transition-colors">
            <Github size={24} />
          </a>
          <a href="mailto:seu@email.com" className="text-gray-600 hover:text-purple-600 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
