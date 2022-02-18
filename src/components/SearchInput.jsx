import React from 'react';

const Inputs = ({ className, type, name, handleChange, placeholder }) => {
  return (
    <input
      className={className}
      type={type}
      name={name}
      onChange={handleChange}
      placeholder={placeholder}
    />
  );
};

export default Inputs;
