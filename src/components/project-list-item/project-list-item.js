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
                        className="btn btn-outline-success btn-item-sm">1</button>
                <button type="button" 
                        className="btn btn-outline-success btn-item-sm">2</button>               
                <button type="button" 
                        className="btn btn-outline-success btn-item-sm">3</button>       
            </span>
        </span>
    );
};

export default AddListItems;