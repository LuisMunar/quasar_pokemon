import { PokemonsResponseInterface, PokemonsInterface, MovesResponseInterface, MoveInterface } from '@/interfaces/pokemon'
import { getHttpSerivice } from '@/services/httpService'

export const getPokemonsRepository = async (pageNumber: number): Promise<PokemonsResponseInterface> => {
  const { data } = await getHttpSerivice<PokemonsResponseInterface>(`https://pokeapi.co/api/v2/pokemon?offset=${ pageNumber }&limit=5`)
  return data
}

export const getPokemonByUrlRespository = async (pokemonUrl: string): Promise<PokemonsInterface> => {
  const { data } = await getHttpSerivice<PokemonsInterface>(pokemonUrl)
  return data
}

export const getPokemonByNameRespository = async (pokemomName: string): Promise<PokemonsInterface | null> => {
  return new Promise((resolve, reject) => {
    getHttpSerivice<PokemonsInterface>(`https://pokeapi.co/api/v2/pokemon/${ pokemomName }`)
    .then(({ data }) => resolve(data))
    .catch((error) => {
      const { response: { status } } = error
      status === 404 ? resolve(null) : reject(error)
    })
  })
}

export const getMovesRepository = async (): Promise<MovesResponseInterface> => {
  const { data } = await getHttpSerivice<MovesResponseInterface>('https://pokeapi.co/api/v2/move?limit=10000')
  return data
}

export const getMoveRepository = async (moveUrl: string): Promise<MoveInterface> => {
  const { data } = await getHttpSerivice<MoveInterface>(moveUrl)
  return { ...data , url: moveUrl }
}