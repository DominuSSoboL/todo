import React, { Component } from 'react';
import './app.css';

const App = () => {
  return (
    <div className="container">
      <div className="row">

      <div className="col-12 app-tile">
        <h1>Simple todo lists</h1>
        <h2>from ruby garage</h2>
      </div>

      <div className="col-12 app-todos">
      </div>
      <div className="col-12 app-todos">
      </div>

      <div className="col-12 app-todos-add">
        <button>
          <i className=""></i>Add TODO List 
        </button>
      </div>

      <div className="col-12 app-footer">
      </div>

      </div>
    </div>
  );
};

export default App;