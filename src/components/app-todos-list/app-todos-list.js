import React from 'react';
import './app-todos-list.css';

import AppTodosListItem from '../app-todos-list-items';
const TasksItem = ( {tasks} ) => {
   
    const tasksList = tasks.map((item) => {
        
        const { id, label } = item;
        return (
            <li key={ id }
                className="list-group-item list-group-item">
                <AppTodosListItem 
                    label={ label }/>
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