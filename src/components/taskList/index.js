import { Task } from '../../router'
import './taskList.css'

export function TaskList(props) {
  const { tasks, onDeleted, onChangeTaskStatus } = props

  const elements = tasks.map((item) => {
    const { id, status } = item
    return (
      <li key={id} className={status}>
        <Task itemData={item} onChangeTaskStatus={(id) => onChangeTaskStatus(id)} onDeleted={() => onDeleted(id)} />
      </li>
    )
  })
  return <ul className="todo-list">{elements}</ul>
}
