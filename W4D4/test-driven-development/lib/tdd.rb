



def remove_dups(arr)
    arr.uniq
end

def two_sum(arr)
    new_arr = []
    arr.each_with_index do |ele, idx|
        arr.each_with_index do |ele2, idx2|
            new_arr << [idx, idx2] if ele + ele2 == 0 && idx2 > idx
        end
    end
    new_arr
end

def my_transpose(array)
    array.transpose
end

def stock_picker(array)
    lowest_day = [array[0], 0]
    highest_day = [0, 0]

    array.each_with_index {|day, idx| lowest_day[0], lowest_day[-1] = day, idx if day < lowest_day[0] }
    array[lowest_day[-1]..-1].each_with_index {|day, idx| highest_day[0], highest_day[-1] = day, idx if day > highest_day[0] }

    [lowest_day[0], highest_day[0]]
end

class Game
    attr_accessor :board

    def initialize
        @board = Array.new(3) {Array.new([])}
        set_up_board
    end

    def set_up_board 
        @board[0] = ["┌--┐", "┌-┐", "┌┐", "╥"]
    end

    def move(start, end_loc)
        start_piece = board[start][-1]
        end_piece = board[end_loc][-1]

        if end_piece.nil?
            board[end_loc] << board[start].pop
        elsif end_piece.length < start_piece.length
            raise "start piece length is greater than move piece length"
        else
            board[end_loc] << board[start].pop
        end

    end

    def get_input
        display
        until won?
            input = gets.chomp
            move(input[0].to_i ,input[-1].to_i)
            display
        end
    end

    def won? 
        board == [[], [], ["┌--┐", "┌-┐", "┌┐", "╥"]]
    end

    def display 
        @board.each do |pieces|
            puts pieces.join("")
        end
    end
end