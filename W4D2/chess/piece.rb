class Piece

    attr_reader :board, :pos

    def initialize(symbol, board, pos)
        @color = symbol
        @board = board
        @pos = pos
    end
end