import React, { Component } from 'react';
import './App.css';

import AppHeader from '../app-header';
import Todos from '../app-todos';
import AppFooter from '../app-footer';

export default class App extends Component {

  maxId = 1;
  todosId = 1;
  todosChangeId = 0;
  state = {
    todos: [
      {
        title: 'Fore work',
        todosId: 0,
        titleTextState: false,
        formClassState: false,
        tasks: [
          this.createTask('Drink coffe'),
          this.createTask('Make awesome app'),
          this.createTask('Make drink tee')
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
  };
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
      return{
        todos: newTodos
      }

    });
  };
  // SET NEW TITLE TODO LIST
  setNewTitle = (text) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => el.todosId === this.todosChangeId );
      const beforeItems = todos.slice(0, idx);
      const afterItems = todos.slice(idx + 1);
      const oldItem = todos[idx];
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
  // ADD NEW TASK
  addNewTaskCurrentID = (id) => {
    this.todosChangeId = id;
  };
  addNewTask = (text) => { 
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => el.todosId === this.todosChangeId );

      const beforeItems = todos.slice(0, idx);
      const afterItems = todos.slice(idx + 1);
      const oldItem = todos[idx];
      const newTask = this.createTask( text );

      oldItem.tasks.push(newTask)

      const newTodos = [
        ...beforeItems,
        oldItem,
        ...afterItems
      ]
      return{
        todos: newTodos
      }

    });
  };
  //DELETE ID
  getDeleteTodosTaskId = (id) => {
    this.todosChangeId = id;
  }
  getDeleteTaskId = (id) => {   
    this.setState(({ todos }) => {
      const idxTD = todos.findIndex((el) => el.todosId === this.todosChangeId );
      const idxTK = todos[idxTD].tasks.findIndex((el) => el.id === id );
      
      const beforeTodos = todos.slice(0, idxTD);
      const currentTodos = todos[idxTD];
      const cloneCurrentTodos = {...currentTodos};
      const afterTodos = todos.slice(idxTD + 1);


      const beforeTask = cloneCurrentTodos.tasks.slice(0, idxTK);
      const afterTask = cloneCurrentTodos.tasks.slice(idxTK + 1);
      
      cloneCurrentTodos.tasks = [
        ...beforeTask,
        ...afterTask
      ]

      const newTodos = [
        ...beforeTodos,
        cloneCurrentTodos,
        ...afterTodos
      ]
      return {
        todos: newTodos
      }
    });
  }

  render(){
    return (
      <div className="container">
        <div className="row">
        <AppHeader />
        <Todos 
              todos={ this.state.todos } 
              createTodos={ this.createTodos }
              chengeTitleTodos={ this.chengeTitleTodos }
              addNewTaskCurrentID={ this.addNewTaskCurrentID }
              addNewTask={ this.addNewTask }
              setNewTitle={ this.setNewTitle }
              deleteTodos={ this.deleteTodos }
              getDeleteTodosTaskId={ this.getDeleteTodosTaskId }
              getDeleteTaskId={ this.getDeleteTaskId }/>
        <AppFooter />
        </div>
      </div>
    );
  };
}