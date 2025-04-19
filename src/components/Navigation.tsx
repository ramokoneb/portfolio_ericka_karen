
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Globe } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const [language, setLanguage] = useState<"en" | "pt" | "es">("en");
  
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith("/pt")) {
      setLanguage("pt");
    } else if (path.startsWith("/es")) {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  }, [location]);
  
  const getPathInLanguage = (targetLang: "en" | "pt" | "es") => {
    const path = location.pathname;
    const currentLang = path.startsWith("/pt") ? "pt" : path.startsWith("/es") ? "es" : "en";
    let newPath = path;
    
    if (currentLang !== targetLang) {
      if (path === `/${currentLang}`) {
        newPath = `/${targetLang}`;
      } else {
        const restOfPath = path.substring(3);
        newPath = `/${targetLang}${restOfPath}`;
      }
    }
    
    return newPath;
  };
  
  const content = {
    en: {
      home: "Home",
      mediaBuying: "Media Buying",
      automation: "Automation, AI & No/Low-Code Development",
      about: "About",
      contact: "Contact",
      services: "Services"
    },
    pt: {
      home: "Início",
      mediaBuying: "Mídia Paga",
      automation: "Automação, IA & Desenvolvimento No/Low-Code",
      about: "Sobre",
      contact: "Contato",
      services: "Serviços"
    },
    es: {
      home: "Inicio",
      mediaBuying: "Medios Pagos",
      automation: "Automatización, IA & Desarrollo No/Low-Code",
      about: "Sobre",
      contact: "Contacto",
      services: "Servicios"
    }
  };

  return (
    <>
      <div className="hidden md:flex items-center justify-between p-4 bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
        <Link to={`/${language}`} className="text-xl font-bold text-[#6CAAD9]">
          {/* Nome removido conforme solicitado */}
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to={`/${language}`}>
                <NavigationMenuLink className="px-4 py-2 hover:text-[#6CAAD9] text-[#1A3554]">
                  {content[language].home}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-[#6CAAD9] text-[#1A3554] bg-white">
                {content[language].services}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4 grid grid-cols-2 gap-3 bg-white">
                  <Link to={`/${language}/media-buying`} className="block p-3 rounded-lg hover:bg-[#6CAAD9] text-[#1A3554] hover:text-white">
                    <div className="font-medium">{content[language].mediaBuying}</div>
                    <p className="text-sm text-[#1A3554]">
                      {language === "en" 
                        ? "Strategic paid advertising campaigns" 
                        : language === "pt"
                          ? "Campanhas estratégicas de publicidade paga"
                          : "Campañas estratégicas de publicidad paga"}
                    </p>
                  </Link>
                  <Link to={`/${language}/automation-ai`} className="block p-3 rounded-lg hover:bg-[#6CAAD9] text-[#1A3554] hover:text-white">
                    <div className="font-medium">{content[language].automation}</div>
                    <p className="text-sm text-[#1A3554]">
                      {language === "en" 
                        ? "Intelligent automation solutions" 
                        : language === "pt"
                          ? "Soluções inteligentes de automação"
                          : "Soluciones inteligentes de automatización"}
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to={`/${language}/about`}>
                <NavigationMenuLink className="px-4 py-2 hover:text-[#6CAAD9] text-[#1A3554]">
                  {content[language].about}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to={`/${language}/contact`}>
                <Button className="bg-[#6CAAD9] hover:bg-[#6CAAD9] text-white">
                  {content[language].contact}
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <div className="flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-[#6CAAD9] text-[#1A3554] bg-white">
                  <Globe className="mr-2 h-4 w-4" />
                  {language.toUpperCase()}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-2 w-[100px] bg-white">
                    <Link to={getPathInLanguage("en")} className="block p-2 hover:bg-[#6CAAD9] rounded text-[#1A3554] hover:text-white">
                      EN
                    </Link>
                    <Link to={getPathInLanguage("pt")} className="block p-2 hover:bg-[#6CAAD9] rounded text-[#1A3554] hover:text-white">
                      PT
                    </Link>
                    <Link to={getPathInLanguage("es")} className="block p-2 hover:bg-[#6CAAD9] rounded text-[#1A3554] hover:text-white">
                      ES
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
      
      <div className="md:hidden flex items-center justify-between p-4 bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
        <Link to={`/${language}`} className="text-xl font-bold text-[#6CAAD9]">
          {/* Nome removido conforme solicitado */}
        </Link>
        
        <div className="flex items-center gap-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="hover:text-[#6CAAD9] text-[#1A3554] bg-white">
                  <Globe className="h-4 w-4" />
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-2 w-[100px] bg-white">
                    <Link to={getPathInLanguage("en")} className="block p-2 hover:bg-[#6CAAD9] rounded text-[#1A3554] hover:text-white">
                      EN
                    </Link>
                    <Link to={getPathInLanguage("pt")} className="block p-2 hover:bg-[#6CAAD9] rounded text-[#1A3554] hover:text-white">
                      PT
                    </Link>
                    <Link to={getPathInLanguage("es")} className="block p-2 hover:bg-[#6CAAD9] rounded text-[#1A3554] hover:text-white">
                      ES
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="bg-white text-[#1A3554]">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-white">
              <div className="flex flex-col gap-4 pt-10">
                <Link to={`/${language}`} className="p-2 hover:bg-[#6CAAD9] rounded text-[#1A3554] hover:text-white">
                  {content[language].home}
                </Link>
                <Link to={`/${language}/media-buying`} className="p-2 hover:bg-[#6CAAD9] rounded text-[#1A3554] hover:text-white">
                  {content[language].mediaBuying}
                </Link>
                <Link to={`/${language}/automation-ai`} className="p-2 hover:bg-[#6CAAD9] rounded text-[#1A3554] hover:text-white">
                  {content[language].automation}
                </Link>
                <Link to={`/${language}/about`} className="p-2 hover:bg-[#6CAAD9] rounded text-[#1A3554] hover:text-white">
                  {content[language].about}
                </Link>
                <Link to={`/${language}/contact`} className="p-2 hover:bg-[#6CAAD9] rounded text-[#1A3554] hover:text-white">
                  {content[language].contact}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      <div className="h-16"></div>
    </>
  );
};

export default Navigation;
