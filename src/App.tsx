import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import LanguageLayout from "./components/LanguageLayout";
import Index from "./pages/Index";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import GDPR from "./pages/GDPR";
import NotFound from "./pages/NotFound";
import WhatsAppFAB from "./components/WhatsAppFAB";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsAppFAB />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          {/* Redirect root to /en */}
          <Route path="/" element={<Navigate to="/en" replace />} />
          
          {/* Legacy routes without lang prefix — redirect to /en */}
          <Route path="/privacy-policy" element={<Navigate to="/en/privacy-policy" replace />} />
          <Route path="/terms-of-service" element={<Navigate to="/en/terms-of-service" replace />} />
          <Route path="/cookie-policy" element={<Navigate to="/en/cookie-policy" replace />} />
          <Route path="/gdpr" element={<Navigate to="/en/gdpr" replace />} />

          {/* Language-prefixed routes */}
          <Route path="/:lang" element={<LanguageLayout />}>
            <Route index element={<Index />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="terms-of-service" element={<TermsOfService />} />
            <Route path="cookie-policy" element={<CookiePolicy />} />
            <Route path="gdpr" element={<GDPR />} />
          </Route>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
