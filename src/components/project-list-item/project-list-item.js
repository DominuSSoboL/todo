import React from 'react';
import './project-list-item.css';

const AddListItems = ({label}) => {


    return (
        <span>
            <input type="checkbox"></input>
            <span>{ label }</span>
        </span>
    );
};

export default AddListItems;