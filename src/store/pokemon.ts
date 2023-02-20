import { defineStore } from 'pinia'

import { PokemonsInterface } from '@/interfaces/pokemon'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemons: [] as PokemonsInterface[]
  }),

  actions: {
    setPokemons(pokemons: PokemonsInterface[]) {
      this.pokemons = [...pokemons]
    }
  }
})
