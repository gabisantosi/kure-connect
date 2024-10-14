import React from 'react';
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SaudeDigital from "./pages/SaudeDigital";
import GestaoProjetos from "./pages/GestaoProjetos";
import Cursos from "./pages/Cursos";
import MateriaisEducativos from "./pages/MateriaisEducativos";
import QuemSomos from "./pages/QuemSomos";
import Contato from "./pages/Contato";
import BlogPosts from "./components/BlogPosts";

const App = () => (
  <LanguageProvider>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/saude-digital" element={<SaudeDigital />} />
              <Route path="/gestao-de-projetos" element={<GestaoProjetos />} />
              <Route path="/cursos" element={<Cursos />} />
              <Route path="/materiais-educativos" element={<MateriaisEducativos />} />
              <Route path="/sobre-nos" element={<QuemSomos />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/blog" element={<BlogPosts />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </LanguageProvider>
);

export default App;