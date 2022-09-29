import React, { Component } from "react";
import './task.css';

export default class Task extends Component {
    state = {
        done: false
    };

    onDoneClick = () => {
        this.setState((state) => ({
            ...state, done: !state.done
        }))
    };

    render() {
        const { description, created } = this.props;
        const { done } = this.state;
        let classNames = 'description';
        if (done) {
            classNames += ' completed'
        } 

        return (
            <div className="view">
                <input className="toggle" type="checkbox" onClick={ this.onDoneClick } />
                <label>
                    <span className={classNames}>{description}</span>
                    <span className="created">{created}</span>
                </label>
                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy" onClick={this.props.onDeleted}></button>
            </div>
        )
    };
};