import { defineStore } from 'pinia'

import { PokemonsInterface } from '@/interfaces/pokemon'
import { getPokemonsService } from '@/services/PokemonService'

interface PokemonStateInterface {
  quantityPokemons: number
  pageSelected: number
  pokemons: PokemonsInterface[]
}

export const usePokemonStore = defineStore('pokemon', {
  state: (): PokemonStateInterface => ({
    quantityPokemons: 0,
    pageSelected: 0,
    pokemons: []
  }),

  getters: {
    getPokemons(state) {
      return state.pokemons
    },

    getQuantityPokemons(state) {
      return state.quantityPokemons
    },

    getPageSelected(state) {
      return state.pageSelected
    }
  },

  actions: {
    async setPokemons(pageNumber = 0) {
      const { count, results } = await getPokemonsService(pageNumber)
      this.quantityPokemons = count
      this.pokemons = [...results]
    },

    setPageSelected(payload: number) {
      this.pageSelected = payload
      this.setPokemons(this.pageSelected)
    }
  }
})
