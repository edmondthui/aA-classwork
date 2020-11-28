class CreateAnswerChoices < ActiveRecord::Migration[5.2]
  def change
    create_table :answer_choices do |t|
      t.integer :quest_id, null: false
      t.string :answer_text, null: false

    end
    add_index :answer_choices, :quest_id
  end
end
