import { defineStore } from 'pinia'

import { MoveInterface, PokemonsInterface } from '@/interfaces/pokemon'
import { getPokemonsService, getPokemonByNameService, getMovesService, getPokemonsByMoves } from '@/services/PokemonService'
import { getOffsetParamFormPakemonUrl, convertNumberToArray } from '@/utils'

interface PokemonStateInterface {
  showPaginator: boolean
  quantityPokemons: number
  pageSelected: number
  previousPage: number
  nexPage: number
  pokemons: PokemonsInterface[]
  moves: MoveInterface[]
  experiences: number[]
}

export const usePokemonStore = defineStore('pokemon', {
  state: (): PokemonStateInterface => ({
    showPaginator: false,
    quantityPokemons: 0,
    pageSelected: 0,
    previousPage: 0,
    nexPage: 0,
    pokemons: [],
    moves: [],
    experiences: convertNumberToArray(500)
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
      this.showPaginator = count>0
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
      if(pokemonName === '') {
        this.pageSelected = 0
        this.setPokemons()
        return
      }

      const { count, results, previous, next } = await getPokemonByNameService(pokemonName)
      this.showPaginator = false
      this.quantityPokemons = count
      this.previousPage = getOffsetParamFormPakemonUrl(previous)
      this.nexPage = getOffsetParamFormPakemonUrl(next)
      this.pokemons = [...results]
    },

    async setMoves() {
      this.moves = await getMovesService()
    },

    async setPokemonsByFilters(movesUrl: string, experience: number | string) {
      if(movesUrl === 'all') {
        this.pageSelected = 0
        this.setPokemons()
        return
      }

      const { previous, next, results } = await getPokemonsByMoves(movesUrl)
      this.showPaginator = false
      this.previousPage = getOffsetParamFormPakemonUrl(previous)
      this.nexPage = getOffsetParamFormPakemonUrl(next)
      this.pokemons = [...results].filter(p => p.base_experience > (experience !== 'all' ? experience : 0))
      this.quantityPokemons = this.pokemons.length
    }
  }
})
