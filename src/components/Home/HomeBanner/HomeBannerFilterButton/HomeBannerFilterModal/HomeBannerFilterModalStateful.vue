<template>
  <home-banner-filter-modal-stateless
    :moves="pokemonState.getMoves"
    :experiences="pokemonState.experiences"
    :disabled-input-exp="disabledInputExp"
    :disabledButton="disabledButton"
    :handler-selects="handlerSelects"
    :search-pokemons-by-filter="searchPokemonsByFilter"
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
    movenment: '',
    experience: '',
    pokemonState: usePokemonStore(),
    disabledInputExp: true,
    disabledButton: true
  }),

  methods: {
    handlerSelects(e: InputEventInterface): void {
      this[e.target.name] = e.target.value
      this.disabledInputExp = this.movenment === '' || this.movenment === 'all'
      this.disabledButton = false
    },

    searchPokemonsByFilter() {
      this.disabledButton = true
      this.pokemonState.setPokemonsByFilters(this.movenment, this.experience)
    }
  },

  mounted() {
    this.pokemonState.setMoves()
  }
})
</script>