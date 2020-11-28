# == Schema Information
#
# Table name: questions
#
#  id       :bigint           not null, primary key
#  text     :string           not null
#  query_id :integer          not null
#
class Question < ApplicationRecord

    validates :text, presence: true

    belongs_to :poll,
      primary_key: :id,
      foreign_key: :query_id,
      class_name: :Poll
    
    has_many :answer_choices,
      primary_key: :id,
      foreign_key: :quest_id,
      class_name: :AnswerChoice
end
