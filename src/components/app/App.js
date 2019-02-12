import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header';
import Todos from '../app-todos';
import AppFooter from '../app-footer';

export default class App extends Component {

  maxId = 0;
  todosId = 0;
  state = {
    todos: [
      {
        title: 'Fore work',
        todosId: this.todosId,
        tasks: [
          this.createTask('Drink coffe'),
          this.createTask('New task'),
          this.createTask('Make  Kiss'),
          this.createTask('Make awesome May')
        ]
      }
    ]
  };
  // CREATE TODO LIST
  createTodos = () => {
    this.setState (({ todos }) => {
      const oldTodos = todos.slice(0, this.state.todos.length);

      const createTodos = {
        title: 'New todos', 
        todosId: ++this.todosId,
        tasks: [
          this.createTask('New task')
        ]
      };

      const newTodos = [
        createTodos,
        ...oldTodos
      ];
      return {
        todos: newTodos
      }
      
    });
  };
  // CREATE TASK
  createTask( label ) {
    return {
      label,
      import: false,
      id: this.maxId++,
      done: false,
      inputChange: false,
      hiddenLabel: false,
      changeMarker: false
    };
  };
  // CHANGE TITLE TODO LIST
  chengeTitleTodos = (id) => {
    this.setState(({ todos }) => {
      const beforeItems = todos.slice(0, id);
      const afterItems = todos.slice(id + 1);
      const oldItem = todos[id];
      const newItem = { ...oldItem, title: 'New title'};

      const newTodos = {
        ...beforeItems,
        ...newItem,
        ...afterItems
      }
      return{
        todos: newTodos
      }

    });
  };

  render(){
    return (
      <div className="container">
        <div className="row">
        <AppHeader />
        <Todos 
              todos={ this.state.todos } 
              createTodos={ this.createTodos }
              chengeTitleTodos={ this.chengeTitleTodos }/>
        <AppFooter />
        </div>
      </div>
    );
  };
}