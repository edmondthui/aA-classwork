# == Schema Information
#
# Table name: visits
#
#  id           :bigint           not null, primary key
#  user_id      :integer          not null
#  shortened_id :integer          not null
#
class Visit < ApplicationRecord


    def self.record_visit!(user, shortened_id)
        Visit.create!(user_id: user.id, shortened_id: shortened_id.id)
    end

    def num_clicks
        Visit.all.count
    end

    def num_uniques
        Visit.all.uniq.count
    end

    def num_recent_uniques

    end


end
