export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches) {
        let benchesObj = {}

        let removeObj = Object.keys(this.markers).filter(key => (!benchesObj[key]))
        // console.log(removeObj)
        removeObj.forEach(key => (this.removeMarker(key)));

        if (benches) {
            benches.forEach((bench) => {
                this.createMarkerFromBench(bench);
                benchesObj[bench.id] = bench
            })
        }

        // console.log(this.markers)
    }

    removeMarker(key) {
        // console.log(this.markers[key]);
        this.markers[key].setMap(null);
        delete this.markers[key]
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