import './footer.css'
import { TasksFilter } from '../../router'

export function Footer(props) {
  const { leftItem, filter, clearCompleted, onChangeFilter } = props

  return (
    <footer className="footer">
      <span className="todo-count">{leftItem} items left</span>
      <TasksFilter filter={filter} onChangeFilter={onChangeFilter} />
      <button type="button" className="clear-completed" onClick={() => clearCompleted()}>
        Clear completed
      </button>
    </footer>
  )
}
