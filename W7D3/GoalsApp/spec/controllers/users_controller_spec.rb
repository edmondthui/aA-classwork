require 'rails_helper'

# Specs in this file have access to a helper object that includes
# the UsersControllerHelper. For example:
#
# describe UsersControllerHelper do
#   describe "string concat" do
#     it "concats two strings with spaces" do
#       expect(helper.concat_strings("this","that")).to eq("this that")
#     end
#   end
# end
RSpec.describe UsersController, type: :controller do

  describe "get#index" do

    it "renders all the users" do
      get :index
      expect(response).to render_template(:index)
    end
  
  end

  describe "get#new" do
    it "renders a sign up form" do
      # create :user
      # allow(subject).to receive(:current_user).and_return(User.last)
      get :new
      expect(response).to render_template(:new)
    end
  end

  describe "get#show" do
    it "shows the users page" do
      user = create :user
      get :show, params: { id: user.id }
      expect(response).to render_template(:show)
    end
  end

  describe "post#create" do
    # before :each do 
    #   create :user
    #   allow(subject).to receive(:current_user).and_return(User.last)
    # end

    let(:valid_signup) { { user: { username: "anything", password: "hunter2"} } }
    let(:invalid_signup) { { user: { username: "anything", password: ""} } }

    context "with valid signup" do 
      it "should sign you up" do 
        post :create, params: valid_signup
        # expect(User.last.username).to eq(valid_signup.username)
        expect(response).to redirect_to(user_url(User.last))
      end
    end

    context "with invalid signup" do 
      it "should re-render the sign up page" do 
        post :create, params: invalid_signup
        expect(response).to render_template(:new)
      end
    end
  end

  describe "get#edit" do
    it "renders a edit form" do
      user = create :user
      # allow(subject).to receive(:current_user).and_return(User.last)
      get :edit, params: { id: user.id }
      expect(response).to render_template(:edit)
    end
  end

  describe "patch#update" do
    # before :each do 
    # allow(subject).to receive(:current_user).and_return(User.last)
    # end
    let(:user) { create :user }

    # let(:valid_edit) { { user: { username: "anything", password: "hunter3"} } }
    # let(:invalid_edit) { { user: { username: "anything", password: ""} } }
    
    context "with valid edit" do 
      it "should edit a user" do 
        # user = { username: "test", password: "hunter12"}
        patch :update, params: { id: user.id, user: {username: "test2"} }
        # expect(User.last.username).to eq("anything")
        expect(response).to redirect_to(user_url(user))
      end
    end

    context "with invalid edit" do 
      it "should re-render the edit page" do 
        patch :update, params: { id: user.id, user: { username: "anything", password: ""} }
        expect(response).to render_template(:edit)
      end
    end
  end

  

  describe "delete#destroy" do
    let(:delete_user) { create :user }

    before :each do
      allow(subject).to receive(:current_user).and_return(delete_user.username)
      delete :destroy, params: { id: delete_user.id }
    end

    it "deletes the user" do
      expect(User.exists?(delete_user.id)).to be false
    end

    it "redirects to signup page" do
      expect(response).to redirect_to(new_user_url)
    end
  end
end
