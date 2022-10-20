import React from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import PropTypes from 'prop-types'

import './task.css'
import TimerTask from '../../timerTask'

export default class Task extends React.Component {
  static defaultProps = {
    onChangeTaskStatus: () => {},
    onDeleted: () => {},
    createdTime: () => {},
  }

  static propTypes = {
    createdTime: PropTypes.func,
    props: PropTypes.object,
    onChangeTaskStatus: PropTypes.func,
    onDeleted: PropTypes.func,
  }

  createdTime = (time) => {
    return formatDistanceToNow(time, {
      includeSeconds: true,
    })
  }

  render() {
    const { props, onChangeTaskStatus, onDeleted } = this.props
    return (
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          onClick={() => onChangeTaskStatus(props.id)}
          defaultChecked={props.status === 'completed'}
        />
        <label>
          <span className="description">{props.title}</span>
          <TimerTask />
          <span className="created">{this.createdTime(props.created)}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={onDeleted}></button>
      </div>
    )
  }
}
