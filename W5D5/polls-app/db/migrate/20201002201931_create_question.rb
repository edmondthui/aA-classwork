class CreateQuestion < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :text, null: false
      t.integer :query_id, null: false
    end
    add_index :questions, :query_id
  end
end
