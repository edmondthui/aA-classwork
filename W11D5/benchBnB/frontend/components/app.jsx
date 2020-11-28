import React from 'react';
import GreetingContainer from './greeting_container'
import { Route } from 'react-router-dom'
import LoginForm from './login_form_container'
import SignupForm from './signup_form_container'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
// import BenchIndexContainer from './bench_index_container'
import SearchContainer from './search_container'
import BenchFormContainer from './bench_form_container'

const App = () => (
    <div>
        <h1>BenchBnB</h1>
        <GreetingContainer />
        <AuthRoute path="/login" component={LoginForm} />
        <AuthRoute path="/signup" component={SignupForm} />
        <Route exact path="/" component={SearchContainer} />
        <ProtectedRoute path="/benches/new" component={BenchFormContainer} />
    </div>
);

export default App;