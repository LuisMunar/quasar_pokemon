<template>
  <ion-header>
    <pokemon-detail-banner-stateful />
  </ion-header>

  <ion-content>
    <pokemon-detail-tabs-stateful />
  </ion-content>
</template>

<script lang="ts">
import { IonHeader, IonContent } from '@ionic/vue'

import PokemonDetailBannerStateful from '@/components/Pokemon/PokemonDetail/PokemonDetailBanner/PokemonDetailBannerStateful.vue'
import PokemonDetailTabsStateful from '@/components/Pokemon/PokemonDetail/PokemonDetailTabs/PokemonDetailTabsStateful.vue'

export default {
  name: 'DetailComponent',

  components: { IonHeader, IonContent, PokemonDetailBannerStateful, PokemonDetailTabsStateful } 
}
</script>
