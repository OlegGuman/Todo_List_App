import './tasksFilter.css'

export function TasksFilter(props) {
  const { filter, onChangeFilter } = props

  const buttons = [
    { name: 'all', title: 'All' },
    { name: 'active', title: 'Active' },
    { name: 'completed', title: 'Completed' },
  ]

  const elements = buttons.map(({ name, title }) => {
    const isActive = filter === name
    const isActiveClass = isActive ? 'selected' : ''
    return (
      <li key={title}>
        <button type="button" className={isActiveClass} onClick={() => onChangeFilter(name)}>
          {title}
        </button>
      </li>
    )
  })
  return <ul className="filters">{elements}</ul>
}
