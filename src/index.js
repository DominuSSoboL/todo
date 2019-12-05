import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import TodoPage from './pages/todo_page';
import SignIn from './pages/auth/sign_in';
import SignUp from './pages/auth/sign_up';

import './stylesheets/application.scss';

ReactDOM.render((
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={TodoPage}/>
        <Route path='/sign_in' component={SignIn}/>
        <Route path='/sign_up' component={SignUp}/>
      </Switch>
    </MainLayout>
  </BrowserRouter>
), document.getElementById('root'))
