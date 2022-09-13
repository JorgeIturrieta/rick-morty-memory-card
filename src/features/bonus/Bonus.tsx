import bonusImage from '../../assets/images/flaquita.png'
import styles from './Bonus.module.scss'
import { useState, useEffect } from 'react'
import { useAppSelector } from '../../app/hooks'
const Bonus = () => {
  const [hide, setHide] = useState(true)
  const { streak } = useAppSelector((state) => state.board)

  useEffect(() => {
    let interval = 0
    if (streak === 2) {
      setHide(false)
      interval = setInterval(() => {
        setHide(true)
      }, 700)
    }
    return () => {
      clearInterval(interval)
    }
  }, [streak])

  return (
    <>
      <div
        className={
          hide
            ? `${styles.imageContainer} ${styles.hide}`
            : `${styles.imageContainer} ${styles.show}`
        }
      >
        <span className={styles.title}>¡Impressive!</span>
        <img src={bonusImage} alt={'flaquita-dog'} />
      </div>
    </>
  )
}

export default Bonus
