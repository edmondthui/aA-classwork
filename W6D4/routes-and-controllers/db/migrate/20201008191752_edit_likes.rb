class EditLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :user_id, :integer, null: false
    add_index :likes, :user_id
  end
end
