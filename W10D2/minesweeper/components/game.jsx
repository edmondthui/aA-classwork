import React from 'react';
import * as Minesweeper from '../minesweeper'
import Board from './board'

const BOARD_SIZE = 20 // this will make a 20x20 grid
const NUM_MINES = 10 // this will place 10 bombs on the grid

class Game extends React.Component {
    constructor(props) {
        super(props)
        let board = new Minesweeper.Board(BOARD_SIZE, NUM_MINES);
        this.state = {
            board: board
        }
        this.updateGame = this.updateGame.bind(this);
        this.restartGame = this.restartGame.bind(this);
    }

    updateGame(tile, flagging) {
        if (flagging) {
            tile.toggleFlag();
        } else {
            tile.explore();
        }

        this.setState({ board: this.state.board })
    }

    restartGame(e) {
        e.preventDefault();
        let newBoard = new Minesweeper.Board(BOARD_SIZE, NUM_MINES);
        this.setState({ board: newBoard })

    }

    render() {
        let modal;

        if (this.state.board.won() || this.state.board.lost()) {
            if (this.state.board.won()) {
                modal = <button onClick={this.restartGame} className = "play" >Play Again</button>
                alert('You Won!')
            } else {
                modal = <button onClick={this.restartGame} className = "play">Play Again</button>
                alert('You Lose!')
            }
        }

        return (
            <div className = 'game'>
                <h1 className="title">Minesweeper</h1>
                <p>Click to explore a tile.</p>
                <p>Right click to flag a tile.</p>
                <Board board={this.state.board} updateGame={this.updateGame}/>
                {modal}
            </div>
        )
    }
}

export default Game;