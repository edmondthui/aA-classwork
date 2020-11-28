import React from 'react'

class Tile extends React.Component {
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        e.preventDefault();
        let flagging;
        if (e.type === 'contextmenu') {
            flagging = true;
        } else {
            flagging = false;
        }
        this.props.updateGame(this.props.tile, flagging)
    }

    render() {
        let tile = this.props.tile;
        let count, type, show;

        if (tile.explored) {
            if (tile.bombed) {
                type = 'explored';
                show = '💣';
            } else {
                type = 'explored';
                count = tile.adjacentBombCount();
                show = (count > 0 ? count : " ")
            }
        } else if (tile.flagged) {
            type = 'flagged';
            show = '🚩'
        } else {
            type = 'unexplored';
        }
        type = `tile ${type}`;
        return (
            <div className={type} onClick={this.onClick} onContextMenu={this.onClick}>{show}</div>
        )
    }
}

export default Tile