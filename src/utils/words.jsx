
const words = ['REACT', 'GUESS', 'CLONE', 'WORDS','APPLE'];

export function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

export default words