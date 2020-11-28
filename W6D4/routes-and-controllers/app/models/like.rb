# == Schema Information
#
# Table name: likes
#
#  id        :bigint           not null, primary key
#  like_id   :integer          not null
#  like_type :string           not null
#  user_id   :integer          not null
#

class Like < ApplicationRecord

    belongs_to :like, 
        polymorphic: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
