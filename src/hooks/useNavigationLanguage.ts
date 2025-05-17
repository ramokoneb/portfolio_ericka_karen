
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export type Language = "en" | "pt" | "es";

export const useNavigationLanguage = () => {
  const location = useLocation();
  const [language, setLanguage] = useState<Language>("en");
  
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
  
  const getPathInLanguage = (targetLang: Language) => {
    const path = location.pathname;
    const currentLang = path.startsWith("/pt") ? "pt" : path.startsWith("/es") ? "es" : "en";
    
    // For root paths (just language prefix)
    if (path === `/${currentLang}`) {
      return `/${targetLang}`;
    }
    
    // For the new case and portfolio paths with additional segments
    if (path.includes("/cases/") || path.includes("/portfolio/")) {
      const segments = path.split('/');
      segments[1] = targetLang; // Replace language segment
      return segments.join('/');
    }
    
    // For other paths
    const restOfPath = path.substring(3); // Remove current language prefix
    return `/${targetLang}${restOfPath}`;
  };

  return { language, getPathInLanguage };
};
