import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({
  phoneNumber = '5492804628180',
  message = '¡Hola! Quiero agendar una consulta o turno con la Licenciada Pamela Weissberg.'
}) => {
  // Eliminamos cualquier carácter no numérico por si se pasa en otro formato.
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');

  const handleClick = () => {
    const url = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-4 bg-green-500 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 ease-in-out focus:outline-none flex items-center justify-center animate-bounce"
      aria-label="Contactar por WhatsApp"
    >
      <FaWhatsapp className="text-white text-4xl" />
    </button>
  );
};

export default WhatsAppButton;
