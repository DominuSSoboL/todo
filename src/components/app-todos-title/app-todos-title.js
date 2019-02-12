import React, { Component } from 'react';
import './app-todos-title.css';

export default class AppTodosTitle extends Component {

    state = { 
        title: this.props.title,
        titleForm: false,
        titleState: false
    }
    // CHANGE TITLE TODOS
    chengeTitleTodos = () => {
        this.props.chengeTitleTodos();
    };

    render() {
        const { title } = this.props;
        return(
            <div className="todos-title">

                <span className="todos-title-icon-calendar">
                    <i className="icon-list"></i>
                </span>

                <span className="todos-title-text">
                    <span className="title">
                        { title }
                    </span>
                </span>

                <span className="todos-title-buttons">
                    <button className="btn"
                            onClick={ this.chengeTitleTodos }>
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
