import { useState, useEffect } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

import { Footer, NewTaskForm, TaskList } from '../../router'
import './app.css'

export function App() {
  let taskData = []
  // const todoData = [
  //   {
  //     id: 1,
  //     timeMin: 0,
  //     timeSec: 0,
  //     status: 'active',
  //     isDone: false,
  //     title: 'Completed task',
  //     created: formatDistanceToNow(new Date(2020, 7, 5, 8, 15, 0)),
  //   },
  //   {
  //     id: 2,
  //     timeMin: 0,
  //     timeSec: 0,
  //     status: 'active',
  //     isDone: false,
  //     title: 'Editing task',
  //     created: formatDistanceToNow(new Date(2021, 4, 15, 8, 15, 0)),
  //   },
  //   {
  //     id: 3,
  //     timeMin: 0,
  //     timeSec: 0,
  //     status: 'active',
  //     isDone: false,
  //     title: 'Active task',
  //     created: formatDistanceToNow(new Date(2022, 9, 11, 8, 15, 0)),
  //   },
  // ]

  const [dataState, setDataState] = useState(taskData)
  const [completed, setCompleted] = useState(dataState.filter((item) => !item.isDone).length)
  const [filterState, setFilter] = useState('all')

  function generateId() {
    return Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
  }

  const handleCreateTask = (text, min, sec) => {
    min !== '' ? min : (min = 0)
    sec !== '' ? sec : (sec = 0)

    const newItem = {
      id: generateId(),
      timeMin: min,
      timeSec: sec,
      status: 'active',
      isDone: false,
      title: text,
      created: formatDistanceToNow(new Date()),
    }

    let storageTask = JSON.parse(localStorage.getItem('todos') || '[]')
    storageTask.push(newItem)
    localStorage.setItem('todos', JSON.stringify(storageTask))
    setDataState(storageTask)
    setCompleted(storageTask.filter((item) => !item.isDone).length)
  }

  useEffect(() => {
    setDataState(JSON.parse(localStorage.getItem('todos') || '[]'))
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(dataState))
  }, [dataState])

  const handleChangeTaskStatus = (taskId) => {
    const doneArr = JSON.parse(localStorage.getItem('todos') || '[]').map((item) => {
      if (item.id === taskId) {
        item.isDone = !item.isDone
        item.status = item.status === 'completed' ? 'active' : 'completed'
      }
      return item
    })
    setCompleted(doneArr.filter((item) => !item.isDone).length)
    rewriteDate(doneArr)
  }

  const handleDeleteTask = (id) => {
    const deleteArr = JSON.parse(localStorage.getItem('todos') || '[]').filter((item) => item.id !== id)
    rewriteDate(deleteArr)
  }

  function filter(items, filterState) {
    switch (filterState) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => !item.isDone)
      case 'completed':
        return items.filter((item) => item.isDone)
      default:
        return items
    }
  }

  function rewriteDate(newDate) {
    localStorage.removeItem('todos')
    localStorage.setItem('todos', JSON.stringify(newDate))
    setDataState(newDate)
  }

  const clearCompleted = () => {
    const incomplete = JSON.parse(localStorage.getItem('todos') || '[]').filter((item) => !item.isDone)
    rewriteDate(incomplete)
  }

  function handleChangeFilter(filter) {
    setFilter(filter)
  }

  const visibleItems = filter(dataState, filterState)

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
      </header>
      <NewTaskForm todos={dataState} onCreateTask={handleCreateTask} />
      <section className="main">
        <TaskList
          tasks={visibleItems}
          onChangeTaskStatus={(id) => handleChangeTaskStatus(id)}
          onDeleted={handleDeleteTask}
        />
        <Footer
          leftItem={completed}
          filter={filterState}
          clearCompleted={clearCompleted}
          onChangeFilter={handleChangeFilter}
        />
      </section>
    </section>
  )
}
