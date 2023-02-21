<template>
  <home-banner-search-input-stateless
    :handler-input-search-pokemon="handlerInputSearchPokemon"
    :search-pokemon="searchPokemon"
  />
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
    pokemonState: usePokemonStore(),
    pokemonName: ''
  }),

  methods: {
    handlerInputSearchPokemon(e: InputEventInterface) {
      this.pokemonName = e.target.value
    },

    searchPokemon() {
      this.pokemonState.setPokemonByName(this.pokemonName)
    }
  }
})
</script>
