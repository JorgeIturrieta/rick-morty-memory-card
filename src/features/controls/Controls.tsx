import styles from './Controls.module.scss'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { LOCK_BOARD, RESET, SET_TIME, startLoadingCards } from '../board/boardSlice'
import { FunctionComponent, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userStats } from '../../models/userStats.model'

type ControlProps = {
  setReload: () => void
  time: number
  totalCards: number
}
const Controls: FunctionComponent<ControlProps> = ({ setReload, time, totalCards }) => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.board)
  useEffect(() => {
    dispatch(LOCK_BOARD(true))
    dispatch(SET_TIME(time / 1000))
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const userStats: userStats = JSON.parse(localStorage.getItem('userStats')!)
    if (userStats) {
      localStorage.setItem(
        'userStats',
        JSON.stringify({
          time: time < userStats.time ? time : userStats.time,
          score: state.score > userStats.score ? state.score : userStats.score,
        }),
      )
    } else {
      localStorage.setItem(
        'userStats',
        JSON.stringify({
          time,
          score: state.score,
        }),
      )
    }
  }, [])

  const handleRetry = () => {
    setReload()
    dispatch(startLoadingCards(totalCards))
  }
  const handleMainMenu = () => {
    dispatch(RESET())
    navigate('/', { replace: true })
  }
  return (
    <div className={styles.controlsContainer}>
      <button onClick={handleMainMenu}>
        <Link to={'/'}>Main menu</Link>
      </button>
      <button onClick={handleRetry}>Retry</button>
    </div>
  )
}

export default Controls
