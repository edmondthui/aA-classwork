import React from 'react';
import MarkerManager from '../util/marker_manager'

class BenchMap extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.7758, lng: -122.435},
            zoom: 13
        }
        this.map = new google.maps.Map(this.mapNode, mapOptions)
        this.MarkerManager = new MarkerManager(this.map)
        this.MarkerManager.updateMarkers(this.props.benches)
        this.map.addListener("idle", ()=> {
            let bounds = this.map.getBounds()
            let NorthEast = {lat: bounds.getNorthEast().lat(), lng: bounds.getNorthEast().lng()}
            let SouthWest = {lat: bounds.getSouthWest().lat(), lng: bounds.getSouthWest().lng()}
            bounds = {northEast: NorthEast, southWest: SouthWest}
            // this.props.updateBounds({bounds})
            this.props.updateFilter({bounds})
        })
    }

    componentDidUpdate() {
        this.MarkerManager.updateMarkers(this.props.benches)
    }

    render() {
        return (
            <div id='map-container' ref={map=>this.mapNode=map}>

            </div>
        )
    }
}

export default BenchMap