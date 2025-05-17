
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Globe } from "lucide-react";
import { navigationContent } from "./translations";
import type { Language } from "@/hooks/useNavigationLanguage";

interface MobileNavigationProps {
  language: Language;
  getPathInLanguage: (lang: Language) => string;
}

export const MobileNavigation = ({ language, getPathInLanguage }: MobileNavigationProps) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  
  const closeSheet = () => setIsSheetOpen(false);

  // Common mobile menu link class
  const mobileLinkClass = "p-3 hover:bg-[#6CAAD9] rounded text-[#1A3554] hover:text-white font-medium transition-colors";
  // Common section header class
  const sectionHeaderClass = "px-3 pt-4 text-sm font-semibold text-gray-500";
  // Language selector link class
  const langLinkClass = "block p-2 hover:bg-[#6CAAD9] rounded text-[#1A3554] hover:text-white font-medium transition-colors";

  return (
    <div className="md:hidden flex items-center justify-between p-4 bg-white fixed top-0 left-0 right-0 z-50 shadow-sm">
      <Link to={`/${language}`} className="text-xl font-bold text-[#6CAAD9]">
        EK
      </Link>
      
      <div className="flex items-center gap-3">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="hover:text-[#6CAAD9] text-[#1A3554] bg-white h-9 w-9 p-0 flex items-center justify-center">
                <Globe className="h-5 w-5" />
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="p-2 w-[100px] bg-white z-50">
                  <Link 
                    to={getPathInLanguage("en")} 
                    className={langLinkClass}
                  >
                    EN
                  </Link>
                  <Link 
                    to={getPathInLanguage("pt")} 
                    className={langLinkClass}
                  >
                    PT
                  </Link>
                  <Link 
                    to={getPathInLanguage("es")} 
                    className={langLinkClass}
                  >
                    ES
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="outline" className="bg-white text-[#1A3554] h-9 w-9 p-0">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[80%] bg-white">
            <div className="flex flex-col gap-4 pt-10">
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
              <Link 
                to={`/${language}/contact`} 
                className="mt-4"
                onClick={closeSheet}
              >
                <Button className="w-full bg-[#6CAAD9] hover:bg-[#6CAAD9] text-white font-medium">
                  {navigationContent[language].contact}
                </Button>
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
