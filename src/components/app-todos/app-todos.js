import React from 'react';
import './app-todos.css';

import AppTodosTitle from '../app-todos-title';
import TaskAddForm from '../app-todos-list-items-add';
import TasksItem from '../app-todos-list';
import AppTodoAdd from '../app-todos-add/';


const Todos = ({  todos, 
                  createTodos, 
                  addNewTaskCurrentID, 
                  chengeTitleTodos, 
                  setNewTitle, 
                  deleteTodos, 
                  addNewTask,
                  getDeleteTodosTaskId,
                  getDeleteTaskId,
                  onToggleMarkIDTodo,
                  onToggleMarkIDTask,
                  openChangeTaskId,
                  openChangeTodoTaskId,
                  setNewLabelTask }) => {

      const elements = todos.map(( item ) => {
        
        const { todosId, title, tasks, titleTextState, formClassState  } = item;
        
        return (
            <div key={ todosId }>
                <AppTodosTitle 
                    titleTextState={ titleTextState }
                    formClassState={ formClassState }
                    title={ title }
                    setNewTitle={ setNewTitle }
                    chengeTitleTodos={ () => { chengeTitleTodos(todosId) } }
                    deleteTodos={ () => { deleteTodos(todosId) } } />
                <TaskAddForm 
                    takeId ={ () => { addNewTaskCurrentID(todosId) }  }
                    addNewTaskTitle={ addNewTask }/>
                <TasksItem
                    setNewLabelTask={setNewLabelTask}
                    openChangeTaskId={ openChangeTaskId }
                    openChangeTodoTaskId={ () => { openChangeTodoTaskId(todosId) } }
                    onToggleMarkIDTodo={ () => { onToggleMarkIDTodo(todosId) } }
                    onToggleMarkIDTask={ onToggleMarkIDTask } 
                    tasks={ tasks } 
                    getDeleteTodosTaskId={ () => { getDeleteTodosTaskId(todosId) } }
                    getDeleteTaskId={ getDeleteTaskId }/>
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