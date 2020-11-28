require_relative "slideable.rb"

class Queen < Piece
    include Slideable
    def initialize(symbol, board, pos)
        super

    end

end