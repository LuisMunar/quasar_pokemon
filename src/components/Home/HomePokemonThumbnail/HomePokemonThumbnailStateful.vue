<template>
  <ion-card v-if="pokemonState.loadingPokemons" class="w-9 my-3 mx-auto p-1 home-pokemon-thumbnails">
    <ion-skeleton-text :animated="true" class="mb-2" style="height: 50vw"></ion-skeleton-text>
    <ion-skeleton-text :animated="true" class="mb-2" style="height: 20px"></ion-skeleton-text>
    <ion-skeleton-text :animated="true" class="mb-2" style="height: 20px"></ion-skeleton-text>
    <ion-skeleton-text :animated="true" class="mb-2" style="height: 20px"></ion-skeleton-text>
  </ion-card>

  <div v-if="!pokemonState.loadingPokemons">
    <ion-card class="w-9 my-3 mx-auto home-pokemon-thumbnails">
      <ion-card-header class="p-2">
        <ion-card-title class="text-subtitle-one text-transform-capitalize">{{ pokemonState.quantityPokemons }} results</ion-card-title>
      </ion-card-header>
    </ion-card>

    <pokemon-thumbnail-stateful
      v-for="(pokemon, i) in pokemonState.getPokemons"
      :key="i"
      :pokemon="pokemon"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonCard, IonCardHeader, IonCardTitle, IonSkeletonText } from '@ionic/vue'

import PokemonThumbnailStateful from '@/components/Pokemon/PokemonThumbnail/PokemonThumbnailStateful.vue'
import { usePokemonStore } from '@/store/pokemon'

export default defineComponent({
  name: 'HomeBannerComponent',

  components: {
    IonCard, IonCardHeader, IonCardTitle, IonSkeletonText,
    PokemonThumbnailStateful
  },

  data: () => ({
    pokemonState: usePokemonStore()
  }),

  mounted() {
    this.pokemonState.setPokemons()
  }
})
</script>

<style scoped>
.home-pokemon-thumbnails {
  border-radius: 10px;
}
.home-banner {
  background-image: url('@/assets/images/banner/banner.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 234px;
}
</style>
