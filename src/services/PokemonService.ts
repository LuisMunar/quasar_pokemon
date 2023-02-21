import { PromiseAllSettledInterface } from '@/interfaces/nativeEvents'
import { PokemonsInterface, PokemonsResponseInterface } from '@/interfaces/pokemon'
import { getPokemonsRepository, getPokemonRespository } from '@/repositories/PokemonRepository'

export const getPokemonsService = async (pageNumber: number): Promise<PokemonsResponseInterface> => {
  const result = await getPokemonsRepository(pageNumber*5)
  const { results } = result

  if(results.length <= 0) {
    return { ...result }
  }

  const primisesArray = []
  for (let i=0; i<results.length; i++) {
    const { url } = results[i]
    primisesArray.push(getPokemonRespository(url))
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