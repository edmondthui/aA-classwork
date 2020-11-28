import React from 'react'

class FilterForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            minSeating: this.props.minSeating,
            maxSeating: this.props.maxSeating
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    update(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.updateFilter(null, this.state);
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Min Seating:
                        <input type="number" value={this.state.minSeating} onChange={this.update("minSeating")}/>
                    </label>

                    <label>Max Seating:
                        <input type="number" value={this.state.maxSeating} onChange={this.update("maxSeating")}/>
                    </label>

                    <input type="submit"/>
                </form>
            </div>
        )
    }
}

export default FilterForm