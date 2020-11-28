class AddNullFalseToCats < ActiveRecord::Migration[5.2]
  def change
    change_column_null :cats, :user_id, false
  end
end
