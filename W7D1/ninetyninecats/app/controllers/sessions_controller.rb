class SessionsController < ApplicationController

    # before_action :ensure_logged_in, only: [:new, :create]

    def new
        render :new
    end

    def create
        #find_by_credentials(username, password)
        #user = User.find_by(username: username)  
        #user && user.is_password?(password) ? user : nil
        user = User.find_by_credentials(params[:user][:user_name], params[:user][:password]) 
        # token = user.reset_session_token!
        # session[:session_token] = token
        login_user!(user)
        redirect_to cats_url
    end

    def destroy
        if current_user
            current_user.reset_session_token!
            session[:session_token] = nil
            @current_user = nil
            redirect_to cats_url
        end
    end

end