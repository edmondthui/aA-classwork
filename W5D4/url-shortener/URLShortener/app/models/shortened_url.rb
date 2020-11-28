# == Schema Information
#
# Table name: shortened_urls
#
#  id        :bigint           not null, primary key
#  long_url  :string           not null
#  short_url :string           not null
#  user_id   :integer          not null
#
require 'securerandom'
require 'byebug'
class ShortenedUrl < ApplicationRecord

    validates :short_url, presence: true, uniqueness: true 
    validates :long_url, presence: true

    belongs_to :submitter,
      primary_key: :id,
      foreign_key: :user_id,
      class_name: :User

    has_many :submitted_urls,
      through: :submitter,
      source: :shortened_urls


    def self.random_code

        code = SecureRandom.urlsafe_base64 #generates a random code
        while ShortenedUrl.exists?(short_url: code) #check if code is already in the url table
            code = SecureRandom.urlsafe_base64 #if it is keep generating new codes until it isnt
        end

        code

    end

    def self.factory_method(user, long_url) #takes User object and long_url 
        shortened_url = ShortenedUrl.random_code #creates a new shortened url ?using random_code?
        ShortenedUrl.create!(long_url: long_url, short_url: shortened_url, user_id: user.id) #submit?(user, long_url, shortened_url)
    end

    # submitter #association to ShortenedUrl

    # submitted_urls #association to User

end


