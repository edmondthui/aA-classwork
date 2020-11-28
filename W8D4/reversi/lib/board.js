let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let arr = new Array(8);
  
  
  for (i = 0; i < arr.length; i++) {
      arr[i] = (new Array(8))
  }

  arr[3][4] = new Piece('black')
  arr[4][3] = new Piece('black')
  arr[3][3] = new Piece('white')
  arr[4][4] = new Piece('white')

  return arr;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];

/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  if (pos[0] < 0 || pos[0] > 7) {
    return false;
  }
  if (pos[1] < 0 || pos[1] > 7) {
    return false;
  }
  return true;
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) { // call it in node => board.getPiece([4,4]); => "white"
  if (this.isValidPos(pos)) { // this == board && passes in position to function
    return this.grid[pos[0]][pos[1]]; // returns the piece
  } else {
    throw new Error("Invalid Position");
  }
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  let piece = this.getPiece(pos);
  if (piece) {//ES6 use of "?" "true" : "false"
    return (piece.color === color ? true : false);
  } else {
    return false;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  let piece = this.getPiece(pos);
  if (piece) {
    return true;
  } else {
    return false;
  };
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip){

  if (!piecesToFlip) {
    piecesToFlip = [];
  } else {
    piecesToFlip.push(pos);
  }
  let new_pos = [pos[0]+dir[0], pos[1]+dir[1]] // moving 1 direction per recursive call
  
  if (!this.isValidPos(new_pos)) {
    return [];
  }
  
  // if (this.isValidPos(new_pos) === true) {
  if (!this.isOccupied(new_pos)) {
    return [];
  }
  // }
  
  let new_piece = this.grid[new_pos[0]][new_pos[1]]
  if (new_piece.color === color) {
    if (piecesToFlip.length ===0 ){
      return [];
    } else {
      return piecesToFlip;
    }
  }

  let arr = this._positionsToFlip(new_pos, color, dir, piecesToFlip)
  // arr.unshift(new_pos);
  return arr;
};

/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {
  let arr = [];
  let board = this;
  if (!this.isOccupied(pos)) {
    Board.DIRS.forEach(function(dir){
      arr = arr.concat(board._positionsToFlip(pos, color, dir));
    });
  
    if (arr.length === 0) {
      return false;
    } else {
      return true;
    }
  } else {
    return false;
  };
}


/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  for (i = 0 ; i < this.grid.length ; i ++) {
    for (j = 0 ; j < this.grid[i].length ; j ++ ) {
      console.log(this.grid[i][j]);
    }
  }
};



module.exports = Board;
