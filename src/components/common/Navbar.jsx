import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUser, FaBook, FaCalendarAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    // Navbar Container - Mejorado para responsive design
    <nav className="backdrop-blur-xl bg-white/30 bg-gradient-to-r from-[#e1a1ed]/70 via-[#f3e8ff]/70 to-[#ee5e17]/70 fixed top-0 left-0 w-full shadow-2xl z-50 py-2 md:py-3 px-3 md:px-6 border-b-2 border-white/40 rounded-b-3xl animate-fade-in-down">
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo mejorado con animaciones */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#ee2b7a] via-[#fe9f5d] to-[#e1a1ed] rounded-2xl blur opacity-60 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
            <div className="relative flex items-center bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border-2 border-white/70 px-2 py-2 md:px-3 md:py-2 transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl">
              <NavLink to="/" className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-[#ee2b7a]/20 to-[#fe9f5d]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img
                  src="/assets/logos/logo2transp.webp"
                  alt="Nutricionista Pamela Weissberg"
                  className="relative rounded-xl h-10 w-auto md:h-12 md:w-auto transition-all duration-300 group-hover:scale-110 cursor-pointer border border-[#ee2b7a]/20 shadow-lg"
                />
                {/* Efecto de brillo animado */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </NavLink>
              {/* Texto del logo en pantallas medianas y grandes */}
              <div className="hidden sm:block ml-3">
                <h1 className="text-sm md:text-base font-bold bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] bg-clip-text text-transparent">
                  Pamela Weissberg
                </h1>
                <p className="text-xs text-gray-600 font-medium">Nutricionista</p>
              </div>
            </div>
          </div>

          {/* Desktop Menu - Mejorado para mejor responsividad */}
          <ul className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-white font-medium bg-white/30 backdrop-blur-lg rounded-full px-3 xl:px-4 py-2 shadow-lg border border-white/40">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-3 xl:px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/50 hover:backdrop-blur-md hover:shadow-md hover:text-[#fe9f5d] focus:outline-none focus:ring-2 focus:ring-[#ee2b7a] text-sm xl:text-base flex items-center ${
                    isActive ? 'bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] text-white shadow-lg transform scale-105' : 'text-[#4b0082] hover:scale-105'
                  }`
                }
              >
                <FaHome className="mr-1 xl:mr-2 text-sm" /> 
                <span className="hidden xl:inline">Home</span>
                <span className="xl:hidden">Inicio</span>
              </NavLink>
            </li>
            <li>
              <span className="h-6 w-0.5 bg-gradient-to-b from-[#ee2b7a]/40 to-[#fe9f5d]/40 mx-1 rounded-full" />
            </li>
            <li>
              <NavLink
                to="/quien-soy"
                className={({ isActive }) =>
                  `px-3 xl:px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/50 hover:backdrop-blur-md hover:shadow-md hover:text-[#fe9f5d] focus:outline-none focus:ring-2 focus:ring-[#ee2b7a] text-sm xl:text-base flex items-center ${
                    isActive ? 'bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] text-white shadow-lg transform scale-105' : 'text-[#4b0082] hover:scale-105'
                  }`
                }
              >
                <FaUser className="mr-1 xl:mr-2 text-sm" /> 
                <span className="hidden xl:inline">Quién Soy</span>
                <span className="xl:hidden">Sobre Mí</span>
              </NavLink>
            </li>
            <li>
              <span className="h-6 w-0.5 bg-gradient-to-b from-[#ee2b7a]/40 to-[#fe9f5d]/40 mx-1 rounded-full" />
            </li>
            <li>
              <NavLink
                to="/recetario"
                className={({ isActive }) =>
                  `px-3 xl:px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/50 hover:backdrop-blur-md hover:shadow-md hover:text-[#fe9f5d] focus:outline-none focus:ring-2 focus:ring-[#ee2b7a] text-sm xl:text-base flex items-center ${
                    isActive ? 'bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] text-white shadow-lg transform scale-105' : 'text-[#4b0082] hover:scale-105'
                  }`
                }
              >
                <FaBook className="mr-1 xl:mr-2 text-sm" /> 
                <span>Recetario</span>
              </NavLink>
            </li>
            <li>
              <span className="h-6 w-0.5 bg-gradient-to-b from-[#ee2b7a]/40 to-[#fe9f5d]/40 mx-1 rounded-full" />
            </li>
            <li>
              <NavLink
                to="/turnos-online"
                className={({ isActive }) =>
                  `px-3 xl:px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/50 hover:backdrop-blur-md hover:shadow-md hover:text-[#fe9f5d] focus:outline-none focus:ring-2 focus:ring-[#ee2b7a] text-sm xl:text-base flex items-center ${
                    isActive ? 'bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] text-white shadow-lg transform scale-105' : 'text-[#4b0082] hover:scale-105'
                  }`
                }
              >
                <FaCalendarAlt className="mr-1 xl:mr-2 text-sm" /> 
                <span className="hidden xl:inline">Turnos Online</span>
                <span className="xl:hidden">Turnos</span>
              </NavLink>
            </li>
          </ul>

          {/* Mobile Menu Button - Mejorado */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="relative w-11 h-11 md:w-12 md:h-12 flex flex-col items-center justify-center rounded-full bg-white/50 backdrop-blur-lg border-2 border-white/60 shadow-xl focus:outline-none focus:ring-2 focus:ring-[#ee2b7a] transition-all duration-300 group hover:bg-white/70 hover:scale-105 hover:shadow-2xl"
              aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={isMenuOpen}
            >
              {/* Efectos de fondo animados */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#ee2b7a]/20 to-[#fe9f5d]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <span
                className={`block w-6 h-0.5 md:w-7 md:h-1 rounded-full bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] mb-1 transition-all duration-300 ${
                  isMenuOpen ? 'rotate-45 translate-y-1.5 md:translate-y-2' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 md:w-7 md:h-1 rounded-full bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] mb-1 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              ></span>
              <span
                className={`block w-6 h-0.5 md:w-7 md:h-1 rounded-full bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] transition-all duration-300 ${
                  isMenuOpen ? '-rotate-45 -translate-y-1.5 md:-translate-y-2' : ''
                }`}
              ></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Mejorado */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'block animate-fade-in-down' : 'hidden'
          } absolute top-full left-0 w-full z-40 mt-2`}
        >
          <div className="mx-3 md:mx-4 rounded-3xl bg-white/90 backdrop-blur-2xl shadow-2xl border-2 border-white/70 p-4 md:p-6 overflow-hidden">
            {/* Fondo decorativo animado */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#ee2b7a] via-[#fe9f5d] to-[#e1a1ed] animate-pulse"></div>
            
            <ul className="text-[#4b0082] font-semibold text-base md:text-lg space-y-3">
              <li className="transform transition-all duration-300 hover:scale-105">
                <NavLink
                  to="/"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block p-3 md:p-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#ee2b7a]/80 hover:to-[#fe9f5d]/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ee2b7a] hover:shadow-lg hover:transform hover:scale-105 ${
                      isActive ? 'bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] text-white shadow-lg transform scale-105' : 'text-[#4b0082] hover:bg-gradient-to-r hover:from-[#ee2b7a]/10 hover:to-[#fe9f5d]/10'
                    }`
                  }
                >
                  <FaHome className="inline mr-3 text-lg" /> Home
                </NavLink>
              </li>
              <li className="transform transition-all duration-300 hover:scale-105">
                <NavLink
                  to="/quien-soy"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block p-3 md:p-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#ee2b7a]/80 hover:to-[#fe9f5d]/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ee2b7a] hover:shadow-lg hover:transform hover:scale-105 ${
                      isActive ? 'bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] text-white shadow-lg transform scale-105' : 'text-[#4b0082] hover:bg-gradient-to-r hover:from-[#ee2b7a]/10 hover:to-[#fe9f5d]/10'
                    }`
                  }
                >
                  <FaUser className="inline mr-3 text-lg" /> Quién Soy
                </NavLink>
              </li>
              <li className="transform transition-all duration-300 hover:scale-105">
                <NavLink
                  to="/recetario"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block p-3 md:p-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#ee2b7a]/80 hover:to-[#fe9f5d]/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ee2b7a] hover:shadow-lg hover:transform hover:scale-105 ${
                      isActive ? 'bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] text-white shadow-lg transform scale-105' : 'text-[#4b0082] hover:bg-gradient-to-r hover:from-[#ee2b7a]/10 hover:to-[#fe9f5d]/10'
                    }`
                  }
                >
                  <FaBook className="inline mr-3 text-lg" /> Recetario
                </NavLink>
              </li>
              <li className="transform transition-all duration-300 hover:scale-105">
                <NavLink
                  to="/turnos-online"
                  onClick={toggleMenu}
                  className={({ isActive }) =>
                    `block p-3 md:p-4 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-[#ee2b7a]/80 hover:to-[#fe9f5d]/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ee2b7a] hover:shadow-lg hover:transform hover:scale-105 ${
                      isActive ? 'bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] text-white shadow-lg transform scale-105' : 'text-[#4b0082] hover:bg-gradient-to-r hover:from-[#ee2b7a]/10 hover:to-[#fe9f5d]/10'
                    }`
                  }
                >
                  <FaCalendarAlt className="inline mr-3 text-lg" /> Turnos Online
                </NavLink>
              </li>
            </ul>
            
            {/* Información adicional en móvil */}
            <div className="mt-6 pt-4 border-t border-gray-200/50">
              <p className="text-center text-sm text-gray-600">
                <span className="font-semibold bg-gradient-to-r from-[#ee2b7a] to-[#fe9f5d] bg-clip-text text-transparent">
                  Nutricionista Pamela Weissberg
                </span>
              </p>
            </div>
          </div>
        </div>
    </nav>
  );
};

export default Navbar;
