import React, { useState, useEffect } from 'react';
import Board from './components/Board';
import Keyboard from './components/Keyboard';
import Header from './components/Header';
import { getRandomWord } from './utils/words';
import './index.css';

function App() {
  const [solution, setSolution] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState('');
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
  const [keyStatus, setKeyStatus] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (guesses.includes(solution)) {
      setGameStatus('won');
    } else if (guesses.length >= 6) {
      setGameStatus('lost');
    }
  }, [guesses, solution]);

  const updateKeyStatus = (guess) => {
    const newKeyStatus = { ...keyStatus };
    guess.split('').forEach((letter, index) => {
      if (solution[index] === letter) {
        newKeyStatus[letter] = 'correct';
      } else if (solution.includes(letter)) {
        if (newKeyStatus[letter] !== 'correct') {
          newKeyStatus[letter] = 'present';
        }
      } else {
        if (!newKeyStatus[letter]) {
          newKeyStatus[letter] = 'absent';
        }
      }
    });
    setKeyStatus(newKeyStatus);
  };

  const handleKeyPress = (key) => {
    if (gameStatus !== 'playing') return;

    if (key === 'Enter' && currentGuess.length === 5) {
      setGuesses((prev) => {
        const updatedGuesses = [...prev, currentGuess];
        updateKeyStatus(currentGuess);
        return updatedGuesses;
      });
      setCurrentGuess('');
    } else if (key === 'Backspace') {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (/^[a-zA-Z]$/.test(key) && currentGuess.length < 5) {
      setCurrentGuess(currentGuess + key.toUpperCase());
    }
  };

  const handleNewGame = () => {
    setSolution(getRandomWord());
    setGuesses([]);
    setCurrentGuess('');
    setGameStatus('playing');
    setKeyStatus({});
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`relative min-h-screen h-screen flex flex-col items-center justify-center p-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black  bg-[linear-gradient(60deg,_rgb(247,_149,_51),_rgb(243,_112,_85),_rgb(239,_78,_123),_rgb(161,_102,_171),_rgb(80,_115,_184),_rgb(16,_152,_173),_rgb(7,_179,_155),_rgb(111,_186,_130))]  '}`}>
      <Header gameStatus={gameStatus} onNewGame={handleNewGame} />
      <button onClick={toggleDarkMode} className="absolute top-4 right-4 px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-600">
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Board guesses={guesses} currentGuess={currentGuess} solution={solution} animate={gameStatus !== 'playing'} />
      <Keyboard onKeyPress={handleKeyPress} keyStatus={keyStatus} />

      {gameStatus === 'lost' && (
        <div className="absolute inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-3xl font-bold text-red-600 mb-4">Game Over!</h2>
            <p className="text-xl">The correct word was: <span className="font-semibold">{solution}</span></p>
            <button
              onClick={handleNewGame}
              className="mt-4 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Play Again
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
