import { FC, useState } from 'react';
import { ImageOff } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
}

const ImageWithFallback: FC<ImageWithFallbackProps> = ({ 
  src, 
  alt, 
  className = '' 
}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Get the base URL from Vite's environment
  const baseUrl = import.meta.env.BASE_URL || '/';
  
  // Only prepend base URL if src starts with '/' (absolute path)
  const imageSrc = src.startsWith('/') ? `${baseUrl}${src.substring(1)}` : src;

  if (error) {
    return (
      <div 
        className={`flex items-center justify-center bg-gray-100 dark:bg-gray-800 ${className}`}
        role="img"
        aria-label={`Failed to load image: ${alt}`}
      >
        <ImageOff className="w-12 h-12 text-gray-400" />
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
          <div className="animate-pulse rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500"></div>
        </div>
      )}
      <img
        src={imageSrc}
        alt={alt}
        className={`${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={() => {
          console.error(`Failed to load image: ${imageSrc}`);
          setError(true);
          setLoading(false);
        }}
        onLoad={() => setLoading(false)}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithFallback;