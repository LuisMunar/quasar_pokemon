<template>
  <pokemon-detail-abilities-stateless :pokemon="pokemonState.pokemon!" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PokemonDetailAbilitiesStateless from '@/components/Pokemon/PokemonDetail/PokemonDetailTabs/PokemonDetailAbilities/PokemonDetailAbilitiesStateless.vue'
import { usePokemonStore } from '@/store/pokemon'

export default defineComponent({
  name: 'PokemonDetailAbilitiesStateful',

  components: { PokemonDetailAbilitiesStateless },

  data: () => ({
    pokemonState: usePokemonStore()
  })
})
</script>
