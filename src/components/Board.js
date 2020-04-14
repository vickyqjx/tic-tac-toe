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
    let highlights = []
    if (winner) {
      status = 'Winner: ' + winner.name;
      highlights = winner.highlights;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div>
        {this.renderBoard(3, 3, highlights)}
        <div className="status">{status}</div>
      </div>
    );
  }
}

export default Board;
