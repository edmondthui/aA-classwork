export const fetchAllPokemon = () => {
    return $.ajax({
        method: "GET",
        url: "api/pokemon"
    })
}

export const fetchPoke = (pokeId) => {
    return $.ajax({
        method: "GET",
        url: `api/pokemon/${pokeId}`
    })
}

//TODO TESTING