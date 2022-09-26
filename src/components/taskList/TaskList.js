import React from "react";
import Task from "./task";
import './taskList.css';

const TaskList = ({ todos }) => {
    const elements = todos.map(item => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className={item.class}>
                <Task {...itemProps} />
            </li>
        )
    })

    return (
        <ul className="todo-list">
            { elements }
        </ul>
    )
};

export default TaskList;