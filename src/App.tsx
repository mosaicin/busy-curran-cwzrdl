import { useState } from 'react';

interface SquareProps {
  value: string;
}

const Square = ({ value }: SquareProps) => (
  <button className="w-16 h-16 border-2 border-gray-400 rounded-lg flex items-center justify-center text-4xl">
    {value}
  </button>
);

const Board = () => {
  const [squares, setSquares] = useState(Array(64).fill(null));
  const [selectedSquare, setSelectedSquare] = useState(null);

  const handleClick = (index: number) => {
    if (selectedSquare === index) {
      setSelectedSquare(null);
    } else {
      setSelectedSquare(index);
    }
  };

  return (
    <div className="grid grid-cols-8 gap-2 p-4">
      {squares.map((value, index) => (
        <Square
          key={index}
          value={selectedSquare === index ? 'X' : value}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

const App = () => {
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">64 Squares</h1>
      <Board />
    </div>
  );
};

export default App;