json.array! @parties do |party|
    
    json.extract! party, :name, :location

    json.guests party.guests.each do |guest|
        
        json.name guest.name
        json.gifts guest.gifts.each do |gift| 
            json.title gift.title 
            json.description gift.description 
        end
        
    end
end