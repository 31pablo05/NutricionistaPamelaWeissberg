import React from 'react';
import { motion } from 'framer-motion';

// SVG icon for the title
const BodyIcon = () => (
  <svg
    className="inline-block w-8 h-8 mr-2 align-middle text-[#ee2b7a] drop-shadow-md"
    fill="none"
    viewBox="0 0 32 32"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="16" cy="8" r="4" fill="#ee2b7a" />
    <rect x="12" y="14" width="8" height="12" rx="4" fill="#ee5e17" />
    <rect x="14" y="26" width="4" height="4" rx="2" fill="#df9fe9" />
  </svg>
);

const SectionInbody = () => {
  return (
    <section
      className="relative flex flex-col md:flex-row items-center justify-between px-2 py-10 sm:px-6 md:px-12 lg:px-20 xl:px-32 min-h-[60vh] bg-gradient-to-br from-[#e6d8ff] via-[#f3e8ff] to-[#df9fe9] rounded-3xl shadow-2xl my-8 overflow-hidden"
      aria-label="Medición Inbody"
    >
      {/* Fondos decorativos animados y gradiente animado en borde */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-72 h-72 bg-gradient-to-br from-pink-200/40 to-purple-200/40 rounded-full blur-3xl animate-spin-slow z-0"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-24 w-72 h-72 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl animate-spin-slow z-0"
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-r from-[#ee2b7a] via-[#ee5e17] to-[#df9fe9] opacity-60 animate-gradient-x z-0"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />

      {/* Texto */}
      <motion.div
        className="relative z-10 w-full md:w-1/2 text-left font-semibold tracking-wide text-lg space-y-4 bg-white/70 backdrop-blur-2xl rounded-3xl p-6 md:p-10 shadow-2xl border-2 border-white/70 ring-2 ring-[#ee2b7a]/10"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.1, type: 'spring' }}
        viewport={{ once: true }}
        tabIndex={0}
        aria-labelledby="inbody-title"
      >
        <h2
          id="inbody-title"
          className="flex items-center gap-2 text-transparent bg-gradient-to-r from-[#ee2b7a] via-[#ee5e17] to-[#df9fe9] bg-clip-text text-3xl sm:text-4xl font-extrabold mb-4 drop-shadow-lg"
        >
          <BodyIcon /> Medición Inbody
        </h2>
        <motion.p
          className="text-gray-800 text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          En todas nuestras consultas presenciales, realizamos una medición Inbody.
          Esta avanzada tecnología te muestra información crucial sobre tu cuerpo:
          la cantidad de músculo, grasa total, grasa visceral, metabolismo basal,
          IMC y nivel de hidratación. ¡Recuerda que el número de la balanza no es
          todo! Con Inbody, vas a obtener un análisis detallado de tu composición
          corporal. Inbody no es una balanza común. Es un analizador de composición
          corporal que utiliza bioimpedancia para obtener datos más precisos y
          útiles.
        </motion.p>
        <motion.h3
          className="text-[#ee5e17] text-xl font-semibold mt-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          ¿Cuánto tiempo toma?
        </motion.h3>
        <motion.p
          className="text-gray-700 text-lg mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          ¡Solo 18 segundos!
        </motion.p>
        <motion.h3
          className="text-[#ee5e17] text-xl font-semibold"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          ¿Para qué nos sirve?
        </motion.h3>
        <motion.p
          className="text-gray-700 text-lg mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Conocer tu composición corporal, establecer objetivos de salud y
          bienestar, crear un plan de alimentación basado en los parámetros que
          deseas mejorar y, lo más importante: entender que el número en la
          balanza no es lo único que importa. Lo que realmente cuenta es lo que
          compone ese número.
        </motion.p>
        <motion.p
          className="text-gray-800 text-lg mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
        >
          ¡Te espero para que juntos analicemos tus resultados y planifiquemos el
          camino hacia tu mejor versión!
        </motion.p>
        <motion.p
          className="text-[#ee2b7a] text-lg font-bold mt-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <strong>Lic. Weissberg Pamela 👩🏻⚕️</strong>
        </motion.p>
        {/* Botón de más info */}
        <motion.a
          href="#"
          className="inline-block mt-4 px-5 py-2 rounded-full bg-gradient-to-r from-[#ee2b7a] via-[#ee5e17] to-[#df9fe9] text-white font-bold shadow-lg hover:scale-105 hover:shadow-pink-200/60 focus:outline-none focus:ring-2 focus:ring-[#ee2b7a] transition-all duration-300"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.97 }}
          tabIndex={0}
          aria-label="Más información sobre Inbody"
        >
          Más info sobre Inbody
        </motion.a>
      </motion.div>

      {/* Badge flotante sobre la imagen */}
      <motion.div
        className="relative z-10 w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0"
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
        viewport={{ once: true }}
      >
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <motion.div
            className="px-4 py-1 rounded-full bg-gradient-to-r from-[#ee2b7a] via-[#ee5e17] to-[#df9fe9] text-white font-bold text-sm shadow-xl border-2 border-white/70 backdrop-blur-md animate-pulse focus:outline-none focus:ring-2 focus:ring-[#ee2b7a]"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            tabIndex={0}
            aria-label="Tecnología Avanzada"
          >
            ¡Tecnología Avanzada!
          </motion.div>
        </div>
        <motion.img
          src="/assets/imagesComponents/queeselinbody.webp"
          alt="Inbody Measurement"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-3xl shadow-2xl border-4 border-white/60 object-cover bg-white/40 hover:scale-105 hover:shadow-pink-200/60 focus:shadow-pink-200/80 transition-transform duration-500 ease-in-out cursor-pointer outline-none"
          whileHover={{
            scale: 1.09,
            rotate: -2,
            boxShadow: '0 0 0 8px #ee2b7a33',
          }}
          whileFocus={{
            scale: 1.06,
            boxShadow: '0 0 0 8px #ee2b7a55',
          }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          tabIndex={0}
          aria-label="Imagen de medición Inbody"
        />
      </motion.div>
    </section>
  );
};

export default SectionInbody;
