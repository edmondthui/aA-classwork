class HashSet
  attr_reader :count

  def initialize(num_buckets = 8)
    @store = Array.new(num_buckets) { Array.new }
    @count = 0
  end

  def insert(key)
    if num_buckets <= count
      resize!
    end

    self[key.hash] << key
    @count += 1
  end

  def include?(key)
    return true if self[key.hash].include?(key)
    false
  end

  def remove(key)
    if self[key.hash].include?(key)
      self[key.hash].delete(key)
      @count -= 1
    end
  end

  private

  def [](num)
    @store[num % num_buckets]
  end

  def num_buckets
    @store.length
  end

  def resize!
    new_arr = Array.new(num_buckets * 2) {Array.new}
    @store.each do |bucket|
      bucket.each do |key|
        new_arr[key % new_arr.length] << key
      end
    end
    @store = new_arr
  end
end
