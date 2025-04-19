
import { useNavigationLanguage } from "@/hooks/useNavigationLanguage";
import { DesktopNavigation } from "./navigation/DesktopNavigation";
import { MobileNavigation } from "./navigation/MobileNavigation";

const Navigation = () => {
  const { language, getPathInLanguage } = useNavigationLanguage();

  return (
    <>
      <DesktopNavigation language={language} getPathInLanguage={getPathInLanguage} />
      <MobileNavigation language={language} getPathInLanguage={getPathInLanguage} />
      {/* Spacing for the fixed navbar */}
      <div className="h-16" />
    </>
  );
};

export default Navigation;
