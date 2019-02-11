import React, { Component } from 'react';
import './app.css';

import Header from '../app-header';
import ProjectHeader from '../project-title';
import AddProjectTask from '../project-add-items';
import ProjectTasks from '../project-list';

export default class App extends Component {

  maxId = 100;
  labelChangeIdx = '';

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
      }
    ]
  };
  

  taskLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.changeLabelTask(this.state.label);
  };

  createTodoListTask(label) {
    return {
      label,
      import: false,
      id: this.maxId++,
      done: false,
      cangeLabelActive: false,
      hoverLabel: false,
      changeMarker: false
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
  // CHANGE LABEL TASK
  // Open/Close label task form 
  openChangeTask = (id) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => el.id === id );
      this.labelChangeIdx = idx;
      const beforeItem = todos.slice(0, idx);
      var newBefore = beforeItem.map(function(items){
        items.cangeLabelActive = false;
        items.hoverLabel = false;
        return items;
      });
      const afterItem = todos.slice(idx + 1);
      var afterBefore = afterItem.map(function(items){
        items.cangeLabelActive = false;
        items.hoverLabel = false;
        return items;
      });

      const oldItem = todos[idx];
      const newItem = {...oldItem, cangeLabelActive: !oldItem.cangeLabelActive, hoverLabel: !oldItem.hoverLabel };

      const newTodos = [
        ...newBefore,
        newItem,
        ...afterBefore
      ];

      return{
        todos: newTodos
      };

    });
  };
  // Set new label task
  setNewLabelTask = (text) => {
    this.setState(({ todos }) => {
      const oldItem = todos[this.labelChangeIdx];
      const newItem = {...oldItem, label: text, cangeLabelActive: false, hoverLabel: false };
      const newTodos = [
        ...todos.slice(0, this.labelChangeIdx),
        newItem,
        ...todos.slice(this.labelChangeIdx + 1)
      ];
      return{
        todos: newTodos
      };
    });
  };

  // Add new task fo totdo list
  addTask = (text) => {
    const newTask = this.createTodoListTask(text);

    this.setState(({ todos }) => {
      const newTodos = [
        newTask,
        ...todos 
      ];
      return {
        todos: newTodos
      }
    });
  };

  onToggleMark = (id) => {
    this.setState(({ todos }) => {
      const idx = todos.findIndex((el) => el.id === id );
      const oldItem = todos[idx];
      const newItem = {...oldItem, done: !oldItem.done };

      const newTodos = [
        ...todos.slice(0, idx),
        newItem,
        ...todos.slice(idx + 1)
      ];
      return{
        todos: newTodos
      };
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
              setNewLabelTask={ this.setNewLabelTask }
              openChangeTask={ this.openChangeTask }
              onToggleMark={ this.onToggleMark }/>
          </div> 

          <div className="add-project-section">
            <button classNmae="btn"><i className=""></i>Add TODO List</button>
          </div>
        </div>        
      </div>
    );
  };

};
