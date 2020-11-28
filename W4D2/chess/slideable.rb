module Slideable

    HORIZONTAL_DIRS = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    DIAGONAL_DIRS = [[-1, -1], [-1, 1], [1, -1], [1, 1]]

    def horizontal_dirs
        # self.board.each_with_index do |row, idx1|

        #     row.each_with_index do |col, idx2|
        #         if idx1 == self.pos[0]
        #             HORIZONTAL_DIRS << [idx1, idx2] if self.pos != [idx1,idx2]
        #         end

        #         if idx2 == self.pos[-1]
        #             HORIZONTAL_DIRS << [idx1, idx2] if self.pos != [idx1,idx2]
        #         end
        #     end
        # end
        HORIZONTAL_DIRS
    end


    def diagonal_dirs
        # self.board.each_with_index do |row, idx1|
        #     row.each_with_index do |col, idx2|
        #         DIAGONAL_DIRS << [idx1, idx2] if (idx1-self.pos[0]) == (idx2-self.pos[-1])
        #     end
        # end
        # DIAGONAL_DIRS << self.pos[0]+1, self.pos[-1]+1
        # DIAGONAL_DIRS << self.pos[0]+1, self.pos[-1]-1
        # DIAGONAL_DIRS << self.pos[0]-1, self.pos[-1]+1
        # DIAGONAL_DIRS << self.pos[0]-1, self.pos[-1]-1
        DIAGONAL_DIRS
    end


        # i = 0
        # while self.pos[0+i] < 7
        #     i += 1
        #     DIAGONAL_DIRS << [self.pos[0]+i, self.pos[-1]+i]
        #     DIAGONAL_DIRS << [self.pos[0]+i, self.pos[-1]-i]
        # end

        # i = 0
        # while self.pos[0-i] > 0
        #     DIAGONAL_DIRS << [self.pos[0]-i, self.pos[-1]+i]
        #     DIAGONAL_DIRS << [self.pos[0]-i, self.pos[-1]+i]
        #     i += 1
        # end

    end



    def moves 

    end
end