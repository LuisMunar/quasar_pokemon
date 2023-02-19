<template>
  <pokemon-thumbnail-stateless :go-to-pokemon-detail="goToPokemonDetail" />
</template>

<script lang="ts">
import PokemonThumbnailStateless from '@/components/Pokemon/PokemonThumbnail/PokemonThumbnailStateless.vue'

export default {
  name: 'PokemonThumbnailStateful',

  components: {
    PokemonThumbnailStateless
  },

  methods: {
    goToPokemonDetail() {
      console.log('GOING_TO_POKEMON_DETAIL...')
    }
  }
}
</script>
