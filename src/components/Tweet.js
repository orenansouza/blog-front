import React from 'react';

import ProfileImage from './ProfileImage';

const Tweet = ({ user: { name, profileImagePath }, content }) => {
  return (
    <div className="border-2 border-solid border-gray-300 p-4 mb-4 rounded-md">
      <div className="flex items-center mb-2">
        <ProfileImage />
        <span className='text-white'>{name}</span>
      </div>
      <p className='text-white'>{content}</p>
    </div>
  );
};

export default Tweet;