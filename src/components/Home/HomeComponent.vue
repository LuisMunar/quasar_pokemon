<template>
  <ion-header>
    <home-banner-component />
  </ion-header>

  <ion-content>
    <home-pokemon-thumbnail-stateful />
  </ion-content>

  <ion-footer>
    <home-paginator-stateful />
  </ion-footer>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonFooter } from '@ionic/vue'
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
    HomePaginatorStateful
  },

  data: () => ({
    pokemonState: usePokemonStore()
  })
})
</script>

<style scoped>
ion-content {
  --background: #D7D7D7;
}
</style>
