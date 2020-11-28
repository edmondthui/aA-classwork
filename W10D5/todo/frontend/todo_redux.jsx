import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'

import Root from './components/root'
import allTodos from './reducers/selectors'

import {fetchTodos} from './actions/todo_actions'

document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("content");
  const store = configureStore();
  ReactDOM.render(<Root store={store}/>, container);

  //TODO DELETE TESTING
  window.store = store;
  // window.receiveTodo = receiveTodo;
  // window.receiveTodos = receiveTodos;
  window.allTodos = allTodos;
  window.fetchTodos = fetchTodos;
})

