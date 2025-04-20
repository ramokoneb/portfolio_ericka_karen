
import React from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
}

const ProfileImage = ({ src, alt }: ProfileImageProps) => {
  return (
    <div className="relative w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full mx-auto mb-4 md:mb-8 border-4 border-[#1A3554] overflow-hidden">
      <img alt={alt} className="w-full h-full object-cover" src={src} />
      <div className="absolute top-0 right-0 text-xl md:text-2xl lg:text-3xl">
        🇧🇷
      </div>
    </div>
  );
};

export default ProfileImage;
