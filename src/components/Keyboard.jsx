// src/components/Keyboard.js
import React from "react";

const Keyboard = ({ onKeyPress }) => {
  const rows = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "⌫"],
  ];

  return (
    <div className="w-full flex flex-col items-center gap-1 mt-4">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex w-full justify-center gap-1">
          {row.map((key) => (
            <button
              key={key}
              onClick={() => onKeyPress(key)}
              className={`flex-1 text-sm sm:text-base md:text-lg font-bold 
                          p-2 sm:p-3 md:p-4 rounded-md 
                          bg-gray-300 dark:bg-gray-600 dark:text-white 
                          active:bg-gray-400 dark:active:bg-gray-700
                          ${
                            key === "ENTER" || key === "⌫"
                              ? "w-[15%] sm:w-[12%] md:w-[10%] lg:w-[8%]"
                              : "w-[8%] sm:w-[7%] md:w-[6%] lg:w-[5%]"
                          }`}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;
