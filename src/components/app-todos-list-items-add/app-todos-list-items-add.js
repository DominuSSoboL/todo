import React, { Component } from 'react';
import './app-todos-list-items-add.css';

export default class TaskAddForm extends Component {
    
    state = { 
        title: '',
        titleForm: false,
        titleState: false
      }
    
      taskLabelChange = (e) => {
        this.setState({
          title: e.target.value
        });
      };
      onSubmit = (e) => {
          e.preventDefault();
          
          this.setState({
              label: this.state.title
          });
      };
    
    render(){
      return (
        <form className="project-task-add"
              onSubmit={this.onSubmit}>
          <span>
            <i className="icon-plus"></i>
          </span>
          <input type="text"
                 className="form-control"
                 onChange={this.onLabelInputChange}
                 placeholder="Start typing here to create  task..." 
                 value={this.state.label}/>
          <span>
            <button 
              className="btn">
                Add Task
            </button>
          </span>
          
        </form>
      );
    };
};