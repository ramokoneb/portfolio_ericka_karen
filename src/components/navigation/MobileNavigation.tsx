
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Globe, X } from "lucide-react";
import { navigationContent } from "./translations";
import type { Language } from "@/hooks/useNavigationLanguage";
import { motion } from "framer-motion";

interface MobileNavigationProps {
  language: Language;
  getPathInLanguage: (lang: Language) => string;
}

export const MobileNavigation = ({ language, getPathInLanguage }: MobileNavigationProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const closeSheet = () => setIsSheetOpen(false);

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

  // Common mobile menu link class
  const mobileLinkClass = "p-4 hover:bg-[#6CAAD9]/10 rounded-md text-[#1A3554] hover:text-[#6CAAD9] font-medium transition-colors touch-target";
  // Common section header class
  const sectionHeaderClass = "px-3 pt-5 pb-2 text-sm font-semibold text-[#6CAAD9] uppercase tracking-wider";
  // Language selector link class
  const langLinkClass = "block p-3 hover:bg-[#6CAAD9]/10 rounded-md text-[#1A3554] hover:text-[#6CAAD9] font-medium transition-colors touch-target";

  return (
    <div className={`md:hidden flex items-center justify-between p-4 bg-white fixed top-0 left-0 right-0 z-50 ${scrolled ? 'shadow-md' : 'shadow-sm'} transition-shadow duration-300`}>
      <Link to={`/${language}`} className="text-xl font-bold text-[#6CAAD9] focus-outline" aria-label="Home">
        EK
      </Link>
      
      <div className="flex items-center gap-3">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-[#6CAAD9] text-[#1A3554] bg-white h-11 w-11 p-0 flex items-center justify-center rounded-full focus-outline touch-target">
                <Globe className="h-5 w-5" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 w-[110px] bg-white z-50 rounded-md shadow-lg"
                >
                  <Link 
                    to={getPathInLanguage("en")} 
                    className={langLinkClass}
                    aria-label="Switch to English"
                  >
                    EN
                  </Link>
                  <Link 
                    to={getPathInLanguage("pt")} 
                    className={langLinkClass}
                    aria-label="Switch to Portuguese"
                  >
                    PT
                  </Link>
                  <Link 
                    to={getPathInLanguage("es")} 
                    className={langLinkClass}
                    aria-label="Switch to Spanish"
                  >
                    ES
                  </Link>
                </motion.div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="bg-white text-[#1A3554] h-11 w-11 p-0 rounded-full focus-outline touch-target">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85%] bg-white p-0">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b border-[#6CAAD9]/20">
                <Link 
                  to={`/${language}`} 
                  className="text-xl font-bold text-[#6CAAD9]"
                  onClick={closeSheet}
                  aria-label="Home"
                >
                  EK
                </Link>
                <Button 
                  size="icon" 
                  variant="outline" 
                  className="bg-white text-[#1A3554] h-10 w-10 p-0 rounded-full"
                  onClick={closeSheet}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="flex-1 overflow-auto py-2"
              >
                <nav className="flex flex-col">
                  <Link 
                    to={`/${language}`} 
                    className={mobileLinkClass}
                    onClick={closeSheet}
                  >
                    {navigationContent[language].home}
                  </Link>
                  
                  <p className={sectionHeaderClass}>
                    {navigationContent[language].services}
                  </p>
                  <Link 
                    to={`/${language}/media-buying`} 
                    className={mobileLinkClass}
                    onClick={closeSheet}
                  >
                    {navigationContent[language].mediaBuying}
                  </Link>
                  <Link 
                    to={`/${language}/automation-ai`} 
                    className={mobileLinkClass}
                    onClick={closeSheet}
                  >
                    {navigationContent[language].automation}
                  </Link>
                  
                  <p className={sectionHeaderClass}>
                    {navigationContent[language].casesPortfolio}
                  </p>
                  <Link 
                    to={`/${language}/cases/media-buying`} 
                    className={mobileLinkClass}
                    onClick={closeSheet}
                  >
                    {navigationContent[language].mediaPaidCases}
                  </Link>
                  <Link 
                    to={`/${language}/portfolio/automation-ai`} 
                    className={mobileLinkClass}
                    onClick={closeSheet}
                  >
                    {navigationContent[language].automationCases}
                  </Link>
                  
                  <Link 
                    to={`/${language}/about`} 
                    className={mobileLinkClass}
                    onClick={closeSheet}
                  >
                    {navigationContent[language].about}
                  </Link>
                </nav>
              </motion.div>
              
              <div className="p-4 border-t border-[#6CAAD9]/20">
                <Link 
                  to={`/${language}/contact`}
                  onClick={closeSheet}
                >
                  <Button className="w-full bg-[#6CAAD9] hover:bg-[#5a9bcd] text-white font-medium h-12 focus-outline">
                    {navigationContent[language].contact}
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
