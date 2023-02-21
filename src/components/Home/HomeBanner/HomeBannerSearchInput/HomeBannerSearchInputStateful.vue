<template>
  <home-banner-search-input-stateless :search-pokemon="searchPokemon" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { InputEventInterface } from '@/interfaces/nativeEvents'
import HomeBannerSearchInputStateless from '@/components/Home/HomeBanner/HomeBannerSearchInput/HomeBannerSearchInputStateless.vue'
import { usePokemonStore } from '@/store/pokemon'

export default defineComponent({
  name: 'HomeBannerSearchInputStateful',

  components: {
    HomeBannerSearchInputStateless
  },

  data: () => ({
    pokemonState: usePokemonStore()
  }),

  methods: {
    searchPokemon(e: InputEventInterface) {
      const pokemonName = e.target.value
      this.pokemonState.setPokemonByName(pokemonName)
    }
  }
})
</script>
