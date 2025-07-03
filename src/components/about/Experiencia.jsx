import React, { useState, useEffect, useRef } from 'react';

const capacitaciones = [
  { 
    title: "Estudió Lic. Nutricion en UCALP", 
    institution: "Universidad Católica de La Plata UCALP", 
    year: 2017, 
    description: "Especialización en el tratamiento nutricional de patologías clínicas y metabólicas.", 
    image: "/images/diplomado_nutricion.jpg" 
  },
  { 
    title: "Certificación en Nutrición Deportiva", 
    institution: "Escuela XYZ", 
    year: 2020, 
    description: "Formación en nutrición para mejorar el rendimiento deportivo y la recuperación muscular.", 
    image: "/images/nutricion_deportiva.jpg" 
  },
  { 
    title: "Curso de Psicología de la Alimentación", 
    institution: "Instituto DEF", 
    year: 2019, 
    description: "Estudio del impacto psicológico en la alimentación y hábitos saludables.", 
    image: "/images/psicologia_alimentacion.jpg" 
  },
];

// Hook personalizado para detectar cuando un elemento está visible
const useIntersectionObserver = (triggerOnce = true, threshold = 0.1) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true);
        if (triggerOnce) {
          setHasIntersected(true);
        }
      } else {
        if (!triggerOnce) {
          setIsIntersecting(false);
        }
      }
    }, {
      threshold: threshold
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [triggerOnce, threshold]);

  return {
    ref,
    inView: triggerOnce ? hasIntersected || isIntersecting : isIntersecting
  };
};

const Experiencia = () => {
  const { ref: refFormacion, inView: inViewFormacion } = useIntersectionObserver(true, 0.5);
  const { ref: refVocacion, inView: inViewVocacion } = useIntersectionObserver(true, 0.5);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCapacitacion, setSelectedCapacitacion] = useState(null);

  const openModal = (capacitacion) => {
    setSelectedCapacitacion(capacitacion);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedCapacitacion(null);
  };

  return (
    <div className="p-12 bg-gradient-to-r from-[#e8ebf0] to-[#f5f8fc] rounded-lg shadow-xl space-y-12">
          {/* Formación Académica y Capacitaciones */}
      <section
        className={`transition-all duration-800 ease-out opacity-0 transform ${inViewFormacion ? 'opacity-100 translate-y-0' : 'translate-y-8'}`}
        ref={refFormacion}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Formación Académica y Capacitaciones
        </h3>
        <ul className="list-none pl-0 space-y-3">
          {capacitaciones.map((cap, index) => (
            <li 
              key={index} 
              className="text-lg text-gray-700 mb-2 flex items-center cursor-pointer hover:text-orange-600 transition-colors"
              onClick={() => openModal(cap)}
            >
              <span className="text-orange-500 font-semibold">{cap.title}</span> - <span className="text-gray-600">{cap.institution} ({cap.year})</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Mi Vocación */}
      <section
        className={`transition-all duration-800 ease-out opacity-0 transform ${inViewVocacion ? 'opacity-100 translate-y-0' : 'translate-y-8'}`}
        ref={refVocacion}
      >
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mi Vocación como Nutricionista</h3>
        <p className="text-xl text-gray-700 leading-relaxed">
          Mi pasión por la nutrición va más allá de la ciencia. Me motiva profundamente poder ayudar a las personas a mejorar su relación con la comida y a llevar una vida más saludable. Creo que todos pueden aprender a disfrutar de una alimentación equilibrada sin restricciones extremas, y mi objetivo es guiar a mis pacientes a lograrlo de forma sostenible.
        </p>
      </section>

      {/* Modal */}
      {modalOpen && selectedCapacitacion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-6">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button 
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="text-2xl font-semibold text-gray-800 mb-3">{selectedCapacitacion.title}</h3>
            <p className="text-lg text-gray-600 mb-3">{selectedCapacitacion.institution} ({selectedCapacitacion.year})</p>
            <p className="text-gray-700">{selectedCapacitacion.description}</p>
            {selectedCapacitacion.image && (
              <img src={selectedCapacitacion.image} alt={selectedCapacitacion.title} className="mt-4 rounded-lg shadow-md w-full" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Experiencia;
