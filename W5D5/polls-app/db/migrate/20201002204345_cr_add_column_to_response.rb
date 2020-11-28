class CrAddColumnToResponse < ActiveRecord::Migration[5.2]
  def change
    add_column :responses, :answers_id, :integer
    add_column :responses, :respondent_id, :integer

    add_index :responses, :answers_id
    add_index :responses, :respondent_id
  end
end
