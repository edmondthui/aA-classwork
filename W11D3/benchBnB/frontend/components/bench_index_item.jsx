import React from 'react';


export default (props) => {
    return (
        <li>
            id: {props.bench.id}
            description: {props.bench.description}
            lat: {props.bench.lat}
            lng: {props.bench.lng}
        </li>
    )
}