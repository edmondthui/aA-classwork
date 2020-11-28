class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :title, null: false
      t.string :image_url, null: false
      t.integer :artist_id, null: false
    end
    add_index :artworks, :title
    add_index :artworks, :image_url, unique: true
    add_index :artworks, :artist_id, unique: true
  end
end
