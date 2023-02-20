<template>
  <pokemon-thumbnail-stateful />
  <pokemon-thumbnail-stateful />
  <pokemon-thumbnail-stateful />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { usePokemonStore } from '@/store/pokemon'

import PokemonThumbnailStateful from '@/components/Pokemon/PokemonThumbnail/PokemonThumbnailStateful.vue'
import { getPokemonsService } from '@/services/PokemonService'

export default defineComponent({
  name: 'HomeBannerComponent',

  components: {
    PokemonThumbnailStateful
  },

  data: () => ({
    pokemonState: usePokemonStore()
  }),

  methods: {
    getPokemons() {
      this.pokemonState.setPokemons([
        {
          "name": "bulbasaur",
          "url": "https://pokeapi.co/api/v2/pokemon/1/"
        },
        {
          "name": "ivysaur",
          "url": "https://pokeapi.co/api/v2/pokemon/2/"
        }
      ])
    }
  },

  async mounted() {
    await getPokemonsService()
    this.getPokemons()
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
