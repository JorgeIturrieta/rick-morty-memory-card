import { CharacterAdapted } from '../models/character.model'

// The Fisher-Yates algorith

const shuffleList = (characters: CharacterAdapted[]) => {
  for (let i = characters.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = characters[i]
    characters[i] = characters[j]
    characters[j] = temp
  }
  return characters
}

export default shuffleList
