
require "byebug"
module Slideable

    # ex: A piece starts at position [1, 2] and it moves horizontally to the right
    # its position changes to [1,3]
    # the row increases by 0 and the column increases by 1
        # [
        # [OOOxxxxx], 
        # [Oxxxxxxx], 
        # [oooooooo],
        # [oooooooo],
        # [Xooooooo],
        # [oooooooo],
        # [xxxxxxxx],
        # [xxxxxxxx],
        # ]

    HORIZONTAL_DIRS = [ # all possible horiztonal and vertical directions
        [0, 1],  #right
        [0, -1], #left
        [1, 0],  #up
        [-1, 0]].freeze #down

    DIAGONAL_DIRS = [ # all possible diagonal directions
        [-1, -1], #down left
        [-1, 1],  #down right
        [1, -1],  #up left
        [1, 1]].freeze   #up right

    def horizontal_dirs
        #getter for piece's horizontal direction
        HORIZONTAL_DIRS
    end

    def diagonal_dirs
        DIAGONAL_DIRS
    end

    def moves 
        moves = []

        if move_dirs == "horizontal"
            horizontal_dirs.each do |direction|
                all_moves = grow_unblocked_moves_in_dir(direction[0], direction[-1])
                moves += all_moves
            end
        elsif move_dirs == "diagonal"
            diagonal_dirs.each do |direction|
                all_moves = grow_unblocked_moves_in_dir(direction[0], direction[-1])
                moves += all_moves
            end
        else
            diagonal_dirs.each do |direction|
                all_moves = grow_unblocked_moves_in_dir(direction[0], direction[-1])
                moves += all_moves
            end
            horizontal_dirs.each do |direction|
                all_moves = grow_unblocked_moves_in_dir(direction[0], direction[-1])
                moves += all_moves
            end
        end

        moves
        #makes an array to collect all possible moves for the piece
        #does this by checking the piece's move_dir
        #uses grow unblocked moves to add the possible moves in a single direction
        #returns a 2d array with [[pos] [pos]]
    end

    private

    def move_dirs
      # subclass implements this
      raise NotImplementedError # this only executes if 
    end

    def grow_unblocked_moves_in_dir(dx, dy)
        array_in_dir = []
        position = self.pos.dup
        blocked = false
        until blocked

            position[0] = position[0]+dx
            position[-1] = position[-1]+dy

            if !board.valid_position?(position) #checks if the board position is empty and if the position is a valid position
                blocked = true 

            elsif board[position] != nil #checks if board position is empty
                if board[position].color == self.color #if the board position is filled and the color is your color you are blocked
                    blocked = true
                else #if the board position is filled and the color is enemy you can take the peice then you are blocked
                    array_in_dir << [position[0],position[-1]] 
                    blocked = true
                end

            else
                array_in_dir << [position[0],position[-1]] 
            end
        end
        array_in_dir
        #gets the piece's current postion and board to collect moves
        #uses a loop tp incirment the new positions
        #checks if the position is value
        #adds the position to an array and returns all positions in a single direction
    end
end