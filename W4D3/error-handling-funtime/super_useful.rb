# PHASE 2
def convert_to_int(str)
  
  begin
    Integer(str)
  rescue ArgumentError
    puts "Wrong argument type"
    nil
  end

end

# PHASE 3
class CoffeeError < StandardError
end

FRUITS = ["apple", "banana", "orange"]

def reaction(maybe_fruit)
  if FRUITS.include? maybe_fruit
    puts "OMG, thanks so much for the #{maybe_fruit}!"
  else 
    raise CoffeeError 
  end 
end

def feed_me_a_fruit
  begin
    puts "Hello, I am a friendly monster. :)"

    puts "Feed me a fruit! (Enter the name of a fruit:)"
    maybe_fruit = gets.chomp
    reaction(maybe_fruit) 
  rescue CoffeeError => e
    puts "we have a #{e}"
    puts "please give me a coffee to try again"
    if gets.chomp == "coffee"
      retry 
    else
      puts "no thanks, i'm out!"
    end
  end
end  

# PHASE 4
class BestFriend
  def initialize(name, yrs_known, fav_pastime)
    raise ArgumentError.new("we aren't real friends yet") if yrs_known < 5
    raise ArgumentError.new("give me your name before we become friends") if name.length <= 0
    raise ArgumentError.new("tell me what you like to do before we become friends") if fav_pastime.length <= 0

    @name = name
    @yrs_known = yrs_known
    @fav_pastime = fav_pastime

  end

  def talk_about_friendship
    puts "Wowza, we've been friends for #{@yrs_known} years. Let's be friends for another #{1000 * @yrs_known} years."
  end

  def do_friendstuff
    puts "Hey bestie, let's go #{@fav_pastime}. Wait, why don't you choose. 😄"
  end

  def give_friendship_bracelet
    puts "Hey bestie, I made you a friendship bracelet. It says my name, #{@name}, so you never forget me." 
  end
end

