import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

// Cambia este número por el de Pamela
const WHATSAPP_NUMBER = '5492804628180'; // Formato internacional sin +

function isWeekday(date) {
  const day = date.getDay();
  return day >= 1 && day <= 5; // Lunes a viernes
}

function getAvailableHours(date) {
  // Si no es día hábil, no hay horarios
  if (!isWeekday(date)) return [];
  // Horarios: 09:00-12:00 y 14:00-20:00
  const hours = [];
  for (let h = 9; h <= 12; h++) hours.push(`${h.toString().padStart(2, '0')}:00`);
  for (let h = 14; h <= 20; h++) hours.push(`${h.toString().padStart(2, '0')}:00`);
  return hours;
}

const CalendarWhatsappTurno = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHour, setSelectedHour] = useState('');
  const [step, setStep] = useState(1);

  // Estado para el mes y año actualmente mostrado
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

  // Genera la cuadrícula del mes actual mostrado
  const firstDay = new Date(viewYear, viewMonth, 1);
  const lastDay = new Date(viewYear, viewMonth + 1, 0);
  const daysInMonth = [];
  let startDay = firstDay.getDay();
  startDay = startDay === 0 ? 6 : startDay - 1;
  for (let i = 0; i < startDay; i++) {
    daysInMonth.push(null);
  }
  for (let d = 1; d <= lastDay.getDate(); d++) {
    daysInMonth.push(new Date(viewYear, viewMonth, d));
  }
  while (daysInMonth.length % 7 !== 0) {
    daysInMonth.push(null);
  }
  const monthLabel = new Date(viewYear, viewMonth, 1).toLocaleString('es-AR', { month: 'long', year: 'numeric' });

  // Navegación de meses
  const handlePrevMonth = () => {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear(viewYear - 1);
    } else {
      setViewMonth(viewMonth - 1);
    }
  };
  const handleNextMonth = () => {
    setViewMonth((viewMonth + 1) % 12);
    if (viewMonth === 11) {
      setViewYear(viewYear + 1);
    }
  };

  const handleDateClick = (date) => {
    setSelectedDate(date.toISOString().slice(0, 10));
    setSelectedHour('');
    setStep(2);
  };

  const handleHourClick = (hour) => {
    setSelectedHour(hour);
    setStep(3);
  };

  const handleReset = () => {
    setSelectedDate('');
    setSelectedHour('');
    setStep(1);
  };

  const whatsappMsg =
    `Hola Pamela, quisiera reservar un turno para el día ${selectedDate.split('-').reverse().join('/')} a las ${selectedHour}. ¿Está disponible ese horario?`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <motion.section
      className="relative max-w-lg mx-auto bg-gradient-to-br from-[#f3e8ff] via-[#ffe5f7] to-[#ffecd2] rounded-[2.5rem] shadow-2xl border-2 border-pink-200/40 px-4 py-10 my-10 overflow-visible"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, type: 'spring' }}
    >
      {/* Logo tipo imán de heladera */}
      <motion.div
        className="flex flex-col items-center mb-[-0.5rem]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, type: 'spring' }}
      >
        <img
          src="/assets/svgLogo/logotransp.svg"
          alt="Logo Pamela Weissberg"
          className="w-32 h-32 object-contain drop-shadow-[0_4px_24px_rgba(238,43,122,0.25)] -mt-2 mb-0 hover:scale-105 transition-transform duration-300"
        />
      </motion.div>
      <h2 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-[#ee2b7a] via-[#ee5e17] to-[#dd9fea] bg-clip-text text-transparent drop-shadow-lg text-center mb-1 tracking-wide flex items-center justify-center gap-2">
        <FaWhatsapp className="inline-block text-[#25d366] text-3xl" /> Reservá tu turno fácil
      </h2>
      <div className="space-y-8">
        {step === 1 && (
          <div>
            <p className="mb-4 text-center text-lg font-semibold text-gray-700">Seleccioná una fecha disponible:</p>
            <div className="flex flex-col gap-8">
              <div className="w-full">
                <div className="flex items-center justify-center mb-2 gap-2">
                  <button
                    className="px-2 py-1 rounded-full bg-white/80 border border-pink-100 text-[#ee2b7a] font-bold shadow hover:bg-pink-100/60 disabled:opacity-40 disabled:cursor-not-allowed"
                    onClick={handlePrevMonth}
                    disabled={viewYear === today.getFullYear() && viewMonth === today.getMonth()}
                    aria-label="Mes anterior"
                  >
                    &#8592;
                  </button>
                  <span className="text-base font-bold text-[#ee2b7a] bg-white/80 rounded-full px-4 py-1 shadow border border-pink-100 uppercase tracking-wide">
                    {monthLabel}
                  </span>
                  <button
                    className="px-2 py-1 rounded-full bg-white/80 border border-pink-100 text-[#ee2b7a] font-bold shadow hover:bg-pink-100/60"
                    onClick={handleNextMonth}
                    aria-label="Mes siguiente"
                  >
                    &#8594;
                  </button>
                </div>
                <div className="grid grid-cols-7 gap-2 bg-white/90 rounded-2xl p-3 shadow-inner border-2 border-pink-100">
                  {["L", "M", "M", "J", "V", "S", "D"].map((d, i) => (
                    <span key={d + i} className="text-xs font-bold text-[#ee5e17] text-center select-none">{d}</span>
                  ))}
                  {daysInMonth.map((date, i) => {
                    if (!date) {
                      return <span key={monthLabel + '-empty-' + i} className="w-12 h-12" />;
                    }
                    const isPast = date < today.setHours(0,0,0,0);
                    const isEnabled = isWeekday(date) && !isPast;
                    return isEnabled ? (
                      <motion.button
                        key={date.toISOString()}
                        className={`w-12 h-12 flex flex-col items-center justify-center rounded-xl border-2 font-bold text-base shadow-md transition-all duration-200 hover:scale-110 focus:ring-2 focus:ring-[#ee2b7a] ${selectedDate === date.toISOString().slice(0, 10)
                          ? 'bg-gradient-to-br from-[#ee2b7a]/90 via-[#ee5e17]/80 to-[#dd9fea]/90 text-white border-[#ee2b7a] scale-110 shadow-xl'
                          : 'bg-white/80 text-[#ee2b7a] border-pink-200/60 hover:bg-pink-100/60'}`}
                        onClick={() => handleDateClick(date)}
                        whileTap={{ scale: 0.95 }}
                        whileHover={{ y: -4, boxShadow: '0 8px 24px 0 #ee2b7a33' }}
                      >
                        <span>{date.getDate()}</span>
                      </motion.button>
                    ) : (
                      <span
                        key={date.toISOString()}
                        className="w-12 h-12 flex items-center justify-center rounded-xl text-gray-400 bg-gray-100 border-2 border-gray-200 cursor-not-allowed select-none opacity-60"
                      >
                        {date.getDate()}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
        {step === 2 && (
          <div>
            <p className="mb-4 text-center text-lg font-semibold text-gray-700">Elegí un horario:</p>
            {(() => {
              const hours = getAvailableHours(selectedDate ? new Date(selectedDate + 'T12:00:00') : new Date());
              if (hours.length === 0) {
                return <div className="text-center text-pink-600 font-semibold bg-pink-50 rounded-xl p-4 mb-2">No hay horarios disponibles para este día.</div>;
              }
              return (
                <div className="flex flex-wrap gap-3 justify-center bg-white/90 rounded-2xl p-4 shadow-inner border-2 border-pink-100">
                  {hours.map((hour) => (
                    <motion.button
                      key={hour}
                      className={`px-5 py-3 rounded-xl border-2 text-base font-bold transition-all duration-200 shadow hover:scale-110 focus:ring-2 focus:ring-[#ee2b7a] ${selectedHour === hour
                        ? 'bg-gradient-to-br from-[#ee2b7a]/90 via-[#ee5e17]/80 to-[#dd9fea]/90 text-white border-[#ee2b7a] scale-110 shadow-xl'
                        : 'bg-white/80 text-[#ee2b7a] border-pink-200/60 hover:bg-pink-100/60'}`}
                      onClick={() => handleHourClick(hour)}
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ y: -2, boxShadow: '0 4px 12px 0 #ee2b7a33' }}
                    >
                      {hour} hs
                    </motion.button>
                  ))}
                </div>
              );
            })()}
            <button className="block mx-auto mt-6 text-sm text-[#ee2b7a] underline" onClick={handleReset}>Volver a elegir fecha</button>
          </div>
        )}
        {step === 3 && (
          <div className="text-center">
            <p className="mb-6 text-lg font-semibold text-gray-700">¿Confirmás tu consulta para el <span className="text-[#ee2b7a]">{selectedDate.split('-').reverse().join('/')}</span> a las <span className="text-[#ee5e17]">{selectedHour} hs</span>?</p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[#ee2b7a] via-[#dd9fea] to-[#ee5e17] text-white font-extrabold text-lg shadow-xl hover:bg-[#ee2b7a]/90 transition-all duration-300 focus:ring-4 focus:ring-[#ee2b7a]/40 border-2 border-[#ee2b7a]"
            >
              <FaWhatsapp className="text-2xl text-[#25d366]" /> Reservar por WhatsApp
            </a>
            <button className="block mx-auto mt-6 text-sm text-[#ee2b7a] underline" onClick={handleReset}>Volver a elegir</button>
          </div>
        )}
      </div>
      {/* Imagen de Pamela señalando el calendario */}
      <div className="flex flex-col items-center mt-[-1.5rem]">
        <img
          src="/assets/imagesPame/pame10.svg"
          alt="Pamela señalando el calendario"
          className="w-52 md:w-72 lg:w-80 h-auto drop-shadow-xl animate-bounce-slow"
          style={{ marginTop: '-1.5rem' }}
        />
        <span className="mt-0.5 text-base text-[#ee2b7a] font-bold text-center select-none">¡Reservá tu turno fácil!</span>
      </div>
    </motion.section>
  );
};

export default CalendarWhatsappTurno;
