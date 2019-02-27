import React, { Component } from 'react';
import './app-todos-list-items.css';

export default class AppTodosListItem extends Component {
    

    state = {
        label: this.props.label
    };

    // CHANGE LABEL TASK
    openChangeTask = () => {
        this.props.openChangeTodoTaskId();
        this.props.openChangeTaskId();
    };
    taskLabelChange = (e) => {
        this.setState({
          label: e.target.value
        });
    };
    onSubmit = (e) => {
        e.preventDefault();
        this.props.openChangeTodoTaskId();
        this.props.setNewLabelTask(this.state.label);
        this.setState({
            label: this.state.label
        });
    };
    // DELETE TASK
    onDeleted = () => {
        this.props.getDeleteTodosTaskId();
        this.props.getDeleteTaskId();
    };
    // MARK A DONE TASK
    onToggleMark = () => {
        this.props.onToggleMarkIDTodo();
        this.props.onToggleMarkIDTask();
    };

    render() {

        const { label,
                done,
                cangeLabelActive } = this.props;

        let classNameDone = 'items-label';
        let classNameChange = 'cange-label';
        let classNameIconChange = 'icon-pencil';
        
        if (done) { classNameDone += ' done'; }
        if (cangeLabelActive) { 
            classNameChange += ' cange-label-active'; 
            classNameIconChange = 'icon-cross'; 
            classNameDone += ' items-label-hidden';
        }

        return (
            <span className="list-items-box">

                <span className="list-items-checkbox">
                    <input type="checkbox"
                           className="checkbox"
                           onClick={ this.onToggleMark } />
                </span>
    
                <span className={ classNameDone }>
                    { this.state.label }
                </span>

                <span className={ classNameChange }>               
                    <form className="cange-label-form"
                          onSubmit={ this.onSubmit }>
                        <input type="text"
                               className="cange-label-form-control"
                               onChange={this.taskLabelChange}
                               placeholder={ this.state.label }
                               value={ this.state.label }/>
                        <button className="btn">CHANGE</button>
                    </form>
                </span>
    
                <span className="button-item-group">    
                    <button type="button" 
                            className="btn btn-item-sm move-item">
                        <i className="icon-menu2"></i>
                    </button>
    
                    <button type="button" 
                            className="btn btn-item-sm change-item"
                            onClick={ this.openChangeTask }>
                        <i className={ classNameIconChange }></i>
                    </button>
    
                    <button type="button" 
                            className="btn btn-item-sm delete-item"
                            onClick={ this.onDeleted }>
                        <i className="icon-bin"></i>
                    </button>    
                </span>

            </span>
        );
    };

};