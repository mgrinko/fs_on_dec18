"use strict";

const winPositions = ["012", "036", "048", "147", "246", "258", "345", "678"];

class Game {
  constructor({ element }) {
    this._element = element;

    this._cells = Array(9).fill(null);
    this._currentTurn = 1;
    this._winner = null;

    this._render();

    this._element.addEventListener("click", event => {
      const cell = event.target.closest("[data-index]");

      if (!cell) {
        return;
      }

      const index = cell.dataset.index;
      this._markCell(index);
    });
  }

  _markCell(index) {
    if (this._cells[index] !== null) {
      return;
    }

    if (this._winner !== null) {
      console.log("Game over", this._winner);
      return;
    }

    const mark = this._currentTurn % 2 === 1 ? "X" : "0";

    this._cells[index] = mark;
    this._currentTurn++;

    this._winner = this._getWinner();

    this._render();
  }

  _getWinner() {
    console.log(this._cells);
    for (let position of winPositions) {
      const [a, b, c] = [...position];

      if (
        this._cells[a] !== null &&
        this._cells[a] === this._cells[b] &&
        this._cells[b] === this._cells[c]
      ) {
        return this._cells[a];
      }
    }

    return null;
  }

  _getCellText(value) {
    return value || "";
  }

  _render() {
    this._element.innerHTML = `
      <h3>
        Tic Tac Toe 
        ${
      this._winner
        ? `(Winner ${this._winner})`
        : `(turn ${this._currentTurn})`
      }
      </h3>
      <div>
        <span data-index="0">${this._getCellText(this._cells[0])}</span>
        <span data-index="1">${this._getCellText(this._cells[1])}</span>
        <span data-index="2">${this._getCellText(this._cells[2])}</span>
      </div>
      <div>
        <span data-index="3">${this._getCellText(this._cells[3])}</span>
        <span data-index="4">${this._getCellText(this._cells[4])}</span>
        <span data-index="5">${this._getCellText(this._cells[5])}</span>
      </div>
      <div>
        <span data-index="6">${this._getCellText(this._cells[6])}</span>
        <span data-index="7">${this._getCellText(this._cells[7])}</span>
        <span data-index="8">${this._getCellText(this._cells[8])}</span>
      </div>
    `;
  }
}

new Game({
  element: document.getElementById("game")
});
