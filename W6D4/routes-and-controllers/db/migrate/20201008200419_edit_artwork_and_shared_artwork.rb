class EditArtworkAndSharedArtwork < ActiveRecord::Migration[5.2]
  def change
    add_column :artworks, :favorite_artwork_id, :integer
    add_column :artwork_shares, :favorite_shared_id, :integer
    add_index :artworks, :favorite_artwork_id
    add_index :artwork_shares, :favorite_shared_id
  end
end

#---SHARED ARTWORKS---
# favorite_shared_id
# belongs_to user
#  ...
#
#---ARTWORKS---
# favorite_artwork_id
# belongs_to user
#   ...

#---USER---
# has_many favorite_artworks
# ...
#
# has_many favorite_shared_artworks
# ...