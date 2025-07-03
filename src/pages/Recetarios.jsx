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
    <section className="relative w-full min-h-screen py-16 px-2 md:px-8 overflow-hidden flex flex-col items-center justify-center bg-gradient-to-br from-[#e3a0ef]/40 via-[#f3e8ff]/60 to-[#ee5e17]/40">
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
      {/* Componente de video al inicio */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring' }}
        viewport={{ once: true }}
      >
        <VideoRecetario />
      </motion.div>

      <motion.h2
        className="mt-12 text-4xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-[#e3a0ef] via-[#ee5e17] to-[#dc3c55] bg-clip-text text-transparent drop-shadow-lg mb-14 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, type: 'spring' }}
        viewport={{ once: true }}
      >
        Grupos de Nutrición Deportiva
      </motion.h2>
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <CardNutricionDeportivaGeneral
            isActive={activeRecipe === 0}
            onToggle={() => handleShowRecipe(0)}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <CardNutricionAtletasFuerza
            isActive={activeRecipe === 1}
            onToggle={() => handleShowRecipe(1)}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <CardNutricionResistencia
            isActive={activeRecipe === 2}
            onToggle={() => handleShowRecipe(2)}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <CardNutricionCiclistas
            isActive={activeRecipe === 3}
            onToggle={() => handleShowRecipe(3)}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <CardNutricionTriatletas
            isActive={activeRecipe === 4}
            onToggle={() => handleShowRecipe(4)}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <CardNutricionDietasEspeciales
            isActive={activeRecipe === 5}
            onToggle={() => handleShowRecipe(5)}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Recetarios;
