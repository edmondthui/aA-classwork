@pokemon.each do |pokemon|
    json.partial! "api/pokemon/pokemon", pokemon: pokemon
end