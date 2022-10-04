import React, { Component } from "react";
import PropTypes from 'prop-types';
import './footer.css';
import TasksFilter from "./tasksFilter";

export default class Footer extends Component {

    static defaultProps = {
        leftItem: () => {},
        filter: () => {},
        clearCompleted: () => {},
        onChangeFilter: () => {},
    };

    static propTypes = {
        leftItem: PropTypes.number,
        filter: PropTypes.string,
        clearCompleted: PropTypes.func,
        onChangeFilter: PropTypes.func,
    };

    render() {
        const {leftItem, filter, clearCompleted, onChangeFilter} = this.props;
        return (
            <footer className="footer">
                <span className="todo-count">{leftItem} items left</span>
                <TasksFilter filter={filter} onChangeFilter={onChangeFilter} />
                <button className="clear-completed" onClick={() => clearCompleted()}>Clear completed</button>
            </footer>
        )
    };
};