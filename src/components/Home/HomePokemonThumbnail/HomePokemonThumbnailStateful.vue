<template>
  <pokemon-thumbnail-stateful
    v-for="(pokemon, i) in pokemonState.getPokemons"
    :key="i"
    :pokemon="pokemon"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePokemonStore } from '@/store/pokemon'

import PokemonThumbnailStateful from '@/components/Pokemon/PokemonThumbnail/PokemonThumbnailStateful.vue'

export default defineComponent({
  name: 'HomeBannerComponent',

  components: {
    PokemonThumbnailStateful
  },

  data: () => ({
    pokemonState: usePokemonStore()
  }),

  mounted() {
    this.pokemonState.setPokemons()
    setTimeout(() => {
      console.log('=> ', this.pokemonState.getPokemons)
    }, 5000);
  }
})
</script>

<style scoped>
.home-banner {
  background-image: url('@/assets/images/banner/banner.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 234px;
}
</style>
