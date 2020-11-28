json.entities do 
    json.users do 
        # json.set! @user.id do
            json.extract! @user, :id, :username 
        # end
    end
end

json.session do
    json.id @user.id
end

json.errors do 
    json.session ["Invalid credentials"]
end