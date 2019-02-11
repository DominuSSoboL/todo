import React, { Component } from 'react';
import './app.css';

import Todos from '../add-todos';

export default class App extends Component {

  startIndexTodos = 3;

  state = {
    todos: [
      {
        title: 'Fore home',
        todosId: 0,
        tasks: [
          { label: 'Drink coffee', id: 1 },
          { label: 'Make awesome App', id: 2 },
          { label: 'Kiss Julia', id: 3 },
          { label: 'Get sleep', id: 4 }
        ]
      },
      {
        title: 'Fore work',
        todosId: 1,
        tasks: [
          { label: 'Drink tea', id: 1 },
          { label: 'End other works', id: 2 },
          { label: 'Call Tulpan', id: 3 },
          { label: 'End seminary site', id: 4 }
        ]
      }
    ]
  };

  
  //Create new todos
  createTodos = () => {
    this.setState(({ todos }) => {
      // const oldTodos = todos.slice(0, this.state.todos.length);

      // const createTodos = {
      //   title: 'New todos', 
      //   todosId: 3,
      //   tasks: [
      //     { label: 'New task one', id: 1 },
      //     { label: 'New task two', id: 2 }
      //   ]
      // };

      // const newTodos = [
      //   ...oldTodos,
      //   createTodos
      // ];
      // return(
      //   // todos[0].tasks[0].label = 'KMLKEMOEIKMFOWINMEFOIWKMF';
      // );
      
    });
  };

  render(){
    return (
      <div className="container">
        <div className="row">
  
        <div className="col-12 app-tile">
          <h1>Simple todo lists</h1>
          <h2>from ruby garage</h2>
        </div>

        <Todos todos={ this.state.todos } />
  
        <div className="col-12 todos-add">
          <button onClick={ this.createTodos }>
            <i className=""></i>Add TODO List 
          </button>
        </div>
  
        <div className="col-12 app-footer">
        </div>
  
        </div>
      </div>
    );
  };
};




 // <div className="col-12 todos">
        //   <div className="todos-title">
        //     { this.state.todos[0].title }
        //   </div>
        //   <div className="todos-add-task">Start typing here to create a task...</div>
        //   <ul>
        //     <li>{ this.state.todos[0].tasks[0].label }</li>
        //     <li>{ this.state.todos[0].tasks[1].label }</li>
        //     <li>{ this.state.todos[0].tasks[2].label }</li>
        //     <li>{ this.state.todos[0].tasks[3].label }</li>
        //   </ul>
        // </div>
  
        // <div className="col-12 todos">
        //   <div className="todos-title">
        //     { this.state.todos[1].title }
        //   </div>
        //   <div className="todos-add-task">Start typing here to create a task...</div>
        //   <ul>
        //     <li>{ this.state.todos[1].tasks[0].label }</li>
        //     <li>{ this.state.todos[1].tasks[1].label }</li>
        //     <li>{ this.state.todos[1].tasks[2].label }</li>
        //     <li>{ this.state.todos[1].tasks[3].label }</li>
        //   </ul>
        // </div>