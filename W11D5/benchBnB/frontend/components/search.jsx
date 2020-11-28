import React from 'react';
import BenchMap from './bench_map'
import BenchIndex from './bench_index'
import FilterForm from './filter_form'

class Search extends React.Component {
    constructor(props) {
        super(props)
    }
    

    render() {
        return (
            <div className="searchContainer">
                <div className="benchContainer">
                    <BenchIndex benches={this.props.benches} fetchBenches={this.props.fetchBenches}/>
                    <BenchMap benches={this.props.benches} updateFilter={this.props.updateFilter}/>
                </div>
                <div className="filterForm">
                    <FilterForm maxSeating={this.props.maxSeating} minSeating={this.props.minSeating} updateFilter={this.props.updateFilter}/>
                </div>
            </div>
        )
    }
}

export default Search