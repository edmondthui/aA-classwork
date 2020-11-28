import React from 'react';
import TodoListItem from './todo_list_item'
import TodoForm from '../todo_list/todo_form';

// { todos = [], receiveTodo, fetchTodo }
class TodoListContainer extends React.Component {
   constructor (props) {
     super(props)
   }

   componentDidMount() {
     this.props.fetchTodos();
   }


  render(){
    
    return (
      <div>
        <ul>
          { this.props.todos.map( todo => (
            <TodoListItem key={todo.id} title={todo.title} />
          ))}
        </ul>

        <TodoForm receiveTodo={this.props.receiveTodo} createTodo={this.props.createTodo} errors={this.props.errors} clearErrors={this.props.clearErrors}/>
          
      </div>

      
    )
  }
}

export default TodoListContainer;
