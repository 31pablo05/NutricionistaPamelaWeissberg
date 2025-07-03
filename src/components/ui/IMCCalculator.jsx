import React, { useState } from "react";
import { motion } from "framer-motion";

const IMCCalculator = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  const calculateBMI = () => {
    if (!weight || !height || height <= 0 || weight <= 0) {
      setError("Por favor, ingresa valores válidos.");
      return;
    }
    setError("");

    const bmiValue = (weight / (height * height)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setCategory("Bajo peso");
    else if (bmiValue < 24.9) setCategory("Peso normal");
    else if (bmiValue < 29.9) setCategory("Sobrepeso");
    else setCategory("Obesidad");

    setShowModal(true);
  };

  return (
    <div className="p-8 bg-white rounded-xl max-w-md mx-auto shadow-lg border border-gray-200">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Calculadora de IMC
      </h2>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <div className="mb-4">
        <label className="block text-lg text-gray-600">Peso (kg):</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Ejemplo: 70"
          className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-6">
        <label className="block text-lg text-gray-600">Altura (m):</label>
        <input
          type="number"
          step="0.01"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Ejemplo: 1.75"
          className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <motion.button
        onClick={calculateBMI}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-full p-3 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 transition duration-300 shadow-md"
      >
        Calcular IMC
      </motion.button>

      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg text-center max-w-xs border border-gray-300"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-800">
              Tu IMC es: <span className="text-blue-600 font-bold">{bmi}</span>
            </h3>
            <p className={`text-lg mt-2 font-medium ${
              category === "Bajo peso" ? "text-yellow-500" :
              category === "Peso normal" ? "text-green-500" :
              category === "Sobrepeso" ? "text-orange-500" : "text-red-500"
            }`}>Categoría: {category}</p>
            <p className="text-sm text-gray-500 mt-2">
              Consulta a un profesional de la salud si tienes dudas sobre tu IMC.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
            >
              Cerrar
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default IMCCalculator;