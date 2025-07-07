import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CardNutricionDeportivaGeneral from '../components/recetarios/CardNutricionDeportivaGeneral';
import CardNutricionAtletasFuerza from '../components/recetarios/CardNutricionAtletasFuerza';
import CardNutricionResistencia from '../components/recetarios/CardNutricionResistencia';
import CardNutricionCiclistas from '../components/recetarios/CardNutricionCiclistas';
import CardNutricionTriatletas from '../components/recetarios/CardNutricionTriatletas';
import CardNutricionDietasEspeciales from '../components/recetarios/CardNutricionDietasEspeciales';
import VideoRecetario from '../components/recetarios/VideoRecetario';

const Recetarios = () => {
  const [activeRecipe, setActiveRecipe] = useState(null);

  // Función para manejar la visibilidad de cada recetario (sin verificación de suscripción)
  const handleShowRecipe = (index) => {
    setActiveRecipe(activeRecipe === index ? null : index);
  };

  return (
    <section className="relative w-full min-h-screen py-16 px-2 md:px-8 overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-[#e3a0ef]/40 via-[#f3e8ff]/60 to-[#ee5e17]/40 pb-10 sm:pb-16">
      {/* Fondo animado decorativo */}
      <motion.div
        className="pointer-events-none absolute -top-40 -left-40 w-[800px] h-[800px] bg-gradient-to-br from-[#e3a0ef]/80 via-[#ee5e17]/70 to-[#f3e8ff]/80 rounded-full blur-2xl animate-spin-slow z-0"
        aria-hidden="true"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 0.95 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[800px] h-[800px] bg-gradient-to-br from-[#ee5e17]/80 via-[#e3a0ef]/70 to-[#f3e8ff]/80 rounded-full blur-2xl animate-spin-slow z-0"
        aria-hidden="true"
        initial={{ opacity: 0.7 }}
        animate={{ opacity: 0.95 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />

      {/* Título y grupos de nutrición */}
      <motion.h2
        className="mt-12 text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-[#e3a0ef] via-[#ee5e17] to-[#dc3c55] bg-clip-text text-transparent drop-shadow-lg mb-14 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, type: 'spring' }}
        viewport={{ once: true }}
        aria-label="Grupos de Nutrición Deportiva"
      >
        Grupos de Nutrición Deportiva
      </motion.h2>

      {/* Separador decorativo */}
      <div className="w-32 h-1 rounded-full bg-gradient-to-r from-[#e3a0ef] via-[#ee5e17] to-[#dc3c55] opacity-60 mb-10 mx-auto" aria-hidden="true"></div>

      {/* Animación de entrada para la grilla completa */}
      <motion.div
        className="relative z-10 w-full max-w-6xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Cards con microinteracción y accesibilidad */}
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(227,160,239,0.15)' }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <CardNutricionDeportivaGeneral
              isActive={activeRecipe === 0}
              onToggle={() => handleShowRecipe(0)}
              aria-label="Ver recetas de nutrición deportiva general"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(238,94,23,0.12)' }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.1 }}
          >
            <CardNutricionAtletasFuerza
              isActive={activeRecipe === 1}
              onToggle={() => handleShowRecipe(1)}
              aria-label="Ver recetas para atletas de fuerza"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(220,60,85,0.12)' }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
          >
            <CardNutricionResistencia
              isActive={activeRecipe === 2}
              onToggle={() => handleShowRecipe(2)}
              aria-label="Ver recetas para resistencia"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(227,160,239,0.10)' }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.3 }}
          >
            <CardNutricionCiclistas
              isActive={activeRecipe === 3}
              onToggle={() => handleShowRecipe(3)}
              aria-label="Ver recetas para ciclistas"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(238,94,23,0.10)' }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.4 }}
          >
            <CardNutricionTriatletas
              isActive={activeRecipe === 4}
              onToggle={() => handleShowRecipe(4)}
              aria-label="Ver recetas para triatletas"
            />
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 rgba(220,60,85,0.10)' }}
            transition={{ type: 'spring', stiffness: 300, delay: 0.5 }}
          >
            <CardNutricionDietasEspeciales
              isActive={activeRecipe === 5}
              onToggle={() => handleShowRecipe(5)}
              aria-label="Ver recetas para dietas especiales"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Separador decorativo entre grilla y video */}
      <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#ee5e17] via-[#e3a0ef] to-[#dc3c55] opacity-40 my-12 mx-auto" aria-hidden="true"></div>

      {/* Componente de video al final, con accesibilidad y padding extra en mobile */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto mt-8 sm:mt-16 mb-4 sm:mb-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        viewport={{ once: true }}
        aria-label="Video de recetario"
      >
        <VideoRecetario />
      </motion.div>
    </section>
  );
};

export default Recetarios;
