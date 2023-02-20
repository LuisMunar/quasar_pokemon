import { PromiseAllSettledInterface } from '@/interfaces/nativeEvents'
import { PokemonsInterface } from '@/interfaces/pokemon'
import { getPokemonsRepository, getPokemonRespository } from '@/repositories/PokemonRepository'

export const getPokemonsService = async (): Promise<PokemonsInterface[]> => {
  const { results } = await getPokemonsRepository()

  if(results.length <= 0) {
    return results
  }

  const primisesArray = []
  for (let i=0; i<results.length; i++) {
    const { url } = results[i]
    primisesArray.push(getPokemonRespository(url))
  }
  const pokemonsResult = await Promise.allSettled(primisesArray) as PromiseAllSettledInterface<PokemonsInterface>[]

  return pokemonsResult.map((i) => {
    const pokemonInitialData = results.find((j) => j.name === i.value.name)

    return {
      ...i.value,
      url: pokemonInitialData ? pokemonInitialData.url : ''
    }
  })
}