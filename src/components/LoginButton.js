import React from 'react';

const LoginButton = ({ onClick }) => {
  return (
    <button class="bg-blue-500 text-white px-4 py-2 text-base cursor-pointer rounded-md transition-colors duration-300 hover:bg-blue-700" onClick={onClick}>
      Login
    </button>
  );
};

export default LoginButton;