import React from 'react';
import './project-add-items.css';

const AddProjectTask = () => {
    return (
      <div className="project-task-add">
        <span>
          <i className="icon-plus"></i>
        </span>
        <input type="text" placeholder="Start typing here to create  task..."></input>
        <button className="btn">Add Task</button>
      </div>
    );
};

export default AddProjectTask;