import React from 'react';
import TodoListItem from './todo_list_item'
import TodoForm from '../todo_list/todo_form';

export default ({todos=[], receiveTodo}) => {
    

    return (
      <div>
        <ul>
          { todos.map( todo => (
            <TodoListItem key={todo.id} title={todo.title} />
          ))}
        </ul>

        <TodoForm receiveTodo={receiveTodo}/>
          
      </div>

      
    )
}
