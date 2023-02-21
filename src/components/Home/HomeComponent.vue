<template>
  <ion-header>
    <home-banner-component />
  </ion-header>

  <ion-content>
    <ion-card class="w-9 my-3 mx-auto home-component">
      <ion-card-header class="p-2">
        <ion-card-title class="text-subtitle-one text-transform-capitalize">{{ pokemonState.quantityPokemons }} results</ion-card-title>
      </ion-card-header>
    </ion-card>

    <home-pokemon-thumbnail-stateful />
  </ion-content>

  <ion-footer>
    <home-paginator-stateful />
  </ion-footer>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonFooter, IonCard, IonCardHeader, IonCardTitle } from '@ionic/vue'
import { defineComponent } from 'vue'

import HomeBannerComponent from '@/components/Home/HomeBanner/HomeBannerComponent.vue'
import HomePokemonThumbnailStateful from '@/components/Home/HomePokemonThumbnail/HomePokemonThumbnailStateful.vue'
import HomePaginatorStateful from '@/components/Home/HomePaginator/HomePaginatorStateful.vue'
import { usePokemonStore } from '@/store/pokemon'

export default defineComponent({
  name: 'HomeComponent',

  components: {
    IonContent,
    IonHeader,
    IonFooter,
    HomeBannerComponent,
    HomePokemonThumbnailStateful,
    HomePaginatorStateful,
    IonCard,
    IonCardHeader,
    IonCardTitle
  },

  data: () => ({
    pokemonState: usePokemonStore()
  })
})
</script>

<style scoped>
.home-component {
  border-radius: 8px;
}
ion-content {
  --background: #D7D7D7;
}
</style>
