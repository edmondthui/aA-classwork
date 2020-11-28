import { connect } from 'react-redux';
import { requestPoke } from '../../actions/pokemon_actions'
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => {
    const poke = state.entities.pokemon[ownProps.match.params.pokemonId];
    return {
        poke: poke,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        requestPoke: (pokeId) => dispatch(requestPoke(pokeId))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);