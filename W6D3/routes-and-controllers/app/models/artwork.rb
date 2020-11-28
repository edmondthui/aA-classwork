# == Schema Information
#
# Table name: artworks
#
#  id        :bigint           not null, primary key
#  title     :string           not null
#  image_url :string           not null
#  artist_id :integer          not null
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
        
end
