import { Provider } from 'react-redux'
import './styles.scss'
import { store } from '../../app/store'
import Board from '../../features/board/Board'
import { useEffect } from 'react'
const Stage = () => {
  useEffect(() => {
    document.title = 'Rick and morty - Stage'
  }, [])

  return (
    <Provider store={store}>
      <Board />
    </Provider>
  )
}

export default Stage
