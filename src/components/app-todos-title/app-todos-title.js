import React, { Component } from 'react';
import './app-todos-title.css';

export default class AppTodosTitle extends Component {

    state = { 
        title: this.props.title,
        titleForm: false,
        titleState: false
    }
    // CHANGE TITLE TODOS
    onLabelInputChange = (e) => {
        this.setState({
          title: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.chengeTitleTodos();
        if(this.state.title){
            this.props.setNewTitle(this.state.title);
        } else{
            this.props.setNewTitle(this.props.title);
        }
        
        this.setState({
          title: this.state.title ? this.state.title : this.props.title
        });
    };

    render() {
        const { title, titleTextState, formClassState, chengeTitleTodos, deleteTodos  } = this.props;
        let titleTextClass = 'todos-title-text';
        let formClass = 'todos-title-form';
        let titleChangeIcon = 'icon-pencil';

        if(titleTextState){
            titleTextClass += ' todos-title-text-hidden'; 
        }
        if(formClassState){
            formClass += ' todos-title-text-show';
            titleChangeIcon = 'icon-cross';
        }

        return(
            <div className="todos-title">

                <span className="todos-title-icon-calendar">
                    <i className="icon-list"></i>
                </span>

                <span className={ titleTextClass } >
                    <span className="title">
                        { title }
                    </span>
                    <form className={ formClass }
                          onSubmit={ this.onSubmit }>
                        <input type="text"
                               className="form-control"
                               onChange={ this.onLabelInputChange }
                               placeholder={ this.state.title }
                               value={ this.state.title }>
                        </input>
                        <button className="btn">CHANGE</button>
                    </form>
                </span>

                <span className="todos-title-buttons">
                    <button className="btn"
                            onClick={ chengeTitleTodos }>
                        <i className={ titleChangeIcon }></i>
                    </button>
                    <button className="btn"
                            onClick={ deleteTodos }>
                        <i className="icon-bin"></i>
                    </button>
                </span>

            </div>
        );
    };
};
