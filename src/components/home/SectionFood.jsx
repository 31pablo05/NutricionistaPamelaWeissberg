import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';

const SectionFoodNutritionist = () => {
  const navigate = useNavigate();
  const shouldReduceMotion = useReducedMotion();
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleReservationClick = () => {
    navigate('/turnos-online');
  };

  const handleKeyNavigation = (event, index) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (index === 'cta') {
        handleReservationClick();
      }
    }
    if (event.key === 'ArrowDown' && index < 2) {
      setFocusedIndex(index + 1);
    }
    if (event.key === 'ArrowUp' && index > 0) {
      setFocusedIndex(index - 1);
    }
  };

  // Schema.org structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Asesoría Nutricional Personalizada",
    "provider": {
      "@type": "Person",
      "name": "Pamela Weissberg",
      "jobTitle": "Nutricionista",
      "description": "Nutricionista profesional especializada en planes alimenticios personalizados"
    },
    "serviceType": "Consulta Nutricional",
    "description": "Planes alimenticios personalizados, asesoramiento constante y seguimiento para asegurar resultados",
    "offers": {
      "@type": "Offer",
      "description": "Consulta nutricional personalizada con seguimiento continuo"
    }
  };

  // Optimización: Memoizar variantes de animación con efectos avanzados
  const animationVariants = useMemo(() => ({
    container: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          duration: shouldReduceMotion ? 0.3 : 0.8,
          staggerChildren: shouldReduceMotion ? 0.1 : 0.15,
          delayChildren: 0.1
        }
      }
    },
    item: {
      hidden: { opacity: 0, y: shouldReduceMotion ? 10 : 40, scale: 0.95 },
      visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: shouldReduceMotion ? 0.3 : 0.7,
          ease: [0.25, 0.46, 0.45, 0.94] // Custom easing
        }
      }
    },
    image: {
      hidden: { opacity: 0, scale: 0.9, x: shouldReduceMotion ? 0 : -30, rotateY: shouldReduceMotion ? 0 : -15 },
      visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        rotateY: 0,
        transition: {
          duration: shouldReduceMotion ? 0.4 : 1,
          ease: "easeOut",
          scale: { type: "spring", stiffness: 100, damping: 15 }
        }
      }
    },
    floatingBadge: shouldReduceMotion ? {} : {
      y: [-8, 8, -8],
      rotate: [-2, 2, -2],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    },
    benefitCard: {
      hidden: { opacity: 0, x: -30, scale: 0.95 },
      visible: (index) => ({
        opacity: 1,
        x: 0,
        scale: 1,
        transition: {
          delay: shouldReduceMotion ? 0.1 * index : 1.2 + index * 0.15,
          duration: shouldReduceMotion ? 0.3 : 0.6,
          ease: "easeOut"
        }
      }),
      hover: shouldReduceMotion ? {} : {
        scale: 1.03,
        y: -8,
        rotateY: 5,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 17
        }
      }
    },
    ctaButton: {
      hover: shouldReduceMotion ? {} : {
        scale: 1.05,
        y: -5,
        rotateX: 5,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 17
        }
      },
      tap: { scale: 0.95, rotateX: 0 }
    }
  }), [shouldReduceMotion]);

  const benefits = [
    {
      icon: "🎯",
      title: "Planes alimenticios personalizados",
      description: "Adaptados a tu estilo de vida y objetivos específicos para maximizar resultados",
      gradient: "from-emerald-500 to-teal-500",
      ariaLabel: "Planes personalizados de nutrición adaptados a tus necesidades"
    },
    {
      icon: "👩‍⚕️",
      title: "Asesoramiento constante",
      description: "Acompañamiento profesional continuo en cada paso de tu transformación",
      gradient: "from-blue-500 to-cyan-500",
      ariaLabel: "Asesoramiento nutricional profesional y constante"
    },
    {
      icon: "📊",
      title: "Seguimiento para asegurar resultados",
      description: "Monitoreo continuo y ajustes precisos para garantizar el éxito",
      gradient: "from-purple-500 to-pink-500",
      ariaLabel: "Seguimiento detallado y monitoreo de resultados"
    }
  ];

  return (
    <>
      {/* Schema.org structured data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <motion.section 
        role="region"
        aria-labelledby="nutrition-section-title"
        className="relative py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 overflow-hidden"
        variants={animationVariants.container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
      {/* Elementos decorativos de fondo optimizados */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute -top-32 sm:-top-40 -right-32 sm:-right-40 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-pink-200/40 to-purple-200/40 rounded-full blur-3xl will-change-transform"
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-32 sm:-bottom-40 -left-32 sm:-left-40 w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl will-change-transform"
          animate={shouldReduceMotion ? {} : {
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={shouldReduceMotion ? {} : {
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header de la sección con mejor SEO y semántica */}
        <motion.header
          className="text-center mb-12 sm:mb-16 lg:mb-20 xl:mb-24"
          variants={animationVariants.item}
        >
          <motion.div
            role="status"
            aria-live="polite"
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 sm:px-6 lg:px-8 py-2 sm:py-3 lg:py-4 rounded-full shadow-lg mb-4 sm:mb-6 lg:mb-8"
            animate={animationVariants.floatingBadge}
          >
            <span className="w-2 h-2 sm:w-3 sm:h-3 lg:w-4 lg:h-4 bg-green-500 rounded-full animate-pulse" aria-label="Estado activo"></span>
            <span className="text-xs sm:text-sm lg:text-base font-semibold text-gray-700">Nutrición Profesional</span>
          </motion.div>
          
          <h1 
            id="nutrition-section-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-3 sm:mb-4 lg:mb-6"
          >
            <span className="bg-gradient-to-r from-pink-500 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Transforma tu salud
            </span>
            <br />
            <span className="text-gray-800">con Pame</span>
          </h1>
          
          <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-gray-600 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed lg:leading-relaxed">
            Tu nutricionista de confianza para alcanzar un estilo de vida saludable y duradero
          </p>
        </motion.header>

        {/* Contenido principal con mejor responsividad ultra-mejorada */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-8 sm:gap-12 md:gap-16 lg:gap-20 xl:gap-24 items-center">
          
          {/* Imagen con efectos modernos optimizados */}
          <motion.div
            className="relative group order-2 lg:order-1 xl:col-span-2"
            variants={animationVariants.image}
          >
            {/* Skeleton loader */}
            {!isImageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded-2xl sm:rounded-3xl" />
            )}
            
            {/* Contenedor de imagen con efectos */}
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl lg:rounded-[2rem] xl:rounded-[2.5rem] flex justify-center items-center aspect-square w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-[520px] xl:max-w-[600px] 2xl:max-w-[700px]">
              <motion.img
                src="/assets/imagesComponents/platoSaludable.webp"
                alt="Plato saludable equilibrado - Asesoría nutricional profesional con Pamela Weissberg"
                loading="lazy"
                onLoad={() => setIsImageLoaded(true)}
                className="w-full h-full object-contain rounded-2xl sm:rounded-3xl lg:rounded-[2rem] xl:rounded-[2.5rem] shadow-2xl transition-all duration-700 group-hover:z-20 will-change-transform"
                whileHover={shouldReduceMotion ? {} : { scale: 1.12, boxShadow: '0 8px 40px 0 rgba(236,72,153,0.25)' }}
                whileTap={shouldReduceMotion ? {} : { scale: 1.08 }}
                transition={{ type: "spring", stiffness: 220, damping: 18 }}
                style={{ 
                  opacity: isImageLoaded ? 1 : 0,
                  transition: 'opacity 0.5s ease-in-out'
                }}
              />
              
              {/* Overlay con gradiente y brillo más visible en hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-2xl sm:rounded-3xl lg:rounded-[2rem] xl:rounded-[2.5rem] opacity-0 group-hover:opacity-80 transition-opacity duration-700 pointer-events-none z-10" />
              {/* Efecto de brillo animado más notorio */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-2xl sm:rounded-3xl lg:rounded-[2rem] xl:rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-x-[-120%] group-hover:translate-x-[120%] z-20 pointer-events-none" />
              {/* Reflection effect más visible */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl sm:rounded-3xl lg:rounded-[2rem] xl:rounded-[2.5rem] opacity-0 group-hover:opacity-80 transition-opacity duration-1000 pointer-events-none z-10" />
            </div>

            {/* Badge flotante optimizado para mobile con mejor accesibilidad */}
            <motion.div
              role="img"
              aria-label="Alimentación saludable certificada"
              className="absolute -top-8 sm:-top-12 lg:-top-16 left-2 sm:left-4 lg:left-6 bg-gradient-to-r from-pink-500 to-purple-600 px-2 sm:px-4 lg:px-6 py-1 sm:py-2 lg:py-3 rounded-xl sm:rounded-2xl lg:rounded-3xl text-white font-semibold shadow-xl border border-white/30 backdrop-blur-sm"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0.2 : 1, type: "spring", stiffness: 200 }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.08, rotate: 2 }}
            >
              <span className="text-sm sm:text-xl lg:text-2xl mr-1 sm:mr-2" role="img" aria-label="plato de comida">🍽️</span>
              <span className="text-xs sm:text-sm lg:text-base font-bold">Alimentación Saludable</span>
            </motion.div>

            {/* Elementos decorativos con microinteracciones mejoradas */}
            <motion.div
              aria-hidden="true"
              className="absolute -top-2 sm:-top-4 lg:-top-6 -right-2 sm:-right-4 lg:-right-6 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-20 blur-xl will-change-transform"
              animate={shouldReduceMotion ? {} : { rotate: 360, scale: [1, 1.1, 1] }}
              transition={shouldReduceMotion ? {} : { duration: 12, repeat: Infinity, ease: "linear" }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.2, opacity: 0.35 }}
            />
            <motion.div
              aria-hidden="true"
              className="absolute -bottom-3 sm:-bottom-6 lg:-bottom-8 -left-3 sm:-left-6 lg:-left-8 w-20 h-20 sm:w-32 sm:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full opacity-20 blur-xl will-change-transform"
              animate={shouldReduceMotion ? {} : { rotate: -360, scale: [1.1, 1, 1.1] }}
              transition={shouldReduceMotion ? {} : { duration: 18, repeat: Infinity, ease: "linear" }}
              whileHover={shouldReduceMotion ? {} : { scale: 1.2, opacity: 0.35 }}
            />
          </motion.div>

          {/* Contenido textual mejorado con mejor responsividad */}
          <motion.div
            className="space-y-6 sm:space-y-8 lg:space-y-10 order-1 lg:order-2 xl:col-span-3"
            variants={animationVariants.item}
          >
            {/* Subtítulo con icono optimizado y mejor semántica */}
            <motion.header
              className="flex items-center gap-2 sm:gap-3 lg:gap-4 mb-4 sm:mb-6 lg:mb-8"
              variants={animationVariants.item}
            >
              <motion.span 
                role="img"
                aria-label="estrella"
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl"
                whileHover={shouldReduceMotion ? {} : { rotate: [0, -15, 15, 0], scale: 1.15 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                🌟
              </motion.span>
              <h3 
                id="why-choose-us-title"
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
              >
                ¿Por qué elegirnos?
              </h3>
            </motion.header>

            {/* Descripción principal mejorada */}
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-gray-700 leading-relaxed lg:leading-relaxed"
              variants={animationVariants.item}
            >
              Te ofrecemos un enfoque{' '}
              <span className="font-semibold bg-gradient-to-r from-pink-600 to-pink-700 bg-clip-text text-transparent">
                personalizado
              </span>{' '}
              para mejorar tu salud, con planes alimenticios adaptados a tus necesidades y objetivos.{' '}
              <span className="font-semibold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                ¡Juntos lograremos una vida más sana!
              </span>
            </motion.p>

            {/* Benefits cards optimizados con mejor accesibilidad */}
            <motion.div
              role="list"
              aria-labelledby="why-choose-us-title"
              className="space-y-3 sm:space-y-4 lg:space-y-6"
              variants={animationVariants.item}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  role="listitem"
                  tabIndex={0}
                  aria-label={benefit.ariaLabel}
                  className="group relative flex items-start gap-3 sm:gap-4 lg:gap-6 p-4 sm:p-6 lg:p-8 bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg border border-white/50 hover:shadow-2xl hover:border-pink-200 transition-all duration-500 hover:bg-white/85 focus:ring-4 focus:ring-pink-300 focus:outline-none cursor-pointer"
                  custom={index}
                  variants={animationVariants.benefitCard}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  onKeyDown={(e) => handleKeyNavigation(e, index)}
                  onFocus={() => setFocusedIndex(index)}
                >
                  {/* Ripple effect background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-400/10 to-purple-400/10 rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div
                    role="img"
                    aria-label={`${benefit.title} icon`}
                    className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0 relative z-10"
                    whileHover={shouldReduceMotion ? {} : { 
                      rotate: [0, -15, 15, 0], 
                      scale: 1.2,
                      y: -5
                    }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 300 }}
                  >
                    {benefit.icon}
                  </motion.div>
                  <div className="flex-1 min-w-0 relative z-10">
                    <h4 className="font-bold text-gray-800 text-sm sm:text-lg lg:text-xl xl:text-2xl mb-1 sm:mb-2 group-hover:text-pink-600 transition-colors duration-300">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 text-xs sm:text-sm lg:text-base xl:text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                      {benefit.description}
                    </p>
                  </div>
                  {/* Indicador de gradiente sutil mejorado */}
                  <div className={`w-1 sm:w-2 h-8 sm:h-12 lg:h-16 bg-gradient-to-b ${benefit.gradient} rounded-full opacity-60 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 relative z-10`} />
                  
                  {/* Glow effect on focus */}
                  <div className={`absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl ring-2 ring-pink-400 opacity-0 transition-opacity duration-300 ${focusedIndex === index ? 'opacity-100' : ''}`} />
                </motion.div>
              ))}
            </motion.div>

            {/* Call to action button ultra-mejorado */}
            <motion.div
              className="pt-12 sm:pt-8 lg:pt-12"
              variants={animationVariants.item}
              /*
                En mobile (pantallas pequeñas), aumentamos el padding-top para dar más espacio
                entre el botón y el badge de 'Alimentación Saludable'.
                En sm:pt-8 y lg:pt-12 se mantiene igual, pero en mobile (por defecto) se aumenta a pt-10.
              */
            >
              <motion.button
                onClick={handleReservationClick}
                onKeyDown={(e) => handleKeyNavigation(e, 'cta')}
                aria-label="Reservar consulta nutricional personalizada con Pamela Weissberg"
                className="group relative w-full sm:w-auto px-8 sm:px-10 lg:px-12 xl:px-16 py-4 sm:py-5 lg:py-6 xl:py-8 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold text-base sm:text-lg lg:text-xl xl:text-2xl rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-2xl overflow-hidden transition-all duration-500 hover:shadow-pink-500/40 focus:ring-4 focus:ring-pink-300 focus:outline-none"
                variants={animationVariants.ctaButton}
                whileHover="hover"
                whileTap="tap"
                whileFocus={shouldReduceMotion ? {} : { scale: 1.02, boxShadow: "0 0 30px rgba(238, 43, 122, 0.4)" }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={shouldReduceMotion ? {} : {
                    background: [
                      "linear-gradient(45deg, #8b5cf6, #ec4899, #ef4444)",
                      "linear-gradient(135deg, #ec4899, #ef4444, #8b5cf6)",
                      "linear-gradient(225deg, #ef4444, #8b5cf6, #ec4899)",
                      "linear-gradient(315deg, #8b5cf6, #ec4899, #ef4444)"
                    ]
                  }}
                  transition={shouldReduceMotion ? {} : { duration: 3, repeat: Infinity }}
                />
                
                {/* Efecto de brillo animado mejorado */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1200 translate-x-[-150%] group-hover:translate-x-[150%]" />
                
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl"
                  initial={false}
                  whileTap={shouldReduceMotion ? {} : {
                    scale: [1, 1.05, 1],
                    opacity: [0, 0.3, 0]
                  }}
                  transition={{ duration: 0.6 }}
                  style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%)"
                  }}
                />
                
                {/* Contenido del botón */}
                <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
                  <span>Reservar consulta</span>
                  <motion.span
                    className="text-xl sm:text-2xl lg:text-3xl"
                    animate={shouldReduceMotion ? {} : { x: [0, 8, 0] }}
                    transition={shouldReduceMotion ? {} : { duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    →
                  </motion.span>
                </span>
                
                {/* Pulse effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl border-2 border-white/50"
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={shouldReduceMotion ? {} : {
                    scale: [1, 1.1, 1.2],
                    opacity: [0, 0.5, 0]
                  }}
                  transition={shouldReduceMotion ? {} : { duration: 1.5, repeat: Infinity }}
                />
              </motion.button>
              {/* Espacio extra solo en mobile debajo del botón */}
              <div className="block sm:hidden" style={{ height: '2.5rem' }}></div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </>
  );
};

export default SectionFoodNutritionist;
