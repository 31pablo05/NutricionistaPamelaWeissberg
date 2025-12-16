// src/App.js
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';

// Lazy loading de páginas para mejor rendimiento
const Home = lazy(() => import('./pages/Home'));
const QuienSoy = lazy(() => import('./pages/QuienSoy'));
const Recetario = lazy(() => import('./pages/Recetarios'));
const TurnosOnline = lazy(() => import('./pages/TurnosOnline'));

// Componente de carga mientras se cargan las páginas
const PageLoader = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#e3a0ef]"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <Router
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <ScrollToTop />
        <div className="App min-h-screen flex flex-col overflow-x-hidden">
          <Navbar />
          <main className="flex-grow overflow-x-hidden">
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quien-soy" element={<QuienSoy />} />
                <Route path="/recetario" element={<Recetario />} />
                <Route path="/turnos-online" element={<TurnosOnline />} />
              </Routes>
            </Suspense>
          </main>
          <WhatsAppButton /> 
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;