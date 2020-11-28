require_relative "slideable.rb"

class Bishop < Piece
    include Slideable
    def initialize(symbol, board, pos)
        super

    end

end