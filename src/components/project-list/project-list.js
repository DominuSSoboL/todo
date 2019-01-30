import React from 'react';
import './project-list.css';
import AddListItems from '../project-list-item';


const ProjectTasks = ({todos, onDeleted, changeLabelTask}) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={ id } 
          className="list-group-item">
        <AddListItems 
          { ...itemProps } 
          onDeleted={ () => onDeleted(id) } 
          changeLabelTask={ () => changeLabelTask(id) }/>
      </li>
    );
  });

  return (
    <ul className="project-task-list list-group">
      { elements }
    </ul>
  );

};

export default ProjectTasks;