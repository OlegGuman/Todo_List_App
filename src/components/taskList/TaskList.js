import React from 'react'
import PropTypes from 'prop-types'

import Task from './task'
import './taskList.css'

export default class TaskList extends React.Component {
  static defaultProps = {
    onDeleted: () => {},
    onChangeTaskStatus: () => {},
  }

  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleted: PropTypes.func,
    onChangeTaskStatus: PropTypes.func,
  }

  render() {
    const { todos, onDeleted, onChangeTaskStatus } = this.props
    const elements = todos.map((item) => {
      const { id, status } = item
      return (
        <li key={id} className={status}>
          <Task props={item} onChangeTaskStatus={(id) => onChangeTaskStatus(id)} onDeleted={() => onDeleted(id)} />
        </li>
      )
    })

    return <ul className='todo-list'>{elements}</ul>
  }
}