<template>
  <home-paginator-stateless
    :paginator-quantity-buttons="paginatorQuantityButtons"
    :page-selected="pokemonState.pageSelected"
    :set-page-selected="pokemonState.setPageSelected"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HomePaginatorStateless from '@/components/Home/HomePaginator/HomePaginatorStateless.vue'
import { usePokemonStore } from '@/store/pokemon'
import { roundToLargestNumber, convertNumberToArray } from '@/utils'

interface HomePaginatorDataInerface {
  pokemonState: any
  paginatorQuantityButtons: number[]
}

export default defineComponent({
  name: 'HomePaginatorStateful',

  components: {
    HomePaginatorStateless
  },

  data: (): HomePaginatorDataInerface => ({
    pokemonState: usePokemonStore(),
    paginatorQuantityButtons: []
  }),

  methods: {
    getPaginatorQuantityButtons(quantityPokemons: number): void {
      // this.paginatorQuantityButtons = convertNumberToArray(roundToLargestNumber(quantityPokemons/5))
      this.paginatorQuantityButtons = convertNumberToArray(5)
      console.log('=> ', this.paginatorQuantityButtons.length)
    }
  },

  mounted() {
    this.getPaginatorQuantityButtons(this.pokemonState.getQuantityPokemons)
  }
})
</script>
