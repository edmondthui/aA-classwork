import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store'
// import {receiveTodo, receiveTodos} from './actions/todo_actions';
import Root from './components/root'
import allTodos from './reducers/selectors'

document.addEventListener("DOMContentLoaded", () => {

  const container = document.querySelector(".container");
  ReactDOM.render(<Root store={store}/>, container);

  //TODO DELETE TESTING
  window.store = store;
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  // window.allTodos = allTodos;

})

