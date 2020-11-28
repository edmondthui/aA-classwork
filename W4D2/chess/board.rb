require_relative "piece.rb"

class Board

    def initialize
        @board = Array.new(8) {Array.new(8)}
        self.setup_board
    end

    def setup_board
        @board.each_with_index do |rows, idx1|
            rows.each_with_index do |cols, idx2|
                if idx1.between?(0, 1) || idx1.between?(6, 7)
                    @board[idx1][idx2] =  Piece.new(:P, @board, [idx1, idx2])
                else
                    @board[idx1][idx2] = nil
                end
            end
        end
        @board
    end

    def move_piece(start_pos, end_pos)
        start_x, start_y = start_pos[0], start_pos[-1]
        move_x, move_y = end_pos[0], end_pos[-1]
        if @board[start_x][start_y] == nil
            raise "there is no piece at this position"
        end

        if !valid_position?(end_pos)
            raise "piece cannot move to end position"
        end

        # @board[start_x][start_y], @board[move_x][move_y] = @board[move_x][move_y], @board[start_x][start_y]
        @board[start_x][start_y], @board[move_x][move_y] = nil, @board[start_x][start_y]

        # [
        # [oxxxxxxx]
        # [xxxxxxxx]
        # [oooooooo]
        # [oooooooo]
        # [Xooooooo]
        # [oooooooo]
        # [xxxxxxxx]
        # [xxxxxxxx]
        # ]
        # move_piece([0,0]], [0,4])
    end

    def valid_position?(position)
        if position[0] > 7 || position[0] < 0 || position[1] > 7 || position[1] < 0
            return false
        end
        true
    end


end