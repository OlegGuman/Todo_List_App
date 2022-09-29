import React, { Component } from "react";
import Footer from "../footer";
import NewTaskForm from "../newTaskForm";
import TaskList from '../taskList';
import './app.css';

export default class App extends Component {

    state = {
        todoData: [
            {id: 1, class: 'task-item', description: 'Completed task', created: 'created 17 seconds ago'},
            {id: 2, class: 'task-item', description: 'Editing task', created: 'created 5 minutes ago'},
            {id: 3, class: 'task-item', description: 'Active task', created: 'created 5 minutes ago'},
        ]
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ]
            return {
                todoData: newArray
            }
        })
    };
    
    render() {
        return (
            <section className="todoapp">
                <NewTaskForm />
                <section className="main">
                    <TaskList todos={this.state.todoData} onDeleted={ this.deleteItem } />
                    <Footer />
                </section>
            </section>
        )
    }

    
};