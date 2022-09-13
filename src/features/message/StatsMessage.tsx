import styles from './Message.module.scss'

import { userStats } from '../../models/userStats.model'

const StatsMessage = () => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const stats: userStats = JSON.parse(localStorage.getItem('userStats')!)

  return (
    <div className={styles.statsContainer}>
      <p className={styles.statsTitle}>
        Score: {stats ? <span>{stats.score} </span> : <span> - </span>}
      </p>

      <p className={styles.statsTitle}>
        Time: {stats ? <span>{stats.time}sec</span> : <span> - </span>}
      </p>
    </div>
  )
}

export default StatsMessage
