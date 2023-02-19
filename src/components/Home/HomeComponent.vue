<template>
  <ion-header>
    <home-banner-component />
  </ion-header>

  <ion-content :fullscreen="true">
    <pokemon-thumbnail-stateful />
    <pokemon-thumbnail-stateful />
    <pokemon-thumbnail-stateful />
  </ion-content>

  <ion-footer>
    <home-paginator-stateful />
  </ion-footer>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonFooter } from '@ionic/vue'

import HomeBannerComponent from '@/components/Home/HomeBanner/HomeBannerComponent.vue'
import PokemonThumbnailStateful from '@/components/Pokemon/PokemonThumbnail/PokemonThumbnailStateful.vue'
import HomePaginatorStateful from '@/components/Home/HomePaginator/HomePaginatorStateful.vue'

export default {
  name: 'HomeComponent',

  components: {
    IonContent,
    IonHeader,
    IonFooter,
    HomeBannerComponent,
    PokemonThumbnailStateful,
    HomePaginatorStateful
  }
}
</script>

<style scoped>
ion-content {
  --background: #D7D7D7;
}
</style>
