# require_relative "./pieces/piece.rb"
require_relative "require_pieces"
# require_relative './pieces/bishop.rb'
# require_relative './pieces/king.rb'
# require_relative './pieces/knight.rb'
# require_relative './pieces/nullpiece.rb'
# require_relative './pieces/pawn.rb'
# require_relative './pieces/queen.rb'
# require_relative './pieces/rook.rb'


require "colorize"

class Board

    def initialize
        @board = Array.new(8) {Array.new(8)}
        self.setup_board
    end

    def setup_board
        back_row = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook]
        @board.each_with_index do |rows, idx1|
            rows.each_with_index do |cols, idx2|
                if idx1.between?(0, 1)
                    if idx1 == 0
                        @board[idx1][idx2] = back_row[idx2].new("white", self, [idx1, idx2])
                    else
                        @board[idx1][idx2] = Pawn.new("white", self, [idx1, idx2])
                    end
                elsif idx1.between?(6, 7)
                    if idx1 == 7
                        @board[idx1][idx2] = back_row[idx2].new("black", self, [idx1, idx2])
                    else
                        @board[idx1][idx2] = Pawn.new("black", self, [idx1, idx2])
                    end

                else
                    @board[idx1][idx2] = NullPiece.new(" ", self, [idx1, idx2])
                end 
            end
        end
        @board
    end

    def move_piece(start_pos, end_pos)
        start_x, start_y = start_pos[0], start_pos[-1]
        move_x, move_y = end_pos[0], end_pos[-1]
        if @board[start_x][start_y].is_a?(NullPiece)
            raise "there is no piece at this position"
        end

        if !valid_position?(end_pos)
            raise "piece cannot move to end position"
        end

        if @board[move_x][move_y].is_a?(NullPiece)
            @board[start_x][start_y], @board[move_x][move_y] = @board[move_x][move_y], @board[start_x][start_y]
        else
            @board[start_x][start_y], @board[move_x][move_y] = NullPiece.new(" ", self, [move_x, move_y]), @board[start_x][start_y]
        end

    end

    def valid_position?(position)
        if position[0] > 7 || position[0] < 0 || position[1] > 7 || position[1] < 0
            return false
        end
        true
    end

    def [](array)
        if valid_position?(array)
            @board[array[0]][array[-1]]
        end
    end


    def in_check?(color)
    end

    def checkmate?(color)
    end

    def rows
        @board.map 
    end


end