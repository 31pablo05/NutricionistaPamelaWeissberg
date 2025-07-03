// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import QuienSoy from './pages/QuienSoy';
import Recetario from './pages/Recetarios';
import TurnosOnline from './pages/TurnosOnline';
import WhatsAppButton from './components/common/WhatsAppButton';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="App min-h-screen flex flex-col overflow-x-hidden">
          <Navbar />
          <main className="flex-grow overflow-x-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/quien-soy" element={<QuienSoy />} />
              <Route path="/recetario" element={<Recetario />} />
              <Route path="/turnos-online" element={<TurnosOnline />} />
            </Routes>
          </main>
          <WhatsAppButton /> 
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;