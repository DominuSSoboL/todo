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
      {label: 'Выпить кофе', important: false, id: 1 },
      {label: 'Тренеровка', important: false, id: 2 },
      {label: 'Закончить сайт', important: false, id: 3 },
      {label: 'Написать приложение Todo', important: false, id: 4 },
      {label: 'Купить молока', important: false, id: 5 }
    ]
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
      console.log(`Change label for ${ idc }`);
    });   
  };
  
  addTask = (text) => {
    const newTask = {
      label: text,
      import: false,
      id: this.maxId++
    };

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
