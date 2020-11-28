# require_relative "deck_class.rb"

class Hand
    attr_reader :deck

    attr_accessor :hand

    def initialize(deck)
        @hand = []
        @deck = deck
        draw_cards
    end

    def draw_cards
        5.times {@hand << deck.deck.pop}
    end

    def count_hand
        result = straight_flush ||= house ||= flush ||= straight ||= three_of_a_kind ||= two_pair ||= pair
    end

    def pair
        count = 0
        @hand.each_with_index do |card, idx1|
            @hand.each_with_index do |card2, idx2|
                count += 1 if card.value == card2.value && idx2 > idx1
            end
        end
        return 1 if count == 1
    end

    def two_pair
        count = []
        @hand.each_with_index do |card, idx1|
            @hand.each_with_index do |card2, idx2|
                count << card.value if card.value == card2.value && 
                idx2 > idx1 && !count.include?(card2)
            end
        end
        return 2 if count.length >= 2
    end

    def three_of_a_kind
        @hand.each_with_index do |card1, idx1|
            @hand.each_with_index do |card2, idx2|
                @hand.each_with_index do |card3, idx2|
                    return 3 if card1.value == card2.value && card2.value == card3.value
                end
            end
        end
    end

    def straight
        hand = []
        int_hand = []

        @hand.each do |card|
            hand << card.value
        end
        
        hand.each do |card_value_string|
            if ("2".."10").to_a.include?(card_value_string)
                int_hand << card_value_string.to_i
            else
                if card_value_string == "J"
                    int_hand << 11
                elsif card_value_string == "Q"
                    int_hand << 12
                elsif card_value_string == "K"
                    int_hand << 13
                else
                    int_hand << 14
                end
            end
        end
        return 4 if int_hand == (int_hand[0]...int_hand[0]+5).to_a
    end

    def flush
        sample = @hand[0].suit
        return 5 if @hand.all? { |card| card.suit == sample}
    end

    def house
        return 6 if ((two_pair == 2) && (three_of_a_kind == 3))
    end

    def straight_flush
        return 7 if ((flush == 5) && (straight == 4))
    end

    
    
end