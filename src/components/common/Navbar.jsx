import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaBook, FaCalendarAlt } from 'react-icons/fa';

const navLinks = [
  { to: '/', label: 'Inicio', icon: <FaHome />, desktop: 'Home' },
  { to: '/quien-soy', label: 'Sobre Mí', icon: <FaUser />, desktop: 'Quién Soy' },
  { to: '/recetario', label: 'Recetario', icon: <FaBook />, desktop: 'Recetario' },
  { to: '/turnos-online', label: 'Turnos', icon: <FaCalendarAlt />, desktop: 'Turnos Online' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((v) => !v);

  // Cierra el menú móvil al cambiar a desktop
  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 bg-gradient-to-r from-[#e1a1ed]/80 via-[#f3e8ff]/80 to-[#ee5e17]/80 backdrop-blur-2xl shadow-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 h-16 md:h-20">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2 group select-none focus:outline-none">
          <div className="relative flex items-center justify-center">
            {/* Solo logo, sin fondo ni marco */}
            <img
              src="/assets/svgLogo/logotransp.svg"
              alt="Nutricionista Pamela Weissberg"
              className="relative z-10 h-20 w-20 md:h-28 md:w-28 object-contain drop-shadow-[0_2px_12px_rgba(238,43,122,0.25)] group-hover:scale-115 group-focus:scale-115 transition-transform duration-300"
              draggable="false"
              style={{ background: 'transparent', border: 'none', filter: 'drop-shadow(0 0 8px #ee2b7a66) drop-shadow(0 0 2px #fff)' }}
            />
          </div>
          
        </NavLink>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-2 bg-white/60 backdrop-blur-xl rounded-full px-4 py-2 shadow border border-white/40">
          {navLinks.map((link, idx) => (
            <li key={link.to} className="relative">
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ee2b7a] text-base ${
                    isActive
                      ? 'bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] text-white shadow-lg scale-105'
                      : 'text-[#4b0082] hover:bg-white/80 hover:text-[#ee2b7a] hover:scale-105'
                  }`
                }
              >
                <span className="text-xl">{link.icon}</span>
                <span className="hidden xl:inline">{link.desktop}</span>
                <span className="xl:hidden">{link.label}</span>
              </NavLink>
              {idx < navLinks.length - 1 && (
                <span className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 h-6 w-0.5 bg-gradient-to-b from-[#ee2b7a]/40 to-[#fe9f5d]/40 rounded-full" />
              )}
            </li>
          ))}
        </ul>

        {/* Botón hamburguesa */}
        <button
          className="lg:hidden relative w-12 h-12 flex flex-col items-center justify-center rounded-full bg-white/70 backdrop-blur-xl border border-white/50 shadow-xl focus:outline-none focus:ring-2 focus:ring-[#ee2b7a] transition-all duration-300 group hover:bg-white/90 hover:scale-105"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
        >
          <span className={`block absolute left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-6' : 'top-4'}`}></span>
          <span className={`block absolute left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'top-6'}`}></span>
          <span className={`block absolute left-3 right-3 h-0.5 rounded-full bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-6' : 'top-8'}`}></span>
        </button>
      </div>

      {/* Mobile menu sheet mejorado */}
      <div
        className={`lg:hidden fixed left-0 top-0 w-full h-screen bg-black/40 z-40 transition-all duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={toggleMenu}
        aria-hidden={!isMenuOpen}
      >
        <nav
          className={`absolute top-0 left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl rounded-b-3xl border-b-2 border-white/60 transition-transform duration-300 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}
          style={{ minHeight: 'min(80vh, 480px)' }}
          onClick={e => e.stopPropagation()}
        >
          {/* Botón cerrar (cruz) */}
          <button
            onClick={toggleMenu}
            aria-label="Cerrar menú"
            className="absolute top-4 right-4 z-20 w-11 h-11 flex items-center justify-center rounded-full bg-white/80 hover:bg-white/100 shadow-lg border border-white/60 focus:outline-none focus:ring-2 focus:ring-[#ee2b7a] transition-all duration-200"
          >
            <span className="block w-7 h-0.5 bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] rounded-full rotate-45 absolute"></span>
            <span className="block w-7 h-0.5 bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] rounded-full -rotate-45 absolute"></span>
          </button>
          <div className="flex flex-col items-center gap-2 py-10 px-6">
            <ul className="w-full flex flex-col gap-2 mt-4">
              {navLinks.map(link => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    onClick={toggleMenu}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-5 py-4 rounded-2xl text-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#ee2b7a] w-full ${
                        isActive
                          ? 'bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] text-white shadow-lg scale-105'
                          : 'text-[#4b0082] hover:bg-gradient-to-r hover:from-[#ee2b7a]/80 hover:to-[#fe9f5d]/80 hover:text-white hover:scale-105'
                      }`
                    }
                  >
                    <span className="text-2xl">{link.icon}</span>
                    <span>{link.desktop}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mt-8 text-center text-sm text-gray-500">
              <span className="font-semibold bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] bg-clip-text text-transparent">Nutricionista Pamela Weissberg</span>
            </div>
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
