import React from 'react';

const keys = [
  'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
  'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
  'Z', 'X', 'C', 'V', 'B', 'N', 'M',
  'Backspace', 'Enter'
];

const statusClasses = {
  correct: 'bg-green-500 text-white',
  present: 'bg-yellow-500 text-white',
  absent: 'bg-gray-500 text-white',
  default: 'bg-gray-300 hover:bg-gray-400 text-black',
};

function Keyboard({ onKeyPress, keyStatus }) {
  return (
    <div className="grid grid-cols-10 gap-2 mt-4">
      {keys.map((key) => (
        <button
          key={key}
          onClick={() => onKeyPress(key)}
          className={`px-4 py-2 rounded-lg transition-transform duration-200 ease-in-out ${statusClasses[keyStatus[key]] || statusClasses.default} ${keyStatus[key] ? 'scale-105' : ''}`}
        >
          {key}
        </button>
      ))}
    </div>
  );
}

export default Keyboard;
