class ApplicationController < ActionController::Base

    helper_method :current_user, :before_edit #lets you use the helper method in Ruby VIEWS

    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
    end

    def login_user!(user)
        session[:session_token] = user.reset_session_token!
    end

    def logged_in
        !!current_user
    end

    def before_edit

        if !current_user.cats.find_by_id(params[:id])
          redirect_to cats_url
        end

    end

    def ensure_logged_in
        redirect_to cats_url unless logged_in
    end

end
