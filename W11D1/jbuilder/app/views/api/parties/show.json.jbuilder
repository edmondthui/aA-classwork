json.extract! @party, :name, :location

json.guests @party.guests.each do |guest|
    json.name guest.name
    json.gifts guest.gifts.each do |gift| 
        json.title gift.title ##can these be in an array
        json.description gift.description 
    end
end