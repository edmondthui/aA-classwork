require "./PolyTreeNode.rb"
require "byebug"

class KnightPathFinder

    def initialize(array)
        @starting = array
        @considered_positions = []

    end

    # def root
    #     @initial_position
    # end

    def root_node
        @initial_position = PolyTreeNode.new(@starting)
    end

    # def build_move_tree
    #     KnightPathFinder.root_node 
    # end

    def self.valid_moves(array)
        valid_moves = []
        valid_moves << [array[0]+1, array[1]+2]
        valid_moves << [array[0]+1, array[1]-2]
        valid_moves << [array[0]+2, array[1]-1]
        valid_moves << [array[0]+2, array[1]+1]
        valid_moves << [array[0]-1, array[1]-2]
        valid_moves << [array[0]-1, array[1]+2]
        valid_moves << [array[0]-2, array[1]+1]
        valid_moves << [array[0]-2, array[1]-1]
        valid_moves.select do |ele|
            ele[0] >= 0 && ele[0] < 8 && ele[1] >= 0 && ele[1] < 8
        end
    end
    
    def new_move_positions(array)
        moves = KnightPathFinder.valid_moves(array)
        remaining_moves = moves.reject {|move| @considered_positions.include?(move)}
        remaining_moves.each { |move| @considered_positions << move }   #It should then add the remaining new positions to @considered_positions and return these new positions.
    end

    def build_move_tree
        self.root_node
        children = []
        node_queue = [@initial_position] #starting node here
        until node_queue.empty?
            shifted_node = node_queue.shift
            # node  = PolyTreeNode.new(shifted_node)
            new_move_positions(shifted_node.value).each do |move|
                new_child = PolyTreeNode.new(move)
                shifted_node.add_child(new_child)
                node_queue << new_child
            end
            # node.children << children
            # children = []

        end
        @initial_position

    end

    # def bfs(target)

    #     children_arr = [self]


    #     until children_arr.empty?
    #         node = children_arr.shift
    #         if node.value == target
    #             return node
    #         else
    #             node.children.each do |ele|
    #                 children_arr.push(ele)
    #             end
    #         end
    #     end
    #     return nil
    # end

end