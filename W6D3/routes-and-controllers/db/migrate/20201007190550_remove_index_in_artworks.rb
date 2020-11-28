class RemoveIndexInArtworks < ActiveRecord::Migration[5.2]
  def change
    remove_index :artworks, :image_url
  end
end
