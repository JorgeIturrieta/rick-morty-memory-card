import { useEffect } from 'react'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import {
  FIRST_CLICK,
  LOCK_BOARD,
  MATCH,
  NO_MATCH,
  SECOND_CLICK,
} from '../features/board/boardSlice'
import { CharacterAdapted } from '../models/character.model'
import flippedFile from '../assets/audios/flipped.mp3'
import matchFile from '../assets/audios/match.mp3'
export const useCards = () => {
  const state = useAppSelector((state) => state.board)
  const dispatch = useAppDispatch()
  const flippedAudio = new Audio(flippedFile)
  const matchAudio = new Audio(matchFile)
  useEffect(() => {
    if (state.secondCard) checkMatch()
  }, [state.secondCard])

  const handleSelect = (cardSelected: CharacterAdapted) => {
    if (state.lockBoard) return
    // Avoid check the same card
    if (cardSelected.flipped) return

    flippedAudio.play()

    // First Click
    if (!state.hasFlippedCard) {
      dispatch(FIRST_CLICK(cardSelected))
      return
    }

    dispatch(SECOND_CLICK(cardSelected))
  }

  function checkMatch() {
    const isMatch = state.firstCard?.name === state.secondCard?.name
    isMatch ? match() : unFlipCards()
  }

  function match() {
    switch (state.streak) {
      case 0:
        dispatch(MATCH(10))
        break
      case 1:
        dispatch(MATCH(20))
        break
      case 2:
        dispatch(MATCH(30))
        break

      default:
        break
    }

    matchAudio.play()
  }

  function unFlipCards() {
    // lock Board
    dispatch(LOCK_BOARD(true))

    // unflip cards after 500ms if there is no match
    setTimeout(() => {
      dispatch(NO_MATCH())
    }, 500)
  }

  return {
    handleSelect,
  }
}
