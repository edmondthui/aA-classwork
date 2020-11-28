# == Schema Information
#
# Table name: answer_choices
#
#  id          :bigint           not null, primary key
#  quest_id    :integer          not null
#  answer_text :string           not null
#
class AnswerChoice < ApplicationRecord

    validates :answer_text, presence: true
    
    belongs_to :question,
        primary_key: :id,
        foreign_key: :quest_id,
        class_name: :Question
    
    has_many :responses,
        primary_key: :id,
        foreign_key: :anwsers_id,
        class_name: :Reponse
end
#
