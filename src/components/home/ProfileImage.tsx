
import React from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
}

const ProfileImage = ({ src, alt }: ProfileImageProps) => {
  return (
    <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full shrink-0 profile-image overflow-hidden">
      <img alt={alt} className="w-full h-full object-cover" src={src} />
    </div>
  );
};

export default ProfileImage;
