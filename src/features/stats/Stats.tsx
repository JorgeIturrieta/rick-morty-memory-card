import { useMemo } from 'react'
import { useAppSelector } from '../../app/hooks'
import { userStats } from '../../models/userStats.model'

const Stats = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const record: userStats = useMemo(() => JSON.parse(localStorage.getItem('userStats')!) || 0, [])
  const state = useAppSelector((state) => state.board)
  return (
    <div>
      <div className='streak'>
        <span>Streak:{state.streak}</span>
        <span>Score:{state.score}</span>
      </div>
      <div className='score'>
        <span>Record:{record.score}</span>
      </div>
    </div>
  )
}

export default Stats
