import React from 'react';
import BenchMap from './bench_map'
import BenchIndex from './bench_index'

class Search extends React.Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        return (
            <div>
                <BenchIndex benches={this.props.benches} fetchBenches={this.props.fetchBenches}/>
                <BenchMap benches={this.props.benches} updateBounds={this.props.updateBounds} updateFilter={this.props.updateFilter}/>
            </div>
        )
    }
}

export default Search