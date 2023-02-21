<template>
  <h1 class="text-subtitle-two mb-4">83 moves</h1>

  <div class="d-flex d-align-items-center d-justify-content-space-between d-wrap">

    <div
      v-for="(move, i) in pokemon.moves"
      :key="move.move.name"
      :class="`d-flex d-align-items-center d-justify-content-centr d-direction-col ${ i%2===0 ? 'green' : 'purple' } pokemon-detail-moves-move`"
    >
      <img :src="require(`@/assets/icons/${ i%2===0 ? 'move_one' : 'move_two' }.svg`)" :alt="move.move.name" class="background-light pokemon-detail-moves-move-image mb-1">
      <span class="text-caption-regular text-ellipsis color-light">{{ move.move.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { PokemonsInterface } from '@/interfaces/pokemon'

export default defineComponent({
  name: 'PokemonDetailMovesStateless',

  props: {
    pokemon: {
      type: Object as PropType<PokemonsInterface>,
      required: true
    }
  },
})
</script>

<style scoped>
.pokemon-detail-moves-move {
  border-radius: 5px;
  width: 31%;
  padding: 10px;
  margin-bottom: 10px;
}

.pokemon-detail-moves-move-image {
  border-radius: 50%;
  padding: 4px;
  height: 26px;
  width: 26px;
}

.green {
  background-color: #16C172;
}

.purple {
  background-color: #6E44FF;
}
</style>
