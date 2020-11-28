if @benches
    @benches.each do |bench|
        json.set! bench.id do 
            json.extract! bench, :id, :seating, :description, :lat, :lng 
        end
    end
else
    json.set! @bench.id do 
        json.extract! @bench, :id, :seating, :description, :lat, :lng
    end
end