import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Training from "./pages/Training";
import Gallery from "./pages/Gallery";
import RPC from "./pages/RPC";
import DGCA from "./pages/DGCA";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import PageLayout from "@/components/PageLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageLayout><Index /></PageLayout>} />
          <Route path="/about" element={<PageLayout><About /></PageLayout>} />
          <Route path="/training" element={<PageLayout><Training /></PageLayout>} />
          <Route path="/gallery" element={<PageLayout><Gallery /></PageLayout>} />
          <Route path="/rpc" element={<PageLayout><RPC /></PageLayout>} />
          <Route path="/dgca" element={<PageLayout><DGCA /></PageLayout>} />
          <Route path="/contact" element={<PageLayout><Contact /></PageLayout>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<PageLayout><NotFound /></PageLayout>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
