require_relative "stepable.rb"

class Bishop < Piece
    include Stepable
    def initialize(symbol, board, pos)
        super

    end

end