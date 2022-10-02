import React, { Component } from "react";
import './tasksFilter.css';

export default class TasksFilter extends Component {

    state = {
        buttons: [
            {name: 'all', title: 'All',},
            {name: 'active', title: 'Active',},
            {name: 'completed', title: 'Completed',}
        ]
    }
    
    render() {
        const {filter, onChangeFilter} = this.props;
        const elements = this.state.buttons.map( ({name, title}) => {
            const isActive = filter === name;
            const isActiveClass = isActive ? 'selected' : '';
            return (
                <li key={title}>
                    <button className={isActiveClass} onClick={() => onChangeFilter(name)}>{title}</button>
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