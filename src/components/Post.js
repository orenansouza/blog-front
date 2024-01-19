import React from 'react';
import ProfileImage from './ProfileImage';

const Post = ({ username, content }) => {
  return (
    <div className="border-2 border-solid border-gray-300">
      <div className="flex items-center mb-4">
        <ProfileImage />
        <span>{username}</span>
        <div className="w-full max-w-md h-full max-h-md bg-white shadow-md rounded-md p-4 bg-red">
          <textarea
            className="w-full bg-gray-100 rounded-md p-2 resize-y focus:outline-none focus:ring focus:border-blue-500"
            rows="4"
            placeholder="O que está acontecendo?"
          ></textarea>
          <div className="flex justify-end mt-2">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Postar</button>
          </div>
        </div>
      </div>
      <p>{content}</p>
    </div>

  );
};

export default Post;