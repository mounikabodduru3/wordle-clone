import React from 'react';
import Tile from './Tile';

function Row({ guess = '', solution }) {
  const getTileStatus = (letter, index) => {
    if (!solution) return '';
    if (solution[index] === letter) return 'correct';
    if (solution.includes(letter)) return 'present';
    return 'absent';
  };

  return (
    <div className="flex justify-center gap-2">
      {[...Array(5)].map((_, i) => (
        <Tile key={i} letter={guess[i] || ''} status={getTileStatus(guess[i], i)} />
      ))}
    </div>
  );
}

export default Row;