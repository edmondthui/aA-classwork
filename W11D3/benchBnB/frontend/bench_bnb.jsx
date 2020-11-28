import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root'
import configureStore from './store/store'

// import {fetchBenches} from './util/bench_api_util'
import {fetchBenches} from './actions/bench_actions'
// import {postSession, postUser, deleteSession} from './util/session_api_util'
// import {login, signup, logout} from './actions/session_actions'

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;
  if (window.currentUser) {
    let preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser
  } else {
    store = configureStore()
  }
  ReactDOM.render(<Root store={store}/>, root);

  //TODO REMOVE TESTING
  // window.postSession = postSession
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.deleteSession = deleteSession
  // window.postUser= postUser
  // window.login = login
  // window.signup = signup
  // window.logout= logout
  window.fetchBenches = fetchBenches
});