import React from 'react';

function Tile({ letter, status }) {
  const statusClasses = {
    correct: 'bg-green-500 text-white',
    present: 'bg-yellow-500 text-white',
    absent: 'bg-gray-500 text-white',
    '': 'bg-white border border-gray-300',
  };

  return (
    <div
      className={`w-12 h-12 flex items-center justify-center text-xl font-bold rounded-md ${statusClasses[status]}`}
    >
      {letter}
    </div>
  );
}

export default Tile;