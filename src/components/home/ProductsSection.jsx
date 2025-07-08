import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: 0.2 * i,
      duration: 0.7,
      type: 'spring',
      stiffness: 120,
      damping: 18,
    },
  }),
  hover: {
    scale: 1.07,
    boxShadow: '0 8px 40px 0 rgba(236,72,153,0.18)',
    y: -8,
    transition: { type: 'spring', stiffness: 300, damping: 20 },
  },
};

const ProductsSection = () => {
  // IMC Calculator removida, no se usa modalOpen

  const cards = [
    {
      title: 'Planes de Nutrición Personalizados',
      description: 'Planes alimentarios adaptados a tus necesidades y objetivos, realizados por profesionales.',
    },
    {
      title: 'Atención Virtual',
      description: 'Consulta con nosotros desde cualquier lugar. Atención personalizada para ayudarte a alcanzar tus metas.',
    },
    {
      title: 'Educación Nutricional',
      description: 'Aprende cómo mejorar tu alimentación con talleres y cursos personalizados sobre nutrición saludable.',
    },
    {
      title: 'Suplementación Controlada',
      description: 'Conoce cómo integrar suplementos de forma segura y efectiva para potenciar tu salud.',
    },
  ];



  // Scroll helpers
  const scrollRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  // Detect overflow for arrows
  useEffect(() => {
    const handleScroll = () => {
      const el = scrollRef.current;
      if (!el) return;
      setShowLeft(el.scrollLeft > 10);
      setShowRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 10);
    };
    handleScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
    }
    return () => {
      if (el) el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Scroll with mouse wheel (horizontal)
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    el.addEventListener('wheel', onWheel, { passive: false });
    return () => el.removeEventListener('wheel', onWheel);
  }, []);

  const scrollBy = (dir) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = 340; // ancho de card aprox
    el.scrollBy({ left: dir * amount, behavior: 'smooth' });
  };

  return (
    <section className="relative py-16 px-2 sm:px-6 md:px-10 lg:px-20 xl:px-32 max-w-7xl mx-auto flex flex-col items-center bg-gradient-to-br from-[#e6e6fa] via-[#f3e8ff] to-[#d1c4e9] rounded-[3rem]">
      {/* Fondo decorativo animado */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-pink-200/40 to-purple-200/40 rounded-full blur-3xl animate-spin-slow z-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl animate-spin-slow z-0" aria-hidden="true" />

      <motion.div
        className="relative z-10 flex flex-col items-center w-full max-w-5xl mx-auto rounded-[3rem] bg-white/70 backdrop-blur-2xl shadow-2xl px-4 sm:px-10 pt-8 pb-2 mb-14"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-[#7c3aed] drop-shadow-lg text-center">Nuestros Servicios</h2>
      </motion.div>

      {/* Flechas de scroll */}
      {showLeft && (
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#a78bfa]/80 text-[#7c3aed] shadow-lg rounded-full p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#a78bfa]"
          onClick={() => scrollBy(-1)}
          aria-label="Desplazar servicios a la izquierda"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
      )}
      {showRight && (
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-[#a78bfa]/80 text-[#7c3aed] shadow-lg rounded-full p-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#a78bfa]"
          onClick={() => scrollBy(1)}
          aria-label="Desplazar servicios a la derecha"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      )}

      {/* Tarjetas de Servicios con scroll horizontal snap y flechas */}
      <div ref={scrollRef} className="relative z-10 w-full max-w-5xl mx-auto rounded-[3rem] bg-white/40 backdrop-blur-2xl p-4 sm:p-8 mb-14 overflow-x-auto scrollbar-thin scrollbar-thumb-[#a78bfa]/60 scrollbar-track-transparent">
        <motion.div
          className="flex gap-8 min-w-[700px] sm:min-w-[900px] md:min-w-[1200px] lg:min-w-0 lg:w-full snap-x snap-mandatory"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((card, index) => (
            <motion.article
              key={index}
              className="bg-white/30 backdrop-blur-2xl border-2 border-[#a78bfa] shadow-2xl rounded-[2.5rem] p-8 w-[300px] md:w-[340px] lg:w-[360px] flex-shrink-0 flex flex-col items-center group transition-all duration-500 cursor-pointer hover:shadow-violet-400/40 hover:border-[#7c3aed] hover:bg-white/50 snap-center"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              role="region"
              aria-label={card.title}
            >
              <h3 className="text-2xl font-extrabold mb-4 bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-[#f3e8ff] bg-clip-text text-transparent drop-shadow-lg" id={`card-title-${index}`}>{card.title}</h3>
              <p className="mb-7 text-gray-700 font-medium text-base text-center" id={`card-desc-${index}`}>{card.description}</p>
              <motion.button
                className="relative bg-gradient-to-r from-[#7c3aed] via-[#a78bfa] to-[#f3e8ff] text-white font-bold py-3 px-8 rounded-xl overflow-hidden transition-all duration-300 shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#a78bfa] border-2 border-[#a78bfa] group-hover:scale-105 group-hover:shadow-violet-400/40"
                whileHover={{ scale: 1.09 }}
                whileTap={{ scale: 0.97 }}
                aria-label={`Más información sobre ${card.title}`}
                aria-describedby={`card-desc-${index}`}
                type="button"
              >
                <span className="relative z-10 flex items-center gap-2">Más Información <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg></span>
                <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
              </motion.button>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
