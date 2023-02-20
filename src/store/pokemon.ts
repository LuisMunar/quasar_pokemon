import { defineStore } from 'pinia'

import { PokemonsInterface } from '@/interfaces/pokemon'
import { getPokemonsService } from '@/services/PokemonService'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemons: [] as PokemonsInterface[],
    pokemon: {} as any
  }),

  getters: {
    getPokemons(state) {
      return state.pokemons
    }
  },

  actions: {
    async setPokemons() {
      const pokemons = await getPokemonsService()
      this.pokemons = [...pokemons]
    }
  }
})
