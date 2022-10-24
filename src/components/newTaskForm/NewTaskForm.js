import React from 'react'
import './newTaskForm.css'

export default class NewTaskForm extends React.Component {
  static defaultProps = {
    handleSubmitForm: () => {},
    handleTaskTitle: () => {},
    handleTimeMin: () => {},
    handleTimeSec: () => {},
  }

  state = {
    titleTask: '',
    timeTaskMin: '',
    timeTaskSec: '',
  }

  handleTaskTitle = ({target: {value}}) => {
    this.setState({
      titleTask: value,
    })
  }

  handleTimeMin = ({target: {value}}) => {
    this.setState({
      timeTaskMin: value,
    })
  }

  handleTimeSec = ({target: {value}}) => {
    this.setState({
      timeTaskSec: value,
    })
  }

  handleSubmitForm = (e) => {
    const {titleTask, timeTaskMin, timeTaskSec} = this.state
    e.preventDefault()
    this.props.onCreateTask(titleTask, timeTaskMin, timeTaskSec)
    this.setState({
      titleTask: '',
      timeTaskMin: '',
      timeTaskSec: ''
    })
  }

  render() {
    const {titleTask, timeTaskMin, timeTaskSec} = this.state
    return (
      <form className="new-todo-form" onSubmit={this.handleSubmitForm}>
        <input
          className="new-todo"
          type='text'
          name='title'
          placeholder="Task"
          onChange={this.handleTaskTitle}
          value={titleTask}
        />
        <input
          className="new-todo-form__timer"
          name='min'
          max='59'
          type='number'
          onChange={this.handleTimeMin}
          value={timeTaskMin}
          placeholder="Min"
        />
        <input
          className="new-todo-form__timer"
          name='sec'
          max='59'
          type='number'
          onChange={this.handleTimeSec}
          value={timeTaskSec}
          placeholder="Sec"
        />
        <input className='new-todo-form__submit' type='submit'/>
      </form>
    )
  }
}
