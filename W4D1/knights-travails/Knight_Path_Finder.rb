require "./PolyTreeNode.rb"
require "byebug"

class KnightPathFinder

    def initialize(array)
        @starting = array
        @considered_positions = []
    end

    def root_node
        @initial_position = PolyTreeNode.new(@starting)
    end

    def clear_considered_positions
        @considered_positions = []
    end

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
            new_move_positions(shifted_node.value).each do |move|
                new_child = PolyTreeNode.new(move)
                shifted_node.add_child(new_child)
                node_queue << new_child
            end

        end
        self.clear_considered_positions
        @initial_position

    end

    def find_path(end_pos)
        self.build_move_tree
        visited = Set.new()
        queue = [@initial_position]
        until queue.empty?
            node = queue.shift
            unless visited.include?(node.value)
                if node.value == end_pos
                    return trace_path_back(node)
                end 
                visited.add(node.value)
                queue += node.children
            end
        end
        return nil
    end

    def trace_path_back(node)
        path = [node.value]
        until node.parent.nil?
            path << node.parent.value
            node = node.parent
        end
        
        return path.reverse
    end

end

# kpf = KnightPathFinder.new([0, 0])
# kpf.find_path([7, 6]) # => [[0, 0], [1, 2], [2, 4], [3, 6], [5, 5], [7, 6]]
# kpf.find_path([6, 2]) # => [[0, 0], [1, 2], [2, 0], [4, 1], [6, 2]]



