import React from 'react';
import './project-list';

const ProjectTasks = ({todos}) => {

  const elements = todos.map( (item) => {
    const { id, label } = item;

    return (
      <li key={id} className="list-group-item">
        { label }
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