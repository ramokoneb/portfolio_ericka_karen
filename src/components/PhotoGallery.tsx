
import React from 'react';
import ResponsiveImage from './common/ResponsiveImage';

const PhotoGallery = () => {
  const photos = [
    '/lovable-uploads/e2e73bb9-62f1-4783-aa3d-581d0e812850.png',
    '/lovable-uploads/e3037ea7-d8d6-4b4b-93e4-8c53809308db.png',
    '/lovable-uploads/35b2eaf6-97c4-4393-83cf-69dc4783ab02.png',
    '/lovable-uploads/9b8266f1-1ee7-4fdb-865c-d0899ff7b007.png'
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 py-6">
      {photos.map((photo, index) => (
        <div key={index} className="image-container aspect-[4/3] rounded-lg overflow-hidden shadow-sm">
          <ResponsiveImage
            src={photo}
            alt={`Ericka Karen work sample ${index + 1}`}
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
