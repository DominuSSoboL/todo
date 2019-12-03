import React from 'react'
import { Switch, Route } from 'react-router-dom';
import TodoPage from '../pages/todo_page';
import SignIn from '../pages/auth/sign_in';
import SignUp from '../pages/auth/sign_up';

const App = () => (
  <Switch>
    <Route exact path='/' component={TodoPage}/>
    <Route path='/sign_in' component={SignIn}/>
    <Route path='/sign_up' component={SignUp}/>
  </Switch>
);

export default App;
