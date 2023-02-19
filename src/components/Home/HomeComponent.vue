<template>
  <ion-header>
    <home-banner-component />
  </ion-header>

  <ion-content :fullscreen="true">
    <pokemon-thumbnail-stateful />
    <pokemon-thumbnail-stateful />
    <pokemon-thumbnail-stateful />
  </ion-content>
</template>

<script lang="ts">
import { IonContent, IonHeader } from '@ionic/vue'

import HomeBannerComponent from '@/components/Home/HomeBanner/HomeBannerComponent.vue'
import PokemonThumbnailStateful from '@/components/Pokemon/PokemonThumbnail/PokemonThumbnailStateful.vue'

export default {
  name: 'HomeComponent',

  components: {
    IonContent,
    IonHeader,
    HomeBannerComponent,
    PokemonThumbnailStateful
  }
}
</script>
