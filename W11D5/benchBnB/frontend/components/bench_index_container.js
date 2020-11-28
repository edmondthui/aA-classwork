// NOT IN USE

import {connect} from 'react-redux'
import {fetchBenches} from '../actions/bench_actions'
import BenchIndex from './bench_index'

const mapStateToProps = (state) => {
    let benchesArr = Object.keys(state.entities.benches).map((key) => state.entities.benches[key])
    return {
        benches: benchesArr
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBenches : () => dispatch(fetchBenches())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex)