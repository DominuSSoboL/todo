import React, { Component } from 'react';
import './project-title.css';

export default class ProjectHeader extends Component {
 
  state = { 
    title: '',
    titleForm: false,
    titleState: false
  }

  taskLabelChange = (e) => {
    this.setState({
      title: e.target.value
    });
  };
  onSubmit = (e) => {
      e.preventDefault();
      
      this.setState({
          label: this.state.title
      });
  };

  render() {
    let formClass = 'change-form';
    const { titleForm, titleState } = this.state;
    if(titleForm) {
      formClass += ' change-form-active';
    }

    if(titleState) {
      formClass += ' change-form-active';
    }
    
    return (
      <div className="project-title">
          <span><i className="icon-list"></i></span> 
          <span>
            <span className={formClass}>
              <form className="cange-label-add"
                    onSubmit={ this.onSubmit }>
                <input  type="text"
                        className="cange-label-form-control"
                        onChange={this.taskLabelChange}
                        placeholder={ 'Writen' }
                        value={ this.state.title } />
                <button className="btn">CHANGE</button>
              </form>
            </span>
            <span className="title title-hidden">
              { this.state.title }
            </span>
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