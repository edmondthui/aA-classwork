import {connect} from 'react-redux'
import BenchForm from './bench_form'
import {postBench} from '../actions/bench_actions'

const mapStateToProps = (state, {location}) => {
    return {
        bench: {
            description: "",
            seating: 0,
            lat: new URLSearchParams(location.search).get("lat"),
            lng: new URLSearchParams(location.search).get("lng")
        }
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        postBench: (bench) => dispatch(postBench(bench))        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BenchForm)