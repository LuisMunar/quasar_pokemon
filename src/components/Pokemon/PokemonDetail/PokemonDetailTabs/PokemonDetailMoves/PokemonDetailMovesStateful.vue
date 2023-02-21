<template>
  <pokemon-detail-moves-stateless :pokemon="pokemonState.pokemon!" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PokemonDetailMovesStateless from '@/components/Pokemon/PokemonDetail/PokemonDetailTabs/PokemonDetailMoves/PokemonDetailMovesStateless.vue'
import { usePokemonStore } from '@/store/pokemon';

export default defineComponent({
  name: 'PokemonDetailMovesStateful',

  components: { PokemonDetailMovesStateless },

  data: () => ({
    pokemonState: usePokemonStore()
  })
})
</script>
