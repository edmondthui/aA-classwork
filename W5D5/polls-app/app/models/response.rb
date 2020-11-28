# == Schema Information
#
# Table name: responses
#
#  id            :bigint           not null, primary key
#  answers_id    :integer          not null
#  respondent_id :integer          not null
#
class Response < ApplicationRecord

    belongs_to :respondent,
        primary_key: :id,
        foreign_key: :respondent_id,
        class_name: :User

    belongs_to :answer_choice,
        primary_key: :id,
        foreign_key: :answers_id,
        class_name: :AnswerChoice

    # sibling_responses
    has_one :question
      through: :answers_id,
      source: :quest_id




end
