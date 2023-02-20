import { PokemonsResponseInterface, PokemonsInterface } from '@/interfaces/pokemon'
import { getHttpSerivice } from '@/services/httpService'

export const getPokemonsRepository = async (): Promise<PokemonsResponseInterface> => {
  const { data } = await getHttpSerivice<PokemonsResponseInterface>('https://pokeapi.co/api/v2/pokemon?offset=0&limit=5')
  return data
}

export const getPokemonRespository = async (pokemonUrl: string): Promise<PokemonsInterface> => {
  const { data } = await getHttpSerivice<PokemonsInterface>(pokemonUrl)
  return data
}