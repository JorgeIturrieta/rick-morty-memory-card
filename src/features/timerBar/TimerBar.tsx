import style from './TimerBar.module.scss'
import { FunctionComponent, useEffect, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { LOCK_BOARD } from '../board/boardSlice'
import Modal from '../modal/Modal'

import Message from '../message/Message'

type TimeBarProps = {
  duration: number
  setDuration: React.Dispatch<React.SetStateAction<number>>
}
const TimerBar: FunctionComponent<TimeBarProps> = ({ duration, setDuration }) => {
  const [start, setStart] = useState(true)
  const dispatch = useAppDispatch()

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === 'Escape') {
      dispatch(LOCK_BOARD(start))
      setStart((prev) => {
        return !prev
      })
    }
  }
  useEffect(() => {
    const root = document.documentElement
    root?.style.setProperty('--timer', duration.toString())
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    let interval = 0
    if (start) {
      interval = setInterval(() => {
        setDuration((prev) => {
          if (!prev) {
            return 0
          }
          return prev - 10
        })
      }, 10)
    }

    return () => {
      clearInterval(interval)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [start])

  return (
    <div className={style.container}>
      <div className={start ? style.timeBar : `${style.timeBar} ${style.paused}`}></div>
      <span>{('0' + Math.floor((duration / 60000) % 60) + ':').slice(-3)}</span>
      <span>{('0' + Math.floor((duration / 1000) % 60) + '.').slice(-3)}</span>
      <span>{('0' + ((duration / 10) % 1000)).slice(-2)}</span>
      <span className={style.btnPause} onClick={() => setStart(!start)}>
        {' '}
        {start ? '⏸️' : '▶️'}
      </span>

      {!start && (
        <Modal>
          <Message message='paused'>
            <button onClick={() => setStart(!start)}>Resume</button>
          </Message>
        </Modal>
      )}
    </div>
  )
}

export default TimerBar
