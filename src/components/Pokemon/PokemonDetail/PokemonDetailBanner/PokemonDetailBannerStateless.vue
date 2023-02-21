<template>
  <div class="d-flex d-align-items-center d-justify-content-center d-direction-col p-2 pokemon-detail-banner-content-image">
    <div class="d-flex d-align-items-center d-justify-content-start w-full mb-1">
      <ion-icon :icon="arrowBackOutline" size="large" color="dark" @click="backToHomePage()"></ion-icon>
    </div>

    <div class="d-flex d-align-items-center d-justify-content-center">
      <h1 class="text-transform-capitalize mr-1 text-headline">{{ pokemon.name }}</h1><span class="text-subtitle-two"># {{ pokemon.id }}</span>
    </div>

    <img :src="pokemon.sprites.other.home.front_default" :alt="pokemon.name" class="pokemon-thumbnail-image" />
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { IonIcon } from '@ionic/vue'
import { arrowBackOutline } from 'ionicons/icons'

import { PokemonsInterface } from '@/interfaces/pokemon'

export default defineComponent({
  name: 'PokemonDetailBannerStateless',

  components: {
    IonIcon
  },

  props: {
    backToHomePage: {
      type: Function,
      required: true
    },
    pokemon: {
      type: Object as PropType<PokemonsInterface>,
      required: true
    }
  },

  data: () => ({
    arrowBackOutline
  })
})
</script>

<style scoped>
.pokemon-detail-banner-content-image {
  background-color: #ECECF2;
}
</style>
