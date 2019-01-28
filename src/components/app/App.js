import React, { Component } from 'react';
import './app.css';

import Header from '../app-header';
import ProjectHeader from '../project-title';
import AddProjectTask from '../project-add-items';
import ProjectTasks from '../project-list';

export default class App extends Component {

  todos = [
    {label: 'Выпить кофе', important: false, id: 1},
    {label: 'Тренеровка', important: false, id: 2},
    {label: 'Закончить сайт', important: false, id: 3},
    {label: 'Написать приложение Todo', important: false, id: 4},
    {label: 'Купить молока', important: false, id: 5}
  ];


  render() {
    return (
      <div className="container">
       <div className="row">
          <Header />
          <div className="col-12 todo-project">            
            <ProjectHeader />           
            <AddProjectTask />           
            <ProjectTasks todos={this.todos} />
          </div>            
        </div>
      </div>
    );
  };


};
