import React from 'react';
import './app-todo-add.css';

const AppTodoAdd = ({ createTodos }) => {
    return(
        <div className="col-12 todos-add">
            <button type="button"
                    className="btn btn-todos-add"
                    onClick={ createTodos }>
                <i className="icon-plus"></i>
                Add TODO List 
            </button>
        </div>
    );
};

export default AppTodoAdd;