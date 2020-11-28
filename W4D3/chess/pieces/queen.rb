require_relative 'piece'
require_relative 'slideable'

class Queen < Piece
    include Slideable

    def symbol
        '♛'.colorize(color)
    end

    protected

    def move_dirs
        return "both"
    #   # return the directions in which a queen can move
    #   # a queen can move horizontally (across rows and columns) and diagonally
    end


end