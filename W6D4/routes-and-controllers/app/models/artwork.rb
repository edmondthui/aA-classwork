# == Schema Information
#
# Table name: artworks
#
#  id                  :bigint           not null, primary key
#  title               :string           not null
#  image_url           :string           not null
#  artist_id           :integer          not null
#  favorite_artwork_id :integer
#
class Artwork < ApplicationRecord
    validates :title, presence: true 
    validates :image_url, presence: true
    validates :artist_id, presence: true
    validates :artist_id, uniqueness: { scope: :title }

    belongs_to :artist,
        primary_key: :id,
        foreign_key: :artist_id,
        class_name: :User

    has_one :share,
        primary_key: :id,
        foreign_key: :artwork_id,
        class_name: :ArtworkShare

    has_many :shared_viewers,
        through: :share,
        source: :viewer

    has_many :comments,
        primary_key: :id,
        foreign_key: :artwork_id,
        class_name: :Comment,
        dependent: :destroy

    has_many :likes, 
        as: :like

end
