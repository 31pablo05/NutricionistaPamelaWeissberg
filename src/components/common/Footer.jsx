import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaHeart } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring' }}
      className="relative z-20 bg-gradient-to-br from-[#e1a1ed]/90 via-[#f3e8ff]/90 to-[#ee5e17]/90 backdrop-blur-3xl border-t-2 border-white/40 rounded-t-3xl shadow-2xl overflow-hidden"
      aria-label="Pie de página"
    >
      {/* Efectos decorativos de fondo */}
      <motion.div
        className="pointer-events-none absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#e3a0ef] via-[#ee5e17] to-[#dc3c55] z-10"
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-[#e3a0ef]/30 to-[#ee5e17]/30 rounded-full blur-3xl animate-pulse z-0"
        aria-hidden="true"
        initial={{ opacity: 0.4, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1.2 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-[#dc3c55]/30 to-[#e3a0ef]/30 rounded-full blur-3xl animate-pulse z-0"
        aria-hidden="true"
        initial={{ opacity: 0.4, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1.2 }}
        transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse', delay: 2 }}
      />

      {/* Contenido principal del footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 pt-16 pb-8">
        {/* Sección superior con logo y descripción */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4b0082] via-[#ee2b7a] to-[#ee5e17]">
              Nutricionista Pamela Weissberg
            </h2>
            <img
              src="/assets/svgLogo/logotransp.svg"
              alt="Logo Pamela Weissberg"
              className="h-12 md:h-16 w-12 md:w-16 object-contain drop-shadow-lg"
            />
          </div>
          <p className="text-[#4b0082] text-lg max-w-2xl mx-auto leading-relaxed font-medium">
            Tu salud y bienestar son mi prioridad. Planes personalizados de nutrición para alcanzar tus objetivos de manera saludable y sostenible.
          </p>
        </motion.div>

        {/* Grid principal de información */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Información de contacto */}
          <motion.div
            className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border-2 border-white/70 shadow-xl hover:bg-white/70 transition-all duration-300"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-[#e3a0ef] to-[#ee5e17]">
                <FaEnvelope className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-semibold text-[#4b0082]">Contacto</h3>
            </div>
            
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-3 group cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaPhoneAlt className="text-[#e3a0ef] text-lg flex-shrink-0" />
                <div>
                  <p className="text-sm text-[#4b0082]/70">Teléfono</p>
                  <a
                    href="tel:+5492804628180"
                    className="text-[#4b0082] hover:text-[#ee2b7a] transition-colors duration-300 font-medium"
                  >
                    +54 9 280 4628180
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 group cursor-pointer"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaEnvelope className="text-[#e3a0ef] text-lg flex-shrink-0" />
                <div>
                  <p className="text-sm text-[#4b0082]/70">Email</p>
                  <a
                    href="mailto:info@pamelaweisberg.com"
                    className="text-[#4b0082] hover:text-[#ee2b7a] transition-colors duration-300 font-medium break-all"
                  >
                    info@pamelaweisberg.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                className="flex items-center gap-3 group"
                whileHover={{ x: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <FaMapMarkerAlt className="text-[#e3a0ef] text-lg flex-shrink-0" />
                <div>
                  <p className="text-sm text-[#4b0082]/70">Ubicación</p>
                  <p className="text-[#4b0082] font-medium">Trelew, Chubut, Argentina</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Servicios destacados */}
          <motion.div
            className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border-2 border-white/70 shadow-xl hover:bg-white/70 transition-all duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-[#ee5e17] to-[#dc3c55]">
                <FaHeart className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-semibold text-[#4b0082]">Servicios</h3>
            </div>
            
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-[#4b0082] hover:text-[#ee2b7a] transition-colors duration-300">
                <span className="w-2 h-2 bg-[#e3a0ef] rounded-full"></span>
                Planes de Nutrición Personalizados
              </li>
              <li className="flex items-center gap-2 text-[#4b0082] hover:text-[#ee2b7a] transition-colors duration-300">
                <span className="w-2 h-2 bg-[#ee5e17] rounded-full"></span>
                Atención Virtual y Presencial
              </li>
              <li className="flex items-center gap-2 text-[#4b0082] hover:text-[#ee2b7a] transition-colors duration-300">
                <span className="w-2 h-2 bg-[#dc3c55] rounded-full"></span>
                Educación Nutricional
              </li>
              <li className="flex items-center gap-2 text-[#4b0082] hover:text-[#ee2b7a] transition-colors duration-300">
                <span className="w-2 h-2 bg-[#e3a0ef] rounded-full"></span>
                Nutrición Deportiva
              </li>
            </ul>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            className="bg-white/60 backdrop-blur-xl rounded-2xl p-6 border-2 border-white/70 shadow-xl hover:bg-white/70 transition-all duration-300 md:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-to-r from-[#dc3c55] to-[#e3a0ef]">
                <FaHeart className="text-white text-lg" />
              </div>
              <h3 className="text-xl font-semibold text-[#4b0082]">Sígueme</h3>
            </div>
            
            <div className="flex flex-row items-center justify-center gap-4 w-full">
              <motion.a
                href="https://wa.me/5492804628180?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20con%20la%20Licenciada%20Pamela%20Weissberg"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white shadow-lg hover:shadow-[#25D366]/50 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/nutricionpamelaweissberg/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#E4405F] to-[#C13584] text-white shadow-lg hover:shadow-[#E4405F]/50 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram className="text-xl" />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/pamela.weissberg.9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#1877F2] to-[#166FE5] text-white shadow-lg hover:shadow-[#1877F2]/50 transition-all duration-300"
                aria-label="Facebook"
              >
                <FaFacebook className="text-xl" />
              </motion.a>
              <motion.a
                href="https://www.threads.net/@nutricionpamelaweissberg?xmt=AQGzWhg650K-AucOImcHRH5AKoypMl2DKwcGeSI70n-SqC0"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-[#000] to-[#333] text-white shadow-lg hover:shadow-black/50 transition-all duration-300"
                aria-label="Threads"
              >
                <SiThreads className="text-xl" />
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Línea divisoria con gradiente */}
        <motion.div
          className="w-full h-px bg-gradient-to-r from-transparent via-[#4b0082]/50 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.2 }}
          viewport={{ once: true }}
        />

        {/* Footer inferior con créditos */}
        <motion.div
          className="text-center space-y-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-[#4b0082]/80 text-sm md:text-base">
            &copy; {currentYear} Licenciada en Nutrición Pamela Weissberg. Todos los derechos reservados.
          </p>
          
          <motion.p 
            className="text-[#4b0082] text-sm md:text-base flex items-center justify-center gap-2 flex-wrap"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <span>Desarrollado con</span>
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
                color: ['#e3a0ef', '#ee5e17', '#dc3c55', '#e3a0ef']
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: 'easeInOut' 
              }}
              className="inline-block"
            >
              <FaHeart className="text-red-500" />
            </motion.span>
            <span>por</span>
            <motion.a
              href="https://devcraftpablo.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#e3a0ef] to-[#ee5e17] hover:from-[#ee5e17] hover:to-[#dc3c55] transition-all duration-300 underline decoration-2 underline-offset-4 hover:decoration-[#ee5e17]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Pablo Proboste
            </motion.a>
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
