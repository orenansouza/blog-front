import React from 'react';
import Image from 'next/image'

const ProfileImage = ({ imageUrl, altText }) => {
  let profileImageUrl = imageUrl ? `../../backend/${imageUrl}` : '/notFountImage.jpg';

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <Image
      src={profileImageUrl}
      alt={altText || 'Imagem de perfil'}
      width={45}
      height={45}
      className="rounded-full h-16 w-16 object-cover m-5"
    />
  );
};

export default ProfileImage;