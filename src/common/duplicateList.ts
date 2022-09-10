import { Character, CharacterAdapted } from '../models/character.model'

const duplicateList = (characters: Character[]) => {
  return characters.reduce((newArray: CharacterAdapted[], element, idx) => {
    const arr = { name: element.name, image: element.image, flipped: false, isMatch: false }
    return newArray.concat([
      { ...arr, id: idx * 2 },
      { ...arr, id: idx * 2 + 1 },
    ])
  }, [])
}

export default duplicateList
