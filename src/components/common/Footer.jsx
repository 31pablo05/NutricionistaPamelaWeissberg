import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { SiThreads } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring' }}
      className="relative z-20 bg-gradient-to-br from-[#e1a1ed]/80 via-[#f3e8ff]/80 to-[#ee5e17]/80 backdrop-blur-2xl border-t-2 border-white/30 rounded-t-3xl shadow-2xl overflow-hidden pt-10 pb-4 px-2"
      aria-label="Pie de página"
    >
      {/* Fondo decorativo animado */}
      <motion.div
        className="pointer-events-none absolute -top-24 -left-24 w-96 h-96 bg-gradient-to-br from-pink-200/40 to-purple-200/40 rounded-full blur-3xl animate-spin-slow z-0"
        aria-hidden="true"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl animate-spin-slow z-0"
        aria-hidden="true"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch md:space-x-40 space-y-14 md:space-y-0">
          {/* Información de contacto */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col items-start md:items-start md:justify-start md:text-left text-left space-y-4 bg-white/60 backdrop-blur-xl rounded-2xl p-4 md:p-6 shadow-xl border border-white/40 break-words max-w-full"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1, type: 'spring' }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#ee2b7a] via-[#ee5e17] to-[#df9fe9] text-white text-xs font-bold shadow-md animate-pulse">Contacto</span>
            </div>
            {/* Teléfono */}
            <motion.p
              className="text-base flex flex-row flex-wrap items-center gap-2 min-w-0"
              whileHover={{ scale: 1.07, x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaPhoneAlt className="text-[#e3a0ef] text-xl shrink-0" />
              <span className="font-semibold shrink-0">Cel:</span>
              <a
                href="tel:+5492804628180"
                className="truncate hover:text-[#ee2b7a] text-base font-bold transition-colors duration-300 max-w-[160px] md:max-w-none"
                style={{ wordBreak: 'break-all' }}
                title="+54 9 280 4628180"
              >
                +54 9 280 4628180
              </a>
            </motion.p>
            {/* Email */}
            <motion.p
              className="text-base flex flex-row flex-wrap items-center gap-2 min-w-0"
              whileHover={{ scale: 1.07, x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaEnvelope className="text-[#e3a0ef] text-xl shrink-0" />
              <span className="font-semibold shrink-0">Email:</span>
              <a
                href="mailto:info@pamelaweisberg.com"
                className="truncate hover:text-[#ee2b7a] text-base font-bold transition-colors duration-300 max-w-[160px] md:max-w-none"
                style={{ wordBreak: 'break-all' }}
                title="info@pamelaweisberg.com"
              >
                info@pamelaweisberg.com
              </a>
            </motion.p>
            {/* Dirección */}
            <motion.p
              className="text-base flex flex-row flex-wrap items-center gap-2 min-w-0"
              whileHover={{ scale: 1.07, x: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <FaMapMarkerAlt className="text-[#e3a0ef] text-xl shrink-0" />
              <span className="font-semibold shrink-0">Dirección:</span>
              <span className="truncate max-w-[160px] md:max-w-none" title="Trelew, Chubut, Argentina">Trelew, Chubut, Argentina</span>
            </motion.p>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col items-center md:items-end md:justify-end text-right gap-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: 'spring' }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col w-full">
              <div className="flex items-center gap-3 mb-2 w-full">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#ee2b7a] via-[#ee5e17] to-[#df9fe9] text-white text-xs font-bold shadow-md animate-pulse text-left">Redes</span>
              </div>
              <div className="flex justify-start md:justify-end space-x-7 w-full">
              <motion.a
                href="https://wa.me/5492804628180?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20consulta%20con%20la%20Licenciada%20Pamela%20Weissberg"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.18, rotate: 8, boxShadow: '0 0 24px #25D36699' }}
                whileFocus={{ scale: 1.12, boxShadow: '0 0 24px #25D366cc' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="rounded-full bg-white/70 backdrop-blur-lg p-3 md:p-4 text-[1.7rem] md:text-[2.2rem] shadow-xl border-2 border-white/60 hover:text-[#25D366] focus:text-[#25D366] hover:bg-[#25D366]/10 focus:bg-[#25D366]/20 transition-all duration-300"
                aria-label="Enlace a WhatsApp"
              >
                <FaWhatsapp />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/nutricionpamelaweissberg/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.18, rotate: 8, boxShadow: '0 0 24px #e1306c99' }}
                whileFocus={{ scale: 1.12, boxShadow: '0 0 24px #e1306ccc' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="rounded-full bg-white/70 backdrop-blur-lg p-3 md:p-4 text-[1.7rem] md:text-[2.2rem] shadow-xl border-2 border-white/60 hover:text-[#e1306c] focus:text-[#e1306c] hover:bg-[#e1306c]/10 focus:bg-[#e1306c]/20 transition-all duration-300"
                aria-label="Enlace a Instagram"
              >
                <FaInstagram />
              </motion.a>
              <motion.a
                href="https://www.facebook.com/pamela.weissberg.9"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.18, rotate: 8, boxShadow: '0 0 24px #1877f399' }}
                whileFocus={{ scale: 1.12, boxShadow: '0 0 24px #1877f3cc' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="rounded-full bg-white/70 backdrop-blur-lg p-3 md:p-4 text-[1.7rem] md:text-[2.2rem] shadow-xl border-2 border-white/60 hover:text-[#1877f3] focus:text-[#1877f3] hover:bg-[#1877f3]/10 focus:bg-[#1877f3]/20 transition-all duration-300"
                aria-label="Enlace a Facebook"
              >
                <FaFacebook />
              </motion.a>
              <motion.a
                href="mailto:info@pamelaweisberg.com"
                whileHover={{ scale: 1.18, rotate: 8, boxShadow: '0 0 24px #e3a0ef99' }}
                whileFocus={{ scale: 1.12, boxShadow: '0 0 24px #e3a0efcc' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="rounded-full bg-white/70 backdrop-blur-lg p-3 md:p-4 text-[1.7rem] md:text-[2.2rem] shadow-xl border-2 border-white/60 hover:text-[#e3a0ef] focus:text-[#e3a0ef] hover:bg-[#e3a0ef]/10 focus:bg-[#e3a0ef]/20 transition-all duration-300"
                aria-label="Enlace al correo electrónico"
              >
                <FaEnvelope />
              </motion.a>
              <motion.a
                href="https://www.threads.net/@nutricionpamelaweissberg?xmt=AQGzWhg650K-AucOImcHRH5AKoypMl2DKwcGeSI70n-SqC0"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.18, rotate: 8, boxShadow: '0 0 24px #00000099' }}
                whileFocus={{ scale: 1.12, boxShadow: '0 0 24px #000000cc' }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="rounded-full bg-white/70 backdrop-blur-lg p-3 md:p-4 text-[1.7rem] md:text-[2.2rem] shadow-xl border-2 border-white/60 hover:text-black focus:text-black hover:bg-black/10 focus:bg-black/20 transition-all duration-300"
                aria-label="Enlace a Threads"
              >
                <SiThreads />
              </motion.a>
            </div>
          </div>
        </motion.div>
        </div>

        {/* Mensaje de desarrollo */}
        <motion.div
          className="text-center mt-10 text-xs md:text-base text-[#4b0082] bg-white/60 rounded-xl py-3 px-4 shadow-md backdrop-blur-md mx-auto max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, type: 'spring' }}
          viewport={{ once: true }}
        >
          <p>
            &copy; {currentYear} Licenciada en Nutrición Pamela Weissberg. Todos los derechos reservados. | Desarrollado por{' '}
            <span
              role="link"
              tabIndex={0}
              className="font-semibold underline hover:text-[#ee2b7a] transition-colors duration-300 cursor-pointer"
              onClick={() => window.open('https://pablo-web-app.vercel.app/', '_blank', 'noopener,noreferrer')}
              onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') window.open('https://pablo-web-app.vercel.app/', '_blank', 'noopener,noreferrer'); }}
            >
              Pablo Proboste
            </span>
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
