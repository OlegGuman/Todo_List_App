import { useEffect, useState } from 'react'
import './timerTask.css'

export function TimerTask(props) {
  const { timeMin, timeSec, id } = props

  const [timeState, setTimeState] = useState({ timeMin, timeSec })
  const [stopTimerState, setStopTimerState] = useState(true)
  const [taskObj, setTaskObj] = useState({ id, timeMin, timeSec })

  useEffect(() => {
    let timeData = { ...timeState }
    let timeId
    if (!stopTimerState) {
      timeId = setInterval(() => {
        let { timeMin, timeSec } = { ...timeData }
        timeSec--
        if (timeSec < 0) {
          timeSec = 59
          timeMin--
        }
        timeData = { timeMin, timeSec }
        setTimeState(timeData)
        if (timeData.timeMin < 0) {
          setStopTimerState(true)
          setTimeState({ timeMin: 0, timeSec: 0 })
          clearInterval(timeId)
        }
      }, 1000)
    }
    return () => {
      let storage = JSON.parse(localStorage.getItem('todos') || '[]')
      storage.map((item) => {
        if (item.id === id) {
          item.timeMin = timeMin < 0 ? 0 : timeData.timeMin
          item.timeSec = timeSec < 0 ? 0 : timeData.timeSec
        }
      })
      setTaskObj(taskObj)
      localStorage.setItem('todos', JSON.stringify(storage))
      clearInterval(timeId)
    }
  })

  const { timeMin: min, timeSec: sec } = { ...timeState }
  return (
    <span className="item-timer">
      <button onClick={() => setStopTimerState(false)} className="icon-play"></button>
      <button onClick={() => setStopTimerState(true)} className="icon-pause"></button>
      <span className="total-time">{`${min} min ${sec} sec`}</span>
    </span>
  )
}
