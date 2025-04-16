
import { useState } from "react";
import { Link } from "react-router-dom";
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
import { Menu } from "lucide-react";

const Navigation = () => {
  const [language, setLanguage] = useState<"en" | "pt">("en");
  
  const content = {
    en: {
      home: "Home",
      mediaBuying: "Media Buying",
      automation: "Automation & AI",
      about: "About",
      portfolio: "Portfolio",
      contact: "Contact"
    },
    pt: {
      home: "Início",
      mediaBuying: "Mídia Paga",
      automation: "Automação & IA",
      about: "Sobre",
      portfolio: "Portfólio",
      contact: "Contato"
    }
  };
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === "en" ? "pt" : "en");
  };

  return (
    <>
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
        <Link to="/" className="text-xl font-bold text-[#5BCEFA]">
          Ericka Karen
        </Link>
        
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className="px-4 py-2 hover:text-[#F5A9B8]">
                  {content[language].home}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-[#F5A9B8]">
                {language === "en" ? "Services" : "Serviços"}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[400px] p-4 grid grid-cols-2 gap-3">
                  <Link to="/media-buying" className="block p-3 rounded-lg hover:bg-gray-50">
                    <div className="font-medium">{content[language].mediaBuying}</div>
                    <p className="text-sm text-gray-500">
                      {language === "en" 
                        ? "Strategic paid advertising campaigns" 
                        : "Campanhas estratégicas de publicidade paga"}
                    </p>
                  </Link>
                  <Link to="/automation-ai" className="block p-3 rounded-lg hover:bg-gray-50">
                    <div className="font-medium">{content[language].automation}</div>
                    <p className="text-sm text-gray-500">
                      {language === "en" 
                        ? "Intelligent automation solutions" 
                        : "Soluções inteligentes de automação"}
                    </p>
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/about">
                <NavigationMenuLink className="px-4 py-2 hover:text-[#F5A9B8]">
                  {content[language].about}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/portfolio">
                <NavigationMenuLink className="px-4 py-2 hover:text-[#F5A9B8]">
                  {content[language].portfolio}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link to="/contact">
                <Button className="bg-[#F5A9B8] hover:bg-[#5BCEFA]">
                  {content[language].contact}
                </Button>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <Button 
          variant="outline" 
          className="rounded-full bg-white text-gray-700 hover:bg-gray-100" 
          onClick={toggleLanguage}
        >
          {language === "en" ? "PT" : "EN"}
        </Button>
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between p-4 bg-white/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50">
        <Link to="/" className="text-xl font-bold text-[#5BCEFA]">
          Ericka Karen
        </Link>
        
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            className="rounded-full bg-white text-gray-700 hover:bg-gray-100" 
            onClick={toggleLanguage}
          >
            {language === "en" ? "PT" : "EN"}
          </Button>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 pt-10">
                <Link to="/" className="p-2 hover:bg-gray-100 rounded">
                  {content[language].home}
                </Link>
                <Link to="/media-buying" className="p-2 hover:bg-gray-100 rounded">
                  {content[language].mediaBuying}
                </Link>
                <Link to="/automation-ai" className="p-2 hover:bg-gray-100 rounded">
                  {content[language].automation}
                </Link>
                <Link to="/about" className="p-2 hover:bg-gray-100 rounded">
                  {content[language].about}
                </Link>
                <Link to="/portfolio" className="p-2 hover:bg-gray-100 rounded">
                  {content[language].portfolio}
                </Link>
                <Link to="/contact" className="p-2 hover:bg-gray-100 rounded">
                  {content[language].contact}
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      
      {/* Spacer to prevent content from being hidden under the navbar */}
      <div className="h-16"></div>
    </>
  );
};

export default Navigation;
