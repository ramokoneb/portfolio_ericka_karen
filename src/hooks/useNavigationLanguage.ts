
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

  return { language, getPathInLanguage };
};
