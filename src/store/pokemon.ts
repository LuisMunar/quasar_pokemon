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
  pokemon?: PokemonsInterface
  loadingPokemons: boolean
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
    experiences: convertNumberToArray(500),
    pokemon: undefined,
    loadingPokemons: false
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
      this.loadingPokemons = true
      const { count, results, previous, next } = await getPokemonsService(pageNumber)
      this.showPaginator = count>0
      this.quantityPokemons = count
      this.previousPage = getOffsetParamFormPakemonUrl(previous)
      this.nexPage = getOffsetParamFormPakemonUrl(next)
      this.pokemons = [...results]
      this.loadingPokemons = false
    },

    setPageSelected(payload: number) {
      this.pageSelected = payload
      this.setPokemons(this.pageSelected)
    },

    async setPokemonByName(pokemonName: string) {
      if(pokemonName === '' || !pokemonName) {
        this.pageSelected = 0
        this.setPokemons()
        return
      }

      this.loadingPokemons = true
      const { count, results, previous, next } = await getPokemonByNameService(pokemonName)
      this.showPaginator = false
      this.quantityPokemons = count
      this.previousPage = getOffsetParamFormPakemonUrl(previous)
      this.nexPage = getOffsetParamFormPakemonUrl(next)
      this.pokemons = [...results]
      this.loadingPokemons = false
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

      this.loadingPokemons = true
      const { previous, next, results } = await getPokemonsByMoves(movesUrl)
      this.showPaginator = false
      this.previousPage = getOffsetParamFormPakemonUrl(previous)
      this.nexPage = getOffsetParamFormPakemonUrl(next)
      this.pokemons = [...results].filter(p => p.base_experience > (experience !== 'all' ? experience : 0))
      this.quantityPokemons = this.pokemons.length
      this.loadingPokemons = false
    },

    setPokemon(payload: PokemonsInterface) {
      this.pokemon = payload
    }
  }
})
