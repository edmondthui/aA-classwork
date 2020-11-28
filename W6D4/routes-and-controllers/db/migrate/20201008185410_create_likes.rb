class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :like_id, null: false
      t.string :like_type, null: false
    end
    add_index :likes, [:like_type, :like_id]
  end
end

#---LIKES TABLE---
#  ID
#  like_id     integer
#  like_type   string


#  likes_type -> @user.likes
#  likes_type -> @artwork.likes
#  belongs_to :likes_id, polymorphic: true


#---USERS TABLE---
#  ID
#  ...

#associations 
#  has many :likes, as: :likes_id

#---ARTWORKS TABLE---
#  ID
#  ...

#associations 
#  has many :likes, as: :likes_id
