import {connect} from 'react-redux'
import {fetchBenches} from '../actions/bench_actions'
// import BenchIndex from './bench_index'
import Search from'./search'
import {updateBounds, updateFilter} from '../actions/filter_actions'


const mapStateToProps = (state) => {
    let benchesArr = Object.keys(state.entities.benches).map((key) => state.entities.benches[key])
    const {minSeating, maxSeating} = state.ui.filter
    return {
        benches: benchesArr,
        minSeating: minSeating ? minSeating : 1,
        maxSeating: maxSeating ? maxSeating : 10
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchBenches : (filter) => dispatch(fetchBenches(filter)),
        // updateBounds : (bounds) => dispatch(updateBounds(bounds)),
        updateFilter : (filter, value) => dispatch(updateFilter(filter, value))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)