import React from 'react'
import { withRouter } from 'react-router-dom';


class BenchForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.bench
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    update(field) {
        return (e) => {
            this.setState({[field]: e.currentTarget.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.postBench(this.state);
        this.props.history.push('/')
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Description:
                        <input type="text" value={this.state.description} onChange={this.update("description")}/>
                    </label>

                    <label>Seating:
                        <input type="number" value={this.state.seating} onChange={this.update("seating")}/>
                    </label>

                    <label>Latitude:
                        <input type="text" value={this.state.lat} onChange={this.update("lat")} disabled />
                    </label>

                    <label>Longitude:
                        <input type="text" value={this.state.lng} onChange={this.update("lng")} disabled />
                    </label>

                    <input type="submit" value="Create Bench"/>
                </form>
            </div>
        )
    }
}

export default withRouter(BenchForm)