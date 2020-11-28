class UsersController < ApplicationController
    def index
        #debugger
        if params.has_key?(:user_id)
            artwork = Artwork.where( artist_id: params[:user_id] )
            render json: artwork
        elsif params.has_key?(:query)
            user = User.where("username ILIKE ?", "%#{params[:query]}%")
            render json: user
        else
            user = User.all
            render json: user
        end
    end

    def favorite_art
        if params[:user_id]
            artwork = Artwork.where( artist_id: params[:user_id]).where( favorite_artwork: true )
            render json: artwork
        else
            artwork = Artwork.all
            render json: artwork
        end
    end

    def create
        user = User.new(user_params)
        if user.save
            render json: user
          else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
      end

    def show
        user = User.find(params[:id])
        render json: user
    end

    def update
        user = User.find(params[:id])
        if user.update(user_params)
            render json: user
        else
            render json: user.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        render json: user
    end
    
    private
    def user_params
        params.require(:user).permit(:username)
    end
end