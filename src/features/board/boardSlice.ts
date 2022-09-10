import { AnyAction, createSlice, PayloadAction, ThunkAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import getRandomIds from '../../common/getRandomIds'
import { IBoard } from '../../models/board.model'
import { CharacterAdapted } from '../../models/character.model'
import { getCharacter } from '../../network/lib/characters'

const initialState: IBoard = {
  cards: [],
  hasFlippedCard: false,
  lockBoard: false,
  firstCard: null,
  secondCard: null,
  flipedcards: 0,
  streak: 0,
  score: 0,
  time: 100,
  errorMessage: '',
}

export const boardSlice = createSlice({
  name: 'board',
  initialState,
  reducers: {
    RESET() {
      return { ...initialState }
    },
    LOADING_CARDS(state, action: PayloadAction<CharacterAdapted[]>) {
      return {
        ...initialState,
        cards: action.payload,
      }
    },
    FIRST_CLICK(state, action: PayloadAction<CharacterAdapted>) {
      state.hasFlippedCard = true
      state.firstCard = action.payload
      state.cards = state.cards.map((card) =>
        card.id === action.payload.id ? { ...card, flipped: true } : card,
      )
    },
    SECOND_CLICK(state, action: PayloadAction<CharacterAdapted>) {
      state.hasFlippedCard = false
      state.secondCard = action.payload
      state.cards = state.cards.map((card) =>
        card.id === action.payload.id ? { ...card, flipped: true } : card,
      )
    },
    MATCH(state, action: PayloadAction<number>) {
      state.score += action.payload
      state.streak += 1
      state.flipedcards += 2
      state.cards = state.cards.map((card) =>
        card.id === state.firstCard?.id || card.id === state.secondCard?.id
          ? { ...card, isMatch: true }
          : card,
      )
    },
    NO_MATCH(state) {
      state.streak = 0
      state.lockBoard = false
      state.cards = state.cards.map((card) =>
        card.id === state.firstCard?.id || card.id === state.secondCard?.id
          ? { ...card, flipped: false }
          : card,
      )
    },
    LOCK_BOARD(state, action: PayloadAction<boolean>) {
      state.lockBoard = action.payload
    },

    SET_ERROR(state, action: PayloadAction<string>) {
      state.errorMessage = action.payload
    },
    SET_TIME(state, action: PayloadAction<number>) {
      state.time = action.payload
    },
  },
})
export const {
  RESET,
  LOADING_CARDS,
  FIRST_CLICK,
  SECOND_CLICK,
  MATCH,
  NO_MATCH,
  LOCK_BOARD,

  SET_ERROR,
  SET_TIME,
} = boardSlice.actions

// Async Action with Thunk
export const startLoadingCards =
  (totalCharacters: number): ThunkAction<void, RootState, unknown, AnyAction> =>
  async (dispatch) => {
    try {
      const params = getRandomIds(totalCharacters)
      const characters = await getCharacter(params)
      dispatch(LOADING_CARDS(characters))
    } catch (error) {
      dispatch(SET_ERROR('Houston, we have a problem"'))
    }
  }

export default boardSlice.reducer
