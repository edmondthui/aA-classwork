require_relative "stepable.rb"

class King < Piece
    include Stepable
    def initialize(symbol, board, pos)
        super

    end

end