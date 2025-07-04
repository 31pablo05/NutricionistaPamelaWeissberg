import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const SectionVideo = () => {
  const [videoReady, setVideoReady] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);

  // Cuando el video está listo, inicia la animación de desvanecimiento
  const handleVideoReady = () => {
    setVideoReady(true);
    setTimeout(() => setHideLogo(true), 600); // 600ms para el fade
  };

  return (
    <section
      className="relative bg-gradient-to-br from-[#e6d8ff] via-[#f3e8ff] to-[#df9fe9] px-2 py-8 sm:px-4 md:px-8 lg:px-16 xl:px-32 flex flex-col items-center justify-center min-h-[60vh] rounded-2xl shadow-2xl my-8 overflow-hidden"
      aria-label="Video institucional de Pamela Weissberg"
    >
      {/* Fondo decorativo animado */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-pink-200/40 to-purple-200/40 rounded-full blur-3xl animate-spin-slow z-0" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-indigo-200/40 rounded-full blur-3xl animate-spin-slow z-0" aria-hidden="true" />

      <h2 className="relative z-10 text-[#4b0082] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-snug bg-gradient-to-r from-[#a855f7] via-[#ec4899] to-[#4b0082] bg-clip-text text-transparent drop-shadow-lg">
        Detección de Patologías Gastrointestinales y Dieta Especializada <span className="block text-lg sm:text-xl md:text-2xl font-semibold text-[#6d28d9]">con Pamela Weissberg</span>
      </h2>

      <div
        className="relative w-full max-w-[400px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-[520px] xl:max-w-[600px] 2xl:max-w-[650px] mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-white/40 backdrop-blur-lg group transition-all duration-500"
        style={{ aspectRatio: '9/16' }}
      >
        {/* Imagen de logo como placeholder mientras carga el video */}
        {!hideLogo && (
          <img
            src="/assets/logos/logo1.webp"
            alt="Logo Pamela Weissberg"
            className={`absolute inset-0 w-full h-full object-contain bg-white z-10 animate-pulse transition-opacity duration-700 ${videoReady ? 'opacity-0' : 'opacity-100'}`}
            style={{ aspectRatio: '9/16', maxWidth: '80%', maxHeight: '80%' }}
            draggable="false"
          />
        )}
        {/* Player responsivo y accesible */}
        <ReactPlayer
          url="/assets/videos/Nuestranutri.mp4"
          controls
          playing
          loop
          muted
          width="100%"
          height="100%"
          style={{ width: '100%', height: '100%', aspectRatio: '9/16', objectFit: 'cover' }}
          onReady={handleVideoReady}
          config={{
            file: {
              attributes: {
                title: 'Video institucional de Pamela Weissberg',
                tabIndex: 0,
                'aria-label': 'Video institucional de Pamela Weissberg',
                poster: '/assets/images/platoSaludable.webp',
                controlsList: 'nodownload',
                preload: 'auto',
              },
            },
          }}
        />
        {/* Overlays decorativos solo visuales, nunca encima del video */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl z-0 transition-opacity duration-500 group-hover:opacity-80" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-1000 translate-x-[-100%] group-hover:translate-x-[100%] z-0" />
      </div>

      {/* Descripción accesible para SEO y lectores de pantalla */}
      <p className="relative z-10 mt-6 text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed bg-white/60 rounded-xl px-4 py-2 shadow-md backdrop-blur-md">
        Mirá este video para conocer cómo la detección temprana de patologías gastrointestinales y una dieta personalizada pueden transformar tu salud y bienestar.
      </p>
    </section>
  );
};

export default SectionVideo;
