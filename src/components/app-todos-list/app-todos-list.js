import React from 'react';
import './app-todos-list.css';
import AppTodosListItem from '../app-todos-list-items';

const TasksItem = ( { tasks,
                      getDeleteTodosTaskId, 
                      getDeleteTaskId, 
                      onToggleMarkIDTodo, 
                      onToggleMarkIDTask,
                      openChangeTodoTaskId,
                      openChangeTaskId,
                      setNewLabelTask } ) => {
   
    const tasksList = tasks.map((item) => {        
        const { id, label, done, cangeLabelActive } = item;
        return (
            <li key={ id }
                className="list-group-item">
                <AppTodosListItem
                    done={ done } 
                    label={ label }
                    setNewLabelTask={setNewLabelTask}
                    cangeLabelActive={ cangeLabelActive }
                    openChangeTodoTaskId={ openChangeTodoTaskId }
                    openChangeTaskId={ () => { openChangeTaskId(id) } }
                    onToggleMarkIDTodo={ onToggleMarkIDTodo }
                    onToggleMarkIDTask={ () => { onToggleMarkIDTask(id) } }
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