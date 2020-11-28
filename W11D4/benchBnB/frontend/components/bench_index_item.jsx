import React from 'react';


export default (props) => {
    // debugger;
    return (
        <li className="benchItem">id: {props.bench.id}, seating: {props.bench.seating}, description: {props.bench.description}, lat: {props.bench.lat}, lng: {props.bench.lng}</li>
    )
}