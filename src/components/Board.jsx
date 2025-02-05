import React from 'react';
import Row from './Row';

function Board({ guesses, currentGuess, solution }) {
    const emptyRows = Math.max(0, 6 - guesses.length - 1); 
    const rows = [...guesses, currentGuess, ...Array(emptyRows).fill('')];
    

  return (
    <div className="grid gap-2">
      {rows.map((guess, index) => (
        <Row key={index} guess={guess} solution={solution} />
      ))}
    </div>
  );
}

export default Board;