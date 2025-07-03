// src/components/HabitTest.js

import React, { useState } from 'react';

const HabitTest = () => {
  const [score, setScore] = useState(0);

  const handleChange = (e) => {
    setScore(e.target.value);
  };

  const submitTest = () => {
    let result;
    if (score <= 5) {
      result = '¡Excelente! Tienes hábitos alimenticios muy saludables.';
    } else if (score <= 10) {
      result = 'Bien, pero podrías mejorar en algunos aspectos.';
    } else {
      result = 'Recomendamos mejorar tus hábitos alimenticios.';
    }
    alert(result);
  };

  return (
    <div className="p-6 bg-green-100 rounded-lg max-w-xs mx-auto shadow-md">
      <h2 className="text-gray-800 text-xl mb-5">Test de Hábitos Alimenticios</h2>
      <p className="text-gray-600 text-base">¿Con qué frecuencia comes alimentos procesados?</p>
      <input
        type="range"
        min="0"
        max="15"
        value={score}
        onChange={handleChange}
        className="w-full my-4"
      />
      <button
        onClick={submitTest}
        className="bg-orange-400 text-white py-2 px-4 rounded-md hover:bg-orange-500 transition-all"
      >
        Enviar Test
      </button>
    </div>
  );
};

export default HabitTest;
