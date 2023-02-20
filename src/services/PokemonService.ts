import { getPokemonRespository, getPokemonsRepository } from '@/repositories/PokemonRepository'

export const getPokemonsService = async (): Promise<any> => {
  const { results } = await getPokemonsRepository()

  if(results.length <= 0) {
    return results
  }

  const primisesArray = []

  for (let i=0; i<results.length; i++) {
    const { url } = results[i]
    primisesArray.push(getPokemonRespository(url))
  }

  const pokemonsResult = await Promise.allSettled(primisesArray) as any

  return pokemonsResult.map((p: any) => p.value)
}

export const getPokemonService = (): Promise<any> => {
  return new Promise((resolve, reject) => {
    resolve(1245)
  })
}