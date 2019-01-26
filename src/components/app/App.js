import React, { Component } from 'react';
import './app.css';

import Header from '../app-header';
import ProjectHeader from '../project-title';
import AddProjectTask from '../project-add';
import ProjectTasks from '../project-list';

export default class App extends Component {

  todos = [
    {label: 'Drink koffee', important: false, id: 1},
    {label: 'Bla bla bla', important: false, id: 2},
    {label: 'Blo blo blo', important: false, id: 3},
    {label: 'Bla bla bla', important: false, id: 2},
    {label: 'Blo blo blo', important: false, id: 3}
  ];


  render() {
    return (
      <div className="container">
       <div className="row">
          <Header />
          <div class="col-12 todo-project">            
            <ProjectHeader />           
            <AddProjectTask />           
            <ProjectTasks todos={this.todos} />
          </div>            
        </div>
      </div>
    );
  };


};
