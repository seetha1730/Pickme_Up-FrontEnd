import React from 'react';

const SolidButton = ({ text }) => {
  return (
    <button className="bg-primary rounded-lg w-full px-4 py-2 text-white hover:bg-opacity-90 focus:outline-none focus:shadow-outline">
      {text}
    </button>
  );
};

export default SolidButton;