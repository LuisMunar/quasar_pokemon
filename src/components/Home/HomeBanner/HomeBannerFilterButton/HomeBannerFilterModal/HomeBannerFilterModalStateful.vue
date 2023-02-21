<template>
  <home-banner-filter-modal-stateless
    :handler-movenment-number="handlerMovenmentNumber"
    :moves="pokemonState.getMoves"
    :search-pokemons-by-filter="searchPokemonsByFilter"
    :movement="movement"
    :disabledButton="disabledButton"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HomeBannerFilterModalStateless from '@/components/Home/HomeBanner/HomeBannerFilterButton/HomeBannerFilterModal/HomeBannerFilterModalStateless.vue'
import { InputEventInterface } from '@/interfaces/nativeEvents'
import { usePokemonStore } from '@/store/pokemon'

export default defineComponent({
  name: 'HomeBannerFilterModalStateful',

  components: {
    HomeBannerFilterModalStateless
  },

  data: (): any => ({
    movement: '',
    pokemonState: usePokemonStore(),
    disabledButton: true
  }),

  methods: {
    handlerMovenmentNumber(e: InputEventInterface): void {
      this[e.target.name] = e.target.value
      this.disabledButton = false
    },

    searchPokemonsByFilter() {
      this.disabledButton = true
    }
  },

  mounted() {
    this.pokemonState.setMoves()
  }
})
</script>