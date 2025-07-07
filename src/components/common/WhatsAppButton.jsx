import React, { useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = ({
  phoneNumber = '5492804628180',
  message = '¡Hola! Quiero agendar una consulta o turno con la Licenciada Pamela Weissberg.'
}) => {
  const formattedPhoneNumber = phoneNumber.replace(/\D/g, '');
  const btnRef = useRef(null);

  // Ripple effect
  const handleRipple = (e) => {
    const button = btnRef.current;
    if (!button) return;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.nativeEvent.offsetX - radius}px`;
    circle.style.top = `${e.nativeEvent.offsetY - radius}px`;
    circle.classList.add('wa-ripple');
    const ripple = button.getElementsByClassName('wa-ripple')[0];
    if (ripple) ripple.remove();
    button.appendChild(circle);
  };

  const handleClick = (e) => {
    handleRipple(e);
    const url = `https://wa.me/${formattedPhoneNumber}?text=${encodeURIComponent(message)}`;
    setTimeout(() => window.open(url, '_blank'), 180); // Espera breve para ver el ripple
  };

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl focus:outline-none flex items-center justify-center group"
      aria-label="Contactar por WhatsApp"
      style={{
        background: 'linear-gradient(135deg, #25D366 60%, #A8FF78 100%)',
        boxShadow: '0 0 24px 4px #25d36655, 0 2px 16px 0 #0002',
        transition: 'box-shadow 0.3s, transform 0.2s',
      }}
      tabIndex={0}
    >
      {/* Glow animado */}
      <span className="absolute inset-0 rounded-full pointer-events-none animate-wa-glow" />
      {/* Icono WhatsApp */}
      <FaWhatsapp className="relative text-white text-4xl drop-shadow-lg group-hover:scale-110 group-hover:drop-shadow-[0_0_16px_#25D366] transition-transform duration-200" />
      {/* Ripple effect */}
      <style>{`
        .wa-ripple {
          position: absolute;
          border-radius: 50%;
          background: rgba(255,255,255,0.4);
          animation: wa-ripple 0.4s linear;
          pointer-events: none;
          z-index: 10;
        }
        @keyframes wa-ripple {
          to {
            opacity: 0;
            transform: scale(2.5);
          }
        }
        .animate-wa-glow {
          box-shadow: 0 0 32px 8px #25d36655, 0 0 0 0 #A8FF78;
          animation: wa-glow 2s infinite alternate;
        }
        @keyframes wa-glow {
          0% { box-shadow: 0 0 32px 8px #25d36655, 0 0 0 0 #A8FF78; }
          100% { box-shadow: 0 0 48px 16px #A8FF7888, 0 0 0 0 #25d366; }
        }
      `}</style>
    </button>
  );
};

export default WhatsAppButton;
