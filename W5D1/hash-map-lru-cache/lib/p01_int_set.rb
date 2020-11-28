require 'byebug'

class MaxIntSet

  attr_reader :store

  def initialize(max)
    @store = Array.new(max, false)
  end

  def insert(num)
    raise "Out of bounds" if !is_valid?(num)
    @store[num] = true
  end

  def remove(num)
    raise "Out of bounds" if !is_valid?(num)
    @store[num] = false
  end

  def include?(num)
    @store[num]
  end

  private

  def is_valid?(num)
    return false if num < 0 || num > @store.length
    true
  end

  def validate!(num)
  end
end


class IntSet
  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
  end

  def insert(num)
    self[num].push(num)
  end

  def remove(num)
    self[num].delete(num)
  end

  def include?(num)
    return true if self[num].include?(num)
    false

  end

  private

  def [](num)
    # optional but useful; return the bucket corresponding to `num`
    @store[(num % num_buckets)]
  end

  def num_buckets
    @store.length
  end
end

class ResizingIntSet
  attr_reader :count

  def initialize(num_buckets = 20)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(num)
    #add the check for count >= num_buckets
    if @count >= num_buckets
      resize!
    end

    if !include?(num)
      self[num] << num  #[1]   should [] @ the index of @store
      @count += 1
      return true
    end

  end

  def remove(num)

    if include?(num)
      self[num].delete(num)
      @count -= 1
    end

  end

  def include?(num)

    return true if self[num].include?(num)
    false

  end

  private

  def [](num) # call self[] return @store[number] => [1]
    @store[(num % num_buckets)] #[1] => [1]
  end

  def num_buckets
    @store.length
  end

  def resize!

    new_arr = Array.new(num_buckets * 2) { Array.new }
    @store.each do |bucket|
      bucket.each do |ele|
        new_arr[(ele % new_arr.length)] << ele
      end
    end
    @store = new_arr
  end
end
