import { useAppSelector } from '../app/hooks'
import { after } from 'underscore'
import { useState } from 'react'

// With this hook we'll know when all images are loaded. SIuuuuu!!!
const useOnCompleteImage = () => {
  const [loadingImages, setLoading] = useState(true)
  const { cards } = useAppSelector((state) => state.board)

  const onComplete = after(cards.length, () => {
    setLoading(false)
  })
  return { loadingImages, onComplete, setLoading }
}

export default useOnCompleteImage
