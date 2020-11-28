import {connect} from 'react-redux'
import {fetchBenches} from '../actions/bench_actions'
// import BenchIndex from './bench_index'
import Search from'./search'
import {updateBounds, updateFilter} from '../actions/filter_actions'


const mapStateToProps = (state) => {
    let benchesArr = Object.keys(state.entities.benches).map((key) => state.entities.benches[key])
    return {
        benches: benchesArr
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBenches : () => dispatch(fetchBenches()),
        updateBounds : (bounds) => dispatch(updateBounds(bounds)),
        updateFilter : (filter, value) => dispatch(updateFilter(filter, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)