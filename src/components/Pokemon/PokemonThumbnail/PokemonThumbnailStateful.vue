<template>
  <pokemon-thumbnail-stateless :go-to-pokemon-detail="goToPokemonDetail" :pokemon="pokemon" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import PokemonThumbnailStateless from '@/components/Pokemon/PokemonThumbnail/PokemonThumbnailStateless.vue'

export default defineComponent({
  name: 'PokemonThumbnailStateful',

  components: {
    PokemonThumbnailStateless
  },

  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    router: useRouter()
  }),

  methods: {
    goToPokemonDetail() {
      this.router.push('/detail')
    }
  }
})
</script>
