
import React, { useState } from 'react';

const videos = [
  {
    src: '/assets/videos/Losdíasenelcole.mp4',
    title: 'Los días en el cole',
    thumb: '/assets/imagesCard/General.webp',
  },
  {
    src: '/assets/videos/¡LICUADO FRESCODE VERANO!.mp4',
    title: 'Licuado fresco de verano',
    thumb: '/assets/imagesCard/General.webp',
  },
  {
    src: '/assets/videos/EnelDíadelAmor.mp4',
    title: 'En el Día del Amor',
    thumb: '/assets/imagesCard/General.webp',
  },
];

const VideoRecetario = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState(null);

  const openModal = (idx) => {
    setActiveVideo(idx);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setActiveVideo(null);
  };

  return (
    <div className="relative w-full px-2 py-10 flex flex-col items-center justify-center bg-gradient-to-br from-[#f3e8ff]/60 via-[#e3a0ef]/30 to-[#ee5e17]/20 rounded-3xl shadow-xl backdrop-blur-md">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10 bg-gradient-to-r from-[#e3a0ef] via-[#ee5e17] to-[#dc3c55] bg-clip-text text-transparent animate-fade-in-up drop-shadow-lg">
        Recetario en Video
      </h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {videos.map((video, idx) => (
          <div
            key={video.src}
            className="relative group rounded-2xl overflow-hidden shadow-2xl bg-white/60 backdrop-blur-md border border-white/30 hover:scale-[1.03] hover:shadow-[0_8px_32px_0_rgba(227,160,239,0.15)] transition-all duration-300 cursor-pointer"
            tabIndex={0}
            aria-label={`Ver video: ${video.title}`}
            onClick={() => openModal(idx)}
            onKeyDown={e => (e.key === 'Enter' ? openModal(idx) : undefined)}
          >
            {/* Imagen de fondo o poster */}
            <img
              src={video.thumb}
              alt={video.title}
              className="w-full h-48 object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
            {/* Overlay y botón play */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#e3a0ef]/70 via-[#ee5e17]/40 to-transparent flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                className="rounded-full bg-white/80 p-4 shadow-lg hover:bg-[#ee5e17]/90 focus:outline-none focus:ring-4 focus:ring-[#e3a0ef]/60 animate-pulse"
                aria-label={`Reproducir video: ${video.title}`}
                tabIndex={-1}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ee5e17" className="w-10 h-10">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25v13.5l13.5-6.75-13.5-6.75z" />
                </svg>
              </button>
              <span className="mt-4 text-lg font-semibold text-white drop-shadow-lg text-center px-2">
                {video.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de video grande */}
      {modalOpen && activeVideo !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 p-4 flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-[#ee5e17] hover:text-[#e3a0ef] text-3xl font-bold focus:outline-none focus:ring-2 focus:ring-[#e3a0ef]/60 rounded-full"
              onClick={closeModal}
              aria-label="Cerrar video"
            >
              ×
            </button>
            <video
              className="w-full h-auto rounded-xl mt-6 mb-2 shadow-lg"
              controls
              autoPlay
              tabIndex={0}
            >
              <source src={videos[activeVideo].src} type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
            <div className="text-lg font-semibold text-[#ee5e17] text-center mt-2">
              {videos[activeVideo].title}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoRecetario;
