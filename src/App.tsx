import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CulturaAgil from "./pages/CulturaAgil";
import EnterpriseArchitecture from "./pages/EnterpriseArchitecture";
import ArquiteturaSolucoes from "./pages/ArquiteturaSolucoes";
import EngenhariaSoftware from "./pages/EngenhariaSoftware";
import CloudComputing from "./pages/CloudComputing";
import RPA from "./pages/RPA";
import InteligenciaArtificial from "./pages/InteligenciaArtificial";
import AgentesIA from "./pages/AgentesIA";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cultura-agil" element={<CulturaAgil />} />
          <Route path="/enterprise-architecture" element={<EnterpriseArchitecture />} />
          <Route path="/arquitetura-solucoes" element={<ArquiteturaSolucoes />} />
          <Route path="/engenharia-software" element={<EngenhariaSoftware />} />
          <Route path="/cloud-computing" element={<CloudComputing />} />
          <Route path="/rpa" element={<RPA />} />
          <Route path="/inteligencia-artificial" element={<InteligenciaArtificial />} />
          <Route path="/agentes-ia" element={<AgentesIA />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
