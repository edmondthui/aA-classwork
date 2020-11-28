export const selectAllPokemon = (state) => {
    //entites, pokemon, ids as top level skeys
    const pokemon = Object.keys(state.entities.pokemon).map((key) => state.entities.pokemon[key]);
    return pokemon;
}