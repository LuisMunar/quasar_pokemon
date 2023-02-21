<template>
  <home-paginator-stateless
    :paginator-quantity-buttons="getpaginatorQuantityButtons"
    :page-selected="pokemonState.pageSelected"
    :set-page-selected="pokemonState.setPageSelected"
    :previous-page="pokemonState.previousPage"
    :next-page="pokemonState.nexPage"
    :quantity-pokemons="pokemonState.quantityPokemons"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HomePaginatorStateless from '@/components/Home/HomePaginator/HomePaginatorStateless.vue'
import { usePokemonStore } from '@/store/pokemon'
import { roundToLargestNumber } from '@/utils'

export default defineComponent({
  name: 'HomePaginatorStateful',

  components: {
    HomePaginatorStateless
  },

  data: () => ({
    pokemonState: usePokemonStore()
  }),

  computed: {
    getpaginatorQuantityButtons(): number[] {
      const quantityPagesToShow = roundToLargestNumber(this.pokemonState.getQuantityPokemons/5)

      if(
        this.pokemonState.pageSelected < quantityPagesToShow &&
        (this.pokemonState.pageSelected === 0 || this.pokemonState.pageSelected === 1)
      ) {
        return [0, 1, 2]
      }

      if(
        this.pokemonState.pageSelected < quantityPagesToShow &&
        (this.pokemonState.pageSelected > 1 && this.pokemonState.pageSelected < quantityPagesToShow-1)
      ) {
        return [
          this.pokemonState.pageSelected-1,
          this.pokemonState.pageSelected,
          this.pokemonState.pageSelected+1
        ]
      }

      return [
        quantityPagesToShow-3,
        quantityPagesToShow-2,
        quantityPagesToShow-1
      ]
    }
  }
})
</script>
