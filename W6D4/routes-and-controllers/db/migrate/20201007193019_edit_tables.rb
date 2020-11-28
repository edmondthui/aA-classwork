class EditTables < ActiveRecord::Migration[5.2]
  def change
    remove_index :artworks, :artist_id
    remove_index :artworks, :title
    add_index :artworks, :artist_id
    add_index :artworks, [:artist_id, :title], unique: true
  end
end
