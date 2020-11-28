arr = [0, 1, 5, 7]

def bad_two_sum?(arr, target)
    arr.each_with_index do |ele, idx|
        arr.each_with_index do |ele2, idx2|
            return true if ele + ele2 == target && idx2 > idx
        end
    end
    false
end

puts bad_two_sum?(arr, 6) # => should be true
puts bad_two_sum?(arr, 10) # => should be false
#the big o analysis is O(n^2) quadratic


def med_two_sum?(arr, target)
    sorted = arr.sort #sorts array using quick sort  O(n log n)
    p1 = 0
    p2 = arr.length-1
    until p1 == p2  # O(n)
        if sorted[p1] + sorted[p2] == target
            return true
        elsif sorted[p1] + sorted[p2] > target
            p2 -= 1
        else
            p1 += 1
        end
    end
    return false
end

puts med_two_sum?(arr, 6) # => should be true
puts med_two_sum?(arr, 10) # => should be false
#the big o analysis is O(n log n) log linear

def good_two_sum?(arr, target)
    hash = Hash.new() #make a new hash check with TA if we want a value
    arr.each_with_index do |num, idx| # O(n)
        if hash.has_key?(target-num) #check if the hash contains the target number minus the current number return true
            return hash[target-num]
        else
            hash[num] = true #if it doesnt have that number add current number to the keys of the hash and add 1
        end
    end
    false
end

puts good_two_sum?(arr, 6) # => should be true
puts good_two_sum?(arr, 10) # => should be false
# big o analysis O(n)