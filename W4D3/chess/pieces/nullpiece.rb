require_relative 'piece'
require_relative "singleton.rb"

class NullPiece < Piece
    include Singleton

    def symbol
        ' '.colorize(color)
    end

end