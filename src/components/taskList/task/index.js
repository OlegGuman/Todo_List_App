import './task.css'
import { TimerTask } from '../../../router'

export function Task(props) {
  const { itemData, onChangeTaskStatus, onDeleted } = props
  const { title, timeMin, timeSec, id, status, created } = itemData

  return (
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        onClick={() => onChangeTaskStatus(id)}
        defaultChecked={status === 'completed'}
      />
      <label>
        <span className="description">{title}</span>
        <TimerTask id={id} timeMin={timeMin} timeSec={timeSec} />
        <span className="created">{created}</span>
      </label>
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy" onClick={onDeleted}></button>
    </div>
  )
}
