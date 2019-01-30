import React from 'react';
import './project-add-items.css';

const AddProjectTask = ({addTask}) => {
    return (
      <div className="project-task-add">
        <span>
          <i className="icon-plus"></i>
        </span>
        <input type="text" placeholder="Start typing here to create  task..."></input>
        <span>
          <button 
            className="btn"
            onClick={ () => addTask('Новая задача добавленная через функцию') }>
              Add Task
          </button>
        </span>
        
      </div>
    );
};

export default AddProjectTask;