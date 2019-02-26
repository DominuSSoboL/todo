import React, { Component } from 'react';
import './app-todos-list-items-add.css';

export default class TaskAddForm extends Component {
    
  state = { 
    title: this.props.title,
    titleForm: false,
    titleState: false
  }
  // ADD TASK
  getNewTask = (e) => {
    this.setState({
      title: e.target.value
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.takeId();
    this.props.addNewTaskTitle(this.state.title);
    // if(this.state.title){
    //   this.props.addNewTask(this.state.title);
    // } else{
    //   this.props.addNewTask('New task');
    // }
    // this.setState({
    //   title: this.state.title ? this.state.title : this.props.title
    // });
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
               onChange={ this.getNewTask }
               placeholder="Start typing here to create task..." 
               value={ this.state.label }/>
        <span>
          <button className="btn">Add Task</button>
        </span>
          
      </form>
    );
  };
};