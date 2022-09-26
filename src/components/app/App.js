import React from "react";
import Footer from "../footer";
import NewTaskForm from "../newTaskForm";
import TaskList from '../taskList';
import './app.css';

const App = () => {
    const todoData = [
        {id: 1, class: 'task-item completed', description: 'Completed task', created: 'created 17 seconds ago'},
        {id: 2, class: 'task-item editing', description: 'Editing task', created: 'created 5 minutes ago'},
        {id: 3, class: 'task-item', description: 'Active task', created: 'created 5 minutes ago'},
    ];

    return (
        <section className="todoapp">
            <NewTaskForm />
            <section className="main">
                <TaskList todos={todoData}/>
                <Footer />
            </section>
        </section>
    )
};

export default App;
