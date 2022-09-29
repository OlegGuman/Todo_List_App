import React, { Component } from "react";
import './tasksFilter.css';

export default class TasksFilter extends Component {

    state = {
        buttons: [
            {name: 'selected', label: 'All',},
            {name: '', label: 'Active',},
            {name: '', label: 'Completed',}
        ]
    }
    
    render() {
        const elements = this.state.buttons.map( ({name, label}) => {
            return (
                <li key={label}>
                    <button className={name}>{label}</button>
                </li>
            )
        });
        return (
            <ul className="filters">
                { elements }
            </ul>
        )
    };
};