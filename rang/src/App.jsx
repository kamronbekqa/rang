import React, { useState, useEffect } from 'react';

const ColorChanger = () => {
  const [color, setColor] = useState('red'); // Dastlabki rang

  // Ranglarni o'zgartiruvchi funksiya
  const changeColor = (newColor) => {
    setColor(newColor);
  };

  // Orqa fon rangini o'zgartirish uchun effekt
  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div
        className="w-48 h-48 rounded-lg shadow-lg"
        style={{ backgroundColor: color }}
      ></div>
      <div className="mt-4 space-x-2">
        {['red', 'green', 'blue'].map((btnColor) => (
          <button
            key={btnColor}
            className={`px-4 py-2 rounded-lg ${
              color === btnColor ? 'text-white' : 'text-gray-800'
            }`}
            style={{
              backgroundColor: btnColor,
              border: color === btnColor ? '2px solid black' : 'none',
            }}
            onClick={() => changeColor(btnColor)}
          >
            {btnColor.charAt(0).toUpperCase() + btnColor.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ColorChanger;
