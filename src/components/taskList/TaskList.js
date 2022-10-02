import React, { Component } from "react";
import Task from "./task";
import './taskList.css';

export default class TaskList extends Component {

    render() {
        const { todos, onDeleted, onChangeTaskStatus } = this.props;
        const elements = todos.map(item => {
            const { id, status } = item;
            return (
                <li key={id} className={status}>
                    <Task props={item} onChangeTaskStatus={(id) => onChangeTaskStatus(id)} onDeleted={() => onDeleted(id)} />
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