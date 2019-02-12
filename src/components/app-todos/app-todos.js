import React from 'react';
import './app-todos.css';

import AppTodosTitle from '../app-todos-title';
import TaskAddForm from '../app-todos-list-items-add';
import TasksList from '../app-todos-list';
import AppTodoAdd from '../app-todos-add/';


const Todos = ({ todos, createTodos, chengeTitleTodos }) => {

      const elements = todos.map((item) => {
        const { todosId, title, tasks } = item;
    
        return (
            <div key={ todosId }>
                <AppTodosTitle 
                    title={title}
                    chengeTitleTodos={ () => {chengeTitleTodos(todosId)} }/>
                <TaskAddForm />
                <TasksList tasks={ tasks } />
            </div>
        );
      });
    
      return (

        <div className="col-12 todos">
          { elements }

          <AppTodoAdd 
            createTodos={ createTodos }/>

        </div>
        
      );
};

export default Todos;