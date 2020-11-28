def first_anagram?(str1, str2)
    arr = str1.split("").permutation.to_a
    arr.include?(str2.split(""))
end

puts first_anagram?("gizmo", "sally")    #=> false
puts first_anagram?("elvis", "lives")    #=> true
#big o analysis O(n!)

def second_anagram?(str1, str2)
    arr = str2.split("")
    str1.each_char.with_index do |char, i| # O(n)
        idx = arr.find_index(char)         # O(n)
        arr.delete_at(idx) if !idx.nil?    # O(1)
    end
    arr.empty?
end

puts second_anagram?("gizmo", "sally")    #=> false
puts second_anagram?("elvis", "lives")    #=> true
#big o analysis O(n^2)

def third_anagram?(str1, str2)
    str1.split("").sort == str2.split("").sort
end

puts third_anagram?("gizmo", "sally")    #=> false
puts third_anagram?("elvis", "lives")    #=> true
#big o analysis O(n log(n))

def fourth_anagram?(str1, str2)
    hash = Hash.new(0)
    str1.each_char do |char|
        hash[char] += 1
    end
    str2.each_char do |char|
        hash[char] -= 1
    end
    hash.values.all? {|value| value == 0}
end

puts fourth_anagram?("gizmo", "sally")    #=> false
puts fourth_anagram?("elvis", "lives")    #=> true
#big o analysis O(n)
