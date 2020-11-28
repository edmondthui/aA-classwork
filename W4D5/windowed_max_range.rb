#greatest difference in values within the window (up to w apart)
#window size has to be greater than 2.

def windowed_max_range(array, window_size)
    p1 = 0
    p2 = window_size - 1
    greatest_difference = nil
    until p2 == array.length #O(n)
        min = array[p1..p2].min #O(n)
        max = array[p1..p2].max #O(n)
        greatest_difference = (max - min) if greatest_difference == nil || greatest_difference < (max - min) 
        p1 += 1
        p2 += 1
    end
    return greatest_difference
    
end
# big O analysis O(n^2)

puts windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
puts windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
puts windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
puts windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8


class MyQueue
    attr_reader :store

    def initialize
        @store = []
    end

    def peek
        store.first
    end
    
    def size
        store.length
    end
    
    def empty?
        store.length == 0
    end
    
    def enqueue(ele)
        store << ele
    end
    
    def dequeue
        store.shift
    end
end

class MyStack 
    
    attr_reader :store
    
    def initialize
        @store = []
    end

    def push(ele)
        store.push(ele)
    end

    def pop
        store.pop
    end

    def empty?
        store.length == 0
    end

        
    def peek
        store.last
    end

    def size
        store.length
    end
        
end

class StackQueue 

    attr_reader :store1, :store2

    def initialize
        @store1 = MyStack.new() #in-stack
        @store2 = MyStack.new() #out-stack
    end

    def size
        @store1.size + @store2.size
    end

    def empty?
        self.size == 0 
    end

    def enqueue(ele)
        @store1.push(ele)
    end

    def dequeue
        if store2.empty?
            store2 = store1.reverse
            store1 = []
            store2.pop
        else
            store2.pop  #take elements from in-stack and add them -reversed- to out stack if out-stack is empty?
        end
    end

end