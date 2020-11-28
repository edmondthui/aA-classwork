class ApplicationController < ActionController::Base

    helper_method :current_user, :logged_in?

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    # this establishes a session (a state of being logged in) after we've found a user with correct credentials / created a new user
    def login!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logout!
        current_user.reset_session_token!
        session[:session_token] = nil
        @current_user = nil
    end

    def logged_in?
        !!current_user # !! is a way to convert a value into a boolean
    end

    # will be run before certain controller actions where the user should be logged in, by using `before_action :ensure_logged_in`
    def ensure_logged_in
        redirect_to new_session_url unless logged_in?
    end
end
