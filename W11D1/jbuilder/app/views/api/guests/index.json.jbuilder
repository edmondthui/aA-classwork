json.array! @guests.each do |guest| 
    if (guest.age > 40 && guest.age < 50)
        json.partial! "api/guests/guest", guest: guest
    end
end


# json.<someKey>  
# json.username "Bob" => {"username": "Bob"}

# json.array! @guests, :name, :age, :favorite_color 