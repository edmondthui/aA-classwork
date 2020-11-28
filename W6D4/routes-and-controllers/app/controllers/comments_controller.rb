class CommentsController < ApplicationController
    def index
        if params.has_key?(:user_id)
            comment = Comment.where( user_id: params[:user_id] )
            render json: comment
        elsif params.has_key?(:artwork_id)
            comment = Comment.where( artwork_id: params[:artwork_id] )
            render json: comment
        else
            comment = Comment.all
            render json: comment
        end
    end

    def create
        comment = Comment.new(comment_params)
        if comment.save
            render json: comment
          else
            render json: comment.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        comment = Comment.find(params[:id])
        comment.destory
        render json: comment
    end

    private
    def comment_params
        params.require(:comment).permit(:artist_id, :user_id)
    end
end