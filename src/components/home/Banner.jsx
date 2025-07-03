import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import Fondovideo from '/assets/videos/fondobanner5.mp4';

const Banner = () => {
  const navigate = useNavigate();
  const redirigirATurnos = () => {
    navigate('/turnos-online');
  };

  // Variantes de animación para diferentes elementos
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28">
      <Helmet>
        <title>Pamela Weissberg - Nutricionista en Trelew | Transformando Vidas</title>
        <meta
          name="description"
          content="Licenciada en Nutrición en Trelew. Planes personalizados, asesoría nutricional profesional y acompañamiento integral para un estilo de vida saludable."
        />
        <meta
          name="keywords"
          content="nutricionista Trelew, nutrición personalizada, asesoría nutricional, Pamela Weissberg, salud integral, bienestar"
        />
      </Helmet>

      {/* Video de fondo con overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={Fondovideo} type="video/mp4" />
          Tu navegador no soporta el video de fondo.
        </video>
        {/* Overlay con gradiente para mejor legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50"></div>
      </div>

      {/* Contenido principal */}
      <motion.div
        className="relative z-10 container mx-auto px-4 py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section con grid layout moderno */}
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Columna izquierda - Contenido textual */}
          <motion.div 
            className="space-y-8"
            variants={itemVariants}
          >
            {/* Badge profesional */}
            <motion.div
              className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-medium text-gray-700">Disponible para consultas</span>
            </motion.div>

            {/* Título principal con efectos modernos */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-3"
                variants={itemVariants}
              >
                <motion.span
                  className="text-4xl"
                  animate={{ rotate: [0, 20, 0, -20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  👋
                </motion.span>
                <span className="text-2xl lg:text-3xl font-semibold text-white">Hola, soy</span>
              </motion.div>
              
              <motion.h1 
                className="text-5xl lg:text-7xl font-black text-white leading-tight"
                variants={itemVariants}
              >
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Pamela
                </span>
                <br />
                <span className="text-white">Weissberg</span>
              </motion.h1>
            </div>

            {/* Subtítulo con animación de escritura */}
            <motion.div
              className="space-y-4"
              variants={itemVariants}
            >
              <h2 className="text-xl lg:text-2xl text-gray-200 font-light leading-relaxed">
                Licenciada en{' '}
                <span className="font-semibold text-pink-300">Nutrición</span>
                <br />
                Transformando vidas a través de la{' '}
                <span className="font-semibold text-purple-300">alimentación consciente</span>
              </h2>
              
              {/* Características principales */}
              <div className="flex flex-wrap gap-3 mt-6">
                {['Planes Personalizados', 'Consultas Online', 'Seguimiento Integral'].map((feature, index) => (
                  <motion.span
                    key={feature}
                    className="group relative px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full border border-white/30 cursor-pointer overflow-hidden transition-all duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      backgroundColor: 'rgba(255,255,255,0.3)',
                      borderColor: 'rgba(236, 72, 153, 0.8)',
                      boxShadow: '0 0 25px rgba(236, 72, 153, 0.6), 0 0 50px rgba(236, 72, 153, 0.3)'
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Efecto de brillo que se mueve al hacer hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-500"></div>
                    
                    {/* Partículas brillantes */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-1 left-2 w-1 h-1 bg-pink-300 rounded-full animate-ping"></div>
                      <div className="absolute top-2 right-3 w-1 h-1 bg-purple-300 rounded-full animate-ping delay-200"></div>
                      <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-500"></div>
                    </div>
                    
                    {/* Texto con efecto de resplandor */}
                    <span className="relative z-10 font-medium group-hover:text-pink-100 group-hover:drop-shadow-lg transition-all duration-300">
                      {feature}
                    </span>
                    
                    {/* Borde interno brillante */}
                    <div className="absolute inset-0 rounded-full border border-transparent group-hover:border-pink-300/50 group-hover:shadow-inner transition-all duration-300"></div>
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Botones de acción mejorados */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 pt-8"
              variants={itemVariants}
            >
              <motion.button
                onClick={redirigirATurnos}
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-2xl shadow-2xl overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <span>Agenda tu consulta</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.8)' }}
                whileTap={{ scale: 0.98 }}
              >
                Conocer más
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Imagen profesional */}
          <motion.div 
            className="relative flex justify-center"
            variants={itemVariants}
          >
            {/* Elementos decorativos de fondo */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="w-80 h-80 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              ></motion.div>
            </div>

            {/* Imagen principal con efectos modernos */}
            <motion.div
              className="relative z-10"
              animate={floatingAnimation}
            >
              <motion.div
                className="relative group"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src="/assets/imagesPame/pame1.webp"
                  alt="Pamela Weissberg - Nutricionista Profesional"
                  className="w-full max-w-lg h-auto object-cover rounded-3xl shadow-2xl transition-all duration-500 group-hover:shadow-3xl"
                />
                
                {/* Borde animado que no tapa la imagen */}
                <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-pink-400 transition-all duration-500 pointer-events-none"></div>
                <div className="absolute inset-0 rounded-3xl ring-0 group-hover:ring-4 group-hover:ring-purple-400/50 transition-all duration-500 pointer-events-none"></div>
              </motion.div>
            </motion.div>

            {/* Tarjetas flotantes con información - Responsive */}
            {/* Tarjeta superior - Años de experiencia */}
            <motion.div
              className="absolute -top-4 left-1/2 transform -translate-x-1/2 -translate-y-full lg:-top-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 bg-white/90 backdrop-blur-sm p-3 lg:p-4 rounded-2xl shadow-xl z-20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2 lg:gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm">
                  5+
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-xs lg:text-sm">Años de experiencia</p>
                  <p className="text-xs text-gray-600">en nutrición clínica</p>
                </div>
              </div>
            </motion.div>

            {/* Tarjeta inferior - Pacientes transformados */}
            <motion.div
              className="absolute -bottom-8 -left-4 lg:-bottom-12 lg:left-1/2 lg:transform lg:-translate-x-1/2 bg-white/90 backdrop-blur-sm p-2 lg:p-3 rounded-2xl shadow-xl z-20 w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xs lg:text-sm">
                  500+
                </div>
                <div className="whitespace-nowrap">
                  <p className="font-semibold text-gray-800 text-xs lg:text-sm">Pacientes</p>
                  <p className="text-xs text-gray-600">transformados</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
