<template>
  <pokemon-thumbnail-stateless :go-to-pokemon-detail="goToPokemonDetail" :pokemon="pokemon" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

import PokemonThumbnailStateless from '@/components/Pokemon/PokemonThumbnail/PokemonThumbnailStateless.vue'
import { usePokemonStore } from '@/store/pokemon'

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
  } as { pokemon: any },

  data: () => ({
    router: useRouter(),
    pokemonState: usePokemonStore()
  }),

  methods: {
    goToPokemonDetail() {
      this.pokemonState.setPokemon(this.pokemon)
      this.router.push('/detail')
    }
  }
})
</script>
