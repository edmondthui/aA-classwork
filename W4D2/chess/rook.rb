require_relative "slideable.rb"

class Rook < Piece

    include Slideable

    def initialize(symbol, board, pos)
        super

    end

    def move_dirs
        horizontal_dirs
    end

end