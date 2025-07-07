import React from 'react';
import { motion } from 'framer-motion';
import Experiencia from '../components/about/Experiencia';

const QuienSoy = () => {
  // Eliminado: tooltips y scroll indicator

  return (
    <section className="relative w-full max-w-[1400px] mx-auto mt-24 mb-12 p-2 md:p-4 overflow-visible scroll-smooth">
      {/* Fondo animado decorativo más visible y sección con glassmorphism y bordes redondeados */}
      {/* Fondo animado decorativo, sin animación de scroll automática */}
      {/* Fondo animado decorativo con gradientes grandes, sin partículas animadas */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none select-none" aria-hidden="true">
        {/* Gradientes grandes */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-gradient-to-br from-[#dd9fea]/70 via-[#ee5e17]/60 to-[#fceff8]/80 rounded-full blur-2xl animate-spin-slow" style={{ filter: 'blur(80px)' }} />
        <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] bg-gradient-to-br from-[#ee5e17]/70 via-[#dd9fea]/60 to-[#fceff8]/80 rounded-full blur-2xl animate-spin-slow" style={{ filter: 'blur(80px)' }} />
      </div>
      <motion.div
        className="relative z-10 bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/60 px-2 md:px-8 py-8 md:py-12 max-w-6xl xl:max-w-[1200px] mx-auto"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
      {/* Fondo animado decorativo */}
      <motion.div
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-[#dd9fea]/40 via-[#fceff8]/60 to-[#ee5e17]/40 rounded-full blur-3xl animate-spin-slow z-0"
        aria-hidden="true"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-[#ee5e17]/40 via-[#dd9fea]/40 to-[#fceff8]/60 rounded-full blur-3xl animate-spin-slow z-0"
        aria-hidden="true"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
      {/* Encabezado animado */}
      <motion.header
        className="text-center mt-10 mb-10 relative"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-[#dd9fea] via-[#ee5e17] to-[#fceff8] bg-clip-text text-transparent drop-shadow-lg mb-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.7, type: 'spring' }}
          viewport={{ once: true }}
        >
          ¿Quién Soy?
        </motion.h2>
        {/* Separador decorativo con icono */}
        <motion.div
          className="mx-auto mt-2 h-1 w-24 rounded-full bg-gradient-to-r from-[#dd9fea] via-[#ee5e17] to-[#fceff8] flex items-center justify-center relative"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.7, type: 'spring' }}
          viewport={{ once: true }}
        >
          <span className="absolute left-1/2 -translate-x-1/2 -top-3">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><circle cx="14" cy="14" r="13" fill="#ee5e17" fillOpacity="0.18"/><path d="M14 21c-3.5-2.5-6-5-6-8a6 6 0 1112 0c0 3-2.5 5.5-6 8z" fill="#ee2b7a" fillOpacity="0.7"/><circle cx="14" cy="12" r="2" fill="#fff"/></svg>
          </span>
        </motion.div>
        {/* Eliminado: indicador de scroll animado */}
      </motion.header>

      {/* Contenido principal */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Imagen con animación y detalles */}
        <motion.div
          className="relative group"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: 'spring' }}
          viewport={{ once: true }}
        >
          {/* Halo animado */}
          <motion.div
            className="absolute inset-0 w-80 h-80 rounded-full bg-gradient-to-br from-[#dd9fea] to-[#fceff8] blur-2xl -z-10 group-hover:scale-110 group-hover:opacity-90 transition-transform duration-500"
            initial={{ opacity: 0.7, scale: 0.9 }}
            whileHover={{ scale: 1.13, opacity: 1 }}
          />
          {/* Foto con efecto pop y focus visible */}
          <motion.img
            src="/assets/imagesPame/pame1.webp"
            alt="Nutricionista Pamela Weissberg"
            className="w-80 h-80 md:w-[320px] md:h-[320px] object-cover shadow-2xl rounded-full border-8 border-white/60 group-hover:scale-110 focus-visible:ring-4 focus-visible:ring-[#ee2b7a]/40 transition-transform duration-300 outline-none"
            tabIndex={0}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.08 }}
            whileFocus={{ scale: 1.08 }}
            transition={{ duration: 0.7, type: 'spring' }}
          />
          {/* Badge animado */}
          <motion.div
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#ee2b7a] via-[#ee5e17] to-[#df9fe9] text-white text-xs font-bold shadow-lg border border-white/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6, type: 'spring' }}
          >
            Lic. Pamela Weissberg
          </motion.div>
        </motion.div>

        {/* Descripción y habilidades animadas */}
        <motion.article
          className="flex-1 text-left lg:text-center text-[#333] text-lg leading-relaxed bg-white/70 backdrop-blur-xl rounded-2xl p-8 shadow-xl border border-white/40"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.1, type: 'spring' }}
          viewport={{ once: true }}
        >
          <motion.p className="mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            Soy <strong>Pamela Weissberg</strong>, nutricionista con más de <strong>10 años de experiencia</strong> acompañando a personas en la mejora de su salud a través de una alimentación equilibrada y sostenible. Mi enfoque se basa en la ciencia, la empatía y el compromiso personalizado con cada paciente.
          </motion.p>
          <motion.p className="mb-8" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            Creo en la importancia de crear hábitos alimentarios saludables sin restricciones extremas, promoviendo una relación positiva con la comida y el bienestar a largo plazo. Juntos, encontraremos el camino hacia una alimentación que se adapte a tus necesidades y estilo de vida.
          </motion.p>
          {/* Lista de valores sin tooltips ni microinteracciones */}
          <ul
            className="flex flex-wrap justify-center gap-3 mt-6"
            aria-label="Valores y habilidades"
          >
            <li className="px-4 py-2 rounded-full bg-gradient-to-r from-[#ee2b7a] via-[#ee5e17] to-[#df9fe9] text-white text-xs font-semibold shadow-md">Empatía</li>
            <li className="px-4 py-2 rounded-full bg-gradient-to-r from-[#dd9fea] to-[#ee5e17] text-white text-xs font-semibold shadow-md">Ciencia y Evidencia</li>
            <li className="px-4 py-2 rounded-full bg-gradient-to-r from-[#ee5e17] to-[#fceff8] text-[#7c2d8a] text-xs font-semibold shadow-md">Compromiso</li>
            <li className="px-4 py-2 rounded-full bg-gradient-to-r from-[#df9fe9] to-[#ee2b7a] text-white text-xs font-semibold shadow-md">Educación Alimentaria</li>
            <li className="px-4 py-2 rounded-full bg-gradient-to-r from-[#fceff8] to-[#dd9fea] text-[#7c2d8a] text-xs font-semibold shadow-md">Acompañamiento</li>
          </ul>
        </motion.article>
      </div>

      {/* Sección de experiencia animada */}
      {/* Separador decorativo entre secciones */}
      <div className="flex justify-center my-12">
        <svg width="120" height="24" viewBox="0 0 120 24" fill="none"><path d="M10 12c20-10 80-10 100 0" stroke="#ee2b7a" strokeWidth="2" strokeLinecap="round"/><circle cx="10" cy="12" r="3" fill="#ee5e17"/><circle cx="110" cy="12" r="3" fill="#dd9fea"/></svg>
      </div>
      <motion.div
        className="mt-16"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
        viewport={{ once: true }}
      >
        <Experiencia />
        {/* Ajuste de alineación para la sección Mi Vocación */}
        <style>{`
          .experiencia-vocacion-ajustada p {
            text-align: center !important;
            margin-left: auto !important;
            margin-right: auto !important;
            max-width: 700px;
          }
        `}</style>
      </motion.div>

      {/* Botón de acción animado arriba y Pamela señalando más grande debajo */}
      <div className="flex flex-col items-center mt-2 lg:mt-2 xl:mt-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, type: 'spring' }}
          viewport={{ once: true }}
          style={{ position: 'relative', zIndex: 2 }}
        >
          <motion.a
            href="/turnos-online"
            whileHover={{ scale: 1.08, boxShadow: '0 0 24px #dd9fea99' }}
            whileTap={{ scale: 0.97 }}
            className="relative bg-gradient-to-r from-[#dd9fea] via-[#ee5e17] to-[#c97fc8] text-white py-4 px-10 rounded-full text-lg font-bold shadow-lg transition-transform duration-300 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#dd9fea]/40"
            aria-label="Agendar consulta con Pamela Weissberg"
            style={{ marginBottom: '-56px' }}
          >
            ¡Agendar Consulta!
            {/* Microinteracción: icono de calendario/WhatsApp al hover */}
            <motion.span
              className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center"
              initial={{ opacity: 0, x: 10 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            >
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none"><rect x="3" y="6" width="22" height="17" rx="4" fill="#fff"/><rect x="3" y="6" width="22" height="17" rx="4" stroke="#ee2b7a" strokeWidth="2"/><rect x="8" y="11" width="8" height="2" rx="1" fill="#ee5e17"/><rect x="8" y="15" width="5" height="2" rx="1" fill="#dd9fea"/><circle cx="21" cy="10" r="2" fill="#ee2b7a"/></svg>
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" className="ml-1"><circle cx="14" cy="14" r="13" fill="#25d366" fillOpacity="0.13"/><path d="M14 21c-3.5-2.5-6-5-6-8a6 6 0 1112 0c0 3-2.5 5.5-6 8z" fill="#25d366" fillOpacity="0.7"/><circle cx="14" cy="12" r="2" fill="#fff"/></svg>
            </motion.span>
          </motion.a>
        </motion.div>
        {/* Imagen Pamela señalando más grande debajo del botón con animación */}
        <motion.img
          src="/assets/imagesPame/pame11.svg"
          alt="Pamela señalando el botón de agendar consulta"
          className="block w-60 h-auto -mb-2 -mt-12 ml-[-96px] md:w-80 md:-mb-2 md:-mt-16 md:ml-[-60px] lg:w-[380px] lg:-mb-3 lg:-mt-20 lg:ml-[-100px] xl:w-[500px] xl:-mb-4 xl:-mt-28 xl:ml-[-140px] select-none cursor-pointer transition-transform duration-300"
          style={{ transform: 'rotate(-8deg)' }}
          aria-hidden="true"
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          whileHover={{ scale: 1.13 }}
        />
      </div>
      </motion.div>
    </section>
  );
};

export default QuienSoy;
