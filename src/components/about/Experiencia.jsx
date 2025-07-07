import React, { useState, useEffect, useRef } from 'react';
import { FaGraduationCap, FaMedal, FaBrain } from 'react-icons/fa';

const capacitaciones = [
  {
    title: "Estudió Lic. Nutricion en UCALP",
    institution: "Universidad Católica de La Plata UCALP",
    year: 2017,
    description: "Especialización en el tratamiento nutricional de patologías clínicas y metabólicas.",
    image: "/images/diplomado_nutricion.jpg",
    icon: <FaGraduationCap className="text-2xl text-[#ee2b7a]" />
  },
  {
    title: "Certificación en Nutrición Deportiva",
    institution: "Escuela XYZ",
    year: 2020,
    description: "Formación en nutrición para mejorar el rendimiento deportivo y la recuperación muscular.",
    image: "/images/nutricion_deportiva.jpg",
    icon: <FaMedal className="text-2xl text-[#ee5e17]" />
  },
  {
    title: "Curso de Psicología de la Alimentación",
    institution: "Instituto DEF",
    year: 2019,
    description: "Estudio del impacto psicológico en la alimentación y hábitos saludables.",
    image: "/images/psicologia_alimentacion.jpg",
    icon: <FaBrain className="text-2xl text-[#dd9fea]" />
  },
];

// Hook personalizado para detectar cuando un elemento está visible
const useIntersectionObserver = (triggerOnce = true, threshold = 0.1) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (triggerOnce) {
          setHasIntersected(true);
        }
      } else {
        if (!triggerOnce) {
          setIsIntersecting(false);
        }
      }
    }, {
      threshold: threshold
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [triggerOnce, threshold]);

  return {
    ref,
    inView: triggerOnce ? hasIntersected || isIntersecting : isIntersecting
  };
};


// Utilidades para animaciones
const ANIMATION_DELAYS = [0, 120, 240, 360, 480];

const Experiencia = () => {
  const { ref: refFormacion, inView: inViewFormacion } = useIntersectionObserver(true, 0.3);
  const { ref: refVocacion, inView: inViewVocacion } = useIntersectionObserver(true, 0.3);
  const [openIndex, setOpenIndex] = useState(null);
  const handleToggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <div className="px-2 md:px-8 py-8 space-y-16">
      {/* Timeline Moderno */}
      <section
        className={`transition-all duration-700 ease-out opacity-0 ${inViewFormacion ? 'opacity-100 translate-y-0' : 'translate-y-8'}`}
        ref={refFormacion}
      >
        <h3 className="text-3xl font-extrabold text-[#ee2b7a] mb-8 text-center tracking-tight">
          Formación Académica y Capacitaciones
        </h3>
        <div className="relative max-w-2xl mx-auto">
          {/* Línea animada */}
          <div className={`absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#ee2b7a]/30 via-[#ee5e17]/20 to-[#dd9fea]/10 rounded-full transition-all duration-700 ${inViewFormacion ? 'scale-y-100 opacity-100' : 'scale-y-50 opacity-0'}`} aria-hidden="true" style={{transformOrigin:'top'}} />
          <ul className="space-y-10">
            {capacitaciones.map((cap, idx) => {
              // Alternar fondo
              const bgAlt = idx % 2 === 0 ? 'bg-white/90' : 'bg-[#fdf6f0]/90';
              // Badge de año
              const badge = (
                <span className="ml-2 px-2 py-0.5 rounded-full bg-[#ee5e17]/10 text-[#ee5e17] text-xs font-bold border border-[#ee5e17]/20 shadow-sm animate-bounce-slow">
                  {cap.year}
                </span>
              );
              // Animación de entrada
              const delay = ANIMATION_DELAYS[idx % ANIMATION_DELAYS.length];
              return (
                <li
                  key={idx}
                  className={`relative flex items-start group focus-within:ring-2 focus-within:ring-[#ee2b7a]/40 transition-all duration-700 ${inViewFormacion ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                  style={{ transitionDelay: `${delay}ms` }}
                >
                  {/* Icono animado */}
                  <div className="z-10 flex flex-col items-center mr-6">
                    <span className={`bg-white border-4 border-[#ee2b7a]/30 rounded-full shadow-lg p-2 mb-1 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300 ${openIndex === idx ? 'scale-125 rotate-12 shadow-pink-200' : ''}`}
                      aria-label="Icono de capacitación"
                    >
                      {cap.icon}
                    </span>
                    {idx < capacitaciones.length - 1 && (
                      <span className={`w-1 h-10 bg-gradient-to-b from-[#ee2b7a]/30 to-[#ee5e17]/10 transition-all duration-700 ${inViewFormacion ? 'scale-y-100 opacity-100' : 'scale-y-50 opacity-0'}`} style={{transformOrigin:'top'}} />
                    )}
                  </div>
                  {/* Card */}
                  <div
                    className={`flex-1 ${bgAlt} rounded-2xl shadow-xl border border-[#ee2b7a]/10 px-6 py-5 transition-all duration-300 cursor-pointer outline-none
                      ${openIndex === idx ? 'ring-2 ring-[#ee2b7a]/40 scale-[1.04] bg-[#fff7fa] shadow-2xl' : 'hover:scale-[1.01] hover:shadow-2xl'}
                      group-focus:ring-2 group-focus:ring-[#ee2b7a]/40
                    `}
                    onClick={() => handleToggle(idx)}
                    tabIndex={0}
                    role="button"
                    aria-expanded={openIndex === idx}
                    aria-label={`Ver detalles de ${cap.title}`}
                    onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && handleToggle(idx)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                      <span className="text-lg font-bold text-[#ee2b7a] flex items-center">
                        {cap.title}
                        {badge}
                      </span>
                      <span className="text-sm text-[#ee5e17] font-semibold">{cap.institution}</span>
                    </div>
                    {/* Detalle con animación de altura */}
                    <div className={`overflow-hidden transition-all duration-500 ${openIndex === idx ? 'max-h-40 mt-3 opacity-100' : 'max-h-0 opacity-0'}`}> 
                      <p className="text-gray-700 text-base mb-2">{cap.description}</p>
                      {cap.image && (
                        <img src={cap.image} alt={cap.title} className="rounded-lg shadow-md w-full max-h-40 object-cover" />
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Mi Vocación */}
      <section
        className={`relative overflow-hidden transition-all duration-700 ease-out opacity-0 ${inViewVocacion ? 'opacity-100 translate-y-0' : 'translate-y-8'}`}
        ref={refVocacion}
        aria-labelledby="vocacion-title"
      >
        {/* Fondo decorativo sutil */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-[#fff7f0] via-[#fbeaf7] to-[#f7faff] opacity-80" />
        <div className="relative z-10 flex flex-col items-center px-2 py-8 md:py-12">
          {/* Icono temático animado */}
          <span className="mb-2 animate-bounce-slow" role="img" aria-label="Vocación y nutrición">
            <svg width="48" height="48" fill="none" viewBox="0 0 48 48" className="drop-shadow-md">
              <circle cx="24" cy="24" r="22" fill="#ee5e17" fillOpacity="0.13" />
              <path d="M24 34c-6-4-10-8-10-13a10 10 0 1120 0c0 5-4 9-10 13z" fill="#ee2b7a" fillOpacity="0.7" />
              <circle cx="24" cy="21" r="4" fill="#fff" />
            </svg>
          </span>
          {/* Título */}
          <h3 id="vocacion-title" className="text-2xl md:text-3xl font-extrabold text-[#ee5e17] mb-2 text-center tracking-tight drop-shadow-sm">
            Mi Vocación como Nutricionista
          </h3>
          {/* Separador decorativo */}
          <div className="w-16 h-1 rounded-full bg-gradient-to-r from-[#ee2b7a] via-[#ee5e17] to-[#dd9fea] mb-4" />
          {/* Texto con palabras clave resaltadas */}
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center mx-auto font-light" style={{maxWidth: '700px'}}>
            Mi <span className="font-semibold text-[#ee2b7a]">pasión</span> por la nutrición va más allá de la ciencia. Me motiva profundamente poder <span className="font-semibold text-[#ee5e17]">ayudar a las personas</span> a mejorar su relación con la comida y a llevar una <span className="font-semibold text-[#dd9fea]">vida más saludable</span>.<br className="hidden md:inline" />
            Creo que todos pueden aprender a <span className="font-semibold text-[#ee2b7a]">disfrutar de una alimentación equilibrada</span> sin restricciones extremas, y mi objetivo es <span className="font-semibold text-[#ee5e17]">guiar a mis pacientes</span> a lograrlo de forma sostenible.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Experiencia;
