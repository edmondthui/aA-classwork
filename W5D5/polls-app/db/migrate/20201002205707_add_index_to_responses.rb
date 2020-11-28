class AddIndexToResponses < ActiveRecord::Migration[5.2]
  def change
    add_index :responses, :answers_id
    add_index :responses, :respondent_id
  end
end
