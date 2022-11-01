import { useState } from 'react'
import './newTaskForm.css'

export function NewTaskForm(props) {
  const { onCreateTask } = props

  const [title, setTitle] = useState('')
  const [timeMin, setTimeMin] = useState('')
  const [timeSec, setTimeSec] = useState('')

  function handleTaskTitle({ target: { value } }) {
    setTitle(value)
  }

  function handleTimeMin({ target: { value } }) {
    setTimeMin(value)
  }

  function handleTimeSec({ target: { value } }) {
    setTimeSec(value)
  }

  function handleSubmitForm(e) {
    e.preventDefault()
    onCreateTask(title, timeMin, timeSec)
    setTitle('')
    setTimeMin('')
    setTimeSec('')
  }

  return (
    <form className="new-todo-form" onSubmit={handleSubmitForm}>
      <input
        className="new-todo"
        type="text"
        name="title"
        placeholder="Task"
        onChange={handleTaskTitle}
        value={title}
      />
      <input
        className="new-todo-form__timer"
        name="min"
        max="59"
        type="number"
        onChange={handleTimeMin}
        value={timeMin}
        placeholder="Min"
      />
      <input
        className="new-todo-form__timer"
        name="sec"
        max="59"
        type="number"
        onChange={handleTimeSec}
        value={timeSec}
        placeholder="Sec"
      />
      <input className="new-todo-form__submit" type="submit" />
    </form>
  )
}
