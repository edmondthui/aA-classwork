import React from 'react';
import { Link } from "react-router-dom";

const PokemonIndexItem = (props) => {

    return (
        <Link to={`/pokemon/${props.pokemon.id}`}>
            <div className="sidebarPoke">
                <img src={props.pokemon.image_url} alt={props.pokemon.name}/>
                <li>{props.pokemon.name}</li>
            </div>
        </Link>
    )

}

export default PokemonIndexItem