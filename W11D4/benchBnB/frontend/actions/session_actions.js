import { 
    postUser,
    deleteSession,
    postSession
} from "../util/session_api_util"

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"

export const login = (formUser) => {
    return dispatch => {
        postSession(formUser).then((user) => dispatch(receiveCurrentUser(user)), (errors) => dispatch(receiveErrors(errors.responseJSON)))
    }
}


export const logout = () => dispatch => (
    deleteSession().then(() => dispatch(logoutCurrentUser()))
)

export const signup = (formUser) => dispatch => (
    postUser(formUser).then(user => dispatch(receiveCurrentUser(user)))
)

export const receiveCurrentUser = (currentUser) => {
    return {
        type: RECEIVE_CURRENT_USER,
        currentUser
    }
}

export const logoutCurrentUser = () => {
    return {
        type: LOGOUT_CURRENT_USER
    }
}

export const receiveErrors = (errors) => {
    return {
        type: RECEIVE_ERRORS,
        errors 
    }
}









