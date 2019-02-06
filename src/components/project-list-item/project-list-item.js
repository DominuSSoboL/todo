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
        this.props.openChangeTask(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {

        
    };

};