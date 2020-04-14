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

  renderSquare(i) {
    return (
      <Square
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  renderRow(currentRow, columns) {
    let row = [];
    for (var j = 0; j < columns; j++) {
      row.push(this.renderSquare(currentRow * columns + j));
    }
    return <div className="board-row">{row}</div>;
  }

  renderBoard(rows, columns) {
    let table = [];
    for (var i = 0; i < rows; i++) {
      table.push(this.renderRow(i, columns));
    }
    return table;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        <div className="status">{status}</div>
        {this.renderBoard(3, 3)}
      </div>
    );
  }
}

export default Board;
