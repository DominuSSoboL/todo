import React from 'react';
import './add-todos.css';

import TasksList from '../add-tasks';


const Todos = ({ todos, createTodos }) => {

      const elements = todos.map((item) => {
        const { todosId, title, tasks } = item;
    
        return (
            <div key={ todosId }>
                <div className="todos-title">{ title }</div>
                <div className="todos-add-task">Start typing here to create a task...</div>
                <TasksList 
                    tasks={ tasks } />
            </div>
        );
      });
    
      return (

        <div className="col-12 todos">
          { elements }
          <div className="col-12 todos-add">
            <button 
                    onClick={ createTodos }>
              <i className=""></i>Add TODO List 
            </button>
          </div>
        </div>
        
      );
};

export default Todos;