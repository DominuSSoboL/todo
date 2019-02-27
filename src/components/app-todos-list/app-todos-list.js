import React from 'react';
import './app-todos-list.css';
import AppTodosListItem from '../app-todos-list-items';

const TasksItem = ( {tasks, getDeleteTodosTaskId, getDeleteTaskId} ) => {
   
    const tasksList = tasks.map((item) => {        
        const { id, label } = item;
        return (
            <li key={ id }
                className="list-group-item">
                <AppTodosListItem 
                    label={ label }
                    getDeleteTaskId={ () => { getDeleteTaskId(id) }  }
                    getDeleteTodosTaskId={ getDeleteTodosTaskId }/>
            </li>
        );
    });


    return(
        <ul className="list-group project-task-list">
            { tasksList }
        </ul>
    );
};

export default TasksItem;