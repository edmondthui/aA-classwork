import React from 'react'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        }
        this.tick = this.tick.bind(this);
    }

    tick() {
        this.setState({time: new Date()});
    }

    componentDidMount() {
        this.id = setInterval(this.tick, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.id);
    }
    
    render() {

        return (
            <div className = "clock-box">
                <div className = "time">
                    <h1>Clock:</h1>
                    <h1>{this.state.time.toTimeString()}</h1>
                </div>

                <div className = "date">
                    <label>Date:</label>
                    <h1>{this.state.time.toDateString()}</h1>
                </div>

            </div>
        )
        
    };
}

export default Clock;

