# require "card_class"

class Deck
    attr_reader :deck
    
    SYMBOLS = ["♡","♢","♠","♣"]
    VALUES = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
    

    def initialize
        @deck = []
        build_deck
        shuffle_deck
    end

    def build_deck
        SYMBOLS.each do |symbol|
            VALUES.each do |value|
                deck << Card.new(value, symbol)
            end
        end
    end

    def shuffle_deck
        deck.shuffle!
    end
end