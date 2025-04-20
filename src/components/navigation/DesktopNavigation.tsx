import { useState } from "react";
import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { navigationContent } from "./translations";
import type { Language } from "@/hooks/useNavigationLanguage";

interface DesktopNavigationProps {
  language: Language;
  getPathInLanguage: (lang: Language) => string;
}

export const DesktopNavigation = ({ language, getPathInLanguage }: DesktopNavigationProps) => {
  const [isServicesMenuOpen, setIsServicesMenuOpen] = useState(false);
  
  const closeServicesMenu = () => setIsServicesMenuOpen(false);

  return (
    <div className="hidden md:flex items-center justify-between p-4 bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <Link to={`/${language}`} className="text-xl font-bold text-[#6CAAD9]">
        ERICKA KAREN
      </Link>
      
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to={`/${language}`}>
              <NavigationMenuLink className="px-4 py-2 hover:text-[#6CAAD9] text-[#1A3554]">
                {navigationContent[language].home}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className="hover:text-[#6CAAD9] text-[#1A3554] bg-white"
              onClick={() => setIsServicesMenuOpen(prev => !prev)}
            >
              {navigationContent[language].services}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[400px] p-4 grid grid-cols-2 gap-3 bg-white">
                <Link 
                  to={`/${language}/media-buying`} 
                  className="block p-3 rounded-lg hover:bg-[#6CAAD9] text-[#1A3554] hover:text-white"
                  onClick={closeServicesMenu}
                >
                  <div className="font-medium">{navigationContent[language].mediaBuying}</div>
                  <p className="text-sm text-[#1A3554]">
                    {language === "en" 
                      ? "Strategic paid advertising campaigns" 
                      : language === "pt"
                        ? "Campanhas estratégicas de publicidade paga"
                        : "Campañas estratégicas de publicidad paga"}
                  </p>
                </Link>
                <Link 
                  to={`/${language}/automation-ai`} 
                  className="block p-3 rounded-lg hover:bg-[#6CAAD9] text-[#1A3554] hover:text-white"
                  onClick={closeServicesMenu}
                >
                  <div className="font-medium">{navigationContent[language].automation}</div>
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
                {navigationContent[language].about}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to={`/${language}/contact`}>
              <Button className="bg-[#6CAAD9] hover:bg-[#6CAAD9] text-white">
                {navigationContent[language].contact}
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:text-[#6CAAD9] text-[#1A3554] bg-white">
              <Globe className="mr-2 h-4 w-4" />
              {language.toUpperCase()}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-2 w-[100px] bg-white">
                <Link 
                  to={getPathInLanguage("en")} 
                  className="block p-2 hover:bg-[#6CAAD9] rounded text-[#1A3554] hover:text-white"
                >
                  EN
                </Link>
                <Link 
                  to={getPathInLanguage("pt")} 
                  className="block p-2 hover:bg-[#6CAAD9] rounded text-[#1A3554] hover:text-white"
                >
                  PT
                </Link>
                <Link 
                  to={getPathInLanguage("es")} 
                  className="block p-2 hover:bg-[#6CAAD9] rounded text-[#1A3554] hover:text-white"
                >
                  ES
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
