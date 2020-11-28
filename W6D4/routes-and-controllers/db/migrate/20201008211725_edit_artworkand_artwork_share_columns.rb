class EditArtworkandArtworkShareColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :artworks, :favorite_artwork_id
    remove_column :artwork_shares, :favorite_shared_id
    
    add_column :artworks, :favorite_artwork, :boolean
    add_column :artwork_shares, :favorite_shared, :boolean
  end
end
