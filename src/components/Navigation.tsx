
import { useNavigationLanguage } from "@/hooks/useNavigationLanguage";
import { DesktopNavigation } from "./navigation/DesktopNavigation";
import { MobileNavigation } from "./navigation/MobileNavigation";
import { motion } from "framer-motion";

const Navigation = () => {
  const { language, getPathInLanguage } = useNavigationLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <DesktopNavigation language={language} getPathInLanguage={getPathInLanguage} />
      <MobileNavigation language={language} getPathInLanguage={getPathInLanguage} />
      {/* Spacing for the fixed navbar */}
      <div className="h-16 md:h-20" />
    </motion.div>
  );
};

export default Navigation;
