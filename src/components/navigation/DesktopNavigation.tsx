
import { useState, useEffect } from "react";
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
  const [isCasesPortfolioMenuOpen, setIsCasesPortfolioMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const closeServicesMenu = () => setIsServicesMenuOpen(false);
  const closeCasesPortfolioMenu = () => setIsCasesPortfolioMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Common navigation link styling class
  const navLinkClass = "text-base font-medium px-4 py-2 hover:text-primary-dark text-primary-darker transition-colors focus-outline";
  // Common submenu item styling
  const subMenuItemClass = "block p-3 rounded-lg hover:bg-primary/10 text-primary-darker hover:text-primary-dark transition-colors focus-outline";
  // Common submenu description styling
  const subMenuDescClass = "text-sm text-primary-darker opacity-80 mt-1";

  return (
    <div className={`hidden md:flex items-center justify-between p-4 bg-white fixed top-0 left-0 right-0 z-50 ${scrolled ? 'shadow-md' : 'shadow-sm'} transition-shadow duration-300`}>
      <Link to={`/${language}`} className="text-xl font-bold text-primary-dark focus-outline" aria-label="Home">
        ERICKA KAREN
      </Link>
      
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to={`/${language}`}>
              <NavigationMenuLink className={navLinkClass}>
                {navigationContent[language].home}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuTrigger 
              className="hover:text-primary-dark text-base font-medium text-primary-darker bg-white transition-colors focus-outline"
              onClick={() => setIsServicesMenuOpen(prev => !prev)}
            >
              {navigationContent[language].services}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[400px] p-4 grid grid-cols-2 gap-3 bg-white rounded-lg shadow-lg">
                <Link 
                  to={`/${language}/media-buying`} 
                  className={subMenuItemClass}
                  onClick={closeServicesMenu}
                >
                  <div className="font-medium">{navigationContent[language].mediaBuying}</div>
                  <p className={subMenuDescClass}>
                    {language === "en" 
                      ? "Strategic paid advertising campaigns" 
                      : language === "pt"
                        ? "Campanhas estratégicas de publicidade paga"
                        : "Campañas estratégicas de publicidad paga"}
                  </p>
                </Link>
                <Link 
                  to={`/${language}/automation-ai`} 
                  className={subMenuItemClass}
                  onClick={closeServicesMenu}
                >
                  <div className="font-medium">{navigationContent[language].automation}</div>
                  <p className={subMenuDescClass}>
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
            <NavigationMenuTrigger 
              className="hover:text-primary-dark text-base font-medium text-primary-darker bg-white transition-colors focus-outline"
              onClick={() => setIsCasesPortfolioMenuOpen(prev => !prev)}
            >
              {navigationContent[language].casesPortfolio}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[400px] p-4 grid grid-cols-2 gap-3 bg-white rounded-lg shadow-lg">
                <Link 
                  to={`/${language}/cases/media-buying`} 
                  className={subMenuItemClass}
                  onClick={closeCasesPortfolioMenu}
                >
                  <div className="font-medium">{navigationContent[language].mediaPaidCases}</div>
                  <p className={subMenuDescClass}>
                    {language === "en" 
                      ? "Success stories and case studies" 
                      : language === "pt"
                        ? "Histórias de sucesso e estudos de caso"
                        : "Historias de éxito y estudios de caso"}
                  </p>
                </Link>
                <Link 
                  to={`/${language}/portfolio/automation-ai`} 
                  className={subMenuItemClass}
                  onClick={closeCasesPortfolioMenu}
                >
                  <div className="font-medium">{navigationContent[language].automationCases}</div>
                  <p className={subMenuDescClass}>
                    {language === "en" 
                      ? "Project highlights and showcase" 
                      : language === "pt"
                        ? "Destaques de projetos e portfólio"
                        : "Destacados de proyectos y portafolio"}
                  </p>
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <Link to={`/${language}/about`}>
              <NavigationMenuLink className={navLinkClass}>
                {navigationContent[language].about}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          
           <NavigationMenuItem>
            <Link to={`/${language}/contact`}>
              <Button className="bg-primary-dark hover:bg-primary-darker text-white font-medium focus-outline">
                {navigationContent[language].contact}
              </Button>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:text-primary-dark text-base font-medium text-primary-darker bg-white transition-colors focus-outline">
              <Globe className="mr-2 h-4 w-4" />
              {language.toUpperCase()}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="p-2 w-[100px] bg-white rounded-lg shadow-lg">
                <Link 
                  to={getPathInLanguage("en")} 
                  className="block p-2 hover:bg-primary/10 rounded-md text-primary-darker hover:text-primary-dark font-medium transition-colors focus-outline"
                  aria-label="Switch to English"
                >
                  EN
                </Link>
                <Link 
                  to={getPathInLanguage("pt")} 
                  className="block p-2 hover:bg-primary/10 rounded-md text-primary-darker hover:text-primary-dark font-medium transition-colors focus-outline"
                  aria-label="Switch to Portuguese"
                >
                  PT
                </Link>
                <Link 
                  to={getPathInLanguage("es")} 
                  className="block p-2 hover:bg-primary/10 rounded-md text-primary-darker hover:text-primary-dark font-medium transition-colors focus-outline"
                  aria-label="Switch to Spanish"
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
