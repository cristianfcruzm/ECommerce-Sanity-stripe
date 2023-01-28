import React from 'react';

const Button = ({ children, ...props }) => {
  return (
    <button
      className="btn-c-1"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;