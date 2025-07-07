import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import CalendarWhatsappTurno from '../components/home/CalendarWhatsappTurno.jsx';

const initialFormData = {
  nombre: '',
  apellido: '',
  telefono: '',
  email: '',
  fecha: '',
  hora: '',
  obraSocial: '',
};

const TurnosOnline = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [mensajeConfirmacion, setMensajeConfirmacion] = useState('');
  const [errores, setErrores] = useState({});
  const [loading, setLoading] = useState(false);

  // Actualiza el estado de formData según el input que cambia
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Función de validación centralizada
  const validateForm = () => {
    const errors = {};
    const { nombre, apellido, telefono, email, fecha, hora } = formData;

    if (!nombre || !apellido || !telefono || !email || !fecha || !hora) {
      errors.campos = "Todos los campos son obligatorios.";
    }
    if (!/^\d{10}$/.test(telefono)) {
      errors.telefono = "Por favor, ingrese un número de teléfono válido (10 dígitos).";
    }
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      errors.email = "Por favor, ingrese un correo electrónico válido.";
    }
    if (!fecha) {
      errors.fecha = "Por favor, ingrese una fecha válida.";
    } else {
      const dia = new Date(fecha).getDay();
      if (dia < 1 || dia > 5) {
        errors.fecha = "Los turnos solo se pueden reservar de lunes a viernes.";
      }
    }
    if (!(hora >= '09:00' && hora <= '18:00')) {
      errors.hora = "La hora debe estar entre las 9:00 y las 18:00.";
    }
    return errors;
  };

  // Resetea el formulario y los errores
  const resetForm = () => {
    setFormData(initialFormData);
    setErrores({});
  };

  const enviarSolicitud = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrores(validationErrors);
      return;
    }

    setLoading(true);

    try {
      // Enviar correo al cliente
      const templateParamsCliente = {
        ...formData,
        destinatarioCliente: formData.email,
      };
      await emailjs.send('service_607oegd', 'template_e3rjb7i', templateParamsCliente, '7XFY1wKOtBnkHIUkt');

      // Enviar correo a la profesional
      const templateParamsNutricionista = {
        ...formData,
        destinatarioNutricionista: 'pabloproboste64@gmail.com',
      };
      await emailjs.send('service_607oegd', 'template_vgnm6ne', templateParamsNutricionista, '7XFY1wKOtBnkHIUkt');

      setMensajeConfirmacion('Tu solicitud de turno ha sido enviada. Pronto recibirás un correo de confirmación.');
      resetForm();
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      setMensajeConfirmacion('Hubo un problema al enviar tu solicitud. Inténtalo de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-10 bg-gradient-to-br from-[#f3e8ff] via-[#ffe5f7] to-[#ffecd2] overflow-hidden">
      {/* Fondo decorativo animado */}
      <motion.div
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] bg-gradient-to-br from-[#ee5e17]/40 via-[#dd9fea]/40 to-[#fceff8]/60 rounded-full blur-3xl animate-spin-slow z-0"
        aria-hidden="true"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-[#dd9fea]/40 via-[#ee5e17]/40 to-[#fceff8]/60 rounded-full blur-3xl animate-spin-slow z-0"
        aria-hidden="true"
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
      />
      <motion.div
        className="relative z-10 w-full max-w-xl bg-white/80 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/60 px-2 md:px-8 py-8 md:py-12 mb-10"
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: 'spring' }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-[#dd9fea] via-[#ee5e17] to-[#fceff8] bg-clip-text text-transparent drop-shadow-lg text-center mb-2 tracking-wide"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring' }}
        >
          Reservar Turno por Email
        </motion.h2>
        <p className="text-center text-sm text-gray-500 mb-6">Completá el formulario para solicitar tu turno por email. Si preferís reservar por WhatsApp, usá el calendario más abajo.</p>
        {mensajeConfirmacion && (
          <motion.p
            className="text-green-600 mb-4 text-center font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {mensajeConfirmacion}
          </motion.p>
        )}
        <form onSubmit={enviarSolicitud} className="space-y-4">
          {/* Campo Nombre */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}>
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={formData.nombre}
              onChange={handleChange}
              className={`w-full p-3 border ${errores.campos && !formData.nombre ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dd9fea] text-lg transition-all duration-300 bg-white/80`}
              autoComplete="given-name"
            />
            {errores.campos && !formData.nombre && <p className="text-red-500 text-sm mt-1">{errores.campos}</p>}
          </motion.div>
          {/* Campo Apellido */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.15 }} viewport={{ once: true }}>
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={formData.apellido}
              onChange={handleChange}
              className={`w-full p-3 border ${errores.campos && !formData.apellido ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dd9fea] text-lg transition-all duration-300 bg-white/80`}
              autoComplete="family-name"
            />
            {errores.campos && !formData.apellido && <p className="text-red-500 text-sm mt-1">{errores.campos}</p>}
          </motion.div>
          {/* Campo Teléfono */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true }}>
            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              value={formData.telefono}
              onChange={handleChange}
              className={`w-full p-3 border ${errores.telefono ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ee5e17] text-lg transition-all duration-300 bg-white/80`}
              autoComplete="tel"
            />
            {errores.telefono && <p className="text-red-500 text-sm mt-1">{errores.telefono}</p>}
          </motion.div>
          {/* Campo Email */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.25 }} viewport={{ once: true }}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 border ${errores.email ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ee5e17] text-lg transition-all duration-300 bg-white/80`}
              autoComplete="email"
            />
            {errores.email && <p className="text-red-500 text-sm mt-1">{errores.email}</p>}
          </motion.div>
          {/* Campo Obra Social (opcional) */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }}>
            <input
              type="text"
              name="obraSocial"
              placeholder="Obra Social (opcional)"
              value={formData.obraSocial}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#dd9fea] text-lg transition-all duration-300 bg-white/80"
              autoComplete="organization"
            />
          </motion.div>
          {/* Campo Fecha */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 }} viewport={{ once: true }}>
            <input
              type="date"
              name="fecha"
              value={formData.fecha}
              onChange={handleChange}
              className={`w-full p-3 border ${errores.fecha ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ee5e17] text-lg transition-all duration-300 bg-white/80`}
            />
            {errores.fecha && <p className="text-red-500 text-sm mt-1">{errores.fecha}</p>}
          </motion.div>
          {/* Campo Hora */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} viewport={{ once: true }}>
            <input
              type="time"
              name="hora"
              value={formData.hora}
              onChange={handleChange}
              className={`w-full p-3 border ${errores.hora ? 'border-red-500' : 'border-gray-300'} rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ee5e17] text-lg transition-all duration-300 bg-white/80`}
            />
            {errores.hora && <p className="text-red-500 text-sm mt-1">{errores.hora}</p>}
          </motion.div>
          {/* Botón de Enviar */}
          <motion.button
            type="submit"
            className={`w-full p-3 bg-gradient-to-r from-[#feb47b] via-[#ee5e17] to-[#dd9fea] hover:from-[#ff7e5f] hover:to-[#dd9fea] text-white font-semibold rounded-xl focus:outline-none focus:ring-4 focus:ring-[#dd9fea]/30 transition-all duration-300 shadow-lg mt-4 ${loading ? 'cursor-not-allowed opacity-70' : ''}`}
            disabled={loading}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            {loading ? 'Enviando...' : 'Enviar Solicitud'}
          </motion.button>
        </form>
      </motion.div>
      {/* Turnos por WhatsApp: opción alternativa */}
      <div className="w-full flex justify-center">
        <CalendarWhatsappTurno />
      </div>
    </div>
  );
};

export default TurnosOnline;
