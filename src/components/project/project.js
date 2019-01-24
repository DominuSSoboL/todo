import React from 'react';
import './project';

import ProjectHeader from '../project-title';
import AddProjectTask from '../project-add';
import ProjectTasks from '../project-list';

const Project = () => {
  return (
    <div class="col-12 todo-project">            
      <ProjectHeader />           
      <AddProjectTask />           
      <ProjectTasks />
    </div>
  );
};

export default Project;