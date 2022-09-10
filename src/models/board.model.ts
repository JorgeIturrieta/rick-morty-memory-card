import { CharacterAdapted } from './character.model'
export interface IBoard {
  cards: CharacterAdapted[] | []
  hasFlippedCard: boolean
  lockBoard: boolean
  firstCard: CharacterAdapted | null
  secondCard: CharacterAdapted | null
  flipedcards: number
  streak: number
  score: number
  errorMessage: string
  time: number
}
