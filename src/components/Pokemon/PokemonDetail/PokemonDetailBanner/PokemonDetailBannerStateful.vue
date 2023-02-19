<template>
  <pokemon-detail-banner-stateless :back-to-home-page="backToHomePage" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import PokemonDetailBannerStateless from '@/components/Pokemon/PokemonDetail/PokemonDetailBanner/PokemonDetailBannerStateless.vue'

export default defineComponent({
  name: 'PokemonDetailBannerStateful',

  components: { PokemonDetailBannerStateless },

  data: () => ({
    router: useRouter()
  }),

  methods: {
    backToHomePage() {
      this.router.push('/')
    }
  }
})
</script>
