import React from 'react';

class PokemonDetail extends React.Component {

    // componentDidMount() {
    //     this.props.requestPoke(this.props.match.params.pokemonId)
    // }


    // componentDidUpdate(prevProps) {
    //     if (this.props.match.params.pokemonId !== prevProps.match.params.pokemonId) {
    //         this.props.requestPoke(this.props.match.params.pokemonId)
    //     }
    // }

    render() {
        // this.props.poke
        // this.props.items
        debugger;
        return (
            <div className="pokeShow">
                <h1>{this.props.poke.name}</h1>
                <img src={this.props.poke.image_url} alt={this.props.poke.name} height="500" width="500"/>
                <p></p>
            </div>
        )
    }
}



export default PokemonDetail