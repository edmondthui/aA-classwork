require_relative 'piece'
require_relative 'slideable.rb'

class Bishop < Piece
    include Slideable

    def symbol
        '♝'.colorize(color)
    end

    protected

    def move_dirs
        return "diagonal"
    end

end