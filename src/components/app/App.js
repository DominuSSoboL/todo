import React, { Component } from 'react';
import './app.css';

import AppHeader from '../app-header';
import Todos from '../app-todos';
import AppFooter from '../app-footer';

export default class App extends Component {

  maxId = 0;
  todosId = 1;
  todosChangeId: 0;
  state = {
    todos: [
      {
        title: 'Fore work',
        todosId: 0,
        titleTextState: false,
        formClassState: false,
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
        todosId: this.todosId++,
        titleTextState: false,
        formClassState: false,
        tasks: [
          this.createTask('New task')
        ]
      };
      
      const newTodos = [
        ...oldTodos,
        createTodos
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
  addNewTask = (id) => {
    this.setState(({ todos }) => {
      // const idx = todos.findIndex( (el) => el.todosId === id);
      // const beforeItems = todos.slice(0, idx);
      // const afterItems = todos.slice(idx + 1);

      // const oldItem = todos[idx];

      // const newTodo = {
      //   ...oldItem,

      // }
      // const newTodos = [
      //   ...beforeItems,
      //   newItem,
      //   ...afterItems
      // ]
      // return{
      //   todos: newTodos
      // }
    });
  }
  // DELETE TODOS
  deleteTodos = (id) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => el.todosId === id );
      const beforeItems = todos.slice(0, idx);
      const afterItems = todos.slice(idx + 1);
      const newTodos = [
        ...beforeItems,
        ...afterItems
      ]
      console.log(id)
      return{
        todos: newTodos
      }

    });
  }
  // SET NEW TITLE TODO LIST
  setNewTitle = (text) => {
    this.setState(({ todos }) => {
      const beforeItems = todos.slice(0, this.todosChangeId);
      const afterItems = todos.slice(this.todosChangeId + 1);
      const oldItem = todos[this.todosChangeId];
      const newItem = { ...oldItem,
                        title: text,
                        titleTextState: false,
                        formClassState: false};
      const newTodos = [
        ...beforeItems,
        newItem,
        ...afterItems
      ]
      return{
        todos: newTodos
      }

    });
  };
  // CHANGE TITLE TODO LIST
  chengeTitleTodos = (id) => {
    this.todosChangeId = id;
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => el.todosId === id );
      const beforeItems = todos.slice(0, idx);
      const afterItems = todos.slice(idx + 1);
      const oldItem = todos[idx];
      const newItem = { ...oldItem, 
                        titleTextState: !oldItem.titleTextState,
                        formClassState: !oldItem.formClassState};
      const newTodos = [
        ...beforeItems,
        newItem,
        ...afterItems
      ]
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
              chengeTitleTodos={ this.chengeTitleTodos }
              setNewTitle={ this.setNewTitle }
              deleteTodos={ this.deleteTodos }/>
        <AppFooter />
        </div>
      </div>
    );
  };
}