import React from 'react';
import ReactDOM from 'react-dom';

//import './index.css';
//import App from './components/app';
// ReactDOM.render(<App />, document.getElementById('root'));

import './stylesheets/application.scss';

import TodoListPage from '../src/pages/todo_list_page';
ReactDOM.render(<TodoListPage />, document.getElementById('root'));
  