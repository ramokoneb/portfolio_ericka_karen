
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";

// Páginas em inglês
import IndexEn from "./pages/en/Index";
import MediaBuyingEn from "./pages/en/MediaBuying";
import AutomationAIEn from "./pages/en/AutomationAI";
import AboutEn from "./pages/en/About";
import ContactEn from "./pages/en/Contact";
import PortfolioEn from "./pages/en/Portfolio";
import CasesEn from "./pages/en/Cases";

// Páginas em português
import IndexPt from "./pages/pt/Index";
import MediaBuyingPt from "./pages/pt/MediaBuying";
import AutomationAIPt from "./pages/pt/AutomationAI";
import AboutPt from "./pages/pt/About";
import ContactPt from "./pages/pt/Contact";
import PortfolioPt from "./pages/pt/Portfolio";
import CasesPt from "./pages/pt/Cases";

// Páginas em espanhol
import IndexEs from "./pages/es/Index";
import MediaBuyingEs from "./pages/es/MediaBuying";
import AutomationAIEs from "./pages/es/AutomationAI";
import AboutEs from "./pages/es/About";
import ContactEs from "./pages/es/Contact";
import PortfolioEs from "./pages/es/Portfolio";
import CasesEs from "./pages/es/Cases";

import NotFound from "./pages/NotFound";

// Define the LanguageRedirect component separately
const LanguageRedirect = () => {
  const navigate = useNavigate();
  
  React.useEffect(() => {
    const checkUserLocation = async () => {
      try {
        const response = await fetch('https://api.ipapi.com/check?access_key=4ddc86bc520fe4e9cda58050ba47beb3');
        const data = await response.json();
        
        const country = data.country_code?.toLowerCase();
        if (country === 'br' || country === 'pt') {
          navigate('/pt', { replace: true });
        } else if (country === 'es' || country === 'mx' || country === 'ar' || country === 'co' || country === 'pe' || country === 'cl' || country === 've') {
          navigate('/es', { replace: true });
        } else {
          navigate('/en', { replace: true });
        }
      } catch (error) {
        console.error('Error detecting location:', error);
        navigate('/en', { replace: true }); // Default to English on error
      }
    };
    
    if (window.location.pathname === '/') {
      checkUserLocation();
    }
  }, [navigate]);

  return null;
};

// Create QueryClient outside the component to avoid re-creation on every render
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
          <meta name="description" content="Ericka Karen - FullStack Marketer" />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navigation />
            <Routes>
              {/* IP-based language redirection */}
              <Route path="/" element={<LanguageRedirect />} />
              
              {/* Redirecionamento da raiz para a versão em inglês */}
              <Route path="/" element={<Navigate to="/en" replace />} />
              
              {/* Rotas em inglês */}
              <Route path="/en" element={<IndexEn />} />
              <Route path="/en/media-buying" element={<MediaBuyingEn />} />
              <Route path="/en/automation-ai" element={<AutomationAIEn />} />
              <Route path="/en/about" element={<AboutEn />} />
              <Route path="/en/contact" element={<ContactEn />} />
              <Route path="/en/portfolio/automation-ai" element={<PortfolioEn />} />
              <Route path="/en/cases/media-buying" element={<CasesEn />} />
              
              {/* Rotas em português */}
              <Route path="/pt" element={<IndexPt />} />
              <Route path="/pt/media-buying" element={<MediaBuyingPt />} />
              <Route path="/pt/automation-ai" element={<AutomationAIPt />} />
              <Route path="/pt/about" element={<AboutPt />} />
              <Route path="/pt/contact" element={<ContactPt />} />
              <Route path="/pt/portfolio/automation-ai" element={<PortfolioPt />} />
              <Route path="/pt/cases/media-buying" element={<CasesPt />} />
              
              {/* Rotas em espanhol */}
              <Route path="/es" element={<IndexEs />} />
              <Route path="/es/media-buying" element={<MediaBuyingEs />} />
              <Route path="/es/automation-ai" element={<AutomationAIEs />} />
              <Route path="/es/about" element={<AboutEs />} />
              <Route path="/es/contact" element={<ContactEs />} />
              <Route path="/es/portfolio/automation-ai" element={<PortfolioEs />} />
              <Route path="/es/cases/media-buying" element={<CasesEs />} />
              
              {/* Handle old routes for backward compatibility */}
              <Route path="/en/portfolio" element={<Navigate to="/en/portfolio/automation-ai" replace />} />
              <Route path="/en/cases" element={<Navigate to="/en/cases/media-buying" replace />} />
              <Route path="/pt/portfolio" element={<Navigate to="/pt/portfolio/automation-ai" replace />} />
              <Route path="/pt/cases" element={<Navigate to="/pt/cases/media-buying" replace />} />
              <Route path="/es/portfolio" element={<Navigate to="/es/portfolio/automation-ai" replace />} />
              <Route path="/es/cases" element={<Navigate to="/es/cases/media-buying" replace />} />
              
              {/* Página 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
