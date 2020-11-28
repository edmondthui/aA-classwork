json.partial! "api/guests/guest", guest: @guest
# json.gifts do 
json.gifts @guest.gifts do |gift| 
    json.extract! gift, :id, :title, :description, :guest_id
end