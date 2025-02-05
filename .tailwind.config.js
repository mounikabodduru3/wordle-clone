// tailwind.config.js
module.exports = {
    darkMode: 'class', // Enable dark mode using a class
    theme: {
      extend: {
        animation: {
          fadeIn: 'fadeIn 0.5s ease-out',
          shake: 'shake 0.5s ease-in-out',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          shake: {
            '0%': { transform: 'translateX(0)' },
            '25%': { transform: 'translateX(-5px)' },
            '50%': { transform: 'translateX(5px)' },
            '75%': { transform: 'translateX(-5px)' },
            '100%': { transform: 'translateX(0)' },
          },
        },
      },
    },
    plugins: [],
  };
  