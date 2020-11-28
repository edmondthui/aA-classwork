class CatRentalRequest < ApplicationRecord
    validate :cat_id, presence: true
    validate :start_date, presence: true
    validate :end_date, presence: true
    validate :status, presence: true

    belongs_to :cat,
        foreign_key: :cat_id
        class_name: :Cat
    
    def overlapping_requests
        CatRentalRequest
            .where.not(id: self.id)
            .where(cat_id: cat_id)
            .where.not('start_date > :end_date || end_date < :start_date', start_date: start_date, end_date: end_date)
    end

#   2.2.1 Placeholder Conditions
#   Similar to the (?) replacement style of params, you can also specify keys in your conditions string along with a corresponding keys/values hash:

#   Client.where("created_at >= :start_date AND created_at <= :end_date",
#     {start_date: params[:start_date], end_date: params[:end_date]})

end



