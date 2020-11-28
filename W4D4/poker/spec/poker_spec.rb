require "rspec"
require "card_class.rb"
require "deck_class.rb"
require "hand_class.rb"

SYMBOLS = ["♡","♢","♠","♣"]

describe Card do
    subject(:card) {Card.new("4", "♡")}

    describe "#initialize" do
        it "sets card value to what is passed in" do
            expect(card.value).to eq("4")
        end
        it "sets the card suit" do
            expect(card.suit).to eq("♡")
        end
    end
end

describe Deck do 
    subject(:deck) { Deck.new() }

    describe "#initialize" do 
        it "creates a deck of 52 cards" do
            expect(deck.deck.length).to eq(52)
        end

        it "all cards must be unique" do
            expect(deck.deck.uniq.length).to eq(52)
        end
    end
end

describe Hand do
    let(:deck) {Deck.new()}
    subject(:hand) { Hand.new(deck) }

    describe "#initialize" do
        context "Should take 5 cards from the deck" do
            it "makes a hand of 5 cards" do
                expect(hand.hand.length).to eq(5)
            end

            it "takes 5 cards from the top of the deck" do
                expect(hand.deck.deck.length).to eq(47)
            end
        end
    end

    describe "#count_hand" do
        context "counts our hand's value to compare who we beat" do
            it "adds up all hand values for any winning combination" do
                hand.hand = [Card.new("4", "♡"),Card.new("4", "♢"),Card.new("5", "♡"),Card.new("2", "♡"),Card.new("9", "♡")]
                expect(hand.pair).to eq(1)
                hand.hand = [Card.new("4", "♡"),Card.new("4", "♢"),Card.new("5", "♡"),Card.new("5", "♡"),Card.new("9", "♡")]
                expect(hand.two_pair).to eq(2)
                hand.hand = [Card.new("4", "♡"),Card.new("4", "♢"),Card.new("4", "♠"),Card.new("2", "♡"),Card.new("9", "♡")]
                expect(hand.three_of_a_kind).to eq(3)
                hand.hand = [Card.new("3", "♡"),Card.new("4", "♣"),Card.new("5", "♡"),Card.new("6", "♠"),Card.new("7", "♡")]
                expect(hand.straight).to eq(4)
                hand.hand = [Card.new("2", "♡"),Card.new("4", "♡"),Card.new("5", "♡"),Card.new("7", "♡"),Card.new("9", "♡")]
                expect(hand.flush).to eq(5)
                hand.hand = [Card.new("4", "♡"),Card.new("4", "♢"),Card.new("4", "♠"),Card.new("2", "♡"),Card.new("2", "♢")]
                expect(hand.house).to eq(6)
                hand.hand = [Card.new("2", "♡"),Card.new("3", "♡"),Card.new("4", "♡"),Card.new("5", "♡"),Card.new("6", "♡")]
                expect(hand.straight_flush).to eq(7)
            end
        end
    end

    describe "#pair" do
        context "checks your hands for pairs" do
            it "returns a value if you have a pair" do
                hand.hand = [Card.new("4", "♡"),Card.new("4", "♢"),Card.new("5", "♡"),Card.new("2", "♡"),Card.new("9", "♡")]
                expect(hand.pair).to eq(1)
            end
        end
    end

    describe "#two_pair" do
        context "checks your hands for two pairs" do
            it "returns a value if you have a two pair" do
                hand.hand = [Card.new("4", "♡"),Card.new("4", "♢"),Card.new("5", "♡"),Card.new("5", "♡"),Card.new("9", "♡")]
                expect(hand.two_pair).to eq(2)
            end
        end
    end

    describe "#three_of_a_kind" do
        context "checks your hands for three of a kind" do
            it "returns a value if you have a three of a kind" do
                hand.hand = [Card.new("4", "♡"),Card.new("4", "♢"),Card.new("4", "♠"),Card.new("2", "♡"),Card.new("9", "♡")]
                expect(hand.three_of_a_kind).to eq(3)
            end
        end
    end

    describe "#straight" do
        context "checks your hands for stright" do
            it "returns a value if you have a stright" do
                hand.hand = [Card.new("3", "♡"),Card.new("4", "♣"),Card.new("5", "♡"),Card.new("6", "♠"),Card.new("7", "♡")]
                expect(hand.straight).to eq(4)
            end
        end
    end

    describe "#flush" do
        context "checks your hands for flush" do
            it "returns a value if you have a flush" do
                hand.hand = [Card.new("2", "♡"),Card.new("4", "♡"),Card.new("5", "♡"),Card.new("7", "♡"),Card.new("9", "♡")]
                expect(hand.flush).to eq(5)
            end
        end
    end

    describe "#house" do
        context "checks your hands for house" do
            it "returns a value if you have a house" do
                hand.hand = [Card.new("4", "♡"),Card.new("4", "♢"),Card.new("4", "♠"),Card.new("2", "♡"),Card.new("2", "♢")]
                expect(hand.house).to eq(6)
            end
        end
    end

    describe "#stright_flush" do
        context "checks your hands for straight flush" do
            it "returns a value if you have a straight flush" do
                hand.hand = [Card.new("2", "♡"),Card.new("3", "♡"),Card.new("4", "♡"),Card.new("5", "♡"),Card.new("6", "♡")]
                expect(hand.straight_flush).to eq(7)
            end
        end
    end

end