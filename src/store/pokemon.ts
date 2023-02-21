import { defineStore } from 'pinia'

import { MoveInterface, PokemonsInterface } from '@/interfaces/pokemon'
import { getPokemonsService, getPokemonByNameService, getMovesService } from '@/services/PokemonService'
import { getOffsetParamFormPakemonUrl } from '@/utils'

interface PokemonStateInterface {
  quantityPokemons: number
  pageSelected: number
  previousPage: number
  nexPage: number
  pokemons: PokemonsInterface[],
  moves: MoveInterface[]
}

export const usePokemonStore = defineStore('pokemon', {
  state: (): PokemonStateInterface => ({
    quantityPokemons: 0,
    pageSelected: 0,
    previousPage: 0,
    nexPage: 0,
    pokemons: [],
    moves: []
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
    },

    getMoves(state) {
      return state.moves
    }
  },

  actions: {
    async setPokemons(pageNumber = 0) {
      const { count, results, previous, next } = await getPokemonsService(pageNumber)
      this.quantityPokemons = count
      this.previousPage = getOffsetParamFormPakemonUrl(previous)
      this.nexPage = getOffsetParamFormPakemonUrl(next)
      this.pokemons = [...results]
    },

    setPageSelected(payload: number) {
      this.pageSelected = payload
      this.setPokemons(this.pageSelected)
    },

    async setPokemonByName(pokemonName: string) {
      const { count, results, previous, next } = await getPokemonByNameService(pokemonName)
      this.quantityPokemons = count
      this.previousPage = getOffsetParamFormPakemonUrl(previous)
      this.nexPage = getOffsetParamFormPakemonUrl(next)
      this.pokemons = [...results]
    },

    async setMoves() {
      this.moves = await getMovesService()
    }
  }
})
