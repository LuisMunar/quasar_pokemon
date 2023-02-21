<template>
  <pokemon-detail-banner-stateless :back-to-home-page="backToHomePage" :pokemon="pokemonState.pokemon!" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import PokemonDetailBannerStateless from '@/components/Pokemon/PokemonDetail/PokemonDetailBanner/PokemonDetailBannerStateless.vue'
import { usePokemonStore } from '@/store/pokemon'

export default defineComponent({
  name: 'PokemonDetailBannerStateful',

  components: { PokemonDetailBannerStateless },

  data: () => ({
    router: useRouter(),
    pokemonState: usePokemonStore()
  }),

  methods: {
    backToHomePage() {
      this.router.push('/')
    }
  }
})
</script>
