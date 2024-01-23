import React from 'react';

const ButtonWithBorder = ({ text }) => {
  return (
    <button className="border-primary border w-full rounded-lg px-4 py-2 text-primary hover:bg-primary hover:text-white focus:outline-none focus:shadow-outline">
      {text}
    </button>
  );
};

export default ButtonWithBorder;