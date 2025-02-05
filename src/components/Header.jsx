import React from 'react';

function Header({ gameStatus, onNewGame }) {
  return (
    <div className="text-center mb-4 ">
      <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/guess-game-img.png" className="w-100" alt="" />
      <h1 className="text-3xl font-bold text-green-800">WORDLE CLONE</h1>
      {gameStatus !== 'playing' && (
        <p className="text-xl mt-2">
          {gameStatus === 'won' ? '🎉 You Won!' : '😢 You Lost!'}
        </p>
      )}
      <button
        onClick={onNewGame}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        New Game
      </button>
    </div>
  );
}

export default Header;