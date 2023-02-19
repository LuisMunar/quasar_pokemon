<template>
  <ion-header>
    <pokemon-detail-banner-stateful />
  </ion-header>

  <ion-content>
    Content
  </ion-content>
</template>

<script lang="ts">
import { IonHeader, IonContent } from '@ionic/vue'
import PokemonDetailBannerStateful from '@/components/Pokemon/PokemonDetail/PokemonDetailBanner/PokemonDetailBannerStateful.vue'

export default {
  name: 'DetailComponent',

  components: { IonHeader, IonContent, PokemonDetailBannerStateful } 
}
</script>
