import React from "react";
import './tasksFilter.css';

const TasksFilter = () => {
    const buttons = [
        {name: 'selected', label: 'All',},
        {name: '', label: 'Active',},
        {name: '', label: 'Completed',}
    ];
    const elements = buttons.map( ({name, label}) => {
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

export default TasksFilter;