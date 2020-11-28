class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false, unique: true
      t.string :password_digest, null: false
      t.string :session_token, null: false, unique: true
    end
    add_index :users, :session_token
    add_index :users, :username
  end
end
