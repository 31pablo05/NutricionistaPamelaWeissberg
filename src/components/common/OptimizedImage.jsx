import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/**
 * Componente de imagen optimizada con:
 * - Lazy loading nativo
 * - Placeholder mientras carga
 * - Transición suave
 * - Manejo de errores
 * - Intersection Observer para mejor performance
 */
const OptimizedImage = ({
  src,
  alt,
  className = '',
  placeholderColor = '#e3a0ef',
  width,
  height,
  priority = false,
  onLoad,
  onError,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) return; // Si es prioritario, cargar inmediatamente

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Comenzar a cargar 50px antes de que entre en viewport
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [priority]);

  const handleLoad = (e) => {
    setIsLoaded(true);
    if (onLoad) onLoad(e);
  };

  const handleError = (e) => {
    setHasError(true);
    if (onError) onError(e);
  };

  return (
    <div
      ref={imgRef}
      className={`relative overflow-hidden ${className}`}
      style={{ width, height }}
    >
      {/* Placeholder mientras carga */}
      {!isLoaded && !hasError && (
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: `${placeholderColor}20` }}
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoaded ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-8 h-8 border-4 border-[#e3a0ef] border-t-transparent rounded-full animate-spin" />
        </motion.div>
      )}

      {/* Imagen principal */}
      {isInView && (
        <motion.img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          onLoad={handleLoad}
          onError={handleError}
          className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{
            transition: 'opacity 0.5s ease-in-out',
          }}
          {...props}
        />
      )}

      {/* Mensaje de error */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <span className="text-gray-500 text-sm">No se pudo cargar la imagen</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
