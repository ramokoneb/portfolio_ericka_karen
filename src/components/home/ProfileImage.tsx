
import React from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
}

const ProfileImage = ({ src, alt }: ProfileImageProps) => {
  return (
    <div className="w-28 h-28 md:w-36 md:h-36 lg:w-48 lg:h-48 rounded-full mx-auto mb-4 md:mb-8 border-4 border-[#1A3554] overflow-hidden">
      <img alt={alt} className="w-full h-full object-cover" src={src} />
    </div>
  );
};

export default ProfileImage;
