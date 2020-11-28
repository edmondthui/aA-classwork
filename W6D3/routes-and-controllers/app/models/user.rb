# == Schema Information
#
# Table name: users
#
#  id       :bigint           not null, primary key
#  username :string           not null
#
class User < ApplicationRecord
    validates :username, presence: true, uniqueness: true

    has_many :artworks,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :Artwork,
        dependent: :destroy

    has_many :views,
        primary_key: :id,
        foreign_key: :viewer_id,
        class_name: :ArtworkShare

    has_many :shared_artworks,
        through: :artworks,
        source: :share,
        dependent: :destroy
end
