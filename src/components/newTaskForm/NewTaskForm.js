import React, { Component } from "react";
import './newTaskForm.css';

export default class NewTaskForm extends Component {

    static defaultProps = {
        handleSubmitForm: () => {},
        handleAddNewTask: () => {},        
    };

    state = {
        title: '',
    };

    handleSubmitForm = (e) => {
        e.preventDefault();
        this.props.onCreateTask(this.state.title);
        this.setState({
            title: '',
        });
    };

    handleAddNewTask = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
                <input
                    className="new-todo"
                    type='text'
                    placeholder="What needs to be done?"
                    onChange={this.handleAddNewTask}
                    value={this.state.title}
                    autoFocus
                />
            </form>
        )
    };
};