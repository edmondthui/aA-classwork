class UsersController < ApplicationController

  before_action :ensure_logged_in, only: [:show]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      redirect_to subs_url
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def show
    @user = User.find(params[:id])
    render :show
  end
  
  private
  
  def user_params
    params.require(:user).permit(:username, :password)
  end

end
