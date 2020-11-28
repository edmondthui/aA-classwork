class PostsController < ApplicationController

  before_action :ensure_logged_in, except: [:show]

  def show
    @post = Post.find(params[:id])
    render :show
  end

  def new
    @post = Post.new
    render :new
  end 

  def create
    @post = Post.new(post_params)
    @post.author_id = current_user.id
    if @post.save
      redirect_to post_url(@post)
    else
      flash.now[:errors] = @post.errors.full_messages
      render :new
    end
  end

  def edit
    @post = current_user.posts.find(params[:id])
    render :edit
  end

  def update
    @post = current_user.posts.find(params[:id])
    if @post.update(post_params)
        redirect_to post_url(@post)
    else
        flash.now[:errors] = @post.errors.full_messages
        render :edit
    end
  end

  private
  def post_params
    params.require(:post).permit(:title, :url, :content, sub_ids: [])
  end
end
