import React, { Component } from 'react';
import './app.css';

import Header from '../app-header';
import ProjectHeader from '../project-title';
import AddProjectTask from '../project-add-items';
import ProjectTasks from '../project-list';

export default class App extends Component {

  maxId = 100;

  state = {
    todos: [
      this.createTodoListTask('Drink coffee'),
      this.createTodoListTask('Make Awesome App'),
      this.createTodoListTask('Have a luch'),
      this.createTodoListTask('Call Dmitriy'),
      this.createTodoListTask('Learn JS')
    ]
  };
  
  createTodoListTask(label) {
    return {
      label,
      import: false,
      id: this.maxId++
    };
  };

  deleteTask = (id) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => el.id === id );      
      const newTodos = [
        ...todos.slice(0, idx), 
        ...todos.slice(idx + 1)
      ];
      return {
        todos: newTodos
      };
    });
  };

  changeLabelTask = (id) => {
    this.setState(({ todos }) => {
      const idc = todos.findIndex((el) => el.id === id );
      
      const newItem = {
        label: 'Changed task',
        important: false,
        id: todos.id
      };
      const newTodos = [
        ...todos.slice(0, idc),
        newItem,
        ...todos.slice(idc + 1)
      ];

      return {
        todos: newTodos
      };
    });   
  };
  
  addTask = (text) => {
    const newTask = this.createTodoListTask(text);

    this.setState(({ todos }) => {
      const newTodos = [
        ...todos, 
        newTask
      ];
      return {
        todos: newTodos
      }
    });
  };

  render() {
    return (
      <div className="container">
       <div className="row">
          <Header />
          <div className="col-12 todo-project">            
            <ProjectHeader />           
            <AddProjectTask 
              addTask={ this.addTask }/>           
            <ProjectTasks 
              todos={this.state.todos} 
              onDeleted={ this.deleteTask }
              changeLabelTask={ this.changeLabelTask }/>
          </div>            
        </div>
      </div>
    );
  };

};
