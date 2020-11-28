import React from 'react'
import Tile from './tile'

class Board extends React.Component {
    constructor (props) {
        super(props)
        this.renderRows = this.renderRows.bind(this);
        this.renderTiles = this.renderTiles.bind(this);
    }

    render() {
        return (
            <div id = "board">
                {this.renderRows()}
                <br/>
            </div>
        )
    }

    renderRows() {
        let board = this.props.board;
        return board.grid.map( (row, i) => {
            return (
                <div key = {`row-${i}`}>
                    {this.renderTiles(row , i)}
                </div>
            )
        });
    }
    renderTiles(row, i) {
        return row.map( (tile, j) => {
            return (
                <Tile tile = {tile} key = {`tile-${i}-${j}`} updateGame = {this.props.updateGame}/>
            )
        });
    }
}
export default Board