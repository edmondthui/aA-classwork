export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches) {
        let benchesObj = {}
        if (benches) {
            benches.forEach((bench) => {
                this.createMarkerFromBench(bench);
                benchesObj[bench.id] = bench
            })
        }
        Object.keys(this.markers).filter(key => (!benchesObj[key])).forEach(marker => (removeMarker(this.marker[marker.key])))
        
        console.log(this.markers)
    }

    removeMarker(marker) {
        this.markers[marker.id].setMap(null);
        delete this.markers[marker.id]
    }

    createMarkerFromBench(bench) {
        if (!Object.keys(this.markers).includes(bench.id)) {
            let marker = new google.maps.Marker({
                position: new google.maps.LatLng(bench.lat,bench.lng),
                title: bench.description
            })
            this.markers = Object.assign(this.markers, {[bench.id]: marker})
            marker.setMap(this.map)
        }
    }
}