class AddOptionsToResponses < ActiveRecord::Migration[5.2]
  def change
    remove_column :responses, :answers_id, :integer
    remove_column :responses, :respondent_id, :integer
    add_column :responses, :answers_id, :integer, null: false
    add_column :responses, :respondent_id, :integer, null: false
  end
end
