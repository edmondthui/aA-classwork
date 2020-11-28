require_relative 'piece'
require_relative "stepable.rb"

class Knight < Piece
    include Stepable

    def symbol
        '♞'.colorize(color)
    end
    
    protected

    def move_diffs
        return "knight"
      # return an array of diffs representing where a Knight can step to
    end

end