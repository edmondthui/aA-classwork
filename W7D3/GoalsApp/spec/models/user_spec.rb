require 'rails_helper'

RSpec.describe User, type: :model do


  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:session_token) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }

  describe "User::find_by_credentials" do
    let(:user) { create :user }
    
    context "with valid credentials" do
      it "should return the user" do
        expect(User.find_by_credentials(user.username, "hunter2")).to eq(user)
      end
    end

    context "with invalid credentials" do
      it "should return nil" do
        expect(User.find_by_credentials(user.username, "hunter3")).to eq(nil)
      end
    end
  end

  describe "User#is_password?" do
    let(:user) { create :user }

    context "if you have the correct password" do
      it "verifies the correct password" do
        expect(user.is_password?("hunter2")).to eq(true)
      end
    end

    context "if you have the incorrect password" do
      it "returns false for invalid password" do
        expect(user.is_password?("hunter3")).to eq(false)
      end
    end
  end

  describe "User#reset_session_token!" do
    let(:user) { create :user }

    it "resets the session token" do
      expect(user.session_token != user.reset_session_token!).to eq(true)
    end
  end

end
