import React from 'react';
import './project-list-item.css';

export default class AddListItems extends React.Component {


    state = {
        label: ''
    };

    taskLabelChange = (e) => {
        this.setState({
          label: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.changeLabelTask(this.state.label);
    };

    render() {

        const { label, 
                onDeleted, 
                changeLabelTask, 
                onToggleMark, 
                done,
                cangeLabelActive,
                hoverLabel } = this.props;

        let classNameDone = 'items-label';
        let classNameChange = 'cange-label';
        let classNameIconChange = 'icon-pencil';

        if (done) { classNameDone += ' done'; }
        if (cangeLabelActive) { classNameChange += ' cange-label-active';classNameIconChange = 'icon-cross'; }
        if (hoverLabel) { classNameDone += ' items-label-hidden'; }

        return (
            <span className="itemWrapp">
                <span>
                    <input type="checkbox"
                           className="end-list-btn"
                           onClick={ onToggleMark } />
                </span>
    
                <span className={ classNameDone }>
                    { label }
                </span>

                <span className={ classNameChange }>
                
                    <form className="cange-label-add"
                          onSubmit={this.onSubmit}>
                        <input type="text"
                               className="cange-label-form-control"
                               onChange={this.taskLabelChange}
                               placeholder="Write a new task" 
                               />
                            <button className="btn">CHANGE</button>
                    </form>
                </span>
    
                <span className="button-item-group">    
                    <button type="button" 
                            className="btn btn-item-sm">
                        <i className="icon-menu2"></i>
                    </button>
    
                    <button type="button" 
                            className="btn btn-item-sm"
                            onClick={ changeLabelTask }>
                        <i className={ classNameIconChange }></i>
                    </button>
    
                    <button type="button" 
                            className="btn btn-item-sm"
                            onClick={ onDeleted }>
                        <i className="icon-bin"></i>
                    </button>    
                </span>

            </span>
        );
    };

};