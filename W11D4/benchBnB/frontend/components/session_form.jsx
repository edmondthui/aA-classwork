import React from 'react'
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            username: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        const user = Object.assign({}, this.state)
        this.props.processForm(user)
    }

    update(field) {
        return (e) => {
            this.setState({[field] : e.target.value})
        }
    }

    render() {
        const formType = this.props.formType === "login" ? (
            <div>
                <h1>Log in</h1>
                <Link to="/signup">Sign Up</Link>
            </div>
        ) : (
            <div>
                <h1>Sign up</h1>
                <Link to="/login">Log in</Link>
            </div>
        )
        const errors = (
            <ul>
                {this.props.errors.map((error, idx)=> <li key={idx}>{error}</li>)}
            </ul>
        )
        return (
            <div>
                {formType}
                {errors}
                <form onSubmit={this.handleSubmit}>
                    <label>Username:
                        <input type="text" onChange={this.update("username")}/>
                    </label>

                    <label>Password:
                        <input type="password" onChange={this.update("password")}/>
                    </label>

                    <input type="submit" value={this.props.formType}/>
                </form>

            </div>
        )
    }
}

export default SessionForm