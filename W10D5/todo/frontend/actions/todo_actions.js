export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
import * as APIUtil from '../util/todo_api_util';
import * as ErrorActions from './error_actions'

export const receiveTodos = (todos) => ({
  type: RECEIVE_TODOS,
  todos
})

export const receiveTodo = (todo) => {
  debugger
  return {
  type: RECEIVE_TODO,
  todo
}}

export const fetchTodos = () => {
  return (dispatch) => {
    return APIUtil.fetchTodos().then(todos => {
      return dispatch(receiveTodos(todos));
    })
  }
}

export const createTodo = (todo) => dispatch => (
    APIUtil.createTodo(todo)
    .then(
      todo =>  dispatch(receiveTodo(todo)),
      err => dispatch(ErrorActions.receiveErrors(err.responseJSON))
    )
    
);