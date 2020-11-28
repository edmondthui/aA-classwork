require_relative 'tic_tac_toe'
require "byebug"

class TicTacToeNode

  attr_reader :board, :next_mover_mark, :prev_move_pos 

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
    #@node = TicTacToeNode.new(board, next_mover_mark)
  end

  def losing_node?(mark)
    # other_player_mark = mark == :x ? :o : :x 
    if @board.over? 
      return @board.won? && @board.winner != mark 
    end

    if mark != @next_mover_mark #this is our turn
      return self.children.any? { |node| node.losing_node?(mark) } 
    else                #this is for when its not our turn
      return self.children.all? { |node| node.losing_node?(mark) }  
    end

  end

  def winning_node?(mark)
     if @board.over? 
      return @board.winner == mark
    end

    if mark != @next_mover_mark #this is our turn
      return self.children.all? { |node| node.winning_node?(mark) } 
    else                #this is for when its not our turn
      return self.children.any? { |node| node.winning_node?(mark) } 
    end


  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    children_arr = []
    if next_mover_mark == :x
      next_mover_mark = :o
    else
      next_mover_mark = :x
    end

    @board.rows.flatten(1).each_with_index do |ele, idx|
      new_board = @board.dup
      
      if ele.nil?
        new_board[[(idx / 3),(idx % 3)]] = self.next_mover_mark
        children_arr << TicTacToeNode.new(new_board, next_mover_mark, [(idx / 3),(idx % 3)])
      end
    end
    children_arr
  end
end
