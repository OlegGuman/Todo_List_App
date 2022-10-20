import { Component } from 'react'
import './timerTask.css'

export default class TimerTask extends Component {
  state = {
    totalTime: new Date(0, 0, 0),
    min: 0,
    sec: 0,
  }

  timeCount = () => {
    let min = this.state.min
    let sec = this.state.sec
    if (sec < 60) {
      sec++
    }
    if (sec === 60) {
      sec = 0
      min++
    }

    this.setState({
      min: min,
      sec: sec,
    })
  }

  timerPlay = () => {
    clearInterval(this.timerId)
    this.timerId = setInterval(() => this.timeCount(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  timePause = () => {
    clearInterval(this.timerId)
  }

  render() {
    const { min, sec } = this.state
    return (
      <span className="item-timer">
        <button onClick={() => this.timerPlay()} className="icon-play"></button>
        <button onClick={() => this.timePause()} className="icon-pause"></button>
        <span className="total-time">{`${min}min ${sec}sec`}</span>
      </span>
    )
  }
}
