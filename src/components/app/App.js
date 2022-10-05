import React from 'react'

import Footer from '../footer'
import NewTaskForm from '../newTaskForm'
import TaskList from '../taskList'
import './app.css'

export default class App extends React.Component {
  
  generateId = () => {
    return Math.random().toString(16).slice(2) + new Date().getTime().toString(36)
  }

  state = {
    todoData: [
      {
        id: 1,
        status: 'active',
        isDone: false,
        title: 'Completed task',
        created: new Date(2021, 5, 10, 8, 15, 0),
      },
      { id: 2, status: 'active', isDone: false, title: 'Editing task', created: new Date(2022, 8, 7, 8, 15, 0) },
      { id: 3, status: 'active', isDone: false, title: 'Active task', created: new Date(2022, 4, 5, 8, 15, 0) },
    ],
    filter: 'all',
  }

  handleCreateTask = (text) => {
    const newItem = {
      id: this.generateId(),
      status: 'active',
      isDone: false,
      title: text,
      created: Date.now(),
    }

    this.setState(({ todoData }) => {
      const newArray = [...todoData, newItem]
      return {
        todoData: newArray,
      }
    })
  }

  handleChangeTaskStatus = (taskId) => {
    this.setState((state) => {
      const newState = state.todoData.map((task) => {
        if (taskId === task.id) {
          task.isDone = !task.isDone
          task.status = task.status === 'completed' ? 'active' : 'completed'
        }
        return task
      })
      return {
        todoData: newState,
      }
    })
  }

  handleDeleteTask = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex((el) => el.id === id)
      const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)]
      return {
        todoData: newArray,
      }
    })
  }

  filter(items, filter) {
    switch (filter) {
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

  clearCompleted = () => {
    this.setState((state) => ({ todoData: state.todoData.filter((item) => !item.isDone) }))
  }

  handleChangeFilter = (filter) => {
    this.setState({ filter })
  }

  render() {
    const { todoData, filter } = this.state
    const leftItem = todoData.length - todoData.filter((item) => item.isDone).length
    const visibleItems = this.filter(todoData, filter)
    return (
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
        </header>
        <NewTaskForm todos={todoData} onCreateTask={this.handleCreateTask} />
        <section className="main">
          <TaskList
            todos={visibleItems}
            onChangeTaskStatus={(id) => this.handleChangeTaskStatus(id)}
            onDeleted={this.handleDeleteTask}
          />
          <Footer
            leftItem={leftItem}
            filter={filter}
            clearCompleted={this.clearCompleted}
            onChangeFilter={this.handleChangeFilter}
          />
        </section>
      </section>
    )
  }
}