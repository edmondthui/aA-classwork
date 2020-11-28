require "colorize"
require_relative "cursor.rb"

class Display

    attr_reader :board, :cursor

    def initialize(board)
        @cursor = Cursor.new([0,0], board)
        @board = board
    end

    def build_grid
        chessboard = []
        self.board.rows.each_with_index do |row, row_number|
            chessboard << build_row(row, row_number)
        end
        chessboard
    end

    def build_row(row, row_number)
        row_display = []
        row.each do |piece|
            if row_number.between?(0,1)
                row_display << piece.symbol.to_s.colorize(:white)
            elsif 
                row_display << piece.symbol.to_s.colorize(:black)
            else
                row_display << piece.symbol
            end
        end
        row_display
    end

    def render
        build_grid.each { |row| puts row.join("  ") }
        nil
    end





end