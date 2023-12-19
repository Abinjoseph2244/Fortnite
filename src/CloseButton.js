// src/CloseButton.js

import React, { useState } from 'react';

const CloseButton = () => {
  const [isRotated, setIsRotated] = useState(false);

  const handleRotate = () => {
    setIsRotated(!isRotated);
  };

  return (
    <div
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        transform: isRotated ? 'rotate(45deg)' : 'rotate(0deg)',
      }}
      onClick={handleRotate}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </div>
  );
};

export default CloseButton;
