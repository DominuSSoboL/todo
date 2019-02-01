import React, { Component } from 'react';
import './project-title.css';

export default class ProjectHeader extends Component {
 
  state = { 
    title: 'For Home!' 
  }

  chengetitle = () => {
    this.setState(({ title }) => {

      return {
        title: 'New title!'
      };
    });
  }

  render() {
    return (
      <div className="project-title">
          <span><i className="icon-list"></i></span> 
          <span>
            { this.state.title }
          </span> 
          <span>

            <button className="btn"
                    onClick={ this.chengetitle }>
              <i className="icon-pencil"></i>
            </button>

            <button className="btn">
              <i className="icon-bin"></i>
            </button>

          </span>
      </div>
    );
  };

};