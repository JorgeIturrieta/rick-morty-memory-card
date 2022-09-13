import { useCallback, useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { startLoadingCards } from './boardSlice'

import useOnCompleteImage from '../../hooks/useOnCompleteImage'
import Spinner from '../spinner/Spinner'
import TimerBar from '../timerBar/TimerBar'
import ListCardsMemo from '../listCards/ListCards'
import Modal from '../modal/Modal'
import Message from '../message/Message'
import Controls from '../controls/Controls'
import Stats from '../stats/Stats'
import Bonus from '../bonus/Bonus'

const Board = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.board)
  const initTime = 60000
  const totalCards = 12
  const [time, setTime] = useState(initTime)

  useEffect(() => {
    dispatch(startLoadingCards(totalCards))
  }, [])

  const { loadingImages, setLoading, onComplete } = useOnCompleteImage()
  const onCompleteMemo = useCallback(() => onComplete(), [])

  const handleReload = () => {
    setTime(initTime)
    setLoading(true)
  }

  if (state.errorMessage) return <p>{state.errorMessage}</p>

  return (
    <>
      <main>
        {state.cards.length ? (
          <>
            {loadingImages && <Spinner message='Loading Images please wait' />}
            {!loadingImages && time > 0 && state.flipedcards !== state.cards.length ? (
              <>
                <TimerBar duration={time} setDuration={setTime} />
                <Stats />
              </>
            ) : null}

            <ListCardsMemo loading={loadingImages} onComplete={onCompleteMemo} />

            {/* you won the game */}
            {state.flipedcards === state.cards.length ? (
              <Modal>
                <Message message='congrats!! you won the game'>
                  <Controls
                    setReload={handleReload}
                    time={(initTime - time) / 1000}
                    totalCards={totalCards}
                  />
                </Message>
              </Modal>
            ) : null}
            {/* you lost the game */}
            {!time ? (
              <Modal>
                <Message message='game over'>
                  <Controls
                    setReload={handleReload}
                    time={initTime / 1000}
                    totalCards={totalCards}
                  />
                </Message>
              </Modal>
            ) : null}
          </>
        ) : (
          <Spinner message='Loading...' />
        )}
      </main>
      <Bonus />
    </>
  )
}

export default Board
