import React from 'react';
import Square from './Square.js';
import { calculateWinner } from '../helpers/board.js';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  resetGame() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true,
    });
  }

  renderSquare(i, highlights) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
        ishighlighted={highlights.includes(i)}
      />
    );
  }

  renderRow(currentRow, columns, highlights) {
    let row = [];
    for (var j = 0; j < columns; j++) {
      row.push(this.renderSquare(currentRow * columns + j, highlights));
    }
    return <div className="board-row">{row}</div>;
  }

  renderBoard(rows, columns, highlights) {
    let table = [];
    for (var i = 0; i < rows; i++) {
      table.push(this.renderRow(i, columns, highlights));
    }
    return table;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    let highlights = [];
    let message = '';
    const gameOverMessage = <span className="highlighted">Game Over!&nbsp;</span>;
    if (winner) {
      status = `Winner:${winner.name}`;
      highlights = winner.highlights;
      message = gameOverMessage;
    } else if (!this.state.squares.includes(null)) {
      message = gameOverMessage;
      status = 'No winner';
    } else {
      status = 'Current Player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        {this.renderBoard(3, 3, highlights)}
        <div className="status">{message}{status}</div>
        <div className="buttons">
          <button className="reset-button" onClick={() => this.resetGame()}>
            { message !== '' ? 'Play again' : 'Restart' }
          </button>
        </div>
      </div>
    );
  }
}

export default Board;
