class CatsController < ApplicationController

    def index
        @cat = Cat.all
        render :index
    end

    def show
        @cat = Cat.find_by(id: params[:id])
        render :show
    end

    def new
        @cat = Cat.new
        render :new
    end

    def create
        @cat = Cat.new(cat_params)
        
        if @cat.save
            redirect_to cats_url
        else
            render json: @cat.errors.full_message, status: :unprocessable_entity
        end
    end

    def edit
        @cat = Cat.find_by(id: params[:id])
        render :edit
    end

    def update
        @cat = Cat.find_by(id: params[:id])
        if @cat.update(cat_params)
            redirect_to cat_url(@cat)
        else
            render json: @cat.errors.full_message, status: :unprocessable_entity
        end
    end
    
    private

    def cat_params
        params.require(:cat).permit(:color, :birth_date, :sex, :name, :description)
    end
    
end