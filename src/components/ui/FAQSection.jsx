import React, { useState } from 'react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: '¿Qué incluye el plan básico?',
      answer: 'El plan básico incluye recetarios, atención virtual mensual, y planes nutricionales estándar.'
    },
    {
      question: '¿Cómo puedo pagar los planes?',
      answer: 'Puedes pagar con tarjeta de crédito, PayPal, o transferencia bancaria. Todos los pagos son seguros.'
    },
    {
      question: '¿Se puede cancelar la suscripción?',
      answer: 'Sí, puedes cancelar tu suscripción en cualquier momento, pero los reembolsos dependen de la política de la nutricionista.'
    },
    {
      question: '¿Cómo es la atención virtual?',
      answer: 'La atención virtual es una consulta en línea personalizada donde recibirás recomendaciones nutricionales adaptadas a tus necesidades.'
    }
  ];

  return (
    <div className="bg-transparent py-16 px-4">
      <h2 className="text-3xl text-center text-[#ee2b7a] mb-12 font-extrabold">Preguntas Frecuentes</h2>
      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-6">
            <div
              onClick={() => toggleFAQ(index)}
              className="bg-[#df9fe9] p-4 mb-2 rounded-lg cursor-pointer flex justify-between items-center text-[#ee5e17] text-lg font-semibold hover:bg-[#ee2b7a] transition-colors duration-300"
            >
              <span>{faq.question}</span>
              <span className="text-2xl">{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <p className="bg-[#f4f4f9] p-4 rounded-b-lg text-[#555] shadow-md transition-all duration-300">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
