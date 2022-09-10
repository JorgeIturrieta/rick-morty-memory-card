import { Character, CharacterAdapted } from '../../models/character.model'
import axiosClient from '../apiClient'
import shuffleList from '../../common/shuffleList'
import duplicateList from '../../common/duplicateList'

export const getCharacter = async (params: number[]): Promise<CharacterAdapted[]> => {
  // Get characters from API
  const characters = await axiosClient.get<Character[]>(`/character/${params}`)

  // duplicate and adapt array
  const duplicateCharacters = duplicateList(characters.data)
  // Shuffle Characters array
  const shuffleCharacters = shuffleList(duplicateCharacters)

  return shuffleCharacters
}
