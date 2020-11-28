class Piece

    attr_reader :board, :pos, :color

    def initialize(color, board, pos)
        @color = color
        @board = board
        @pos = pos
    end
end