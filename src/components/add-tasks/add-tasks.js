import React from 'react';
import './add-tasks.css';

const TasksList = ( {tasks} ) => {

    const tasksList = tasks.map((item) => {
        const { label, id } = item;
        return (
            <li key={ id }>{ label }</li>
        );
    });


    return(
        <ul>
            { tasksList }
        </ul>
    );
};

export default TasksList;