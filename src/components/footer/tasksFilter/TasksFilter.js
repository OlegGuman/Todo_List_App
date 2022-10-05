import React from 'react'
import PropTypes from 'prop-types'
import './tasksFilter.css'

export default class TasksFilter extends React.Component {
  
  static defaultProps = {
    filter: () => {},
    onChangeFilter: () => {},
  }

  static propTypes = {
    onChangeFilter: PropTypes.func,
    filter: PropTypes.string,
  }
    
  state = {
    buttons: [
      { name: 'all', title: 'All' },
      { name: 'active', title: 'Active' },
      { name: 'completed', title: 'Completed' },
    ],
  }
  
  render() {
    const { filter, onChangeFilter } = this.props
    const { buttons } = this.state
    const elements = buttons.map(({ name, title }) => {
      const isActive = filter === name
      const isActiveClass = isActive ? 'selected' : ''
      return (
        <li key={title}>
          <button type='button' className={isActiveClass} onClick={() => onChangeFilter(name)}>
            {title}
          </button>
        </li>
      )
    })
    return <ul className='filters'>{elements}</ul>
  }
}
