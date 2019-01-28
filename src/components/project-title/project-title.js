import React from 'react';
import './project-title.css';

const ProjectHeader = () => {
    return (
      <div className="project-title">
          <span><i className="icon-list"></i></span> 
          <span>For Home</span> 
          <span>
            <button className="btn">
              <i className="icon-pencil"></i>
            </button>
            <button className="btn">
              <i className="icon-bin"></i>
            </button>
          </span>
      </div>
    );
};
export default ProjectHeader;