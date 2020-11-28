require_relative 'piece'
require_relative "stepable.rb"

class King < Piece
    include Stepable
    
    def symbol
        '♚'.colorize(color)
    end

    protected

    def move_diffs
        return "king"
    end

end