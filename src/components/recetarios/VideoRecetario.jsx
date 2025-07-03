import React from 'react';

const VideoRecetario = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Recetario en Video</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Video 1 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <video className="w-full h-auto" controls>
            <source src="/assets/videos/Losdíasenelcole.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        {/* Video 2 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <video className="w-full h-auto" controls>
            <source src="/assets/videos/¡LICUADO FRESCODE VERANO!.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        {/* Video 3 */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
          <video className="w-full h-auto" controls>
            <source src="/assets/videos/EnelDíadelAmor.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoRecetario;
