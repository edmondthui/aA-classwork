list = [ 0, 3, 5, 4, -5, 10, 1, 90 ]

def my_min(arr)
    arr.each do |ele|
        return ele if arr.all? {|ele2| ele <= ele2}
    end
end

puts my_min(list)  # =>  -5
#big o analysis O(n^2)

def my_min2(arr) 
    min = arr.first
    arr.each do |ele|
        min = ele if ele < min
    end
    min
end

puts my_min2(list)  # =>  -5
#big o analysis O(n)


list = [5, 3, -7]

def sub_sums(arr)
    sub_arr = []
    arr.each_with_index do |ele, i|                  # O(n)
        arr.each_with_index do |ele2, j|             # O(n)
            sub_arr << arr[i..j].sum if i <= j       # O(n)
        end
    end
    sub_arr.max
end

puts sub_sums(list) # => 8
#big o analysis O(n^3)



list = [5, 3, -7]

def fast_sub_sums(arr)
    largest_sum = 0
    current_sum = 0

    return arr.max if arr.all? { |ele| ele < 0} #check if they're all negative 

    (0...arr.length).each do |index|          
        current_sum += arr[index]  
        if largest_sum < current_sum # this checks if we added a negative number
            largest_sum = current_sum 
        else
            current_sum = 0 #if we run into a negative number we reset to zero.
        end 
    end
    largest_sum
end

puts fast_sub_sums(list) # => 8
#big o analysis O(n)
#constant space complexity

# [5]           # => 5
# [5, 3]        # => 8 --> we want this one
# [5, 3, -7]    # => 1
# [3]           # => 3
# [3, -7]       # => -4
# [-7]   
