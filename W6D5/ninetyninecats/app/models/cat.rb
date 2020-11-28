require 'action_view'

class Cat < ApplicationRecord

    include ActionView::Helpers::DateHelper
    
    validates :birth_date, presence: true
    validates :name, presence: true
    validates :sex, presence: true
    validates :description, presence: true
    validates :color, presence: true

    def age
        t = Date.today
        age = (t - self.birth_date)
        (age.to_i/365.to_f).round(2)
    end

    has_many :rental_requests,
        foreign_key: :cat_id,
        class_name: :CatRentalRequest,
        dependent: :destroy
end