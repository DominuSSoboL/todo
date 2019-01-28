import React from 'react';
import './project-list-item.css';

const AddListItems = ({label}) => {


    return (
        <span className="itemWrapp">
            <span>
                <input type="checkbox" className="end-list-btn"></input>
            </span>
            

            <span>
                { label }
            </span>

            <span className="button-item-group">

                <button type="button" 
                        className="btn btn-item-sm">
                    <i className="icon-menu2"></i>
                </button>

                <button type="button" 
                        className="btn btn-item-sm">
                    <i className="icon-pencil"></i>
                </button>

                <button type="button" 
                        className="btn btn-item-sm">
                    <i className="icon-bin"></i>
                </button>

            </span>
        </span>
    );
};

export default AddListItems;