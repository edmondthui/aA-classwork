require_relative 'piece'

class Pawn < Piece

    def symbol
        '♙'.colorize(color)
    end

    def moves
        moves = []
        moves += side_attacks
        moves += forward_steps
        moves
    end

    private

    def at_start_row?
        if pos[0] == 1 || pos[0] == 6
            return true
        end
        false
    end

    def forward_dir
        if color == "white"
            return 1
        else
            return -1
        end
    end

    def forward_steps
        forward_moves = []
        position = pos.dup
        
        if at_start_row?
            forward_moves << [position[0]+1, position[-1]]
            forward_moves << [position[0]+2, position[-1]]
        else
            forward_moves << [position[0]+1, position[-1]]
        end      

        forward_moves
    end

    def side_attacks
        attacks = []
        position = pos.dup
        attack_right = [position[0]+forward_dir, position[-1]+1]
        attack_left = [position[0]+forward_dir, position[-1]-1]
        if !board[attack_left].is_a?(NullPiece) 
            attacks << attack_left
        elsif board[attack_right].is_a?(NullPiece)
            attacks << attack_right
        end
    end
end        