import React from 'react';
import './project-list.css';
import AddListItems from '../project-list-item';


const ProjectTasks = ({todos, onDeleted, openChangeTask, onToggleMark, setNewLabelTask}) => {

  const elements = todos.map((item) => {
    const { id, ...itemProps } = item;

    return (
      <li key={ id } 
          className="list-group-item">
        <AddListItems 
          { ...itemProps } 
          onDeleted={ () => onDeleted(id) } 
          setNewLabelTask={(text) => setNewLabelTask(text) }
          openChangeTask={ () => openChangeTask(id) } 
          onToggleMark={ () => onToggleMark(id) } />
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