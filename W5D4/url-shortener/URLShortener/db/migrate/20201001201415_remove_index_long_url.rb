class RemoveIndexLongUrl < ActiveRecord::Migration[5.2]
  def change
    remove_index :shortened_urls, column: :long_url
  end
end
