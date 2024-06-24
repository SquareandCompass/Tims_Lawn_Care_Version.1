// Import necessary dependencies
import React from 'react';

// Define the Button component
const Button = ({ children, type, onClick }) => {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
};

// Export the Button component
export default Button;
