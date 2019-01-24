import React, { Component } from 'react';
import './App.css';

import Header from '../app-header';
import Project from '../project';

class App extends Component {
  render() {
    return (
      <div class="container">
       <div class="row">
          <Header />
          <Project />          
        </div>
      </div>
    );
  }
}

export default App;
