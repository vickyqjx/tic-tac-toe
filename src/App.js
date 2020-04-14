import React from 'react';
import Board from './components/Board.js';

function App() {
  return (
    <div className="game">
      <div className="game-title">
        Tic Tac Toe
      </div>
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default App;
