import { connect } from 'react-redux';
import todoList from './todo_list'
import allTodos from '../../reducers/selectors'
import { receiveTodo, receiveTodos, fetchTodos, createTodo } from '../../actions/todo_actions';
import { clearErrors } from '../../actions/error_actions'

const mapStateToProps = (state) => {
    
  return {
      todos: allTodos(state),
      errors: state.errors
  }
}

const mapDispatchToProps = (dispatch) => { 
  return {
    receiveTodo: (todo) => {
      return dispatch(receiveTodo(todo))
    }, 
    fetchTodos: () => {
      return dispatch(fetchTodos())
    },
    createTodo: (todo) => {
      return dispatch(createTodo(todo))
    },
    clearErrors: () => {
      return dispatch(clearErrors())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(todoList);