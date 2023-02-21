import { PromiseAllSettledInterface } from '@/interfaces/nativeEvents'
import { MoveInterface, PokemonsInterface, PokemonsResponseInterface } from '@/interfaces/pokemon'
import { getPokemonsRepository, getPokemonByUrlRespository, getPokemonByNameRespository, getMovesRepository, getMoveRepository } from '@/repositories/PokemonRepository'

export const getPokemonsService = async (pageNumber: number): Promise<PokemonsResponseInterface> => {
  const result = await getPokemonsRepository(pageNumber*5)
  const { results } = result

  if(results.length <= 0) {
    return { ...result }
  }

  const primisesArray = []
  for (let i=0; i<results.length; i++) {
    const { url } = results[i]
    primisesArray.push(getPokemonByUrlRespository(url))
  }
  const pokemonsResult = await Promise.allSettled(primisesArray) as PromiseAllSettledInterface<PokemonsInterface>[]
  const pokemonsFullData = pokemonsResult.map((i) => {
    const pokemonInitialData = results.find((j) => j.name === i.value.name)
    return {
      ...i.value,
      url: pokemonInitialData ? pokemonInitialData.url : ''
    }
  })

  return { ...result, results: pokemonsFullData }
}

export const getPokemonByNameService = async (pokemonName: string): Promise<PokemonsResponseInterface> => {
  const result = await getPokemonByNameRespository(pokemonName)

  if(!result) {
    return {
      count: 0,
      next: null,
      previous: null,
      results: []
    }
  }

  return {
    count: 1,
    next: null,
    previous: null,
    results: [result]
  }
}

export const getMovesService = async (): Promise<MoveInterface[]> => {
  const { results } = await getMovesRepository()
  return results
}

export const getPokemonsByMoves = async (movesUrl: string): Promise<PokemonsResponseInterface> => {
  const { learned_by_pokemon: results } = await getMoveRepository(movesUrl)

  const primisesArray = []
  for (let i=0; i<results.length; i++) {
    const { url } = results[i]
    primisesArray.push(getPokemonByUrlRespository(url))
  }
  const pokemonsResult = await Promise.allSettled(primisesArray) as PromiseAllSettledInterface<PokemonsInterface>[]
  const pokemonsFullData = pokemonsResult.map((i) => {
    const pokemonInitialData = results.find((j) => j.name === i.value.name)
    return {
      ...i.value,
      url: pokemonInitialData ? pokemonInitialData.url : ''
    }
  })

  return {
    count: 0,
    next: null,
    previous: null,
    results: pokemonsFullData
  }
}