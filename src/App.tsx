
import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";

// Páginas em inglês
import IndexEn from "./pages/en/Index";
import MediaBuyingEn from "./pages/en/MediaBuying";
import AutomationAIEn from "./pages/en/AutomationAI";
import AboutEn from "./pages/en/About";
import ContactEn from "./pages/en/Contact";

// Páginas em português
import IndexPt from "./pages/pt/Index";
import MediaBuyingPt from "./pages/pt/MediaBuying";
import AutomationAIPt from "./pages/pt/AutomationAI";
import AboutPt from "./pages/pt/About";
import ContactPt from "./pages/pt/Contact";

// Páginas em espanhol
import IndexEs from "./pages/es/Index";
import MediaBuyingEs from "./pages/es/MediaBuying";
import AutomationAIEs from "./pages/es/AutomationAI";
import AboutEs from "./pages/es/About";
import ContactEs from "./pages/es/Contact";

import NotFound from "./pages/NotFound";

// Create a client
const queryClient = new QueryClient();

const LanguageRedirect = () => {
  const navigate = useNavigate();
  
  const { data: location } = useQuery({
    queryKey: ['userLocation'],
    queryFn: async () => {
      const response = await fetch('https://api.ipapi.com/check?access_key=4ddc86bc520fe4e9cda58050ba47beb3');
      const data = await response.json();
      return data;
    },
    enabled: window.location.pathname === '/',
  });

  useEffect(() => {
    if (location) {
      const country = location.country_code?.toLowerCase();
      if (country === 'br' || country === 'pt') {
        navigate('/pt', { replace: true });
      } else if (country === 'es' || country === 'mx' || country === 'ar' || country === 'co' || country === 'pe' || country === 'cl' || country === 've') {
        navigate('/es', { replace: true });
      } else {
        navigate('/en', { replace: true });
      }
    }
  }, [location, navigate]);

  return null;
};

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
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
              
              {/* Rotas em português */}
              <Route path="/pt" element={<IndexPt />} />
              <Route path="/pt/media-buying" element={<MediaBuyingPt />} />
              <Route path="/pt/automation-ai" element={<AutomationAIPt />} />
              <Route path="/pt/about" element={<AboutPt />} />
              <Route path="/pt/contact" element={<ContactPt />} />
              
              {/* Rotas em espanhol */}
              <Route path="/es" element={<IndexEs />} />
              <Route path="/es/media-buying" element={<MediaBuyingEs />} />
              <Route path="/es/automation-ai" element={<AutomationAIEs />} />
              <Route path="/es/about" element={<AboutEs />} />
              <Route path="/es/contact" element={<ContactEs />} />
              
              {/* Página 404 */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
