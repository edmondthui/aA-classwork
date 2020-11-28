class ArtworksController < ApplicationController
    def index
        #need to add a ArtworksController#index for the nested resource
            #return Artworks owned by a user
            #return Artworks shared with the user
    end

    def create
        artwork = Artwork.new(artwork_params)
        if artwork.save
            render json: artwork
          else
            render json: artwork.errors.full_messages, status: :unprocessable_entity
        end
      end

    def show
        artwork = Artwork.find(params[:id])
        render json: artwork
    end

    def update
        artwork = Artwork.find(params[:id])
        if artwork.update(artwork_params)
            render json: artwork
        else
            render json: artwork.errors.full_messages, status: :unprocessable_entity
        end
    end

    def destroy
        artwork = Artwork.find(params[:id])
        artwork.destroy
        render json: artwork
    end
    
    private
    def artwork_params
        params.require(:artwork).permit(:title, :image_url, :artist_id)
    end
end