import React from 'react';
import './project-list-item.css';

export default class AddListItems extends React.Component {

    render() {

        const { label, onDeleted, changeLabelTask, onToggleMark, done } = this.props;

        let classNameDone = 'class';

        if (done) {
            classNameDone += ' done';
        }
        return (
            <span className="itemWrapp">
                <span>
                    <input type="checkbox"
                           className="end-list-btn"
                           onClick={ onToggleMark }>
                    </input>
                </span>
    
                <span className={ classNameDone }>
                    { label }
                </span>
    
                <span className="button-item-group">    
                    <button type="button" 
                            className="btn btn-item-sm">
                        <i className="icon-menu2"></i>
                    </button>
    
                    <button type="button" 
                            className="btn btn-item-sm"
                            onClick={ changeLabelTask }>
                        <i className="icon-pencil"></i>
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