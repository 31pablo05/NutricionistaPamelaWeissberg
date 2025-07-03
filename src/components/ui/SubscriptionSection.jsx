import React from 'react';

const SubscriptionSection = () => {
  return (
    <div className="py-20 px-5 bg-[#f8f8f8] text-center">
      <h2 className="text-4xl font-bold text-[#424874] mb-12 uppercase">Suscripciones Mensuales</h2>

      {/* Descripción general de la suscripción */}
      <div className="mb-10 text-lg text-[#555] space-y-4">
        <p>🌟 BIENVENIDO A SALA TUMEJORVERSIÓN CON LA LICENCIADA PAMELA. Al suscribirte, accedes a un enfoque integral y personalizado para alcanzar tus objetivos de salud y bienestar.</p>
        <p>✅ Plan de Alimentación Personalizado: Diseñado específicamente para ti, con 30 días de menús adaptados a tus necesidades y metas nutricionales. Cada día, disfrutarás de opciones variadas y equilibradas.</p>
        <p>✅ Asesoramiento Nutricional Continuo: Pamela te brindará seguimiento constante a través de WhatsApp, asegurando que siempre te sientas apoyada en tu proceso.</p>
        <p>✅ Recetas Saludables: Accede a un recetario exclusivo con más de 200 recetas que complementan tu plan de alimentación, facilitando que comer sano sea fácil y placentero.</p>
        <p>🎯 Adaptado a tus necesidades: Planes de alimentación ajustados a diferentes objetivos, ya sea para tonificar, perder peso o mantener una dieta equilibrada.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-10 mt-5">
        {/* Plan Básico */}
        <div className="bg-white rounded-lg p-10 w-[350px] shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl text-[#fc3f8d] mb-3">Plan Básico</h3>
          <p className="text-xl font-bold text-[#264653] mb-4">$35.000 / mensual (ARGENTINA)</p>
          <p className="text-[#555] mb-4">Acceso a recetarios, atención virtual mensual y planes nutricionales estándar. ¡Perfecto para comenzar!</p>
          <div>
            <p>💳 Podés abonar con Mercado Pago, tarjeta de crédito o débito.</p>
          </div>
          <button className="bg-[#fc3f8d] text-white py-3 px-6 rounded-lg mt-5 transition-colors duration-300 hover:bg-[#424874] hover:transform hover:translate-y-[-2px]">
            Suscribirse
          </button>
        </div>

        {/* Plan Premium */}
        <div className="bg-white rounded-lg p-10 w-[350px] shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
          <h3 className="text-2xl text-[#fc3f8d] mb-3">Plan Premium</h3>
          <p className="text-xl font-bold text-[#264653] mb-4">U$D 35 / año (OTROS PAÍSES)</p>
          <p className="text-[#555] mb-4">Todos los beneficios de los planes anteriores, más consultas ilimitadas, asesoría de suplementos y atención personalizada.</p>
          <div>
            <p>💳 Uruguay, Chile, Colombia, España, México, EEUU (apto en más de 50 países). Tarjeta de débito, crédito (deben estar habilitadas para compras internacionales) y PayPal. Conversión automática a tu moneda nacional.</p>
          </div>
          <button className="bg-[#fc3f8d] text-white py-3 px-6 rounded-lg mt-5 transition-colors duration-300 hover:bg-[#424874] hover:transform hover:translate-y-[-2px]">
            Suscribirse
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionSection;
