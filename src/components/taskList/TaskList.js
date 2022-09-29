import React, { Component } from "react";
import Task from "./task";
import './taskList.css';

export default class TaskList extends Component {

    render() {
        const { todos, onDeleted } = this.props;
        const elements = todos.map(item => {
            const { id, ...itemProps } = item;
            return (
                <li key={id} className={item.class}>
                    <Task {...itemProps} onDeleted={() => onDeleted(id)} />
                </li>
            )
        })

        return (
            <ul className="todo-list">
                {elements}
            </ul>
        )
    };
};