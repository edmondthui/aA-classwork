import { login } from '../../actions/session'
import { connect } from 'react-redux'
import Login from './login'

const mapDispatchToProps = (dispatch) => {
    return {
        login: (formLogin) => (dispatch(login(formLogin)))
    }
}

export default connect(null, mapDispatchToProps)(Login)
