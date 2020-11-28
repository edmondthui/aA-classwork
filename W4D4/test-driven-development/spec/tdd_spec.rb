require "tdd"
require "rspec"

describe "#remove_dups" do
    context "receives an array "do
        it "should removes duplicates" do
            expect(remove_dups([1, 2, 1, 3, 3])).to eq([1, 2, 1, 3, 3].uniq)
        end
    end
end

describe "#two_sum" do 
    it "finds positions that sum to zero" do
        expect(two_sum([-1, 0, 2, -2, 1])).to eq([[0, 4], [2, 3]])
    end
end

describe "#my_transpose" do 
    context "We have a 2D array" do 
        rows = [ [0, 1, 2], [3, 4, 5], [6, 7, 8] ]
        cols = [ [0, 3, 6], [1, 4, 7], [2, 5, 8] ] 
        it "Rotates the array" do 
            expect(my_transpose(rows)).to eq(cols)
        end
    end
end

describe "#stock_picker" do
    context "Should buy stock on cheapest day and sell on highest day" do
        prices = [ 20, 21, 22, 19, 17, 21, 25 , 15, 22, 21, 21, 25 ]
        profitable_days = [15, 25]
        it "Should retrun the most profitable combination" do
            expect(stock_picker(prices)).to eq(profitable_days)
        end
    end
end

describe Game do
    subject(:hanoi) { Game.new }

    describe "#initialize" do
        context "makes a new Towers of Hanoi game which contains 3 empty arrays" do
            it "will be made up of a 2d array" do
                expect(hanoi.board.length).to eq(3)
            end

            it "will fill up first array in 2D array with starting pieces" do
                expect(hanoi.board).to eq([["┌--┐", "┌-┐", "┌┐", "╥"], [], []])
            end
        end
    end



    describe "#move" do
        before(:each) do
            hanoi.move(0, 2)
        end

        it "should move 1 piece from speificed location" do
            expect(hanoi.board[0].length).to eq(3)
        end

        it "should place the piece at new location" do
            expect(hanoi.board[2].length).to eq(1)
        end

        it "should raise error if start piece length is greater than move piece length" do
            expect {hanoi.move(0, 2)}.to raise_error("start piece length is greater than move piece length")
        end
            
    end

    describe "#won?" do
        it "Returns true when the game is over" do
            hanoi.board = [[],[],["┌--┐", "┌-┐", "┌┐", "╥"]]
            expect(hanoi.won?).to eq(true)
        end
    end
end