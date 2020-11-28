class PolyTreeNode

    attr_reader :value, :parent, :children

    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(node)
        return @parent = nil if node == nil
        if @parent.nil?
            @parent = node
            node.children << self
        else
            @parent.children.delete(self)
            @parent = node
            node.children << self
        end
    end

    def add_child(node)
        node.parent = self
        if !@children.include?(node)
            @children << node
        end
    end

    def remove_child(node)
        if node.parent == nil
            raise "this node is not a child"
        end
        node.parent = nil
    end



#         describe "#dfs" do
#     let(:search_method) { :dfs }
#     it_behaves_like 'search method'

#     it "should take correct path to descendant" do
#       expect(nodes[2]).to_not receive(:dfs)
#       [0, 1, 3, 4].each do |index|
#         expect(nodes[index]).to receive(:dfs).and_call_original.ordered
#       end
#       expect(nodes.first.dfs('e')).to equal(nodes[4])
#     end
#   end

    def dfs(target)
        if @value == target
            return self
        end

        @children.each do |node|
            next_node = node.dfs(target)
            if next_node == nil
                next
            else
                return next_node
            end      
        end

        return nil
    end

    #  n
 #   n   n
 #  n n  n  n
#
#
#
#
    def bfs(target)
        children_arr = [self]


        until children_arr.empty?
            node = children_arr.shift
            if node.value == target
                return node
            else
                node.children.each do |ele|
                    children_arr.push(ele)
                end
            end
        end
        return nil
    end
            


    #     next_children = []
    #     next_next_children = []

    #     @children.each do |child|
    #         child.value == target
    #         next_children << child
    #     end



    # end

        # while next_next_children.length > 0

        #     while next_children.length > 0
        #         next_c = next_children.shift
        #         next_c.value == target
        #         next_c.children.each do |child|
        #             next_next_children << child
        #         end
        #     end

        #     next_next_children.each do |child|
        #         next_c = next_next_children.shift
        #         next_c.value == target
        #         next_c.children.each do |child|
        #             next_next_children << child
        #         end



        

        # @children.each do |ele|

        #     check_values << ele
        # end

        # until check_values.empty?
        #     shifted = check_values.shift
        #     return shifted if shifted.value == target
        # end

        # nil
        



end