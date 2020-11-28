require "byebug"
module Stepable

    KNIGHT_MOVES =[[1, 2],
    [1, -2],
    [2, -1],
    [2, 1],
    [-1, -2],
    [-1, 2],
    [-2, 1],
    [-2, -1]].freeze

    KING_MOVES = [[1,1],
    [0,1],
    [-1,1],
    [1,0],
    [-1,0],
    [1,-1],
    [0,-1],
    [-1,-1]].freeze

    def knight_moves
        KNIGHT_MOVES
    end

    def king_moves
        KING_MOVES
    end

    def moves
        moves = []
        position = self.pos.dup
        if move_diffs == "knight"
            knight_moves.each do |move|
                new_x = position[0] + move[0]
                new_y = position[-1] + move[-1]
                if board.valid_position?([new_x, new_y]) 
                    if board[[new_x, new_y]] == nil
                        moves << [new_x, new_y]
                    elsif board[[new_x, new_y]].color != self.color
                        moves << [new_x, new_y]
                    end
                end
                
            end
        else
            king_moves.each do |move|
                new_x = position[0] + move[0]
                new_y = position[-1] + move[-1]
                if board.valid_position?([new_x, new_y]) 
                    if board[[new_x, new_y]] == nil
                        moves << [new_x, new_y]
                    elsif board[[new_x, new_y]].color != self.color
                        moves << [new_x, new_y]
                    end
                end
            end
        end
        moves
    end



    private

    def move_diffs
        # subclass implements this
        raise NotImplementedError
    end
end