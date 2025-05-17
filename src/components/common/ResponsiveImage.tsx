
import React from 'react';
import { motion } from 'framer-motion';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  loading?: 'lazy' | 'eager';
  animate?: boolean;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  className = '',
  sizes = '100vw',
  loading = 'lazy',
  animate = false
}) => {
  // Generate multiple image sizes for srcSet
  // This is a simplified version, in a real implementation
  // you would use a proper image optimization service/CDN
  const generateSrcSet = () => {
    // Extract file extension
    const extension = src.split('.').pop();
    const basePath = src.substring(0, src.lastIndexOf('.'));
    
    if (src.startsWith('/lovable-uploads/') || !basePath) {
      // For lovable uploads, we don't have different sizes
      return src;
    }

    return `
      ${basePath}-small.${extension} 400w,
      ${basePath}-medium.${extension} 800w,
      ${basePath}.${extension} 1200w
    `;
  };

  const imageElement = (
    <img
      src={src}
      srcSet={generateSrcSet()}
      sizes={sizes}
      alt={alt}
      loading={loading}
      className={`w-full h-auto rounded-md ${className}`}
    />
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden rounded-md"
      >
        {imageElement}
      </motion.div>
    );
  }

  return imageElement;
};

export default ResponsiveImage;
