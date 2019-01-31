import React, { Component } from 'react';
import './project-title.css';

export default class ProjectHeader extends Component {
 
  state = { titile: 'For Home!' };

  chengetitle = (text) => {
    this.setState((state) => {
      return {
        title: state.title
      };
    });
  };

  render() {
    return (
      <div className="project-title">
          <span><i className="icon-list"></i></span> 
          <span>
            { this.state.titile }
          </span> 
          <span>

            <button className="btn"
                    onClick={ this.chengetitle('New title!') }>
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