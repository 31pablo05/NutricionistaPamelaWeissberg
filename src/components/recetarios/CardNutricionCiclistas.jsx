// src/components/cards/CardNutricionCiclistas.js
import React from 'react';

const CardNutricionCiclistas = ({ isActive, onToggle }) => {
  const plan = {
    title: "Nutrición para Ciclistas",
    description: "Recetas específicas para ciclistas, enfocadas en el equilibrio adecuado de nutrientes.",
    items: [
      "Comidas previas a paseos largos",
      "Recetas para recuperación muscular",
      "Snacks fáciles de llevar",
    ],
    imgSrc: "/assets/imagesCard/nutriciclistas.webp",
    recipeDetails: "Recetas para mejorar el rendimiento ciclista y recuperación.",
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:bg-[#fce7f8] h-full">
      <div className="relative overflow-hidden rounded-lg h-40 mb-4">
        <img
          src={plan.imgSrc}
          alt={plan.title}
          className="w-full h-full object-cover rounded-t-lg"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-40 rounded-t-lg"></div>
      </div>
      <h3 className="text-xl font-semibold text-[#dc3c55] mb-4">{plan.title}</h3>
      <p className="text-lg text-gray-700 mb-4">{plan.description}</p>
      <ul className="text-left text-gray-600 mb-4">
        {plan.items.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      <button
        onClick={onToggle}
        className="bg-[#dc3c55] text-white py-2 px-4 rounded-lg hover:bg-[#c02a47] transition duration-300"
      >
        {isActive ? "Ocultar Recetario" : "Ver Recetarios"}
      </button>
      {isActive && (
        <div className="mt-4 p-4 bg-[#f9f9f9] border border-gray-300 rounded-lg">
          <h4 className="font-semibold text-[#e3a0ef]">Detalles del Recetario:</h4>
          <p>{plan.recipeDetails}</p>
        </div>
      )}
    </div>
  );
};

export default CardNutricionCiclistas;
