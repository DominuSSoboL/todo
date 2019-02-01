import React, {Component} from 'react';
import './project-add-items.css';

export default class AddProjectTask extends Component {

  state = {
    label: ''
  };

  onLabelChange = (e) => {
    this.setState({
      label: e.target.value
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.label);
    this.setState({
      label: ''
    });
  };

  render() {
    return (
      <form className="project-task-add"
            onSubmit={this.onSubmit}>
        <span>
          <i className="icon-plus"></i>
        </span>
        <input type="text"
               className="form-control"
               onChange={this.onLabelChange}
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