json.array! @gifts.each do |gift|
    # json.id gift.id
    json.partial! "api/gifts/gift", gift: gift
end
