import React from 'react';

const InputField = (props) => {
  return (
    <input
      placeholder={props.placeholder}
      type={props.type}
      className='shadow appearance-none mt-4 border border-primary rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
    />
  );
};

export default InputField;