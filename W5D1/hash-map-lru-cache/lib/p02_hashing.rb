require 'byebug'

class Integer
  # Integer#hash already implemented for you
end
#debugger
class Array
  def hash
    # arr_hash = ""
    # self.each {|ele| arr_hash += ele.to_s(2)}

    arr_str = self.to_s()
    #debugger
    return arr_str.hash
     #(a ^ b).to_s(2)=>"110" (leading zeros omitted)
  end
end
#To convert an integer to a string of ones and zeros, 
#use the Fixnum#to_s method passing 2 as the only argument:

class String
  def hash
    num_arr = []
    alphabet = ('a'..'z').to_a

    self.each_char do |char|
      num_arr << alphabet.index(char)
    end
    num_arr.join('').to_i.hash

  end
end

class Hash
  # This returns 0 because rspec will break if it returns nil
  # Make sure to implement an actual Hash#hash method
  def hash
    0
  end
end
