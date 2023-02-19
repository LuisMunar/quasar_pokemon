<template>
  <div class="d-flex d-align-items-center d-justify-content-center d-direction-col p-2 pokemon-detail-banner-content-image">
    <div class="d-flex d-align-items-center d-justify-content-start w-full mb-1">
      <ion-icon :icon="arrowBackOutline" size="large" color="dark" @click="backToHomePage()"></ion-icon>
    </div>

    <div class="d-flex d-align-items-center d-justify-content-center">
      <h1 class="mr-1 text-headline">Bulbasor</h1><span class="text-subtitle-two">#01</span>
    </div>

    <img alt="pokemon" src="@/assets/images/pokemons/bulbasaur.png" />
  </div>
</template>

<script lang="ts">
import { IonIcon } from '@ionic/vue'
import { arrowBackOutline } from 'ionicons/icons'

export default {
  name: 'PokemonDetailBannerStateless',

  components: {
    IonIcon
  },

  props: {
    backToHomePage: {
      type: Function,
      required: true
    }
  },

  data: () => ({
    arrowBackOutline
  })
}
</script>

<style scoped>
.pokemon-detail-banner-content-image {
  background-color: #ECECF2;
}
</style>
